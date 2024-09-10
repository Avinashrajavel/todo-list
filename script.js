document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    function addTask() {
        if (taskInput.value.trim() === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            ${taskInput.value}
            <button class="completeButton">✔</button>
            <button class="deleteButton">❌</button>
        `;
        taskList.appendChild(li);

        taskInput.value = '';

        li.querySelector('.completeButton').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.deleteButton').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
