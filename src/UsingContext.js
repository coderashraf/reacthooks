import React from 'react'
import { useContext } from 'react'
import Context from './Context'
export const UsingContext = () => {
  const data=useContext(Context)
  return (
    <div>  
      <h2>Showing Data Using Context</h2>
      <h4>Name:{data.name}</h4>
      <h4>Age:{data.age}</h4>
    </div>
  )
}
