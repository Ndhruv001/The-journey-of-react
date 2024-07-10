//cotext
import {GlobalContext } from '../context/GlobalState';

//react 
import  {useContext} from 'react';


function TransactionList(){
    const { transactions , deleteTransaction } = useContext(GlobalContext);

    return ( 
        <>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map((transaction)=>{ 
                       return (
                        <li className={transaction.amount >0 ? 'plus' : 'minus'} key={transaction.id}>
                            {transaction.text}<span>{transaction.amount}</span><button className='delete-btn' onClick={()=>deleteTransaction(transaction.id)}>x</button>
                        </li>
                       ) 
                    })
                }
               
            </ul>
        </>
    )
}

export default TransactionList;