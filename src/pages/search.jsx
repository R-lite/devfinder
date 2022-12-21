import React from "react";
import SearchCard from "../components/search_page_components/SearchCard";

function SearchPage(){
    return (
        <div>
            <h1>Search Page </h1>
            <SearchCard name = 'LinkedIn'/>
            <SearchCard name = 'Github'/>
            <SearchCard name = 'Behance'/>
            <SearchCard name = 'Resume'/>
        </div>
    )
};

export default SearchPage;