const { response } = require("express");


function authUser(req,res,next){
    if (req.user==null){
        res.status(403);
      return  res.send("you should to login in")
    } 
    next();
} 
function  authRole(Role){
    return (req,res,next)=>{
        if(req.user.role!==Role){
            res.status(401);
            return res.send("not allowed")
        } 
        next()
    }

}
module.exports={
    authUser,
    authRole
}