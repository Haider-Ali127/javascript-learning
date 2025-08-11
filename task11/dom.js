 // DOM MANUPULATION
let tittle = document.getElementById("tittle");

// now change the text

tittle.innerText = "New visible tittle"; //only visible text
tittle.textContent ="New textcontent"; //inlcudes hidden tag
tittle.innerHTML = " <em>Welcome to real world</em>"//can add html tags.


let img = document.getElementById("logo");
img.setAttribute("src", "https://tse3.mm.bing.net/th/id/OIP.gYug1yEyRSGuYm5FnRqj6gHaHa?pid=Api&P=0&h=220" );
console.log(img.getAttribute("src"));
let img2 = document.getElementById("logo2");
img2.setAttribute("src", " https://tse2.mm.bing.net/th/id/OIP.t-NTmP7-zL4l8NwIhL-wdwHaHa?pid=Api&P=0&h=220" );
console.log(img2.getAttribute("src"));

tittle.style.color = "black"; 
tittle.style.fontSize = "50px";

tittle.classList.add("highlight"); // Adds CSS class
tittle.classList.remove("highlight"); // Removes it
tittle.classList.toggle("highlight");


