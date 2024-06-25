const btn = document.querySelector('.btn');
const titles = document.querySelectorAll('[data-anima]');
console.log(titles)





function handleClick() {
  titles.forEach((title) => {
    if(title.dataset.anima === 'right' && title.dataset.cor === 'red') {
      title.dataset.anima = 'left';
      title.dataset.cor = 'blue';
    } else {
      title.dataset.anima = 'right';
      title.dataset.cor = 'red';
    }
  })
}






btn.addEventListener('click', handleClick)