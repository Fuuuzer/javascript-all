const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const num = document.querySelector('.numbers');

const kevin = document.querySelector('.kevin')

let i = 0;
let timer;

function startStopWatch() {
  timer = setInterval(() => {
    i++;
    num.innerText = i; 
    if (i === 69) {
      stopStopWatch()
      kevin.classList.add('show')
      setTimeout(() => {
        kevin.classList.remove('show')
        startStopWatch()
      }, 900)
    }
  }, 100)

  start.setAttribute('disabled', '');
}

function stopStopWatch() {
  clearInterval(timer)
  start.removeAttribute('disabled');
  kevin.classList.remove('show')

}

function resetStopWatch() {
  num.innerText = 0;
  i = 0;

}

start.addEventListener('click', startStopWatch);
stop.addEventListener('dblclick', resetStopWatch);
stop.addEventListener('click', stopStopWatch);