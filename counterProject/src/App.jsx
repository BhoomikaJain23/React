import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

 const addvalue = () => {
  setCounter(prev => (prev >= 20 ? 20 : prev + 1))
}

 const removevalue=()=>{
  setCounter(prev=>(prev<=0 ? 0:prev-1))
 }



  return (
    <>
     <h1>React Counter</h1>
     <h2>Counter Value:{counter}</h2>
     <button
     onClick= {addvalue}
     >Add value :{counter}</button>
     <br />
     <button
      onClick={removevalue}
      >Remove value:{counter}</button>
    </>
  )
}

export default App
