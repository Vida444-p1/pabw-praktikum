import { fetchNews } from "./api.js";

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

// Presentation state for the fetched JSON data.
const apiLoading = document.querySelector("#api-loading");
const apiSuccess = document.querySelector("#api-success");
const apiError = document.querySelector("#api-error");
const apiEmpty = document.querySelector("#api-empty");
const apiList = document.querySelector("#api-list");

function renderNews(items) {
  apiList.textContent = "";
  if (items.length === 0) {
    apiEmpty.hidden = false;
    return;
  }

  apiEmpty.hidden = true;
  items.forEach((item) => {
    const card = document.createElement("article");
    card.className = "kartu";
    const body = document.createElement("div");
    body.className = "kartu-body";
    const heading = document.createElement("h3");
    heading.textContent = item.title ?? "Untitled item";
    const category = document.createElement("p");
    category.textContent = item.category ?? "General";
    const summary = document.createElement("p");
    summary.textContent = item.summary ?? "No description available.";
    const author = document.createElement("p");
    author.textContent = "Source: " + (item.author ?? "Unknown");
    body.append(heading, category, summary, author);
    card.append(body);
    apiList.append(card);
  });
}

async function loadNews() {
  apiLoading.hidden = false;
  apiLoading.textContent = "Memuat data...";
  apiSuccess.hidden = true;
  apiError.hidden = true;
  apiEmpty.hidden = true;
  apiList.textContent = "";

  try {
    const data = await fetchNews();
    // Demonstrate value -> JSON text -> JavaScript value in the right direction.
    const jsonText = JSON.stringify(data);
    const parsedData = JSON.parse(jsonText);
    renderNews(parsedData);
    apiLoading.hidden = true;
    if (parsedData.length > 0) {
      apiSuccess.textContent = parsedData.length + " items loaded successfully.";
      apiSuccess.hidden = false;
    }
  } catch (error) {
    apiList.textContent = "";
    apiLoading.hidden = true;
    apiEmpty.hidden = true;
    apiError.textContent = error instanceof Error ? error.message : "Data could not be loaded.";
    apiError.hidden = false;
  }
}

loadNews();