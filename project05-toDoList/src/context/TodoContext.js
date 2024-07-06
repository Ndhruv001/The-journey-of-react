import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos:[
       {
        id : 1,
        msg : "",
        completed : false
       }
    ],
    addTodo : (todo) => {},
    updateTodo : (id , todo ) => {},
    deleteTodo : (id) =>{},
    toggleCompleted : (id) => {}
})

export const TodoContextProvider = TodoContext.Provider;

export default function useTodoContext(){
    return useContext(TodoContext);
}