// Nama tamu
const params = new URLSearchParams(window.location.search);
const nama = decodeURIComponent(params.get("nama") || "Tamu Undangan");
document.getElementById("greeting").innerText = `Hello, ${nama}`;

// Screen switch
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
  opening.classList.remove("active");
  invitation.classList.add("active");
  music.volume = 0.8;
  music.play().catch(() => {});
});

// COUNTDOWN (WIB GMT+7)
const targetDate = new Date("2026-02-10T12:30:00+07:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) return;

  document.getElementById("d").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("h").innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("m").innerText = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("s").innerText = Math.floor((diff / 1000) % 60);
}, 1000);
