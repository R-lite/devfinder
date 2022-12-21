import React, { useState } from "react";
import { IoIosSearch } from 'react-icons/io'

function SearchBar(props){
    const [searchValue, setSearchValue] = useState('');

    return(
        <form>
            <input
                type="text"
                id="search"
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