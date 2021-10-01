const prompt = require('prompt-sync')();

var pokedex = [{numero:1, nome: "Charmander", img:"/charmander.gif",tipo: "Fogo"},{numero:2, nome: "Charmeleon", img:"/charmeleon.gif",tipo: "Fogo"},{numero:3, nome: "Charizard", img:"/charizard.gif",tipo: "Fogo"}];


pokedex.forEach(element => {
    element.nome
    element.tipo
    element.img
    console.log(element.nome)
    console.log(element.tipo)
    console.log(element.img)
});


