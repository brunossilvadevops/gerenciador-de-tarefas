const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const completedList = document.getElementById('completed-list');

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

    // Botão para marcar como concluída
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Concluir';
    completeBtn.style.background = 'green';
    completeBtn.style.color = 'white';
    completeBtn.style.border = 'none';
    completeBtn.style.padding = '4px 8px';
    completeBtn.style.borderRadius = '4px';
    completeBtn.style.cursor = 'pointer';

    completeBtn.addEventListener('click', function() {
        moveToCompleted(li, text);
    });

    // Botão de remover
    const btn = document.createElement('button');
    btn.textContent = 'Remover';
    btn.className = 'remove-btn';

    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(completeBtn);
    li.appendChild(btn);
    list.appendChild(li);
}

function moveToCompleted(taskItem, text) {
    taskItem.remove();

    const li = document.createElement('li');
    li.textContent = text;
    li.classList.add('completed');

    // Botão de excluir do histórico
    const btn = document.createElement('button');
    btn.textContent = 'Excluir';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(btn);
    completedList.appendChild(li);
}
