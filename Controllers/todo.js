import  express  from "express";
import { Todo } from "../Models/Todo.js";

export const newtodo = async(req,res)=>{
    console.log(req.user);
    await Todo.create({
        title: req.body.title,
        description:req.body.description,
        complete: req.body.complete,
        user: req.user
    });
    console.log("Todo created");
    const todos= await Todo.find({});
    //const documents = await collection.find({}).toArray();
    res.status(200).json({
        success:true,
        todos
        
    })
}
export const deletetodo= async (req,res)=>{
    const id = req.params.id;
     await Todo.deleteOne({_id:id});
    res.send("success");

};

export const updatetodo= async(req,res)=>{
    const task=await Todo.findOne({_id:req.params.id});
    const filter = { _id: req.params.id }; // Replace with the actual document ID
    const update = { $set: {complete: false } }; // Specify the field(s) to update
    const result = await Todo.updateOne(filter, update);

    Todo.updateOne({_id:req.params.id,})
    if (result.modifiedCount === 1) {
        console.log('Document updated successfully');
        res.send("secces");
      } else {
        console.log('No document matched the specified filter');
        res.send(" updation failed")
    }
};

export const compltetodo=()=>{

};


export const getall= async (req,res)=>{
    
    const todos= await Todo.find({});
    //const documents = await collection.find({}).toArray();
    res.status(200).json({
        success:true,
        todos
        
    })
};