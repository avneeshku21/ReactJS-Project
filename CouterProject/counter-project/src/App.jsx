import { useState } from 'react'
import './App.css'

function App() {

let [counter, setCounter]=useState(0)
//let counter=15

const addvalue=()=>{

counter=counter+1
setCounter(counter)
}
const removevalue=()=>{
  
  counter=counter-1
  setCounter(counter)
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addvalue}>Add Value</button><br />
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
