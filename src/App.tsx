import React from 'react'; 
import './App.css'

//1. Add variable properties
type TagProps = {
  name: string,
  lastName: string, 
  phone: string, 
  email: string, 
}

//2. Create TagName for properties and it return type
const TagName = (props: TagProps) =>{
  return <>
       <div className="newApp">
        <h2>TypeScript App Bar</h2>
      </div>
      <div className="newBody">
        <p><b>TypeScrit Training:</b> Following personal information about <b>{props.name} {props.lastName} </b>
        are passed by props in TypeScript React:<hr/>
        </p>
        <p><b>Name:</b> {props.name} </p>
        <p><b>Last Name:</b> {props.lastName} </p>
        <p><b>Phone:</b> {props.phone} </p>
        <p><b>Email:</b> {props.email} </p> 
      </div>
      <div className="newFooter">
        <h2>TypeScript: Footer</h2>
        <ul>
          <li>First </li>
          <li>Second </li>
          <li>Third </li>
        </ul>
      </div>
    </>
}

const App = ()=> <TagName 
  name="Khudadad" 
  lastName="Rasikh"  
  email="kh.rasikh542@gmail.com"  
  phone="+491634880974"   
/>

export default App;