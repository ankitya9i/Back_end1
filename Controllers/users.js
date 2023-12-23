
import ErrorHandler from '../Middlewares/error.js';
import { Users } from '../Models/user.js';
import { sendcookie } from '../Utils.js/features.js';
import bcrypt from 'bcrypt';
export const createuser=()=>{
};

export const login=async (req,res,next)=>{
    try{
        const {username,password} = req.body;
    const user= await Users.findOne({username,password});
    if(!user){
       res.status(403).json({success:true,message:"invalid username or password"});
    }else{
        bcrypt.compare(password,user.password).then(()=>{
            sendcookie(user,res,"logged in successfully",201);
        }).catch((error)=>{res.status(404).json({success:false,message:error.message})});
    }
    }catch{
        next(error);
    }
};

export const register=async (req,res,next)=>{
    try{
        const {username,password} = req.body;
    const user= await Users.findOne({username,password});

    if(user){
        return next(new ErrorHandler("this is already there",403));
    }

   const  hashedpassword=await bcrypt.hash(password,10);
   const newuser=await Users.create({ 
        username:username,
        password:hashedpassword
   });
   sendcookie(newuser,res,"registered successfully",201);
    }
    catch{
        next(error); // similarily we can use try and catch in all the async ans await.
    }
};
export const getmyprofile = async(req,res)=>{
    res.status(200).json({
        success: true,
        user:req.user,
    });
}
export const logoutuser=(req,res)=>{
    res
    .status(200).cookie(
        "userToken","",{expires:new Date(Date.now()),
            sameSite:process.env.NODE_ENV === "Development" ? "lax" : "none",
            secure:process.env.NODE_ENV === 'Development' ? false : true,}
    ).json({
        success: true,
        user:req.user,
    });
}
// export const getallusers=(req, res)=>{
//     const allusers=Users.find({});
//     res.json({  
//         success: true,
//         message:"hello do u want to get all users",
//     }); 
    
// };



// then we will do the error handling.