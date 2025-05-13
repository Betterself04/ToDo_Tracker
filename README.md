Task Tracker:
Description
Task Tracker is a simple web application that allows users to manage their daily tasks. It provides the functionality to:

-Add tasks to a list.
-Mark tasks as complete by clicking a checkbox next to each task.
-Delete tasks once they are marked as "over" (complete).
-The tasks are stored locally using the browser's localStorage, so they persist even after refreshing the page.

Features
*Add new tasks to the list.

*Tasks as completed using a checkbox.

*Remove tasks from the list once completed.

*Persist tasks even after page reload via localStorage.

*Simple, user-friendly interface.

Technologies Used
HTML: For structuring the page.

CSS: For styling the layout.

JavaScript: For implementing the functionality of adding, marking, and deleting tasks.

How It Works
Adding a Task:

The user enters a task in the input field and clicks the "Add" button.

The task is saved to localStorage and displayed in the list.

Marking a Task as Complete:

Each task has a checkbox. When the checkbox is clicked, the task is removed from the list and deleted from localStorage.

Deleting a Task:

The task can also be deleted by clicking directly on the task item. This removes the task from both the display and localStorage.

Setup Instructions
Clone or Download the Repository:

Clone this repository to your local machine using:


git clone <repository-url>
Or, download the project as a ZIP file.

Create the Files:

Create the following files in the same directory:

index.html: The main HTML structure.

style.css: The styles for the page layout.

script.js: The JavaScript functionality.

Open the index.html File:

Open the index.html file in your browser to view the app and start using the task tracker.

File Structure
/TaskTracker
    ├── index.html        # The main HTML structure of the app
    ├── style.css         # CSS file for styling
    ├── script.js         # JavaScript file for functionality
Usage
Adding Tasks:

Type a task into the input box and click the Add button.

The task will be added to the list.

Marking Tasks as Complete:

Click the checkbox next to a task to mark it as complete. This removes it from the list and deletes it from localStorage.

Deleting Tasks:

Click on any task in the list to delete it, which will remove it from the task list and localStorage.

Example

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Tracker</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>My Tasks</h2>
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button onclick="addTask()">Add</button>
    <ul id="taskList"></ul>
  </div>
  
  <script src="script.js"></script>
</body>
</html>
