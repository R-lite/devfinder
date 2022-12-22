import React, { useState, useContext } from "react";
import { IoIosSearch } from 'react-icons/io';
import CheckDestinationApiQuery from "../api/checkDestinationApiQuery";
import apiQueryActionContext from "../../context/ApiQueryContext";

function SearchBar(props){
    const [searchValue, setSearchValue] = useState('');
    const handleSubmit = (e) => {
        const { status, data } =  CheckDestinationApiQuery(e);
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