const playerAndChances = [
  {name: 'Ovos de Chocadeira', chance: '12/1'},
  {name: 'Agua de placenta', chance: '50/1'},
  {name: 'Resto de aborto', chance: '7/1'},
  {name: 'Bizonho da Vila', chance: '15/1'},
  {name: 'Ferro Enferrujado', chance: '17/1'},
  {name: 'McBunda Feliz', chance: '2/1'},
  {name: 'Queridinho do Varal', chance:'5/1'},
  {name: 'Jonas', chance: '9/1'},
  ];
const yourMoney = document.querySelector('.title');
const submit = document.querySelector('button[type=submit]');
const yourChoose = document.querySelector('.main__header p');
const playersOptions = document.querySelectorAll('.player')
const players = document.querySelector('.players');
const betButtons = document.querySelectorAll('.bet__buttons');
const betsTitle = document.querySelector('.bets__title');
const bg = document.querySelector('.bg');
const html = document.documentElement;
let balance = 0;
const body = document.querySelector('body');

function randomizeArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomItens(array, quantity) {
  const randomArr = randomizeArray(array.slice());
  return randomArr.slice(0, quantity);
}

const aleatory = randomItens(playerAndChances, 5);

aleatory.forEach((item) => {
  const li = document.createElement('li');
  li.innerHTML = `<li class="player">${item.name}<span>${item.chance}</span></li>`;
  players.appendChild(li);
  li.addEventListener('click', (e) => {
      const allLi = document.querySelectorAll('li')
      allLi.forEach((player) => {
        player.classList.remove('active')
        console.log(player)
      })
       yourChoose.innerText = item.name;
       e.target.classList.toggle('active');
       outsideClick(this, (e) => {
        allLi.forEach((player) => {
          player.classList.remove('active')
        })
       })
     })
})

function outsideClick(e, callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);
  function handleOutsideClick(event) {
    if(event.target === body) {
      callback()
    }
  }
}

betButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const betValue = parseInt(button.getAttribute('data-value'));
    balance += betValue;
    betsTitle.textContent =  `$${balance}`;
    if (betValue === 0) {
      balance = 0;
      betsTitle.textContent = `$${balance}`
    }
  })
})