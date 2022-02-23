import React, { useReducer } from 'react'

const ACTIONS={
  INCREMENT:"increment",
  DECREMENT:'decrement'
}

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return state + 1
		case ACTIONS.DECREMENT:
			return state - 1
		default:
			return state
	}
}

const UseReducer=()=> {
	const [count, dispatch] = useReducer(reducer, 0)

	return (
    <div>
       <h1>useReducer</h1> 
      <h4>Count : {count}</h4>
      <button onClick={() => dispatch({type:'increment'})}>Increase</button>
			<button onClick={() => dispatch({type:'decrement'})}>Decrease</button>
		</div>
	)
}

export default UseReducer

