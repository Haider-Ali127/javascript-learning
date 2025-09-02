async function getpost() {
    try {
        loading.innerText = "Loading......."
        error.innerText = ""
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const post = await response.json();
        loading.innerText = "";
        console.log(post)
        renderuser(post)
    }
    catch (error) {
        u1.innerText = "";
        console.log("Error Occured:", error)
        p.innerText = "Error occured..."
    }

}
function renderuser(user) {
    let ul = document.getElementById("u1");
    ul.innerText = "";
    user.forEach(element => {
        let li = document.createElement("li")
        li.innerText = `${element.name}-${element.email}-${element.address.city}`
        ul.appendChild(li);
    });

}
getpost()
