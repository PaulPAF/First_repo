let count = 0;
let countEl = document.getElementById("count-el");
let saved = document.getElementById("save=btn");

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  count = 0;
  saved.innerText = count;
}
