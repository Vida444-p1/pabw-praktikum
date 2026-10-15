// Data dan fungsi murni halaman. Manipulasi DOM berada di dom.js.
export const profil = {
  nama: "Vida Rizki Prasetyo",
  peran: "Mahasiswa Pengembangan Aplikasi Berbasis Web",
  nim: "25523013",
  kelas: "C",
  keahlian: ["HTML", "CSS", "JavaScript dasar"]
};

export const daftarProyek = [
  {
    judul: "Koleksi Game Steam",
    kategori: "web",
    tahun: 2026,
    selesai: true,
    deskripsi: "Halaman katalog koleksi game yang dikembangkan dengan HTML dan CSS."
  },
  {
    judul: "Design Token dan Tema",
    kategori: "design",
    tahun: 2026,
    selesai: true,
    deskripsi: "Penggunaan token warna, jarak, komponen, dan tema terang/gelap."
  },
  {
    judul: "Layout Responsif Mobile-First",
    kategori: "responsive",
    tahun: 2026,
    selesai: true,
    deskripsi: "Penyusunan galeri dan sidebar dengan grid responsif untuk beberapa lebar layar."
  }
];

export function buatPerkenalan({ nama, peran = "Mahasiswa" }) {
  return `${nama} - ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" | ");

const lokasi = profil.lokasi?.kota ?? "Belum dicantumkan";
let jumlahProyekSelesai = 0;
for (const proyek of daftarProyek) {
  if (proyek.selesai) jumlahProyekSelesai += 1;
}

// Pemeriksaan data P8 di Console.
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log(`Jumlah proyek selesai: ${jumlahProyekSelesai}`);
console.table(profil.keahlian.map((keahlian) => ({ keahlian })));
console.table(daftarProyek);
console.table(daftarProyek.filter((proyek) => proyek.selesai));
console.log(daftarProyek.find((proyek) => proyek.judul === "Koleksi Game Steam"));
console.log("Lokasi:", lokasi);
