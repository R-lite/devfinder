// Check for the appriopirate intended api query
import LinkedInApiQuery from "./linkedInApiQuery";
import GithubApiQuery from "./githubApiQuery";
import BehanceApiQuery from "./behanceApiQuery";
import ResumeQuery from "./resumeQuery";

function CheckDestinationApiQuery(e){
    const searchSource = e.target.searchQuery.id;
    const searchParameter = e.target.searchQuery.value;
    e.preventDefault();
    switch (searchSource) {
        case "linkedIn":
            return (LinkedInApiQuery(searchParameter))
        case "github":
            return (GithubApiQuery(searchParameter))
        case "behance":
            return (BehanceApiQuery(searchParameter))
        case "resume":
            return (ResumeQuery(searchParameter))
        default:
            break;
    }
}

export default CheckDestinationApiQuery;