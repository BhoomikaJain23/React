import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
     <div className='w-full h-screen duration-200'
     style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center
      gap-3 inset-x-0 bottom-12   '>
        <div className='flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button 
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1
          rounded-full text-white'
          style={{backgroundColor:"red"}}>Red</button>

           <button 
          onClick={()=>setColor("pink")}
          className='outline-none px-4 py-1
          rounded-full text-white'
          style={{backgroundColor:"pink"}}>Pink</button>

           <button 
          onClick={()=>setColor("violet")}
          className='outline-none px-4 py-1
          rounded-full text-white'
          style={{backgroundColor:"violet"}}>Violet</button>

           <button 
          onClick={()=>setColor("black")}
          className='outline-none px-4 py-1
          rounded-full text-white'
          style={{backgroundColor:"black"}}>Black</button>

           <button 
          onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1
          rounded-full text-white'
          style={{backgroundColor:"blue"}}>Blue</button>

           <button 
          onClick={()=>setColor("olive")}
          className='outline-none px-4 py-1
          rounded-full text-white'
          style={{backgroundColor:"olive"}}>Olive</button>
          
          <button 
          onClick={()=>setColor("green")}
          className='outline-none px-4 py-1
          rounded-full text-white'
          style={{backgroundColor:"green"}}>Green</button>
        </div>
      </div>

     </div>
    </>
  )
}

export default App
