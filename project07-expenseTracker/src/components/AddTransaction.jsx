import { useContext , useRef, useState } from "react";

//context
import {GlobalContext } from '../context/GlobalState'

function AddTransaction(){
    const [text,setText] = useState('');
    const [amount,setAmount] = useState('');

    const {addTransactions} = useContext(GlobalContext);

    const inputRef = useRef();

    const onSubmit = (e)=>{
      e.preventDefault();
      const newTransaction ={
        id : (Math.random()*100000),
        text ,
        amount : +amount
      }

      addTransactions(newTransaction);
      setAmount('');
      setText('');
      inputRef.current.focus();
    }

    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit} >
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  placeholder="Enter text..." ref={inputRef} />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}   placeholder="Enter amount..." />
          </div>
          <button className="btn" >Add transaction</button>
        </form>
      </>
    )
}

export default AddTransaction;