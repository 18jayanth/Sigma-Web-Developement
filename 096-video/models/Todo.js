import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({
    title: {type:String,required:true,default:'hey'},
    desc:String,
    isdone:Boolean,
    days:Number
  });
export const Todo = mongoose.model('Todo', TodoSchema);