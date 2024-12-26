import { createContext,useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, Setuser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);
    
    const value = {
        user,Setuser 
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider