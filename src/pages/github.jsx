import React from "react";
import { Routes, Route } from "react-router-dom";
import GitNav from "../components/github_components/GitNav";
import GithubOverview from "./github_pages/overview";
import GithubRepository from "./github_pages/repository"


function Github(){
    return (
        <GitNav>
            <Routes>
                <Route path="/overview" element = {<GithubOverview />} />
                <Route path="/repository" element = {<GithubRepository />} />
            </Routes>
        </GitNav>
    )
};

export default Github;