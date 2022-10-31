const rangeNumberForm = document.querySelector("#rangeNumberForm");
const rangeNumberInput = document.querySelector(".rangeNumberInput");
const winNumberForm = document.querySelector("#winNumberForm");
const winNumberInput = document.querySelector(".winNumberInput");
const chose = document.querySelector(".chose");
const result = document.querySelector(".result");

function handlerRangeInput() {
  const rangeNum = rangeNumberInput.value;
  winNumberInput.setAttribute("max", rangeNum);
}

function handlerSubmit(event) {
  event.preventDefault();
  const rangeNum = rangeNumberInput.value;
  const winNum = winNumberInput.value;
  const randomNum = Math.ceil(Math.random() * rangeNum);
  finalResult(winNum, randomNum);
  winLost(winNum, randomNum);
}

function finalResult(winNum, randomNum) {
  if (parseInt(winNum) > randomNum) {
    chose.innerText = `You chose: ${winNum}, the machine chose: ${randomNum}`;
  } else if (parseInt(winNum) < randomNum) {
    chose.innerText = `You chose: ${winNum}, the machine chose: ${randomNum}`;
  } else if (parseInt(winNum) === randomNum) {
    chose.innerText = `You chose: ${winNum}, the machine chose: ${randomNum}`;
  }
}
function winLost(winNum, randomNum) {
  if (parseInt(winNum) > randomNum) {
    result.innerText = "You lost!";
  } else if (parseInt(winNum) < randomNum) {
    result.innerText = "You lost!";
  } else if (parseInt(winNum) === randomNum) {
    result.innerText = "You Won!";
  }
}

rangeNumberForm.addEventListener("input", handlerRangeInput);
winNumberForm.addEventListener("submit", handlerSubmit);
