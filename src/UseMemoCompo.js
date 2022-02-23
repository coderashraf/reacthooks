import React from 'react'
import {useState,useMemo} from "react"

export const UseMemoCompo = () => {

  const [num1,setNum1]=useState(0)
  const [num2,setNum2]=useState(0)
  const doubledValue=useMemo(()=>{
    return doubleIt(num2)
  },[num2])

  return (
    <div>
      <h2>UseMemoCompo</h2>
       <div>
          <input type="number" onChange={(e)=>setNum1(num1+1)}  value={num1}/>
          <span>Normal value: {num1}</span>
        </div>
        <div>
          <input type="number" onChange={(e)=>setNum2(num2+1)}  value={num2}/>
          <span>Doubled value: {doubledValue}</span>
        </div>
    </div>
  )
}

function doubleIt(num){
  for(let i=0;i<1000000000;i++){}
  return num*2
}
