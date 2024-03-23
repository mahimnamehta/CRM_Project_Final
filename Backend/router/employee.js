const express = require("express");
const app = express();
const employee = require("../controller/employee");

// Add user
app.post("/add", employee.addUser);

// Get All users
app.get("/get/:userId", employee.getAllUsers);

// Delete Selected user
app.get("/delete/:id", employee.deleteSelectedUser);

// Update Selected user
app.post("/update", employee.updateSelectedUser);

// Search user
app.get("/search", employee.searchUser);

// http://localhost:4000/api/product/search?searchTerm=fa

module.exports = app;
