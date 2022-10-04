let budget = prompt("Voer alstublieft uw budget in");
let product = 60;
let text = document.getElementById("textchange");

if (budget >= product) {
  text.innerText = "U heeft genoeg geld!";
  text.style.color = "green";
} else {
  text.innerText = "Helaas, Te weinig geld!";
  text.style.color = "red";
}
