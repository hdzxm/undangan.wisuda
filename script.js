// Nama tamu
const params = new URLSearchParams(window.location.search);
const nama = decodeURIComponent(params.get("nama") || "Tamu Undangan");
document.getElementById("greeting").innerText = `Hello, ${nama}`;
// Isi nama di bagian Thank You
const guestName = document.getElementById("guestName");
if (guestName) {
  guestName.innerText = nama;
}


// Open invitation
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const invitation = document.querySelector(".invitation");
const music = document.getElementById("bgMusic");

openBtn.onclick = () => {
  opening.style.display = "none";
  invitation.style.display = "block";
  music.volume = 0.8;
  music.play().catch(()=>{});
};

// COUNTDOWN WIB (GMT+7 FIX)
const target = new Date("2026-02-10T12:30:00+07:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

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

