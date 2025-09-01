// Topic 4 Async/Await with fetch
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json();
        console.log(data.slice(0, 4));
    } catch (error) {
        console.log("Error Occured", error)
    }
}

getPosts();
