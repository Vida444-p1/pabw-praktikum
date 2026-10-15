import { profil, daftarProyek, buatPerkenalan, formatKeahlian } from "./app.js";

function ambilElemen(selector) {
  const elemen = document.querySelector(selector);
  if (!elemen) {
    throw new Error(`Elemen ${selector} tidak ditemukan. Periksa id di profil.html.`);
  }
  return elemen;
}

const namaProfil = ambilElemen("#nama-profil");
const peranProfil = ambilElemen("#peran-profil");
const nimProfil = ambilElemen("#nim-profil");
const kelasProfil = ambilElemen("#kelas-profil");
const kalimatPerkenalan = ambilElemen("#kalimat-perkenalan");
const ringkasanKeahlian = ambilElemen("#ringkasan-keahlian");
const daftarKeahlian = ambilElemen("#daftar-keahlian");
const jumlahProyek = ambilElemen("#jumlah-proyek");
const daftarProyekEl = ambilElemen("#daftar-proyek");
const emptyProjects = ambilElemen("#empty-projects");
const filterRow = ambilElemen("#filter-proyek");
const projectForm = ambilElemen("#project-form");
const submitProject = ambilElemen("#submit-project");
const formSuccess = ambilElemen("#form-success");

const lokasi = profil.lokasi?.kota ?? "Belum dicantumkan";
ambilElemen("#lokasi-profil").textContent = lokasi;
document.title = `Profil ${profil.nama}`;
namaProfil.textContent = profil.nama;
peranProfil.textContent = profil.peran;
nimProfil.textContent = profil.nim;
kelasProfil.textContent = profil.kelas;
kalimatPerkenalan.textContent = buatPerkenalan(profil);
ringkasanKeahlian.textContent = formatKeahlian(profil.keahlian);
daftarKeahlian.replaceChildren(
  ...profil.keahlian.map((keahlian) => {
    const item = document.createElement("li");
    item.textContent = keahlian;
    return item;
  })
);

function buatKartuProyek(proyek) {
  const kartu = document.createElement("article");
  kartu.className = "kartu";
  kartu.dataset.category = proyek.kategori;

  const isi = document.createElement("div");
  isi.className = "kartu-body";
  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;
  const kategori = document.createElement("p");
  kategori.textContent = `Kategori: ${proyek.kategori}`;
  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${proyek.tahun}`;
  const deskripsi = document.createElement("p");
  deskripsi.textContent = proyek.deskripsi;
  isi.append(judul, kategori, tahun, deskripsi);
  kartu.append(isi);
  return kartu;
}

function renderProyek(daftar) {
  // Selalu kosongkan isi lama sebelum menambahkan hasil render baru.
  daftarProyekEl.textContent = "";
  if (daftar.length === 0) {
    emptyProjects.hidden = false;
    jumlahProyek.textContent = "0 proyek";
    return;
  }
  emptyProjects.hidden = true;
  jumlahProyek.textContent = `${daftar.length} proyek`;
  daftar.forEach((proyek) => daftarProyekEl.append(buatKartuProyek(proyek)));
}

let kategoriAktif = "all";
function tampilkanKategori(kategori) {
  kategoriAktif = kategori;
  const tombol = filterRow.querySelectorAll("button[data-category]");
  tombol.forEach((item) => {
    const aktif = item.dataset.category === kategori;
    item.classList.toggle("active", aktif);
    item.setAttribute("aria-pressed", String(aktif));
  });
  const hasil = kategori === "all"
    ? daftarProyek
    : daftarProyek.filter((proyek) => proyek.kategori === kategori);
  renderProyek(hasil);
}

// Satu listener di parent melayani tombol yang sudah ada dan yang ditambahkan nanti.
filterRow.addEventListener("click", (event) => {
  const tombol = event.target.closest("button[data-category]");
  if (!tombol || !filterRow.contains(tombol)) return;
  tampilkanKategori(tombol.dataset.category);
});

tampilkanKategori(kategoriAktif);

const fields = Array.from(projectForm.querySelectorAll("input, select, textarea"));
function validasiField(field) {
  const error = ambilElemen(`#error-${field.id}`);
  const nilai = field.value.trim();
  let pesan = "";

  if (nilai === "") {
    pesan = "Isi bagian ini sebelum menyimpan.";
  } else if (field.id === "tahun-proyek") {
    const tahun = Number(nilai);
    if (!Number.isInteger(tahun) || tahun < 2000 || tahun > 2026) {
      pesan = "Masukkan tahun berupa angka antara 2000 dan 2026.";
    }
  }

  error.textContent = pesan;
  field.setAttribute("aria-invalid", String(Boolean(pesan)));
  return pesan === "";
}

function validasiForm() {
  return fields.map(validasiField).every(Boolean);
}

projectForm.addEventListener("input", (event) => {
  if (!event.target.matches("input, select, textarea")) return;
  validasiField(event.target);
  submitProject.disabled = !validasiForm();
  formSuccess.textContent = "";
});

projectForm.addEventListener("change", (event) => {
  if (!event.target.matches("input, select, textarea")) return;
  validasiField(event.target);
  submitProject.disabled = !validasiForm();
});

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const valid = validasiForm();
  submitProject.disabled = !valid;
  if (!valid) {
    fields.find((field) => field.getAttribute("aria-invalid") === "true")?.focus();
    return;
  }

  daftarProyek.push({
    judul: ambilElemen("#judul-proyek").value.trim(),
    kategori: ambilElemen("#kategori-proyek").value,
    tahun: Number(ambilElemen("#tahun-proyek").value),
    selesai: false,
    deskripsi: ambilElemen("#deskripsi-proyek").value.trim()
  });
  tampilkanKategori("all");
  projectForm.reset();
  fields.forEach((field) => {
    field.setAttribute("aria-invalid", "false");
    ambilElemen(`#error-${field.id}`).textContent = "";
  });
  submitProject.disabled = true;
  formSuccess.textContent = "Proyek berhasil ditambahkan.";
});
