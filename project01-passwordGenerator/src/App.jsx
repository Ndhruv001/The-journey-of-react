import { useState,useCallback,useEffect , useRef } from 'react'
import './App.css'

function App() {
  const [length,setLength]= useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false); 
  const [password, setPassword]= useState('');

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "1234567890";
    if(characterAllowed) str += "!@#$%^&*_?.";

    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random()*str.length );
      pass += str[index];
    }
    setPassword(pass);

  },[length , numberAllowed , characterAllowed , setPassword]);

useEffect(()=>{
  passwordGenerator();
},[length , characterAllowed , numberAllowed , passwordGenerator])

const reference = useRef()

  return (
    <>
      <div className='w-full max-w-md m-auto bg-gray-100 rounded-md my-8 p-6 shadow-lg'>
        <h1 className='text-center text-blue-800 font-bold text-2xl mb-3'>Password Generator</h1>
        <div className='flex items-center gap-4'>
          <input className='flex-grow bg-white rounded-md outline-none text-blue-800 p-2' 
            type="text" 
            value={password}
            ref = {reference}
            readOnly
          />
          <button className='rounded-md bg-blue-800 text-white p-2 font-bold hover:bg-blue-600 focus:bg-blue-600'
            onClick={()=>{
              window.navigator.clipboard.writeText(password);
              // alert("Text copied!");
              reference.current.select();
            }}
          >Copy</button>
        </div>
        <div className='flex items-center mt-4 justify-between gap-2'>
          <input 
            type="range" 
            defaultValue = {8}
            min = {1}
            max = {100}
            onChange={(event)=>{
              setLength(event.target.value)
            }}
            className='flex-grow'
          />
          <p className="text-blue-800 ml-2">{length}</p>
          <input 
            type="checkbox" 
            onClick={()=>{
              setNumberAllowed((prev)=>!prev);
            }}
            id="numberCheckbox"
          />
          <label htmlFor="numberCheckbox" className="text-blue-800 ml-1">Number</label>
          <input 
            type="checkbox" 
            onClick={()=>{
              setCharacterAllowed((prev)=>!prev);
            }}
            id="characterCheckbox"
          />
          <label htmlFor="characterCheckbox" className="text-blue-800 ml-1">Character</label>
        </div>
    </div>
    </>
  )
}

export default App
