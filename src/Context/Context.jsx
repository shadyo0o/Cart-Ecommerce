import { createContext, useContext, useState } from "react";

export let CounterContext=createContext(0)


export function CounterContextProvider(props){
    const [counter, setCounter] = useState(0)
    const [userName, setUserName] = useState('')
    function changeCounter(){
        setCounter(Math.round(Math.random()*1000))
    }

    return <CounterContext.Provider value={{counter,userName,changeCounter}}>
        {props.children}
    </CounterContext.Provider>


    
}