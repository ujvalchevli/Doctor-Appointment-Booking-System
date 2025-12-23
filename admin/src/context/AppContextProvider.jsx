import AppContext from "./AppContext";
import React from "react";

const AppContextProvider=(props)=>{
    const value={

    }
    return(
       <AppContext.Provider value={value}>
        {props.children}
       </AppContext.Provider>
            
    )
}
export default AppContextProvider;