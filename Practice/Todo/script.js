
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


  //edit operation  ==================================================================
  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';

  // Add click event listener to edit button to enable editing of list item text content
  editBtn.addEventListener('click', (e) => {
    let newTaskInput = prompt('Enter new task:', taskInput);

    if (newTaskInput) {
      li.innerText = newTaskInput;   // Update list item text content with new value from prompt input  
    }
  });

  li.appendChild(editBtn);   // Append edit button to list item  

  addTask.appendChild(li);   // Append list item to task list container  

  task.value = "";           // Clear input field after adding a task  

//delete operation  ==================================================================
const deleteBtn = document.createElement('button');
deleteBtn.innerText = 'Delete';

// Add click event listener to delete button to enable deletion of list item 
deleteBtn.addEventListener('click', (e) => {
  addTask.removeChild(li);   // Remove list item from task list container  
});

li.appendChild(deleteBtn);   // Append delete button to list item  
addTask.appendChild(li);     // Append list item to task list container



});





