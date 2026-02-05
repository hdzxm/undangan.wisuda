// NAME FROM URL
const params = new URLSearchParams(window.location.search);
const nama = decodeURIComponent(params.get("nama") || "Tamu Undangan");
document.getElementById("greeting").innerText = `Hello, ${nama}`;

// SCREEN SWITCH
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const music = document.getElementById("bgMusic");

music.volume = 0.8;

openBtn.addEventListener("click", () => {
  opening.classList.remove("active");
  invitation.classList.add("active");
  music.currentTime = 0;
  music.play().catch(() => {});
});

// COUNTDOWN (GMT+7 / WIB)
const targetDate = new Date("2026-02-10T12:30:00+07:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("cd-days").innerText = days;
  document.getElementById("cd-hours").innerText = hours;
  document.getElementById("cd-minutes").innerText = minutes;
  document.getElementById("cd-seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
