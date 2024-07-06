import { useState, useEffect } from 'react'
import Card from "./Components/Card"
import ThemeBtn from "./Components/ThemeBtn";
import {ThemeContextProvide} from './Context/ThemeContext';

function App() {
  const [themeMode, setThemeMode] = useState("light")
  function darkMode(){
    setThemeMode('dark')
  }
  function lightMode(){
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeContextProvide value = {{themeMode , darkMode , lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeBtn/>
                </div>

                <div className="w-full max-w-sm mx-auto ">
                  <Card/>
                </div>
            </div>
      </div>
    </ThemeContextProvide>
  )
}

export default App



