let number = 0;
let bonus = document.getElementById("paragraphfield");

function add1() {
  if (number < 10) {
    number++;
    bonus.innerText = "Het getal is: " + number;
  } else {
    while (number != 0) {
      number--;
    }
    bonus.innerText = "Het getal is: " + number;
  }
}
