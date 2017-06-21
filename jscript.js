console.log("hello")
var tasks = []

/*var task = {
  "description": "",
  "difficulty": "",
  "person": ""
}*/
function drawList() {
  // Select #list-container element from HTML
  var parent = document.getElementById("list-container")
  // Clear out existing contents
  parent.innerHTML = ""
  // Create a <ul> node
  var ul = document.createElement("ul")
  for(var i =0; i<tasks.length; i++){
    // Create an <li> node
    var li = document.createElement("li")
    // Add the roof string to the li
    li.innerHTML = tasks[i].person + " will: " + tasks[i].description + " (" + tasks[i].difficulty + ")"
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
  tasks.push(newTask)
  // Trigger printing the list to page
  drawList();
}

window.onload = function(){
  //drawList();
  var form = document.querySelector("form");
  form.onsubmit = addInfo;
}
