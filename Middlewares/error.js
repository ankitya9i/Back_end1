class ErrorHandler extends Error{
    constructor (message,statusCode){
        super(message) // parent class constructor so message will go insise the super class okay.
        this.statusCode = statusCode;   
    }
}
export const errormiddlewar=(error,req,res,next)=>{
    error.message = error.message || "Internal server error";
    return  res.status(error.statusCode).json({
     success:false,
     message:error.message
    })
 }
 export default ErrorHandler;