function add() {
    task = object1();
}
function object1() {
    var lists = document.getElementById("text").value;
    console.log(lists)
    if (list == "" || list == " ") {
        alert("Input something");
    }
    else {
        var listItems = document.createElement("li");
        var button = document.createElement("button");
    button.setAttribute("class", "button");
        console.log(button)
        var listText = document.createTextNode(lists + "  ");
        listItems.appendChild(listText);
        listItems.appendChild(button);
        document.getElementById("list").appendChild(listItems);
        button.innerHTML = "Remove";
        button.addEventListener("click",remove);

    }
    document.getElementById("text").value = " ";
}
function remove() {
var content = this.parentNode;
var parent = content.parentNode;
parent.removeChild(content);
}

function removeAll() {
    document.getElementById("list").innerHTML = " ";
}