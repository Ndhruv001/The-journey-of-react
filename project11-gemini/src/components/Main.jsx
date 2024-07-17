import  { useContext } from 'react'
import { Context } from '../context/contextApi';
import ChatInput from './ChatInput';

function Main() {
  const { data } = useContext(Context);

  return (
    <div className=' w-screen p-5'>
      <div >
          <p className='text-center text-black font-medium'  >{data}</p>
      </div>
      <ChatInput/>
     
    </div>
  )
}

export default Main