const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const btn = document.getElementById('btn');

function addTask() {
  if(inputBox.value === '') {
    alert('You need write something asshole!')
  } else {
    let li = document.createElement('li');
    let span = document.createElement('span')
    li.innerHTML = inputBox.value;
    listContainer.append(li)
    span.innerHTML = '\u00d7';
    li.appendChild(span)
  }
  inputBox.value = '';
  saveData()
}

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  } else if(e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData()
  }
}, false);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML)
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask()
btn.addEventListener('click', addTask)