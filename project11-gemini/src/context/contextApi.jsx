import {  createContext, useState } from "react";
import run from "../config/GeminiApi";

export const Context = createContext();

export const ContextProvider = (props) => {

    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [history, setHistory] = useState(['hello']);
    

    const onSent = async (prompt) => {
        const response = await run(prompt);
        setData(response);
    }


    const contextValue={
        onSent,
    
        data,
        isLoading,
        setIsLoading,
        history,
        setHistory
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}