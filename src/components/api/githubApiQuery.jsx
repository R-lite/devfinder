import axios from "axios";

function GithubApiQuery(searchParameter){
  var data = [];
  var status = 'null';

  axios({
        "method": "GET",
        "url": `https://api.github.com/users/${searchParameter}`,
        "headers": {
            "content-type": 'application/json'
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

  return{status, data};
}

export default GithubApiQuery;