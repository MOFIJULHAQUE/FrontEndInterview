const task = document.querySelector("#task");
const add_task = document.querySelector("#add-task");
const task_list = document.querySelector("#task-list");

add_task.addEventListener("click", (e) => {
  e.preventDefault();
  const task_input = task.value;
  if (task_input === "") return;
  const li = document.createElement("li");
  li.innerText = task_input;
  task_list.appendChild(li);
  task.value = "";
});
// ==========================================================================
