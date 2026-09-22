// let sayur = ["bayam", "kangkung", "kelor", "jahe"];

// let motor = {
//   merek: "Honda",
//   cc: "150cc",
//   warna: "merah",
// };

// console.log(sayur[2]);
// console.log(motor.warna);

// let siswa = [
//   { nama: "fahmi", umur: 17, agama: "islam" },
//   {
//     nama: "anugrah",
//     umur: 18,
//     agama: "islam",
//   },

//   { nama: "hamdani", umur: 17, agama: "katholik" },
// ];

// console.log(siswa[2]);

// let nama;

// console.log(nama);

// let namaTengah = null;

// console.log(namaTengah);

// let a = 20;
// let b = 6;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// const buah = ["jeruk", "pepaya"];
// buah.push("anggur");

// console.log(buah);

// let umur = 17;
// if (umur >= 18) {
//   console.log("Sudah Dewasa");
// } else {
//   console.log("Belum Dewasa");
// }

// let nilai = 70;
// if (nilai >= 90) {
//   console.log("A");
// } else if (nilai >= 80) {
//   console.log("B");
// } else if (nilai >= 70) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// let umur = 16;
// let punyaKTP = true;

// if (umur >= 17 && punyaKTP === true) {
//   console.log("Boleh masuk");
// } else {
//   console.log("Tidak Boleh Masuk");
// }

// let hari = "Senin";

// if (hari === "Sabtu" || hari === "Minggu") {
//   console.log("Weekend");
// } else {
//   console.log("Kerja Bro!");
// }

// let hari = "Jumat";

// switch (hari) {
//   case "Senin":
//     console.log("Hari pertama");
//     break;

//   case "Selasa":
//     console.log("Hari kedua");
//     break;

//   case "Rabu":
//     console.log("Hari ketiga");
//     break;

//   default:
//     console.log("Hari tidak ditemukan");
// }

// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

// function sapa(nama) {
//   console.log("halo" + nama);
// }

// sapa(" Hamdani");
// sapa(" Asrul");
// sapa(" Rahim");

// function tambah(a, b) {
//   return a + b;
// }

// let hasil = tambah(10, 15);
// console.log(hasil);

// const tambah = (a, b) => a + b;
// let hasil = tambah(15, 15);
// console.log(hasil);

// let siswa = {
//   nama: "Putra",

//   sapa: function () {
//     console.log("Halo");
//   },
// };

// siswa.sapa();

// function sapa(nama) {
//   console.log("Halo, " + nama);
// }

// function proses(callback) {
//   callback("Fitrah");
// }

// proses(sapa);

// function ambilNama() {
//   return Promise.resolve("Fitrah");
// }

// async function tampilkanNama() {
//   const nama = await ambilNama();

//   console.log(nama);
// }

// tampilkanNama();

// async function ambilUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");

//   const users = await response.json();

//   const email = users.map((users) => users.email);

//   console.log(email);
// }

// ambilUsers();

// async function ambilData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log("Terjadi error:", error);
//   }
// }

// ambilData();

// const input = document.querySelector("#input");
// const tombol = document.querySelector("#tambah");
// const list = document.querySelector("#list");

// tombol.addEventListener("click", () => {
//   const teks = input.value;

//   const li = document.createElement("li");

//   li.textContent = teks;

//   list.append(li);

//   input.value = "";
// });

const angka = [1, 2, 3, 4, 5];

const hasil = [];

for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 2 === 0) {
    hasil.push(angka[i]);
  }
}

console.log(hasil);
