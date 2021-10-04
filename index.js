// Importa o módulo express para esse arquivo
const express = require("express");
const { url } = require("inspector");
// Instancia uma referência do express no projeto
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
app.set("view engine", "ejs");
const path = require("path");
app.use(express.urlencoded());

const pokedex = [{nome: "Charmander",
  tipo: "Fogo",
  img: "../img/charmander.gif",
  descricao: "fogo",
  altura: 1.5,
  peso: 10.5,
  categoria: "lutador",
  habilidade: "Fire Blast"}];
let mensagem = ""
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

  setTimeout(() =>{
    mensagem = "";
  },1000);

    res.render("index", {pokedex, mensagem});
});

app.get("/cadastro", (req, res) => {
    res.render("cadastro")
})

app.post("/resultado", (req, res) => {
  const {Poke_nome, tipo, imagem, descricao, altura, peso, categoria, habilidade} = req.body;
  /*const site = {nome: Poke_nome, tipo: tipo, imagem: imagem, descricao: descricao, altura: altura, peso: peso, categoria: categoria, habilidade: habilidade};*/
  const pokemon = {
    nome: Poke_nome,
    tipo: tipo,
    img: "/img/"+imagem,
    descricao: descricao,
    altura: altura,
    peso: peso,
    categoria: categoria,
    habilidade: habilidade
  };
  pokedex.push(pokemon);
  mensagem = `O Pokemon ${Poke_nome} foi cadastrado com sucesso!`
  res.redirect("/index");
  /*res.render("cont_cad", {nome: pokemon.nome, tipo: pokemon.tipo, imagem: pokemon.img, descricao: pokemon.descricao, altura: pokemon.altura, peso: pokemon.peso, categoria: pokemon.categoria, habilidade: pokemon.habilidade})*/ 
})



app.get("/index", (req,res) => {
  res.send("cadastro")
})

