// Task 2 second part
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        console.log("first five alement of json", data.slice(0, 5))
    })
    .catch(error => console.error(error));


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(post => {
        console.log(" post single id", post)
    })
    .catch(error => console.error(error));

fetch("https://jsonplaceholder.typicode.com/wrongendpoint")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Handled Error", error.message));

