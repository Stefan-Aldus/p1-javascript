let button = document.getElementById("button");
console.log(button);

let nbutton = document.getElementById("nbutton");
let number = document.getElementById("number");

let count = 0;
console.log(count);

function counter() {
  count += 1;
  number.innerText = count + " keer op geklikt";
  number.style.backgroundColor = "blue";
  number.style.color = "white";
}

function ncounter() {
  count -= 1;
  number.innerText = count + " keer op geklikt";
  number.style.backgroundColor = "red";
  number.style.color = "white";
}
