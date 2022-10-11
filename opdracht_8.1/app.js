let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let answer;
let header = document.getElementById("header")

function multiplication() {
   answer = +num1.value * +num2.value;
   header.innerText = num1.value + " * " + num2.value + " = " + answer;
}

function division() {
    answer = +num1.value / +num2.value;
    header.innerText = num1.value + " / " + num2.value + " = " + answer;
 }

 function subtraction() {
    answer = +num1.value - +num2.value;
    header.innerText = num1.value + " - " + num2.value + " = " + answer;
 }

 function addition() {
    answer = +num1.value + +num2.value;
    header.innerText = num1.value + " + " + num2.value + " = " + answer;
 }