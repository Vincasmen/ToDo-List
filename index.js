const inputText = document.getElementById("input-field");
const todoText = document.querySelector("todo-output");

let outputField;

const init = function () {
  outputField = "";
};

document
  .querySelector("form.input-div")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    console.log(inputText.value);
    inputText.value = "";
  });

function newList() {}
