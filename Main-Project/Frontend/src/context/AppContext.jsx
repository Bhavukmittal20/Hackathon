import { createContext ,useState,useEffect} from "react";
export const AppContext=createContext()
const AppContextProvider=(props)=>{
    const backendUrl=import.meta.env.VITE_BACKEND_URL
    const [userData,setUserData]=useState(false)
    const value = {
        backendUrl,
      };
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}
export default AppContextProvider