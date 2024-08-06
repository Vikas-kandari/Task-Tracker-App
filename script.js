
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit" onclick="editTask(this)">Edit</button>
                <button class="delete" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }

    window.editTask = function(button) {
        const li = button.parentElement.parentElement;
        const currentText = li.querySelector('span').textContent;
        const newText = prompt('Edit task:', currentText);

        if (newText !== null) {
            li.querySelector('span').textContent = newText.trim();
        }
    };

    window.deleteTask = function(button) {
        const li = button.parentElement.parentElement;
        taskList.removeChild(li);
    };
});
