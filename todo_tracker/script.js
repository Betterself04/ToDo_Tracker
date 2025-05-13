// Function to add a new task
function addTask() {
  const taskInput = document.getElementById('taskInput'); // Get the input field where user enters the task
  const task = taskInput.value.trim(); // Remove any extra spaces from the task input

  if (task === '') return; // If the task is empty, do nothing and return (no task entered)

  // Retrieve the existing tasks from localStorage, or start with an empty array if none exist
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  tasks.push(task); // Add the new task to the array

  // Store the updated tasks array back into localStorage as a string
  localStorage.setItem('tasks', JSON.stringify(tasks));

  taskInput.value = ''; // Clear the input field after adding the task
  renderTasks(); // Re-render the tasks list to include the newly added task
}

// Function to render all tasks from localStorage onto the page
function renderTasks() {
  const taskList = document.getElementById('taskList'); // Get the HTML element to display tasks
  taskList.innerHTML = ''; // Clear the current task list before re-rendering

  // Retrieve the tasks from localStorage or initialize an empty array if none exist
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Loop through each task and create an <li> element for it
  tasks.forEach((task, index) => {
    const li = document.createElement('li'); // Create a new <li> element for each task
    li.textContent = task; // Set the text of the <li> to the task

    // Add an event listener to the <li> element to handle task deletion
    li.onclick = () => {
      // Remove the task from the tasks array by using its index
      tasks.splice(index, 1);
      // Save the updated tasks array back to localStorage
      localStorage.setItem('tasks', JSON.stringify(tasks));
      renderTasks(); // Re-render the tasks to update the list
    };

    // Append the <li> element to the task list
    taskList.appendChild(li);
  });
}

// When the page loads, call renderTasks to display the tasks stored in localStorage
window.onload = renderTasks;
