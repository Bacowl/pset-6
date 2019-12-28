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
      var id2 = "p" + i;
      var element = document.getElementById(id2);
      element.remove();
      var id5 = "del" + i;
      var element2 = document.getElementById(id5);
      element2.remove();
      var id6 = "check" + i;
      var element3 = document.getElementById(id6);
      element3.remove();
      var id8 = "priority" + i;
      var element4 = document.getElementById(id8);
      element4.remove();
    }
  }
  var task = "- " + prompt("Task:")
  if (task != "- null" && task != "- ") {
      list[list.length] = task;
  }
  var i = 0
  while (i < list.length) {
    var para = document.createElement("p");
    var id = "p" + i;
    para.setAttribute("id", id);
    para.style.color = "white";
    para.style.background = "grey";
    para.style.border = "10px solid grey";
    para.style.borderRadius = "20px";
    para.style.font = "20px Times new Roman";
    para.style.fontWeight = "bold";
    var node = document.createTextNode(list[i]);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);

    var del = document.createElement("button");
    del.setAttribute("class", "delete");
    var id3 = "del" + i;
    del.setAttribute("id", id3);
    var node2 = document.createTextNode("\u274C");
    var height = i*63 +251 + "px";
    del.appendChild(node2);
    del.style.position = "absolute";
    del.style.top = height;
    del.style.left = "1350px";
    del.style.background = "none";
    del.style.border = "none";
    element.insertAdjacentElement('afterBegin', del);
    document.getElementById(id3).onclick = reply_click1;

    var check = document.createElement("button");
    check.setAttribute("class", "check");
    var id4 = "check" + i;
    check.setAttribute("id", id4);
    var node3 = document.createTextNode("\u2714");
    var height = i*63 +251 + "px";
    check.appendChild(node3);
    check.style.position = "absolute";
    check.style.top = height;
    check.style.left = "1300px";
    check.style.background = "none";
    check.style.border = "none";
    check.style.color = "green";
    var element = document.getElementById("div1");
    element.appendChild(check);
    document.getElementById(id4).onclick = reply_click2;

    var priority = document.createElement("button");
    priority.setAttribute("class", "priority");
    var id7 = "priority" + i;
    priority.setAttribute("id", id7);
    var node4 = document.createTextNode("!");
    var height = i*63 +251 + "px";
    priority.appendChild(node4);
    priority.style.position = "absolute";
    priority.style.top = height;
    priority.style.left = "230px";
    priority.style.background = "none";
    priority.style.border = "none";
    priority.style.color = "orange"
    priority.style.fontWeight = "bold";
    var element = document.getElementById("div1");
    element.appendChild(priority);
    document.getElementById(id7).onclick = reply_click3;
    i++
  }
}

const reply_click1 = function() {
  if (list.length > 0) {
    for (var i = 0; i < list.length; i++) {
      var id2 = "p" + i;
      var element = document.getElementById(id2);
      element.remove();
      var id5 = "del" + i;
      var element2 = document.getElementById(id5);
      element2.remove();
      var id6 = "check" + i;
      var element3 = document.getElementById(id6);
      element3.remove();
      var id8 = "priority" + i;
      var element4 = document.getElementById(id8);
      element4.remove();
    }
  }
  var number = Number(this.id.charAt(3));
  list.splice(number, 1)
  var i = 0
  while (i < list.length) {
    var para = document.createElement("p");
    var id = "p" + i;
    para.setAttribute("id", id);
    para.style.color = "white";
    para.style.background = "grey";
    para.style.border = "10px solid grey";
    para.style.borderRadius = "20px";
    para.style.font = "20px Times new Roman";
    para.style.fontWeight = "bold";
    var node = document.createTextNode(list[i]);
    para.appendChild(node);
    var element = document.getElementById("div1");
    element.appendChild(para);

    var del = document.createElement("button");
    del.setAttribute("class", "delete");
    var id3 = "del" + i;
    del.setAttribute("id", id3);
    var node2 = document.createTextNode("\u274C");
    var height = i*63 +251 + "px";
    del.appendChild(node2);
    del.style.position = "absolute";
    del.style.top = height;
    del.style.left = "1350px";
    del.style.background = "none";
    del.style.border = "none";
    element.insertAdjacentElement('afterBegin', del);
    document.getElementById(id3).onclick = reply_click1;

    var check = document.createElement("button");
    check.setAttribute("class", "check");
    var id4 = "check" + i;
    check.setAttribute("id", id4);
    var node3 = document.createTextNode("\u2714");
    var height = i*63 +251 + "px";
    check.appendChild(node3);
    check.style.position = "absolute";
    check.style.top = height;
    check.style.left = "1300px";
    check.style.background = "none";
    check.style.border = "none";
    check.style.color = "green";
    var element = document.getElementById("div1");
    element.appendChild(check);
    document.getElementById(id4).onclick = reply_click2;

    var priority = document.createElement("button");
    priority.setAttribute("class", "priority");
    var id7 = "priority" + i;
    priority.setAttribute("id", id7);
    var node4 = document.createTextNode("!");
    var height = i*63 +251 + "px";
    priority.appendChild(node4);
    priority.style.position = "absolute";
    priority.style.top = height;
    priority.style.left = "230px";
    priority.style.background = "none";
    priority.style.border = "none";
    priority.style.color = "orange"
    priority.style.fontWeight = "bold";
    var element = document.getElementById("div1");
    element.appendChild(priority);
    document.getElementById(id7).onclick = reply_click3;
    i++
  }
}

const reply_click2 = function() {
  var number = Number(this.id.charAt(5));
}

const reply_click3 = function() {
  var number = Number(this.id.charAt(8));
}
