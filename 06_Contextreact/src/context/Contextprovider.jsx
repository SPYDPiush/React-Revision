import React, { useState } from "react";
import userContext from "./Contextapi";

const userContextProvider = ({children}) => {

    const [user , setUser] = useState()

    return (
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )

}

export default userContextProvider;
