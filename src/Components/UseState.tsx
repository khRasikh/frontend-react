
import React from 'react';
import "./Components.css"
//1. import useEffect
import {useState, useEffect} from 'react'; 

function UseEffectType() {
//2. set variables
  const[time, setTime] = useState(new Date()); 

//3. use it
  useEffect(()=>{
    const timer = setTimeout(()=>setTime(new Date()), 1000)
    return ()=> clearTimeout((timer)); 
  });
//3. Use the state in an action 
  return (
    <div>
      <div className="newApp">
        <h2>TypeScript App Bar</h2>
      </div>
      <div className="newBody">
        <p><b>TypeScrit-React: </b>Here you see how I used UseEffect Example:<hr/>
        </p>
        <h2 style={{color: "green"}}>
          {time.toLocaleString()}
        </h2>
      </div>

      <div className="newFooter">
        <h2>TypeScript: Footer</h2>
        <ul>
          <li>First </li>
          <li>Second </li>
          <li>Third </li>
        </ul>
      </div>
    </div>
  );
}

export default UseEffectType;
