const mongoose=require("mongoose")

const tokenSchema=mongoose.Schema({
    token:{
        type:String,
        unique:true,
        required:true
    },
    refreshtoken:{
        type:String,
        unique:true,
        required:true
    }
})




const TokenModel=mongoose.model("tokens",tokenSchema)

module.exports={
    TokenModel
}