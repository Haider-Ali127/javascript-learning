
//------PRACTISE OF EVENT HANDLING TOPIC--------------------//
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) =>{
//     console.log("btn1 was clicked");
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientx, e.clienty);
//     let a = 25;
//     a++;
//     console.log(a);
// }
// let div = document.querySelector("div"); // mouseover is event handles as a mouse when courser come on given function this works as a handler
// div.onmouseover = (e) => {
//        console.log("btn1 was clicked");
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientx, e.clienty);
//     console.log(e);
//     let a = 25;
//     a++;
//     console.log(a);
// }

// const handler3 = () =>{
//     console.log("HEllo world -handler3")
// }
// btn1.addEventListener("click", handler3)

// btn1.addEventListener("click", () =>{
//     console.log("button was clicked due to event listener")
// });
// btn1.removeEventListener("click", handler3); // used when you make differnt event handler func and want to delete one of them.

// let btn = document.querySelector("#color");
// let body = document.querySelector('body');
// let currmode = "light" // dark
// btn.addEventListener("click", () =>{
//     // console.log("Hello world you are trying to change the color");
//     if(currmode === "light"){
//         currmode = "dark";
// // through classes
//          body.classList.add("dark");
//          body.classList.remove("light");
//         // document.querySelector('body').style.backgroundColor = "black";
//     } else{
//         currmode = "light";
//         body.classList.add("light");
//          body.classList.remove("dark");
//         //  document.querySelector('body').style.backgroundColor = "white";
//     }
//     console.log(currmode);
// })  


// const BOX1 = document.getElementById('box');

// Click
// BOX1.addEventListener("click", () => {
//   BOX1.textContent = "You clicked me!";
//   BOX1.style.backgroundColor = "lightgreen";
//   BOX1.style.color = "red";
// });

// double click (dblclick)
// BOX1.addEventListener("dblclick", () => {
//   BOX1.textContent = "You double clicked me!";
//   BOX1.style.backgroundColor = "lightgreen";
//   BOX1.style.color = "red";
// });

// mouseover
// BOX1.addEventListener("mouseover", () => {
//   BOX1.textContent = "mouser over";
//   BOX1.style.backgroundColor = "lightgreen";
//   BOX1.style.color = "red";
// });

// mouse out
// BOX1.addEventListener("mouseout", () => {
//   BOX1.textContent = "mouseout";
//   BOX1.style.backgroundColor = "black";
//   BOX1.style.color = "red";
// });

// ----- NOW KEY PRESS TOPIC ------------
// const inputBox = document.getElementById("inputBox");
//     const output = document.getElementById("output");

//     // Key down
//     inputBox.addEventListener("keydown", (event) => {
//       output.textContent = `Key Down: ${event.key}`;
//       output.style.color = "red";
//     });

// ---------------Keyup topic-------------------//

// const inputBox = document.getElementById("inputBox");
//     const output = document.getElementById("output");

//     inputBox.addEventListener("keyup", (event) => {
//       output.textContent = `Keyup: ${event.key}`;
//       output.style.color = "red";
//     });

//------------- KEY PRESSED------------//
// const inputBox = document.getElementById("inputBox");
//     const output = document.getElementById("output");

//     inputBox.addEventListener("keypress", (event) => {
//       output.textContent = `Keypress: ${event.key}`;
//       output.style.color = "red";
//     });


// const nameInput = document.getElementById("nameInput");
// const courseSelect = document.getElementById("courseSelect");
// const form = document.getElementById("myForm");
// const message = document.getElementById("message");

//------------ Input event--------------//
//     nameInput.addEventListener("inputevent", ( ) => {
//         message.textContent = `  ${nameInput.value}`
//     });


// ------------Change event----------------//
//     courseSelect.addEventListener("change", () => {
//       message.textContent = `You selected: ${courseSelect.value}`;
//       message.style.color = "orange";
//     });

//     // Submit event with preventDefault
//      form.addEventListener("submit", (event) =>{
//       event.preventDefault(); // Prevent page reload
//       message.textContent = `Form submitted! Name: ${nameInput.value}, Course: ${courseSelect.value}`;
//       message.style.color = "green";
//     });


//---------MINI PROJECT TO DO LIST SLOUTION----------//
let btn = document.getElementById("addBtn")
btn.addEventListener("click", () => {
    let input = document.querySelector("Input");
    if(!input.value.trim()) 
        return;

    let li = document.createElement("li");
    li.innerHTML= `${input.value}  <button style="background-color: rgb(14, 18, 18); color:red;">DELETE</button>`;
    li.querySelector("button").onclick = () => li.remove();

    document.getElementById("taskList").appendChild(li);
    input.value= "";
});
let btn1 = document.getElementById("btn1");
btn1.addEventListener("dblclick", () => {
      btn1.textContent =  alert(" TO DO LIST WAS SUBMITTED SUCCESSFULLY");
});
