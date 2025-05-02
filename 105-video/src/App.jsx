import { useState } from "react"
import './App.css'
import Parent from './components/Parent.jsx'
export default function App()
{
  const [count,setcount]=useState(0);
  
  return(
    
  <div className="count">
    {/* <Header/>
    <h1>{dip}</h1> */}
    <Parent/>
  <h1 className="top-left">Count:{count}</h1>
  <h1 className="top-right">Count:{count}</h1>
  <h1 className="bottom-left">Count:{count}</h1>
  <h1 className="bottom-right">Count:{count}</h1>
  <button onClick={()=>{setcount(count+1)}} className="btn">click me</button>
  </div>
  )
}