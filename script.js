let inputs=document.getElementById("info");
let text=document.querySelector(".text");

function Add() {
    if (inputs.value=="") {
        alert("Please enter something..");
    } 
    else {
        let newEl=document.createElement("ul");
        newEl.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEl);
        inputs.value="";
        newEl.querySelector("i").addEventListener("click",rem);
        function rem() {
            newEl.remove();
        }
    }
}