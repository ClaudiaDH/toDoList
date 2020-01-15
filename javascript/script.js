//buscando o lugar onde serão colocados a tarefas
let board = document.getElementById("board");
//buscando o botão
let buttonAdd = document.getElementById("add");

//dando funcionalidade ao botão.
buttonAdd.onclick = function(){
    let tarefa =  document.createElement("div");
    tarefa.setAttribute("class","tarefa");

    let titulo =  document.createElement("div");
    titulo.setAttribute("class","col-md-8");
    titulo.textContent = "Essa é uma nova tarefa.";

    let buttonCheck = document.createElement("div");
    buttonCheck.setAttribute("class","col-md-2");

    let imgCheck = document.createElement("input");
    imgCheck.setAttribute("type","checkbox");

    //colocar a imagem dentro do button check e o titulo dentro da tarefa
    buttonCheck.appendChild(imgCheck);

    tarefa.appendChild(titulo);

    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);
}