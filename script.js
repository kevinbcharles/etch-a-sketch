var container = document.getElementById("container");
//var content = document.createTextNode("texty");
//container.appendChild(content);


var button = document.getElementById("btn")
button.onclick = createGrid;

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
    console.log("side = "+size);
};

