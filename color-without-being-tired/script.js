const colors = ['#222831', '#31363F', '#76ABAE', '#EEEEEE', '#FFF9D0', '#CAF4FF', '#A0DEFF', '#FDDE55', '#FF76CE'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber()
  const randomColorBtn = getRandomNumber()
  btn.style.background = colors[randomColorBtn]
  color.textContent = colors[randomNumber]
  document.body.style.background = colors[randomNumber]

})



function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}