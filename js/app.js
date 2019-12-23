window.onload = function() {
    document.getElementById("add").onclick = addItem;
    document.getElementById("delete").onclick = deleteItem;
    document.getElementById("priority").onclick = setPriority;
    document.getElementById("complete").onclick = markComplete;
}

const list = [];
var priorityList = "";

const addItem = function() {
  var canvas = document.getElementById("list");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  var task = prompt("Task:")
  list[list.length] = "- "  + task;
  ctx.font = "20px Georgia";
  for (var i = 0; i < list.length; i++) {
    ctx.fillText(list[i], 70, (i*30)+70)
  }
}

const deleteItem= function() {
  var canvas = document.getElementById("list");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  var del = "- " + prompt("Item to delete:");
  var del = del.toUpperCase();
  var count = 0;
  while (del != delVar && count < list.length) {
    var delVar = list[count]
    var delVar = delVar.toUpperCase();
    ++count
  }
  if (del.toUpperCase() == delVar.toUpperCase()) {
    list.splice(count - 1,1)
  } else {
    alert("That is not an item in the list.")
  }
  ctx.font = "20px Georgia";
  for (var i = 0; i < list.length; i++) {
    ctx.fillText(list[i], 70, (i*30)+70)
  }
}

const setPriority= function() {
  var canvas = document.getElementById("list");
  var ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  var priority = "- " + prompt("Item to prioritize:");
  var priority2 = priority;
  var priority = proiority.toUpperCase();
  var count = 0;
  while (priority != priorityVar && count < list.length) {
    var priorityVar = list[count]
    var priorityVar = priorityVar.toUpperCase();
    ++count
  }
  if (priority.toUpperCase() == priorityVar.toUpperCase() && priorityList.includes(priority.toUpperCase())) {
    var priorityList = priorityList + priority.toUpperCase()
    list.splice(count - 1, 1)
    list.unshift(priority2)
  } else if (priority.toUpperCase() == priorityVar.toUpperCase()) {
      list.splice(count - 1, 1);
      list.push(priority2);
  } else {
      alert("That is not an item in the list.")
  }
  ctx.font = "20px Georgia";
  for (var i = 0; i < list.length; i++) {
    ctx.fillText(list[i], 70, (i*30)+70)
  }
}
