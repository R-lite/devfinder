import React from "react";
import { IoIosSearch } from 'react-icons/io'

function SearchBar(){
    return(
        <div className='topbar'>
             <input type="text" id="search" placeholder={`${<IoIosSearch />} Search for a developer profile by github, behance, linkedIn username`}></input>
        </div>
    )
}

export default SearchBar;