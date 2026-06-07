const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tarefas = [];

app.get("/tasks", (req,res)=>{
    res.json(tarefas);
});

app.post("/tasks",(req,res)=>{

    const traceId = Date.now();

    console.log(`[TRACE ${traceId}] Nova tarefa criada`);

    tarefas.push(req.body);

    res.json({
        success:true
    });
});

app.get("/health",(req,res)=>{
    res.json({
        status:"UP"
    });
});

app.listen(3002,()=>{
    console.log("Task Service rodando na porta 3002");
});