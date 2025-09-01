// task2 last question
async function getuserinfo(userid) {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: "foo",
                body: "bar",
                userid: 1526
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        })
        const data = await response.json();
        console.log("user id of user is:", data.userid)
    } catch (error) {
        console.log("error occured", error)
    }
}
getuserinfo();
