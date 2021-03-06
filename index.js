// Importa o módulo express para esse arquivo
const express = require("express");
const { url } = require("inspector");
// Instancia uma referência do express no projeto
const app = express();
const port = process.env.PORT || 3000; // Const para armanezar a porta do servidor
app.set("view engine", "ejs");
const path = require("path");
app.use(express.urlencoded());

const pokedex = 
[
  {nome: "Charmander",
  tipo: "Fogo",
  img: "https://sites.google.com/site/desenho2013/_/rsrc/1308684499489/charmander/charmander.gif",
  descricao: "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta da cauda.",
  altura: 0.6,
  peso: 8.5,
  categoria: "Lagarto",
  habilidade: "Chama"}
]
const pokemon = {}
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


app.use(express.static(path.join(__dirname, "public")));

// Liga o servidor na porta 3000
//app.listen(3000);


app.get("/", (req, res) => {

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
  const pokemon = {
    nome: Poke_nome,
    tipo: tipo,
    img: imagem,
    descricao: descricao,
    altura: altura,
    peso: peso,
    categoria: categoria,
    habilidade: habilidade
  };
  pokedex.push(pokemon);
  mensagem = `O Pokemon ${Poke_nome} foi cadastrado com sucesso!`
  res.redirect("/");
})

app.get("/detalhes/:ind", (req, res) => {
  const indice = req.params.ind;
  const pokemons = pokedex[indice];
  res.render("detalhes", { pokemon: pokemons });
});
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
