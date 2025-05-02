import React, { useState } from 'react'

const Header = () => {
    const [dip,setdip]=useState(0);
  return (
    <div>
        <nav>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>{dip}</li>
            </ul>
      </nav>
    </div>
  )
}
export default Header
