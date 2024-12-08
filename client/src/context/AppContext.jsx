import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, Setuser] = useState(null);

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