import Child from './Child.jsx'
import React,{useState} from 'react';
export default function Parent() {
    const [message, setMessage] =useState("Initial Message");
return (
      <div>
        <p>Message: {message}</p>
        <Child onUpdateMessage={(message)=>{setMessage(message)}} />
      </div>
    );
  }