// Obtém os elementos do DOM (HTML) para manipulação no JavaScript
const form = document.getElementById('task-form'); // Formulário de adicionar tarefa
const input = document.getElementById('task-input'); // Campo de texto da nova tarefa
const list = document.getElementById('task-list'); // Lista de tarefas

// Adiciona um evento de "submit" (envio) no formulário
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Impede que a página recarregue ao enviar o formulário

    const taskText = input.value.trim(); // Pega o texto digitado, removendo espaços extras

    // Só adiciona a tarefa se o campo não estiver vazio
    if (taskText !== '') {
        addTask(taskText); // Chama a função para criar e adicionar a tarefa
        input.value = '';  // Limpa o campo de texto
        input.focus();     // Coloca o cursor de volta no campo
    }
});

// Função para criar e inserir uma nova tarefa na lista
function addTask(text) {
    // Cria um elemento <li> para representar a tarefa
    const li = document.createElement('li');
    li.textContent = text; // Define o texto da tarefa

    // Evento de clique para marcar ou desmarcar a tarefa como concluída
    li.addEventListener('click', function() {
        li.classList.toggle('completed'); // Alterna a classe CSS "completed"
    });

    // Cria o botão de remover tarefa
    const btn = document.createElement('button');
    btn.textContent = 'Remover';
    btn.className = 'remove-btn'; // Classe para estilização no CSS

    // Evento de clique no botão de remover
    btn.addEventListener('click', function(e) {
        e.stopPropagation(); // Impede que o clique também ative o evento do <li>
        li.remove(); // Remove a tarefa da lista
    });

    // Adiciona o botão dentro do <li>
    li.appendChild(btn);

    // Adiciona o <li> (tarefa) dentro da <ul> (lista)
    list.appendChild(li);
}
