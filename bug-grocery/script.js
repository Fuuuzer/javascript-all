
// ***** SELECT ITEMS *****
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery__form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery__container');
const list = document.querySelector('.grocery__list');
const clearBtn = document.querySelector('.clear-btn');


// Edit option
let editElement;
let editFlag = false;
let editID = "";

// ***** EVENT LISTENERS*****
form.addEventListener('submit', addItem)

// Functions
function addItem(e) {
  e.preventDefault();
  console.log(grocery.value)
}