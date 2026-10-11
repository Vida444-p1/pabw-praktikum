# Worksheet P5 - Layout Modern: Flexbox dan Grid

Lanjutan halaman profil game dari P4. Isi, warna, dan design token dipertahankan; perubahan P5 berfokus pada susunan halaman dan komponen.

## A. Rencana kerangka

- Baris halaman: `auto 1fr auto` untuk header, isi, dan footer.
- Area isi: grid dua kolom (`16rem minmax(0, 1fr)`) dengan area bernama; kolom konten diizinkan menyusut agar tetap muat di layar sempit.
- Navbar: flex arah baris dengan `gap`.
- Galeri: grid `repeat(auto-fit, minmax(min(16rem, 100%), 1fr))`.
- Isi kartu: flex arah kolom.

## B. Flexbox dan Grid

`.page` menjaga tiga baris halaman. `main.isi` menata bagian konten dengan grid. Navigasi memakai flex; isi kartu dan form juga memakai flex agar elemen tersusun rapi dengan `gap`.

## C. Galeri adaptif

`.galeri` memakai grid auto-fit dan minmax, tanpa media query khusus untuk jumlah kolom. Kartu memakai flex untuk menyusun isinya.

## D. Penempatan

Bagian katalog, form, dan tentang menggunakan area grid bernama (`daftar`, `tambah`, `tentang`). Kolom isi menyesuaikan ruang yang tersedia agar tidak meluber pada layar sempit.

## E. Pemeriksaan kasus sulit

- Tinggi kartu mengikuti isi dengan tinggi minimum dan peregangan grid.
- Teks panjang dapat membungkus dengan `overflow-wrap: anywhere`.
- Item grid/form diberi `min-width: 0`; galeri membatasi lebar minimum ke ruang yang tersedia.
- Periksa tampilan pada lebar 360 px dan 1.280 px di browser.

## F. Pemeriksaan akhir

- [ ] Kerangka halaman memiliki tiga baris.
- [ ] Jarak antar item memakai `gap`.
- [ ] Kolom menggunakan `fr`, `rem`, dan `minmax`, bukan lebar tetap piksel.
- [ ] Galeri berubah jumlah kolom tanpa media query.
- [ ] Tidak ada elemen yang meluber pada 360 px dan 1.280 px.
- [ ] Toggle tema memakai checkbox `#switch-tema`.

Potongan kode utama: `grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));` ? dipakai pada galeri agar jumlah kolom mengikuti ruang yang tersedia.
