const open2 = document.querySelector(".open");
const closed2 = document.querySelector(".closed");

function closedFace() {
  if (closed2.classList.contains("active")) {
    open2.classList.add("active");
    closed2.classList.remove("active");
  }
}

function openFace() {
    if (open2.classList.contains("active")) {
        closed2.classList.add("active");
        open2.classList.remove("active");
      }
}
