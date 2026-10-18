// Satu alamat sumber data. news.json dipakai sebagai fallback lokal P10.
const URL = "./news.json";

export async function fetchNews() {
  try {
    const response = await fetch(URL);
    console.log("status", response.status, "ok", response.ok);
    if (!response.ok) {
      throw new Error("status " + response.status);
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      throw new Error("Format JSON harus berupa array berita.");
    }
    return data;
  } catch (error) {
    const message = error instanceof Error ? error.message : "Kesalahan tidak diketahui.";
    throw new Error("Gagal memuat data: " + message);
  }
}