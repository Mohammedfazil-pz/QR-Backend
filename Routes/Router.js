const  express=require('express')
const Router=express.Router()
const EmployeeControllerWare=require('../Controllers/employeeController')
const multerMiddleWare=require('../Middlewares/multerMiddleWare')

Router.post("/postEmp",multerMiddleWare.single('employeePhoto'),EmployeeControllerWare.PostEmployees)
Router.get("/getEmP",EmployeeControllerWare.getEmployees)
Router.delete("/deleteEmp/:id",EmployeeControllerWare.deleteEmployee)
Router.patch("/EditEmp/:id",multerMiddleWare.single('employeePhoto'),EmployeeControllerWare.editEmployee)



module.exports=Router
