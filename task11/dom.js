// CREAT & REMOVE ELEMENT 
let list = document.getElementById("list");
let newitem = document.createElement("li");
newitem.innerText = "FACEWASH";
list.append(newitem);
 
let replaceitem = document.createElement("li");
replaceitem.innerText = "HAIRSPRAY";
list.replaceChild(replaceitem, list.children[0]);
// newitem.remove(); // to remove element

