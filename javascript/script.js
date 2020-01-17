//buscando o lugar onde serão colocados a tarefas
let board = document.getElementById("board");
//buscando o botão
let buttonAdd = document.getElementById("add");

let inputAdd = document.getElementById("novaTarefa");



let listaTarefas = [];
//getitem--> recupera a info da storage
//se ja existir uma informacao no meu local storage 
if(localStorage.getItem("listaTarefas")){
    //pega o JSON e transforma em array novamente.
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
buttonAdd.onclick = function(event){
  
    //pegar as info que o js ta me mandando
    let botaoClicado =  event.target;
    console.log(botaoClicado);

    //saber o valor que foi digitado
    let valorDigitado = inputAdd.value;

    //adicionando dentro da array a informação especifica.
    listaTarefas.push(valorDigitado);

    gerarTarefa(valorDigitado,listaTarefas.length -1);

    // let tarefa =  document.createElement("div");
    // tarefa.setAttribute("class","tarefa");

    // let titulo =  document.createElement("div");
    // titulo.setAttribute("class","col-md-8");
    // //o valor digitado pela pessoa sera adicionado aqui
    // titulo.textContent = valorDigitado;

    // let buttonCheck = document.createElement("div");
    // buttonCheck.setAttribute("class","col-md-2");

    // let imgCheck = document.createElement("input");
    // imgCheck.setAttribute("type","checkbox");

    // //colocar a imagem dentro do button check e o titulo dentro da tarefa
    // buttonCheck.appendChild(imgCheck);


    // tarefa.appendChild(titulo);

    // tarefa.appendChild(buttonCheck);

    // board.appendChild(tarefa);

    //atualizando a nova array que montei com as informações da lentro.
    localStorage.setItem("listaTarefas",JSON.stringify(listaTarefas));
}
    function mostrarNaTela(listaTarefas){
        //para cada item na minha lista de tarefas eu gero a funcao gerar Tarefa
        //for --> foreach do php
        // for(let item of listaTarefas){
        //     gerarTarefa(item);
        // }
        //innerHTML vai limpar tudo que estiver dentro do HTML e deixar vazio
        board.innerHTML = "";
        //para aparecer as posicoes automatizadas
        //para cada item da array ele vai executar essa função anonima
        //valor = valor digitado
        listaTarefas.forEach(function(valor,posicao){
            
            gerarTarefa(valor,posicao);

        })
    }
    function gerarTarefa(valorDigitado, posicao){
        let tarefa =  document.createElement("div");
        tarefa.setAttribute("class","tarefa");
        //gerando atributo
        tarefa.setAttribute("posicao",posicao);

        
    
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

        imgCheck.onclick =  function(event){
            //pega o botao que foi clicado atraves do evento.
            console.log(event.target);
            //pega o pai do botao que foi clicado.
            console.log(event.target.parentNode);
            //pega o avo
            console.log(event.target.parentNode.parentNode);

            console.log(listaTarefas);

            //removendo do storage
            //pega o valor da posicao e coloca dentro da variavel.
            let posicaoTarefa = tarefa.getAttribute('posicao');
            //pega uma funcao que vai ser executada para cada item da array
            //retorna um array filtrado onde a condicao tem que colocar em um if
            listaTarefas = listaTarefas.filter(function(valor,posicao){
                //so podem continuar os itens que sao diferentes daquela que eu tenhoa atualmente.
                return posicao != posicaoTarefa;
            })
            mostrarNaTela(listaTarefas);
            //remove do local storage
            localStorage.setItem("listaTarefas",JSON.stringify(listaTarefas));


            
            //removendo HTML - podemosusar:
            //let tarefaPai = event.target.parentNode.parentNode;
            //tarefaPai.remove();
            
            //ou:
            tarefa.remove();


            
        }
    
        tarefa.appendChild(titulo);
    
        tarefa.appendChild(buttonCheck);
    
        board.appendChild(tarefa);
    }
  
   
    
    

