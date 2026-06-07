async function criarTarefa() {

    const texto =
    document.getElementById("taskInput").value;

    await fetch(
        "http://localhost:3002/tasks",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                descricao:texto
            })
        }
    );

    carregarTarefas();
}

async function carregarTarefas(){

    const resposta =
    await fetch(
        "http://localhost:3002/tasks"
    );

    const tarefas =
    await resposta.json();

    const lista =
    document.getElementById("lista");

    lista.innerHTML = "";

    tarefas.forEach(tarefa => {

        lista.innerHTML +=
        `<li>${tarefa.descricao}</li>`;

    });
}

carregarTarefas();