//DOM
var addItem = document.querySelector("#add-item");
var list = document.querySelector("#list");

//FUNCTIONS

addItem.addEventListener("click", addFunction);

function addFunction() {
    let itemName = prompt("Cosa vuoi aggiungere?");
    let newItem = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newItem.appendChild(checkbox);
    var newContent = document.createTextNode(itemName);
    newItem.appendChild(newContent);
    list.appendChild(newItem);
    checkbox.addEventListener("click",checked);
    return newItem;
}

 /*function checked(newItem){
    newItem.style.backgroundColor="red";
}*/