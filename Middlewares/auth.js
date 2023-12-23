import jwt from 'jsonwebtoken';
import { Users } from '../Models/user.js';
export const isauth= async(req,res,next)=>{
    const { userToken } = req.cookies;
    if(!userToken){
        res.status(404).json ({
            success: false,
            message:"login First"
        })
    }else{
        const  decoded=jwt.verify(userToken,process.env.JWT_SECRET); 
        const me= await Users.findById(decoded._id);
        req.user=me;
        next();
    }
}