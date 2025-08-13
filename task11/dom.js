// console.log("Hello world");
// let element = document.createElement("li");
// let text = document.createTextNode('PLEASE KEEP YOUR MOUTH SHUTT');
// element.append(text);

// element.className = "hello";
// element.id = 'createdli';
// element.innerHTML = "<em>Hello this is created by me</em>"; 
// element.setAttribute('tittle', 'mytittle');

// let ul = document.querySelector('ul.this');
// ul.append(element);
// console.log(ul);
// console.log(element);

// // Event handling
// let button = document.getElementById("btn");
// let inputbox = document.getElementById("inputbox");
// let list = document.getElementById("list");

// // click event
// btn.addEventListener("click", function(event){
//     console.log("Button clicked");
//     console.log("Hello sir how are you!");
// })
// // input event
//  inputBox.addEventListener("input", function(event) {
//         console.log("You typed:", event.target.value);
//     });
// list.addEventListener("click", function(event) {
//         if (event.target.tagName === "LI") {
//             console.log("You clicked:", event.target.innerText);
//         }
//     });

//       list.classList.add("highlight");
//       list.classList.remove("highlight");
//       list.classList.toggle("highlight");

// ------------PRACTISE QUESTION START ----------------------------//
// Question no.1

let para = document.getElementById("para");
console.log(para.parentNode.id);
console.log(para.parentNode.textContent);

let firstMsg = document.querySelector(".msg"); 
console.log(firstMsg.innerText);

let allMsgs = document.querySelectorAll(".msg"); 
allMsgs.forEach(item => console.log(item.innerText)); 


// question no.2
const btn = document.querySelector("#colorBtn");
const para = document.querySelector("#myPara");

btn.addEventListener("click", function() {
    para.style.backgroundColor = "yellow";
    para.style.color = "red";
});


// Question no.3
  document.getElementById("addBtn").addEventListener("click", () => {
    let input = document.getElementById("taskInput");
     if(!input.value.trim())return;

    let li = document.createElement("li");
    li.innerHTML = `${input.value} <button>Delete</button>`;
    li.querySelector("button").onclick = () => li.remove();

    document.getElementById("taskList").appendChild(li);
    input.value = "";
});

// Question no.4
let list1 = document.querySelector("#myList");
list1.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        document.querySelectorAll("#myList li").forEach(li => li.style.background = "");
        event.target.style.background = "lightblue";
    }
});
 
// Question no.5

let submit =  document.getElementById("myForm")
submit.addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Alert first fill your information!");
    } else {
        alert("Your form was submitted successfully");
    }
});

// LEET CODE QUESTION
let counter = 0;
function increment(){
    counter = counter += 1
    document.getElementById('counter').innerHTML = counter;
}
function decrement(){
    counter = counter -=  1;
    document.getElementById('counter').innerHTML = counter;
}
function reset(){
    counter = "shut the fuck up";
    document.getElementById('counter').innerHTML = counter;
}


 

    