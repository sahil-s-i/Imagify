import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, Setuser] = useState(true);

    const value = {
        user,Setuser 
    }

    return(
        <AppContext.Provider>
            
        </AppContext.Provider>
    )
};