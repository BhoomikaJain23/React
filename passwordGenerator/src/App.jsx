import { useState,useCallback, useEffect ,useRef, use} from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [numberAllow,setNumberAllow]=useState(false);
  const [charAllow,setCharAllow]=useState(false);
  const [password,setPassword]=useState("")

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow)str +="0123456789"
    if(charAllow) str +="!@#$%^&*()_+~`|}{[]:;?><,./-="
    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random() * str.length +1)
      pass +=str.charAt(char)
    }
    setPassword(pass)
  } ,[length,
       numberAllow,charAllow,setPassword])

       const copyPasswordToClipboard=useCallback(()=>{
        passwordRef.current?.select();
       // passwordRef.current?.setSelectionRange(0,9);
       passwordRef.current?.setSelectionRange(0, 101);
        window.navigator.clipboard.writeText(password)
       },[password])

useEffect(()=>{
  passwordGenerator()
},
              [length,numberAllow,charAllow,passwordGenerator])      
 

  return (
    <>
   <div className='w-fulll max-w-md mx-auto
          shadow-md rounded-lg pf-4 my-8 text-orange-500 bg-gray-800'>
            <h1 className='text-white text-center  my-3'>Password generator</h1>
            <div className="flex shadow
            rounded-lg overflow-hidden mb-4 bg-white" >
               <input
               type='text'
               value={password}
               className=' text-gray-800 outline-none w-full py-2 px-3 bg-white'
               placeholder='password'
               readOnly
               ref={passwordRef}
               />
               <button 
               onClick={copyPasswordToClipboard}
               className='outline-none bg-blue-500 text-white px-1 py-0.5
                    shrink-0 active:bg-blue-900 active:scale-95
                    transition-all duration-150'>COPY</button>
            </div>
            <div className='flex test-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}
                 />
                 <label >Length:{length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                 type="checkbox"
                 defaultChecked={numberAllow} 
                 id="numberInput"
                 onChange={()=>{
                  setNumberAllow((prev)=>
                  !prev);
                 }}
                 />
                 <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                defaultChecked={charAllow}
                id="characterInput"      
               onChange={()=>{
                setCharAllow((prev)=>
                !prev);
               }}
               />
               <label htmlFor="characterInput">Characters</label>
              </div>
            </div>
          </div>
    </>
  )
}

export default App
