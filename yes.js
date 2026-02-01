const dvd = document.getElementById("dvd-fast");

let x = 150;
let y = 150;
let dx = 6; 
let dy = 6;

function bounceFast() {
  const maxX = window.innerWidth - dvd.offsetWidth;
  const maxY = window.innerHeight - dvd.offsetHeight;

  x += dx;
  y += dy;

  if (x <= 0 || x >= maxX) dx *= -1;
  if (y <= 0 || y >= maxY) dy *= -1;

  dvd.style.left = x + "px";
  dvd.style.top = y + "px";

  requestAnimationFrame(bounceFast);
}

bounceFast();
