// last tasks. ques no.1
// converting first code eg into async await
async function getdata() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log(data.slice(0, 4))
    } catch (error) {
        console.log("error occured", error)
    }

}
getdata();


// converting 2nd code eg into async await

async function getinfo() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log("error occured", error)
    }
}
getinfo();



