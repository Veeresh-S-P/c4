const jwt=require("jsonwebtoken")

const authorization=(req,res,next)=>{
    jwt.verify(req.cookies.token, 'token',
    function(err,decoded){
        if(err){
            request.send(err)
        }
        if(decoded){
            next()
        }
    })
}

module.exports={authorization}