// Check for the appriopirate intended api query
import LinkedInApiQuery from "./linkedInApiQuery";
import GithubApiQuery from "./githubApiQuery";
import BehanceApiQuery from "./behanceApiQuery";
import ResumeQuery from "./resumeQuery";

function CheckDestinationApiQuery(e){
    const searchSource = e.target.searchQuery.id;
    const searchParameter = e.target.searchQuery.value;
    e.preventDefault()
    switch (searchSource) {
        case "linkedIn":
            LinkedInApiQuery(searchParameter);
            break;
        case "github":
            GithubApiQuery(searchParameter);
            break;
        case "behance":
            BehanceApiQuery(searchParameter);
            break;
        case "resume":
            ResumeQuery(searchParameter);
            break
        default:
            break;
    }
}

export default CheckDestinationApiQuery;