import React from 'react'
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
    const count = useSelector((state) => state.counter.value);
  return (
    <div>
     Hey This is Navbar 
     Count value is {count}
    </div>
  )
}

export default Navbar
