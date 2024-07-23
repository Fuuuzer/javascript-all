const listItems = document.querySelector(".list");

console.log(listItems);

new Sortable(listItems, {
  animation: 150,
  chosenClass: "list__item-chosen",
});
