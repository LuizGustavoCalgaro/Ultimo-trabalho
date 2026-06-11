const express = require("express");

const app = express();

console.log("Arquivo carregado!");

app.get("/", (req, res) => {

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log("ALGUÉM ACESSOU O SERVIDOR!");
    console.log(new Date().toLocaleString());
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

    res.send("Funcionando!");
});

app.listen(3001, () => {
    console.log("Servidor iniciado na porta 3001");
});