// NAME FROM URL
const params = new URLSearchParams(window.location.search);
const nama = params.get("nama") || "Tamu Undangan";
document.getElementById("greeting").innerText = `Hello, ${nama}`;

// ELEMENTS
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const music = document.getElementById("bgMusic");

// OPEN BUTTON
openBtn.addEventListener("click", () => {
  opening.classList.remove("active");
  invitation.classList.add("active");
  music.currentTime = 0;
  music.volume = 0.7;
  music.play().catch(() => {});
});

// COUNTDOWN (GMT+7)
const targetDate = new Date("2026-02-10T12:30:00+07:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) return;

  document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}, 1000);
