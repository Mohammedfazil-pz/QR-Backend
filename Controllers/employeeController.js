const Employees = require("../Database/Models/employeeModel");

exports.PostEmployees = async (req, res) => {
  const {
    employeeName,
    employeeAddress,
    employeePassportNumber,
    employeeCDCNumber,
    employeeDesignation,
    employeeJoiningDate,
  } = req.body;
  const employeePhoto = req?.file?.filename;
  try {
    const existingEmployee = await Employees.findOne({
      employeePassportNumber,
    });
    if (existingEmployee) {
      res.status(409).json("employee already existing");
    } else {
      const newEmployee = await new Employees({
        employeeName,
        employeeAddress,
        employeePassportNumber,
        employeeCDCNumber,
        employeeDesignation,
        employeeJoiningDate,
        employeePhoto,
      }).save();
      res.status(201).json(newEmployee);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error", error: error.message });
  }
};

///GET Employees
exports.getEmployees = async (req, res) => {
 
  try {
    const allEmployees = await Employees.find();
    res.status(200).json(allEmployees);
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

//deleteEmployee
exports.deleteEmployee = async (req, res) => {
  const Id = req.params.id;

  try {
    const deletedEmp = await Employees.findByIdAndDelete(Id);

    if (!deletedEmp) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res
      .status(200)
      .json({ message: "Employee deleted successfully", deletedEmp });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//edit
exports.editEmployee = async (req, res) => {
  const Id = req.params.id;
  const UpdatedData = { ...req.body };
  if (req?.file?.filename) {
    UpdatedData.employeePhoto = req?.file?.filename;
  }

  try {
    const edittedEmployee = await Employees.findByIdAndUpdate(
      Id,
     UpdatedData,
      { new: true }
    );
    res.status(200).json(edittedEmployee);
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};


exports.getEmployeeByID=async(req,res)=>{
  const {id}=req.params
  try {
    const isUser=await Employees.findOne({_id:id})
    if(!isUser){
      res.status(404).json({message:"User not found!"})
    }
    res.status(200).json({isUser})
  } catch (error) {
    res.status(500).json({message:'Server error',error})
  }
}