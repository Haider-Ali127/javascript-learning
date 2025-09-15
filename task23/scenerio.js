// // SCENERIO BASED QUESTION NEWS APP
async function loadNews() {
    console.log("Loading....")
    try {

        let response = await fetch("https://jsonplaceholder.typicode.com/posts ");

        if (!response.ok) {
            console.log("Could not load successfully, try again later")
        }
        let data = await response.json();


        console.log(data);
    } catch (error) {
        console.error("Could not load successfully, try again later", error);
    }
}

setTimeout(() => {
    loadNews()
}, 2000)























