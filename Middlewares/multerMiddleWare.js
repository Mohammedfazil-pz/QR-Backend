const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
     callback(null,'./Photos')
    },
    filename:(req,file,callback)=>{
        callback(null,`imaage-${file.originalname}`)
    }
})
const multerMiddleWare=multer({storage})
module.exports=multerMiddleWare