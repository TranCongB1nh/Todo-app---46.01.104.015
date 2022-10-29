import { createContext, useState } from "react";

// Init value
export const MyContext = createContext({
    username: null, //state
    isLogged: false,
    user: {},
    setUser: () => { },
    setIsLogged: () => { },
    setUsername: () => { } //set state
});

export const MyContextProvider = ({ children }) => {
    const [username, setUsername] = useState(null); 
    const [user, setUser] = useState({});  
    const [isLogged, setIsLogged] = useState(sessionStorage.getItem("isLogged"))

    return (
        <MyContext.Provider value={{
            username,
            setUsername,
            isLogged,
            setIsLogged,
            user,
            setUser
        }}>
            {children}
        </MyContext.Provider>
    )
}