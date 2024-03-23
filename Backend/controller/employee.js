const Employee = require("../models/employee");

// Add Post
const addUser = (req, res) => {
  console.log("req: ", req.body.userId);
  const addUser = new Employee({
    userID: req.body.userId,
    name: req.body.name,
    position: req.body.position,
  });

  addUser
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};

// Get All Products
const getAllUsers = async (req, res) => {
  const findAllUsers = await Employee.find({
    userID: req.params.userId,
  }).sort({ _id: -1 }); // -1 for descending;
  res.json(findAllUsers);
};

// Delete Selected Product
const deleteSelectedUser = async (req, res) => {
  const deleteUser = await Employee.deleteOne(
    { _id: req.params.id }
  );
  res.json({deleteUser});
};

// Update Selected Product
const updateSelectedUser = async (req, res) => {
  try {
    const updatedResult = await Employee.findByIdAndUpdate(
      { _id: req.body.userID },
      {
        name: req.body.name,
        position: req.body.position,
      },
      { new: true }
    );
    console.log(updatedResult);
    res.json(updatedResult);
  } catch (error) {
    console.log(error);
    res.status(402).send("Error");
  }
};

// Search Products
const searchUser = async (req, res) => {
  const searchTerm = req.query.searchTerm;
  const users = await Employee.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  res.json(users);
};

module.exports = {
  addUser,
  getAllUsers,
  deleteSelectedUser,
  updateSelectedUser,
  searchUser,
};
