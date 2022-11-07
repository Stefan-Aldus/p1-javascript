let cookiewall = document.getElementById("cookiewall");
let input = document.getElementById("input");
let modal = document.getElementById("modal");
let button = document.getElementById("clickme");

function clickme() {
  button.style.display = "none";
  input.style.display = "flex";
  modal.style.display = "flex";
}

function closemodal() {
  modal.style.display = "none";
  button.style.display = "block";
  input.style.display = "none";
}

function enterage() {
  let age = document.getElementById("age");

  if (age.value >= 18) {
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  } else {
    document.body.style.backgroundColor = "red";
    cookiewall.classList.remove("cookiewall");
    input.classList.add("cookiewall");
    modal.style.display = "none";
    input.style.display = "none";
  }
}
