async function carregarTarefas() {

    const resposta = await fetch("http://localhost:3002/tasks");

    const tarefas = await resposta.json();

    const lista = document.getElementById("lista");

    lista.innerHTML = "";

    tarefas.forEach(tarefa => {

        lista.innerHTML += `
            <li>
                ${tarefa.titulo}
                <button onclick="excluirTarefa(${tarefa.id})">
                    Excluir
                </button>
            </li>
        `;
    });
}

async function criarTarefa() {

    const titulo = document.getElementById("titulo").value;

    if(titulo.trim() === ""){
        alert("Digite uma tarefa!");
        return;
    }

    await fetch("http://localhost:3002/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo
        })
    });

    document.getElementById("titulo").value = "";

    carregarTarefas();
}

async function excluirTarefa(id) {

    await fetch(`http://localhost:3002/tasks/${id}`, {
        method: "DELETE"
    });

    carregarTarefas();
}

carregarTarefas();