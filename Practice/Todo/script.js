
const task = document.querySelector("#task");
const submitBtn = document.querySelector("#add-task");
const addTask = document.querySelector("#task-list");



submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const taskInput = task.value;
  if (taskInput === "") return;
  const li = document.createElement("li");
  li.innerText = taskInput;
  addTask.appendChild(li);
  task.value = "";
})