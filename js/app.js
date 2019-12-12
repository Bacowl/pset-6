window.onload = function() {
    document.getElementById("add").onclick = addItem;
    document.getElementById("delete").onclick = deleteItem;
    document.getElementById("priority").onclick = setPriority;
    document.getElementById("complete").onclick = markComplete;
}

const list = []

const addItem = function() {
  var canvas = document.getElementById("list");
  var ctx = canvas.getContext('2d');
  var task = prompt("Task:")
  list[list.length] = task;
  ctx.font = "20px Georgia";
  ctx.fillText(task[0], 20, 30)
}
