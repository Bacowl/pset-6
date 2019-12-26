window.onload = function() {
    document.getElementById("add").onclick = addItem;
    document.getElementById("delete").onclick = deleteItem;
    document.getElementById("priority").onclick = setPriority;
    document.getElementById("complete").onclick = markComplete;
}

const list = [];
priorityList = [];

const addItem = function() {
  var task = "- " + prompt("Task:")
  for (var i = 0; i < list.length; i++) {
    var para= document.createElement("p");
    var node = document.createTextNode(list[i]);
    para.appendChild(node);
    var element = document.getElementById("output-1");
    element.appendChild(para);
  }
}
