const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskText = input.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        input.value = '';
        input.focus();
    }
});

function addTask(text) {
    const li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const btn = document.createElement('button');
    btn.textContent = 'Remover';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(btn);
    list.appendChild(li);
}