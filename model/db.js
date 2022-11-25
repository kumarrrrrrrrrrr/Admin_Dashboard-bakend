const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://aws:aws123@cluster0.rn2gukp.mongodb.net/Admin_Dashboard",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',()=>{
    console.log("Mongodb connected")
})