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

document.getElementById('add-note').addEventListener('click', function() {
    const noteInput = document.getElementById('new-note');
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        addNote(noteText);
        noteInput.value = '';
    }
});

function addNote(noteText) {
    const notesContainer = document.getElementById('notes-container');
    const newNote = document.createElement('div');
    newNote.className = 'note';
    newNote.textContent = noteText;

    // Make the note draggable
    newNote.setAttribute('draggable', true);
    newNote.addEventListener('dragstart', dragStart);
    newNote.addEventListener('dragend', dragEnd);

    notesContainer.appendChild(newNote);
}

let dragItem = null;

function dragStart(event) {
    dragItem = this;
    setTimeout(() => this.style.display = 'none', 0);
}

function dragEnd(event) {
    setTimeout(() => {
        dragItem.style.display = 'block';
        dragItem = null;
    }, 0);
}

document.addEventListener('dragover', function(event) {
    event.preventDefault();
    const notesContainer = document.getElementById('notes-container');
    const x = event.clientX - notesContainer.offsetLeft;
    const y = event.clientY - notesContainer.offsetTop;

    if (dragItem) {
        dragItem.style.left = `${x}px`;
        dragItem.style.top = `${y}px`;
    }
});
