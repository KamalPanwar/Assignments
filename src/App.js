import React,{useState} from "react";
import "./style.css";


export default function App() {
  const[number,setnumber]=useState('')
  if(number>=3000){
    alert('congratulations you guessed the right number')
  }
  return (
    <div>
   <input className="k" type="text" value={number} onChange={e=>setnumber(e.target.value)} placeholder="Guess The lucky number...."/>
   <button className="b">Match Number</button>

    </div>
  );
}