const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  employeePhoto: {
    type: String,
    required: true,
  },
  employeeAddress: {
    type: String,
    required: true,
  },
  employeePassportNumber: {
    type: String,
    required: true,
    unique:true
  },
  employeeCDCNumber: {
    type: String,
    required: true,
  },
  employeeDesignation: {
    type: String,
    required: true,
  },
  employeeJoiningDate: {
    type: String,
    required: true,
  },
 
});

const Employees=mongoose.model("employees",empSchema)
module.exports=Employees