//buscando o lugar onde serão colocados a tarefas
let board = document.getElementById("board");
//buscando o botão
let buttonAdd = document.getElementById("add");

let inputAdd = document.getElementById("novaTarefa");

let listaTarefas = [];
//getitem--> recupera a info da storage
if(localStorage.getItem("listaTarefas")){
    listaTarefas = JSON.parse(localStorage.getItem("listaTarefas"));
}else{

//adicionando as info na array no local storage.
  
//transofrmando em Json. Criando 
//setitem --> coloca a info no storage
localStorage.setItem("listaTarefas",JSON.stringify(listaTarefas));
}

//onde passs a minha lista de tarefas para poder renderizar.
mostrarNaTela(listaTarefas);

//dando funcionalidade ao botão.
buttonAdd.onclick = function(){
    //saber o valor que foi digitado
    let valorDigitado = inputAdd.value;
    //adicionando dentro da array a informação especifica.
    listaTarefas.push(valorDigitado);

    let tarefa =  document.createElement("div");
    tarefa.setAttribute("class","tarefa");

    let titulo =  document.createElement("div");
    titulo.setAttribute("class","col-md-8");
    //o valor digitado pela pessoa sera adicionado aqui
    titulo.textContent = valorDigitado;

    let buttonCheck = document.createElement("div");
    buttonCheck.setAttribute("class","col-md-2");

    let imgCheck = document.createElement("input");
    imgCheck.setAttribute("type","checkbox");

    //colocar a imagem dentro do button check e o titulo dentro da tarefa
    buttonCheck.appendChild(imgCheck);

    tarefa.appendChild(titulo);

    tarefa.appendChild(buttonCheck);

    board.appendChild(tarefa);

    //atualizando a nova array que montei com as informações da lentro.
    localStorage.setItem("listaTarefas",JSON.stringify(listaTarefas));
}
    function mostrarNaTela(listaTarefas){
        //para cada item na minha lista de tarefas eu gero a funcao gerar Tarefa
        //for --> foreach do php
        for(let item of listaTarefas){
            gerarTarefa(item);
        }
    }
    function gerarTarefa(valorDigitado){
        let tarefa =  document.createElement("div");
        tarefa.setAttribute("class","tarefa");
    
        let titulo =  document.createElement("div");
        titulo.setAttribute("class","col-md-8");
        //o valor digitado pela pessoa sera adicionado aqui
        titulo.textContent = valorDigitado;
    
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

