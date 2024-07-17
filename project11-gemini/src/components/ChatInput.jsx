import  { useContext, useState } from 'react';
import { Context } from '../context/contextApi';

function ChatInput() {
  const [message, setMessage] = useState('');
  const {onSent, setHistory} = useContext(Context);


  const handleSend = async () => {
    // Handle sending message
    if(!message.trim()) return ;
  try {

      await onSent(message);
     setHistory((prev) =>  [message, ...prev])
    setMessage('');
  } catch (error) {
    console.log("error", error);
  }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-300 flex items-center justify-center">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow p-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSend}
        className="p-3 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
  );
}

export default ChatInput;
