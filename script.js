// ==========================
// AMBIL PARAMETER URL
// ==========================
const params = new URLSearchParams(window.location.search);

// Nama untuk opening
const tamuRaw = params.get("tamu") || "Tamu-Undangan";

// Nama untuk thank you (boleh beda)
const thanksRaw = params.get("thanks") || tamuRaw;

// "-" dibaca sebagai spasi
const tamu = tamuRaw.replace(/-/g, " ");
const thanksName = thanksRaw.replace(/-/g, " ");

// ==========================
// ISI TEKS KE HALAMAN
// ==========================
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  greetingEl.innerText = `Hello, ${tamu}`;
}

const guestNameEl = document.getElementById("guestName");
if (guestNameEl) {
  guestNameEl.innerText = thanksName;
}

// ==========================
// TOMBOL BUKA UNDANGAN
// ==========================
const openBtn = document.getElementById("openBtn");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const music = document.getElementById("bgMusic");

if (openBtn) {
  openBtn.addEventListener("click", () => {
    // sembunyikan opening
    if (opening) opening.style.display = "none";

    // tampilkan undangan
    if (invitation) invitation.style.display = "block";

    // mainkan musik
    if (music) {
      music.volume = 0.8;
      music.loop = true; // 🔁 BIAR NGULANG TERUS
      music.play().catch(() => {});
    }
  });
}

// ==========================
// COUNTDOWN WIB (GMT+7)
// ==========================
const targetTime = new Date("2026-02-10T16:00:00+07:00").getTime();

setInterval(() => {
  const now = Date.now();
  const diff = targetTime - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const dEl = document.getElementById("days");
  const hEl = document.getElementById("hours");
  const mEl = document.getElementById("minutes");
  const sEl = document.getElementById("seconds");

  if (dEl) dEl.innerText = days;
  if (hEl) hEl.innerText = hours;
  if (mEl) mEl.innerText = minutes;
  if (sEl) sEl.innerText = seconds;
}, 1000);



