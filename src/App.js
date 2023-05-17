import React,{useState,useEffect} from "react";
import "./style.css";


 
export default function App() {
  

  const [data,setData]=useState()
  async function fetchQuote(){
   try{  const response= await fetch("https://api.quotable.io/random")
    const data= await response.json()
    
    setData(data.content)
    console.log(data)
      } catch(e){
          console.log(e)
      }
    }

 useEffect(()=>{
   fetchQuote()
 },[])

  return (
    <div>
      
      <p>{data}</p>
      <button onClick={fetchQuote}>click</button>
    </div>
  );
}
