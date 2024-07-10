import React , {createContext , useReducer } from 'react'

//context file
import AppReducer from './AppReducer';

//create intial state
const intialState={
    transactions : [
        {'id': 1 , 'text' : 'Flower' , 'amount' : -10},
        {'id': 2 , 'text' : 'Groceries' , 'amount' : -110},
        {'id': 3 , 'text' : 'Cash' , 'amount' : 1000},
    ]
}

//create context
export const GlobalContext = createContext(intialState);

//global provider component
export const GlobalProvider=({ children })=>{
    const [state , dispatch] = useReducer(AppReducer , intialState);

    function deleteTransaction(id){
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        })
    }

    function addTransactions(transaction){
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        })
    }
    

    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            deleteTransaction ,
            addTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}