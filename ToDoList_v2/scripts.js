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

    var posicao = todosItens.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodos(" + posicao + ")");

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
    }
}
        
renderLista();

//Add itens
function addTodos() {
    var todoInput = inputElement.value;
    
    todosItens.push(todoInput);
    inputElement.value = ""
    renderLista();
    saveToStorage();
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