const redis=require("redis")
const { config }=require("../config/db")
require("dotenv")


const redisclient=redis.createClient(config.redisUrl)

const blackilst=(req,res,next)=>{
    const tekon=req.headers.auth.split(" ")[1];
    redisclient.get(token,(err,reply)=>{
        if(err){
            res.send(err)
        }else if(reply){
            res.send("unauthorised")
        }else{
            const decodedToken=jwt.verify(token, process.env.jwtSecret)
            const expire=decodedToken.exp
            req.userId=decodedToken.userId
            next()
        }
    })
}
module.exports={
    blackilst
}