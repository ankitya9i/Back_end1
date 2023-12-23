import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
    
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        required:true,
    }
    ,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',

    }

});

export const Todo= mongoose.model('Todo',todoSchema);
