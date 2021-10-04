const closeMensagem = document.querySelector("#close")
const mensagem = document.querySelector("#mensagem")

closeMensagem.addEventListener("click", function (){
    mensagem.style.display = "none"
});

setTimeout(() => {
    mensagem.style.display = "none"
}, 5000);

contador = 1
function trocarPoke(){
  if(contador == pokedex.length){
      contador=0;
  }
  document.getElementById("img1").src=item.nome[contador];
  document.getElementById("poke_tipo").innerHTML= item.tipo[contador];
  contador++;
}