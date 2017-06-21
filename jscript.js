console.log("hello")
var taskList = []

var task = {
  "description": "",
  "difficulty": "",
  "person": ""
}
function drawList() {
  // Select #list-container element from HTML
  var parent = document.getElementById("list-container")
  // Clear out existing contents
  parent.innerHTML = ""
  // Create a <ul> node
  var ul = document.createElement("ul")
  for(var i =0; i<taskList.length; i++){
    console.log(taskList[i].description)
    console.log(taskList[i].difficulty)
    console.log(taskList[i].person)
    // Create an <li> node
    var li = document.createElement("li")
    // Add the roof string to the li
    li.innerHTML = taskList[i].person + " will " + taskList[i].description + " (" + taskList[i].difficulty + ")"
    // Append li to ul
    ul.appendChild(li)
  }
  // Append the ul to the #list-container
  parent.appendChild(ul)
}
// Form submit handler
function addInfo(){
  console.log("building a house!")
  event.preventDefault();
  var form = document.querySelector("form");
  // Create a new house object with form values (just one for right now)
  var newTask = {
    description: form.taskDesc.value,
    difficulty: document.getElementById('difficulty').value,
    person: form.person.value,
  }
  // Insert new task object into taskList array
  taskList.push(newTask)
  // Trigger printing the list to page
  drawList();
}

window.onload = function(){
  //drawList();
  var form = document.querySelector("form");
  form.onsubmit = addInfo;
}
