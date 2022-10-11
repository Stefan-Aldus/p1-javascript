let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let answer;
let header = document.getElementById("header");

function multiplication() {
  if (num1.value == 0 || num2.value == 0) {
    header.innerText = "Helaas het getal is te laag!";
  } else {
    answer = +num1.value * +num2.value;
    header.innerText = num1.value + " * " + num2.value + " = " + answer;
  }
}

function division() {
  if (num1.value == 0 || num2.value == 0) {
    header.innerText = "Helaas het getal is te laag!";
  } else {
    answer = +num1.value / +num2.value;
    header.innerText = num1.value + " / " + num2.value + " = " + answer;
  }
}

function subtraction() {
  if (num1.value == 0 || num2.value == 0) {
    header.innerText = "Helaas het getal is te laag!";
  } else {
    answer = +num1.value - +num2.value;
    header.innerText = num1.value + " - " + num2.value + " = " + answer;
  }
}

function addition() {
  if (num1.value == 0 || num2.value == 0) {
    header.innerText = "Helaas het getal is te laag!";
  } else {
    answer = +num1.value + +num2.value;
    header.innerText = num1.value + " + " + num2.value + " = " + answer;
  }
}
