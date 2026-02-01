
const dvd = document.getElementById("dvd");

let x = 100;
let y = 100;
let dx = 2.5;
let dy = 2.5;

function bounce() {
  const maxX = window.innerWidth - dvd.offsetWidth;
  const maxY = window.innerHeight - dvd.offsetHeight;

  x += dx;
  y += dy;

  if (x <= 0 || x >= maxX) dx *= -1;
  if (y <= 0 || y >= maxY) dy *= -1;

  dvd.style.left = x + "px";
  dvd.style.top = y + "px";

  requestAnimationFrame(bounce);
}

bounce();

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");


yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});


function moveNoButton() {
  const offsetX = Math.random() * 180 - 90;
  const offsetY = Math.random() * 60 - 30;

  noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}


noBtn.addEventListener("mouseenter", moveNoButton);


noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});
