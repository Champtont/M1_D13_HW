//Temporary Stuff
//Permanent Stuff
//window.onload = function () {
const tasks = document.getElementById("myTaskList");
const taskInput = document.getElementById("newTask");
const addButton = document.querySelectorAll("input")[1];

//put thing to work
//ex 5:
const addNewTask = function (event) {
  const create = document.createElement("li");
  create.classList.add("taskListStyle");
  create.innerText = taskInput.value;
  tasks.appendChild(create);
};
//ex 6:
const removeLast = function (event) {
  tasks.removeChild(tasks.lastElementChild);
};
//ex 7:
const removeFirst = function (event) {
  tasks.removeChild(tasks.firstElementChild);
};
//ex 8:
const getTasksAsArray = function () {
  const myTasksArray = document.querySelectorAll("li");
  for (let i = 0; i < myTasksArray.length; i++) {
    console.log(myTasksArray);
  }
};
//};
