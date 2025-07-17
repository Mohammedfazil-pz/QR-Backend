require('dotenv').config()
const express=require('express')
const cors=require('cors')
require('./Database/Connection')
const Router=require('./Routes/Router')

const server=express()
server.use(cors())
server.use(express.json())
server.use('/Photos',express.static('./Photos'))

server.use(Router)

const PORT=3000||process.env.PORT
server.listen(PORT,()=>{
    console.log(`server running successfully in port ${PORT}`)
})

