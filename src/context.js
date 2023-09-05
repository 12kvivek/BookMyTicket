// context <API><></>
// useContext hooks

// context(warehouse)
// Provider
// consumer / (useContext())
import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return <AppContext.Provider value = {"Movie"}>{children}</AppContext.Provider>
};

const useGlobalContext =  () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};