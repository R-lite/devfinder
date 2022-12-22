// import React from "react";

import { useState, useEffect, useContext } from "react";
import { apiQueryContext } from "../../context/ApiQueryContext";

function LinkedInApiQuery(props){
    const [val, setVal] = useState(props.searchParameter);
    const { updateSearchStatus, isSpinnerOn, setSpinner } = useContext(apiQueryContext);
    const [data, setData] = useState([]);

    
    useEffect(() => {
        (async () => {
          const result = await fetch('https://api.github.com/users/R-lite')
          const jsonResult = await result.json()
          setData(jsonResult)
        })()
      }, [])
    
    console.log(data)
    return <></>
}

export default LinkedInApiQuery;
