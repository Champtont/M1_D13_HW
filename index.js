//Temporary Stuff
//Permanent Stuff
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
  let li = document.querySelectorAll("li");
  let myArray = [];
  for (let i = 0; i < li.length; i++) {
    let piece = li[i].innerText;
    myArray.push(piece);
  }
  console.log(myArray);
};

//ex 9:
const colorPicker = document.getElementById("colorPicker");
const colorChangeButton = document.querySelectorAll("input")[3];
//console.log(colorPicker.value);

const changeTaskBackgroundColor = () => {
  const li = document.querySelectorAll("li");
  const newColor = colorPicker.value;
  for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = newColor;
  }
};
colorChangeButton.addEventListener("click", changeTaskBackgroundColor);
