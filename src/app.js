const express = require("express"); //Inicializa meu express para conseguir
//utilizar ele e facilitar o codigo
const bodyParser = require("body-parser"); //Inicializando um metodo que está
//disponivel dentro do npm ele é responsável por formatar a saida para o formato
//json

const app = express();
const port = 8888;

//Carregar todas as rotas
const tarefaRoute = require("./routes/tarefaRoute");
const categoriaRoute = require("./routes/categoriaRoute");
const userRoute = require("./routes/userRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", port);
app.use("/tarefa", tarefaRoute);
app.use("/categoria", categoriaRoute);
app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

module.exports = app;
