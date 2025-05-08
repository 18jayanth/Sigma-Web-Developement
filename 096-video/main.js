import mongoose  from "mongoose";
import Express from "express"
import { Todo } from "./models/Todo.js";
//connection to database 
let conn=await mongoose.connect("mongodb://127.0.0.1:27017/todo")
const port=3000
const app=Express()
app.get('/',(req,res)=>
{  const todo=new Todo({title:"this is first todo",desc:"description of todo",isdone:false,
    days:Math.floor(Math.random()*45+Math.random()*5)})
   todo.save()
res.send('Hello World')
})

app.get('/a',async (req,res)=>
    {  
let todo=await Todo.findOne({})
console.log(todo)
res.json({title:todo.title,desc:todo.desc})
    })
app.listen(port,()=>
{
    console.log(`server is running at PORT:${port}`)
})
//mongoose will do validation itself means you cannot insert string
//where there must be number app will crash