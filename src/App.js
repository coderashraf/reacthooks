import { useEffect,useState } from "react";
import "./App.css"
const App=()=> {
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
    <div className="App">
      <h2>Check Console</h2>
      {num} <br/>
      <button onClick={increment}>Increment</button>
      <button onClick={changeName}>{name}</button>
    </div>
  );
}

export default App;
