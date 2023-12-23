import jwt from "jsonwebtoken"

export const sendcookie=(newuser,res,message,statusCode=200)=>{

    const token=jwt.sign({_id:newuser._id},process.env.JWT_SECRET);
    res.status(statusCode).cookie("userToken",token,{
     httponly:true,
     maxage:36000, // in mili seconds
     sameSite:process.env.NODE_ENV === "Development" ? "lax" : "none",
     secure:process.env.NODE_ENV === 'Development' ? false : true, //
    }).json({
     success: true,
     message: message,
    })
 
};