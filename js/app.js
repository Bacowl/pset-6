window.onload = function() {
    document.getElementById("add").onclick = addItem;
    document.getElementById("delete").onclick = deleteItem;
    document.getElementById("priority").onclick = setPriority;
    document.getElementById("complete").onclick = markComplete;
}

const list = [];
priorityList = [];

const addItem = function() {
  if (list.length > 0) {
    for (var i = 0; i < list.length; i++) {
      var id2 = "p" + i
      var element = document.getElementById(id2)
      var parent = document.getElementById("div2")
      console.log(element)
      element.remove();
    }
  }
  var task = prompt("Task:")
  list[list.length] = task
  var i = 0
  while (i < list.length) {
    var para = document.createElement("p");
    var id = "p" + i
    para.setAttribute("id", id)
    var node = document.createTextNode(list[i]);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);
    i++
  }
}
