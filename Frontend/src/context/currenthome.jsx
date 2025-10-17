import dayjs from "dayjs";
import { createContext, useState } from "react"


const initialState =
{
    datetimeValue: dayjs(),
    setdatetimeValue: () => { },
    Email: "Hello",
    setEmail: () => { }
}


export const CounterContext = createContext(initialState);


export const CounterProvider = ({ children }) => {
    const [datetimeValue, setdatetimeValue] = useState(initialState.datetimeValue);
    const [Email, setEmail] = useState(initialState.Email);



    return (
        <CounterContext.Provider value={{ datetimeValue, setdatetimeValue, Email, setEmail }}>
            {children}
        </CounterContext.Provider>
    );
}