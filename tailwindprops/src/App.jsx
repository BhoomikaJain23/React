import { useState } from 'react'
import Card from './Component/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen bg-blue-300 text-white w-100vw'>
      <h1 className='text-3xl bg-cyan-800 w-100 h-10 rounded-2xl mb-2 align-center justify-center'>Tailwind Test</h1>
      <Card username="Life" />
      <br />
      <Card btnTxt='Learn More'/>
      </div>
    </>
  )
}

export default App
