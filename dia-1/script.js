var titulo = document.getElementById('titulo');
var mensagem = document.querySelector('#mensagem');


titulo.addEventListener("click", function() {
  mensagem.classList.toggle('red');
});