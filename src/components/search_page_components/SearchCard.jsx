import React from "react";
import SearchBar from "../small_components/SearchBar";
// import {
//     IoIosCheckmarkCircle,
//     IoIosCloseCircle
// } from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function SearchCard(props){
    return(
        <div className="search-card">
            <h2 className="search-name">{props.name}</h2>
            <AiOutlineLoading3Quarters className="search-operation-result-icon"/>
            <p className="search-status-msg">Search</p>
            <SearchBar 
                name={props.name}
                id = {props.id}
            />
        </div>
    )
}

export default SearchCard;