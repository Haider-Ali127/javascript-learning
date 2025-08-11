// DOM INTRO AND NAVIGATION 

let heading = document.getElementById("tittle");
console.log(heading.innerText);

let firstpara = document.querySelector(".text"); //dot  (.) to represent the class
console.log(firstpara.innerText);

let allparas = document.querySelectorAll(".text");
console.log(allparas.length);   


let container = document.getElementById("container");
console.log(container.parentNode);  
console.log(container.children[0]); 

let button = document.getElementById("tittle1");
console.log(button.innerHTML);

// DOM MANUPULATION