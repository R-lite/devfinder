import React from "react";
import SearchCard from "../components/search_page_components/SearchCard";

function SearchPage(){
    return (
        <div>
            <h1>Search Page </h1>
            <SearchCard 
                name = 'LinkedIn'
                id = 'linkedIn'
            />
            <SearchCard 
                name = 'Github'
                id = 'github'
            />
            <SearchCard 
                name = 'Behance'
                id = 'behance'
            />
            <SearchCard 
                name = 'Resume'
                id = 'resume'
            />
        </div>
    )
};

export default SearchPage;