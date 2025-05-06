import React from 'react'
import {memo} from 'react'
const Navbar = ({adjective,getadjective}) => {
    console.log('Nav bar is rendered')
  return (
    <div>

      I am a {adjective} boy
      <button onClick={()=>{getadjective()}}>{getadjective()}</button>
    </div>
  )
}

export default memo(Navbar)
