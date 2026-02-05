// Nama dari URL
const params = new URLSearchParams(window.location.search);
const nama = decodeURIComponent(params.get("nama") || "Tamu Undangan");
document.getElementById("greeting").innerText = `Hello, ${nama}`;

// Switch screen
document.getElementById("openBtn").onclick = () => {
  document.getElementById("opening").classList.remove("active");
  document.getElementById("invitation").classList.add("active");

  const music = document.getElementById("bgMusic");
  music.volume = 0.7;
  music.play().catch(() => {});
};

// Countdown WIB
const target = new Date("2026-02-10T12:30:00+07:00").getTime();
setInterval(() => {
  const d = target - Date.now();
  if (d <= 0) return;

  days.innerText = Math.floor(d / 86400000);
  hours.innerText = Math.floor((d / 3600000) % 24);
  minutes.innerText = Math.floor((d / 60000) % 60);
  seconds.innerText = Math.floor((d / 1000) % 60);
}, 1000);
