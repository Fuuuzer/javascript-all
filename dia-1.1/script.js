let titulo = document.querySelector('#titulo');
let mensagem = document.querySelector('#mensagem');

titulo.addEventListener('click', ()=>{
  mensagem.classList.toggle('reveal');
})


//Criando uma função construtora

function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda = new Carro('Honda', 6000);
const fiat = new Carro('Fiat', 5798);
