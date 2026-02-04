const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart() {
  hearts.push({
    x: Math.random() * canvas.width,
    y: canvas.height,
    size: Math.random() * 20 + 10,
    speed: Math.random() * 2 + 1
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((h, i) => {
    ctx.fillText("💖", h.x, h.y);
    h.y -= h.speed;
    if (h.y < 0) hearts.splice(i, 1);
  });
}

setInterval(createHeart, 300);
setInterval(drawHearts, 30);
const text = "Rithvika… every line of this code leads back to you 💖";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

window.addEventListener("load", typeEffect);
const music = document.getElementById("bg-music");
let playing = false;

function toggleMusic() {
  if (!playing) {
    music.play();
    playing = true;
  } else {
    music.pause();
    playing = false;
  }
}

