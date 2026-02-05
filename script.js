const params = new URLSearchParams(window.location.search);
const rawName = params.get("nama") || "Tamu Undangan";
const nama = decodeURIComponent(rawName);

document.getElementById("greeting").innerText = `Hello, ${nama}`;

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
