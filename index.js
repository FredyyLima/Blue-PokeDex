// Importa o módulo express para esse arquivo
const express = require("express");
const { url } = require("inspector");
// Instancia uma referência do express no projeto
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
app.set("view engine", "ejs");
const path = require("path");
app.use(express.urlencoded());

// Rota principal que recebe uma função de callback que recebe dois parametros: 
// req de requisição
// res de resposta
//app.get("/", function (req, res) {
  //res.send("Hello World"); 
//});

// Substituição de function por arrow function
//app.get("/teste-em-pt", (req, res) => {
  //res.send("Olá Mundo");
//});

//app.get("/index", (req, res) => {
    //res.render("index"); // Nome do arquivo, o EJS já busca dentro da pasta views.
  //});

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}/index`));

app.use(express.static(path.join(__dirname, "public")));

// Liga o servidor na porta 3000
//app.listen(3000);


app.get("/index", (req, res) => {
    var pokedex = [{numero:1, nome: "Charmander", img: "./img/charmander.gif",tipo: "Fogo"},{numero:2, nome: "Charmeleon", img:"./img/charmeleon.gif",tipo: "Fogo"},{numero:3, nome: "Charizard", img:"./img/charizard.gif",tipo: "Fogo"}];
    res.render("index", {lista: pokedex});
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro")
})

app.post("/resultado", (req, res) => {
  const {Poke_nome1, email, senha, telefone} = req.body;
  const site = {nome: Poke_nome1, email: email, senha: senha, telefone: telefone};
  res.render("cont_cad", {titulo: site.nome, email: site.email, telefone: site.telefone, senha: site.senha})
})

app.get("/index", (req,res) => {
  res.send("cadastro")
})