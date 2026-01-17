import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";


function App() {
  const [themeMode,setThemeMode] =useState("light")

  const lightTheme =()=>{
    setThemeMode("light")
  }

  const darkTheme =()=>{
    setThemeMode("dark")
  }

  //actual change in theme

  useEffect(() => {
  if (themeMode === "dark") {
    document.documentElement.style.setProperty('--bg-color', '#1f2937'); // dark bg
    document.documentElement.style.setProperty('--text-color', '#ffffff'); // white text
    document.documentElement.style.setProperty('--border-color', '#374151'); // dark border
  } else {
    document.documentElement.style.setProperty('--bg-color', '#ffffff'); // light bg
    document.documentElement.style.setProperty('--text-color', '#111827'); // dark text
    document.documentElement.style.setProperty('--border-color', '#e5e7eb'); // light border
  }
}, [themeMode])


  return (
    <>
     <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
    </>
  )
}

export default App
