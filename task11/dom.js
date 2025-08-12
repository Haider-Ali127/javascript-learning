console.log("Hello world");
let element = document.createElement("li");
let text = document.createTextNode('PLEASE KEEP YOUR MOUTH SHUTT');
element.append(text);

element.className = "hello";
element.id = 'createdli';
element.innerHTML = "<em>Hello this is created by me</em>"; 
element.setAttribute('tittle', 'mytittle');

let ul = document.querySelector('ul.this');
ul.append(element);
console.log(ul);
console.log(element);

// Event handling
let button = document.getElementById("btn");
let inputbox = document.getElementById("inputbox");
let list = document.getElementById("list");

// click event
btn.addEventListener("click", function(event){
    console.log("Button clicked");
    console.log("Hello sir how are you!");
})
// input event
 inputBox.addEventListener("input", function(event) {
        console.log("You typed:", event.target.value);
    });
list.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            console.log("You clicked:", event.target.innerText);
        }
    });

      list.classList.add("highlight");
      list.classList.remove("highlight");
      list.classList.toggle("highlight");
 