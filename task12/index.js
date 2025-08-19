//---------MINI PROJECT TO DO LIST SLOUTION-------------//
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
