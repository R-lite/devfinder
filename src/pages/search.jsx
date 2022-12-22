import React from "react";
import SearchCard from "../components/search_page_components/SearchCard";
import ApiQueryContextProvider from "../context/ApiQueryContext";

function SearchPage(){
    return (
        <div>
            <h1 className="page-heading">Search Developer </h1>
            <ApiQueryContextProvider>
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
            </ApiQueryContextProvider>
        </div>
    )
};

export default SearchPage;