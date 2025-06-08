let jumlahKeranjang = 0;

function tambahKeKeranjang() {
  jumlahKeranjang++;
  document.getElementById("cart-count").textContent = jumlahKeranjang;
  tampilkanNotifikasi(); // <== pastikan ini dipanggil
}

function tampilkanNotifikasi() {
  const notif = document.getElementById("popup-notif");
  notif.classList.add("show");

  setTimeout(() => {
    notif.classList.remove("show");
  }, 3000);
}
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}