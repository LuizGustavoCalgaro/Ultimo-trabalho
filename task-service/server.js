const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tarefas = [];
let proximoId = 1;


app.get("/tasks", (req, res) => {
    res.json(tarefas);
});


app.post("/tasks", (req, res) => {

    const novaTarefa = {
        id: proximoId++,
        titulo: req.body.titulo
    };

    tarefas.push(novaTarefa);

    console.log("=================================");
    console.log("NOVA TAREFA");
    console.log("ID:", novaTarefa.id);
    console.log("Título:", novaTarefa.titulo);
    console.log("Horário:", new Date().toLocaleString());
    console.log("=================================");

    res.json({
        success: true,
        tarefa: novaTarefa
    });
});


app.delete("/tasks/:id", (req, res) => {

    const id = parseInt(req.params.id);

    tarefas = tarefas.filter(tarefa => tarefa.id !== id);

    console.log("=================================");
    console.log("TAREFA REMOVIDA");
    console.log("ID:", id);
    console.log("Horário:", new Date().toLocaleString());
    console.log("=================================");

    res.json({
        success: true
    });
});


app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.listen(3002, () => {
    console.log("Task Service rodando na porta 3002");
});