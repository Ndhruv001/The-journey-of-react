import { useState } from "react"
import { generateRandomAdvice } from "../api/randomAdviceApi"

function AdviceBox() {
    const [advice, setAdvice] = useState("Random Advice");
    const [isLoading, setIsLoading] = useState(false);
  
    async function onClick(){
      setIsLoading(true);
      const data = await generateRandomAdvice();
      setAdvice(data);
      setIsLoading(false);
    }

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0')] bg-cover bg-center h-screen w-screen flex  justify-center items-center ">
    <div className="w-3/6 h-2/6 bg-black rounded-md flex flex-col justify-center items-center gap-5 p-5 flex-wrap text-center">
        {
          isLoading ? <h1 className="text-red-800 font-bold">Loading...</h1> : <h1 className="text-white font-bold ">{advice}</h1>
        }
        <button 
        onClick={onClick}
        disabled={isLoading}
        className="border-2 border-white rounded-md text-white p-1 hover:scale-110 ">Random Advice</button>
    </div>
  </div>
  )
}

export default AdviceBox