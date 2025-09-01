// topic 3 POST REQUEST WITH FETCH

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    body: JSON.stringify({
        title: "HELLO WORLD",
        body: "Hey My name is Haider Ali.",
        userId: 1526
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(data => console.log("My data is : ", data))
    .catch(error => console.error(error));