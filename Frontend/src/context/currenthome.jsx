import dayjs from "dayjs";
import { createContext, useState } from "react"


const initialState = 
{
    datetimeValue:dayjs(),
    setdatetimeValue: () => {}
}


export const CounterContext = createContext(initialState);


export const CounterProvider = ({children}) =>{
    const [datetimeValue,setdatetimeValue] = useState(initialState.datetimeValue);



    return (
        <CounterContext.Provider value={{datetimeValue,setdatetimeValue}}>
            {children}
        </CounterContext.Provider>
    );
}