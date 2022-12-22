import React, { useState, createContext } from "react";

export const apiQueryContext = createContext();
export const apiQueryActionContext = createContext();

function ApiQueryContextProvider(props){
    const [isSpinnerOn, setSpinner] = useState(false);
    const [searchStatus, updateSearchStatus] = useState('');
  
    return (
      <apiQueryContext.Provider value={{isSpinnerOn, searchStatus}}>
        <apiQueryActionContext.Provider value={{setSpinner, updateSearchStatus}}>
          {props.children}
        </apiQueryActionContext.Provider>
      </apiQueryContext.Provider>
    )
  }

export default ApiQueryContextProvider;