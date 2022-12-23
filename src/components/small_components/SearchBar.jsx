import React, { useContext, useState } from "react";
import { IoIosSearch } from 'react-icons/io';
import CheckDestinationApiQuery from "../api/checkDestinationApiQuery";
import apiQueryActionContext from "../../context/ApiQueryContext";

function SearchBar(props){
    const [searchValue, setSearchValue] = useState('');
    // const { updateSearchStatus } = useContext(apiQueryActionContext);
    
    const handleSubmit = async (e) => {
        const { status, data } = await CheckDestinationApiQuery(e);
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                name="searchQuery"
                id={props.id}
                className="search"
                value={searchValue}
                required
                placeholder={`Search ${props.name} profile`}
                onChange = {(e) => setSearchValue(e.target.value)}
            />
            <button className="search-button" type="sumbit"><IoIosSearch /></button>
        </form>
    )
}

export default SearchBar;