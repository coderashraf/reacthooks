import { useEffect,useState } from "react";

export const UseEffectCompo = () => {
  const [num,setNum]=useState(1);
  const [name,setName]= useState("Ravi")
  function increment(){
    setNum(num+1)
  }
  function changeName(){
    setName("Ashraf")
  }
  useEffect(()=>{
    console.log("useEffect");
  },[num])
  
  return (
    <div><h2>UseEffectCompo</h2>
       <h4>Check Console</h4>
      {num} <br/>
      <button onClick={increment}>Increment</button>
      <button onClick={changeName}>{name}</button>
    </div>
  )
}
