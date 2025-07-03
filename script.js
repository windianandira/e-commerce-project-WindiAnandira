let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

function tambahKeKeranjang() {
  const produk = event.target.closest(".produk");
  const nama = produk.querySelector("h3").textContent;
  const harga = produk.querySelector(".harga").textContent;

  const index = keranjang.findIndex((item) => item.nama === nama);
  if (index !== -1) {
    keranjang[index].jumlah++;
  } else {
    keranjang.push({ nama, harga, jumlah: 1 });
  }

  localStorage.setItem("keranjang", JSON.stringify(keranjang)); // simpan
  updateJumlahTotal();
  tampilkanNotifikasi();
}

function updateJumlahTotal() {
  const jumlah = keranjang.reduce((total, item) => total + item.jumlah, 0);
  document.getElementById("cart-count").textContent = jumlah;
}

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

function tampilkanNotifikasi() {
  const notif = document.getElementById("popup-notif");
  notif.classList.add("show");
  setTimeout(() => notif.classList.remove("show"), 3000);
}

// Jika halaman dimuat, langsung perbarui tampilan keranjang
updateJumlahTotal();
