const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb+srv://veeresh:veeresh@cluster0.lkb8reo.mongodb.net/users?retryWrites=true&w=majority")
const redisUrl=
module.exports={
    connection,
    redisUrl
}