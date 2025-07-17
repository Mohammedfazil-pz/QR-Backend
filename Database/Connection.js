const mongoose=require('mongoose')
const connectionString=process.env.MONGOCONNECTIONSTRING
mongoose.connect(connectionString).then(()=>{
    console.log('connection succesfull')
}).catch((err)=>{
    console.log(err,"error in connection")
})