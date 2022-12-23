import axios from "axios";

async function GithubApiQuery(searchParameter){
  var data = [];
  var status = 'null';

  await axios({
        "method": "GET",
        "url": `https://api.github.com/users/${searchParameter}`,
        "headers": {
            "content-type": "application/octet-stream"
        }
    })
    .then(response => {
        status = 'Success';
        data = response;
      })
    .catch(err => {
        status = 'Failed';
        data = err;
  })
  
  return({status, data})
}

export default GithubApiQuery;