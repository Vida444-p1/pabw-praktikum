// Data halaman disimpan sebagai nilai JavaScript, bukan teks profil di HTML.
const profil = {
  nama: "Vida Rizki Prasetyo",
  peran: "Mahasiswa Pengembangan Aplikasi Berbasis Web",
  nim: "25523013",
  kelas: "C",
  keahlian: ["HTML", "CSS", "JavaScript dasar"],
  // Lokasi belum dicantumkan; akses aman dan nilai bawaan dipakai di bawah.
};

const daftarProyek = [
  {
    judul: "Koleksi Game Steam",
    tahun: 2026,
    selesai: true,
    deskripsi: "Halaman katalog koleksi game yang dikembangkan dengan HTML dan CSS."
  },
  {
    judul: "Design Token dan Tema",
    tahun: 2026,
    selesai: true,
    deskripsi: "Penggunaan token warna, jarak, komponen, dan tema terang/gelap."
  },
  {
    judul: "Layout Responsif Mobile-First",
    tahun: 2026,
    selesai: true,
    deskripsi: "Penyusunan galeri dan sidebar dengan grid responsif untuk beberapa lebar layar."
  }
];

// Fungsi murni: hasil hanya bergantung pada argumen dan tidak mengubah keadaan luar.
function buatPerkenalan({ nama, peran = "Mahasiswa" }) {
  return `${nama} - ${peran}`;
}

// Fungsi murni: mengubah daftar keahlian menjadi satu baris teks.
const formatKeahlian = (daftar) => daftar.join(" | ");

const lokasi = profil.lokasi?.kota ?? "Belum dicantumkan";
const proyekSelesai = daftarProyek.filter((proyek) => proyek.selesai);
let jumlahProyekTerpilih = 0;
for (const proyek of proyekSelesai) {
  jumlahProyekTerpilih += 1;
}
const proyekKoleksi = daftarProyek.find((proyek) => proyek.judul === "Koleksi Game Steam");
const judulProyek = daftarProyek.map((proyek) => proyek.judul);
const daftarUrut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));

// Menempatkan data ke struktur halaman.
document.title = `Profil ${profil.nama}`;
document.querySelector("#nama-profil").textContent = profil.nama;
document.querySelector("#peran-profil").textContent = profil.peran;
document.querySelector("#nim-profil").textContent = profil.nim;
document.querySelector("#kelas-profil").textContent = profil.kelas;
document.querySelector("#lokasi-profil").textContent = lokasi;
document.querySelector("#kalimat-perkenalan").textContent = buatPerkenalan(profil);
document.querySelector("#ringkasan-keahlian").textContent = formatKeahlian(profil.keahlian);
document.querySelector("#jumlah-proyek").textContent = `${jumlahProyekTerpilih} proyek selesai`;

document.querySelector("#daftar-keahlian").replaceChildren(
  ...profil.keahlian.map((keahlian) => {
    const item = document.createElement("li");
    item.textContent = keahlian;
    return item;
  })
);

document.querySelector("#daftar-proyek").replaceChildren(
  ...daftarProyek.map((proyek) => {
    const kartu = document.createElement("article");
    kartu.className = "kartu";

    const isi = document.createElement("div");
    isi.className = "kartu-body";

    const judul = document.createElement("h3");
    judul.textContent = proyek.judul;
    const tahun = document.createElement("p");
    tahun.textContent = `Tahun: ${proyek.tahun}`;
    const status = document.createElement("p");
    status.textContent = proyek.selesai ? "Status: selesai" : "Status: berjalan";
    const deskripsi = document.createElement("p");
    deskripsi.textContent = proyek.deskripsi;

    isi.append(judul, tahun, status, deskripsi);
    kartu.append(isi);
    return kartu;
  })
);

document.querySelector("#proyek-pilihan").textContent = proyekKoleksi
  ? `${proyekKoleksi.judul} (${proyekKoleksi.tahun})`
  : "Proyek belum ditemukan.";

// let dipakai untuk penghitung yang bertambah selama perulangan.
console.log(`Jumlah proyek selesai: ${jumlahProyekTerpilih}`);

// Pemeriksaan data untuk lembar D.
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.table(profil.keahlian.map((keahlian) => ({ keahlian })));
console.table(daftarProyek);
console.table(daftarProyek.filter((proyek) => proyek.selesai));
console.log(daftarProyek.find((proyek) => proyek.judul === "Koleksi Game Steam"));
console.table(daftarUrut);
console.log("Data asli tetap berurutan:", judulProyek);
