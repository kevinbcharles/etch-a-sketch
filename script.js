const container = document.getElementById("container");
const clear = document.getElementById("clear");

const button = document.getElementById("btn")
button.onclick = createGrid;
clear.onclick = createGrid;
createGrid;

function createGrid(){
    container.innerHTML = "";
    let size = document.getElementById("input").value;
    container.style = "grid-template-columns: repeat(" + size +", 1fr)";
    for (i = 1; i <= size**2; i++) {
        
        var content = document.createElement("div");
        content.setAttribute("id","item"+i);
        content.setAttribute("class","box");
        container.appendChild(content);
    }
};

var colorButton = document.getElementById("color");
window.setInterval(changeColor,1000);
var color = "purple";
function changeColor() {
    if(color == "purple"){
        color = "green";
    }
    else {
        color = "purple";
    }

    colorButton.style.backgroundColor = color;
}

colorButton.onclick = createGrid;randomColors;

function randomColors() {
    var boxes = document.getElementsByClassName("box");
    boxes.style.backgroundColor = "purple";
    var random = Math.random()*360;
    boxes.hover.style.backgroundColor = "hsl(random, 100%, 100%)";
}