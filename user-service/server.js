const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let usuarios = [];
let proximoId = 1;


app.get("/users", (req, res) => {
    res.json(usuarios);
});


app.post("/users", (req, res) => {

    const novoUsuario = {
        id: proximoId++,
        nome: req.body.nome
    };

    usuarios.push(novoUsuario);

    console.log("=================================");
    console.log("NOVO USUÁRIO");
    console.log("ID:", novoUsuario.id);
    console.log("Nome:", novoUsuario.nome);
    console.log("Horário:", new Date().toLocaleString());
    console.log("=================================");

    res.json({
        success: true,
        usuario: novoUsuario
    });
});


app.delete("/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    usuarios = usuarios.filter(u => u.id !== id);

    console.log("=================================");
    console.log("USUÁRIO REMOVIDO");
    console.log("ID:", id);
    console.log("Horário:", new Date().toLocaleString());
    console.log("=================================");

    res.json({
        success: true
    });
});


app.post("/login", (req, res) => {

    const usuario = usuarios.find(
        u => u.nome === req.body.nome
    );

    if(usuario){

        console.log("LOGIN REALIZADO:", usuario.nome);

        return res.json({
            success: true,
            usuario
        });
    }

    res.status(401).json({
        success: false,
        mensagem: "Usuário não encontrado"
    });
});


app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.listen(3001, () => {
    console.log("User Service rodando na porta 3001");
});