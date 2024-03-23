const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'employees',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const Employee = mongoose.model("employee", EmployeeSchema);
module.exports = Employee;
