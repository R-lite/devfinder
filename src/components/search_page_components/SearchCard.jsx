import React, {  useContext } from "react";
import SearchBar from "../small_components/SearchBar";
import {
    IoIosCheckmarkCircle,
    IoIosCloseCircle
} from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { apiQueryContext } from "../../context/ApiQueryContext";

function SearchCard(props){
    const { isSpinnerOn, searchStatus } = useContext(apiQueryContext);

    return(
        <div className="search-card">
            <h2 className="search-name">{props.name}</h2>
            {
                searchStatus === 'Success' ?
                <IoIosCheckmarkCircle className="search-operation-result-icon success-icon" />:
                searchStatus === 'Failed' ?
                <IoIosCloseCircle className="search-operation-result-icon failed-icon" />:
                <AiOutlineLoading3Quarters className="search-operation-result-icon"/>
            }
            <p className="search-status-msg">
                {
                    searchStatus === 'Success' ?
                    'userFound':
                    searchStatus === 'Failed' ?
                    'userNotFound':
                    'searchUser'
                }
            </p>
            <SearchBar 
                name={props.name}
                id = {props.id}
            />
        </div>
    )
}

export default SearchCard;