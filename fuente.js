
var url ='https://jsonplaceholder.typicode.com/posts/';
var urlf = '/comments';
var count = 1;
var jotahijo = fetch(url+count+urlf)
  .then(response => response.json())
  .then(json => console.log(json));
console.log(jotahijo);