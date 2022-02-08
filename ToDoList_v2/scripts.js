//Elementos
var listElement = document.querySelector("ul");
var inputElement = document.querySelector("input")
var buttonElement = document.querySelector("button");

//Itens
var todosItens = JSON.parse(localStorage.getItem("list_todos")) || [
    "Acordar cedo (exemplo)",
    "Trabalhar (exemplo)",
    "Fazer café (exemplo)",
    "Estudar (exemplo)",
]

//Renderizando itens
function renderLista() {
    listElement.innerHTML = " "

    for (todo of todosItens) {
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo + " ");

        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");
        var linkText = document.createTextNode("Excluir");

        var espacoElement = document.createElement("a");
        var espacoText = document.createTextNode(" | ");

        var linkElementEdit = document.createElement("a");
        linkElementEdit.setAttribute("href", "#");
        var linkTextEdit = document.createTextNode("Editar");

        var posicao = todosItens.indexOf(todo);
        linkElement.setAttribute("onclick", "deleteTodos(" + posicao + ")");
        linkElementEdit.setAttribute("onclick", "editTodos(" + posicao + ")");


        linkElement.appendChild(linkText);
        linkElementEdit.appendChild(linkTextEdit);
        espacoElement.appendChild(espacoText);
        todoElement.appendChild(todoText);

        todoElement.appendChild(linkElement);
        todoElement.appendChild(espacoText)
        todoElement.appendChild(linkElementEdit);

        listElement.appendChild(todoElement);
}
}
        
renderLista();

//Add itens
function addTodos() {
    var todoInput = inputElement.value;
    console.log(todoInput);
    
    if (todoInput != "") {
        todosItens.push(todoInput);
        inputElement.value = ""
        renderLista();
        saveToStorage();
    } else {
        alert("Digite um item!");
    }
}

buttonElement.onclick = addTodos;

//Excluindo itens
function deleteTodos(posicao) {
    todosItens.splice(posicao, 1);
    renderLista();
    saveToStorage();
}

//SalvandoLocal
function saveToStorage(){
    localStorage.setItem("list_todos", JSON.stringify(todosItens))
}

//Editar -> Text field -> Esconder item
function editTodos(posicao) {
    var newItem = prompt("Edite seu item:");
    todosItens.splice(posicao, 1, newItem);
    renderLista();
}
