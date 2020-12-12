function showComments(response){
  console.log (response);
  console.log (response.data.email);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";

axios.get(apiUrl).then(showComments);

