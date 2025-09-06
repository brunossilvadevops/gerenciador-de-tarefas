document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const completedList = document.getElementById('completed-list');
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(tabId) {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        document.getElementById(`${tabId}-content`).classList.add('active');
        document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add('active');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            showTab(tabId);
        });
    });

    showTab('active-tasks');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText, isCompleted = false) {
        const listItem = document.createElement('li');
        
        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;

        const taskButtonsDiv = document.createElement('div');
        taskButtonsDiv.classList.add('task-buttons');
        
        // Botão de concluir/desfazer
        const completeButton = document.createElement('button');
        const completeIcon = document.createElement('i');
        completeIcon.classList.add('fas');
        completeIcon.classList.add(isCompleted ? 'fa-redo-alt' : 'fa-check-circle');
        completeButton.appendChild(completeIcon);
        
        completeButton.addEventListener('click', () => {
            if (listItem.classList.contains('completed')) {
                listItem.classList.remove('completed');
                completeIcon.classList.remove('fa-redo-alt');
                completeIcon.classList.add('fa-check-circle');
                taskList.appendChild(listItem);
            } else {
                listItem.classList.add('completed');
                completeIcon.classList.remove('fa-check-circle');
                completeIcon.classList.add('fa-redo-alt');
                completedList.appendChild(listItem);
            }
        });

        // Botão de edição
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Editar tarefa:', taskTextSpan.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskTextSpan.textContent = newTaskText.trim();
            }
        });

        // Botão de exclusão
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.addEventListener('click', () => {
            if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
                listItem.remove();
            }
        });

        taskButtonsDiv.appendChild(completeButton);
        taskButtonsDiv.appendChild(editButton);
        taskButtonsDiv.appendChild(deleteButton);
        
        listItem.appendChild(taskTextSpan);
        listItem.appendChild(taskButtonsDiv);

        if (isCompleted) {
            completedList.appendChild(listItem);
        } else {
            taskList.appendChild(listItem);
        }
    }

    // Exemplo de tarefas
    addTask('Estudar CSS avançado');
    addTask('Comprar mantimentos', true);
});