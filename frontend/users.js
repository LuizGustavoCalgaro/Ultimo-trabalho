async function carregarUsuarios() {

    const resposta =
        await fetch("http://localhost:3001/users");

    const usuarios =
        await resposta.json();

    const lista =
        document.getElementById("listaUsuarios");

    lista.innerHTML = "";

    usuarios.forEach(usuario => {

        lista.innerHTML += `
            <li>
                ${usuario.nome}
                <button onclick="excluirUsuario(${usuario.id})">
                    Excluir
                </button>
            </li>
        `;
    });
}

async function criarUsuario() {

    const nome =
        document.getElementById("nome").value;

    await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            nome
        })
    });

    carregarUsuarios();
}

async function excluirUsuario(id){

    await fetch(
        `http://localhost:3001/users/${id}`,
        {
            method:"DELETE"
        }
    );

    carregarUsuarios();
}

carregarUsuarios();