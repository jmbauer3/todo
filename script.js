document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-task').click();
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;

    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'task-buttons';

    const completeButton = document.createElement('button');
    completeButton.textContent = '✔';
    completeButton.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    buttonsDiv.appendChild(completeButton);
    buttonsDiv.appendChild(deleteButton);

    newTask.appendChild(taskLabel);
    newTask.appendChild(buttonsDiv);
    taskList.appendChild(newTask);
}
