const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {

    console.log("INFO: Usuário realizou login");

    res.json({
        success: true,
        user: "Luiz"
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