import React, { useState } from "react";
import { IoIosSearch } from 'react-icons/io';
import CheckDestinationApiQuery from "../../api/checkDestinationApiQuery";

function SearchBar(props){
    const [searchValue, setSearchValue] = useState('');
 
    return(
        <form onSubmit={CheckDestinationApiQuery}>
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
            <button className="search-button"><IoIosSearch /></button>
        </form>
    )
}

export default SearchBar;