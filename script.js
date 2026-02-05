// NAME FROM URL (support %20)
const params = new URLSearchParams(window.location.search);
const nama = decodeURIComponent(params.get("nama") || "Tamu Undangan");
document.getElementById("greeting").innerText = `Hello, ${nama}`;

// OPEN BUTTON
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
  opening.classList.remove("active");
  invitation.classList.add("active");
  music.volume = 0.7;
  music.currentTime = 0;
  music.play().catch(() => {});
});

// COUNTDOWN (GMT+7 / WIB)
const targetDate = new Date("2026-02-10T12:30:00+07:00").getTime();

setInterval(() => {
  const now = Date.now();
  const diff = targetDate - now;
  if (diff <= 0) return;

  document.getElementById("days").innerText =
    Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText =
    Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText =
    Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText =
    Math.floor((diff / 1000) % 60);
}, 1000);
