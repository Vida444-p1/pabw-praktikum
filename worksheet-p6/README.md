# Worksheet P6 ? Responsif Mobile-First

Halaman profil game dari P5 yang disiapkan untuk layar sempit, tablet, dan desktop. Gaya dasar berlaku untuk ponsel; aturan breakpoint hanya menambahkan kolom ketika ruang mencukupi.

## A. Viewport dan audit lebar

- Meta viewport tersedia di `profil.html`: `width=device-width, initial-scale=1.0`.
- Gambar banner tidak memakai atribut lebar/tinggi tetap; gambar dibatasi `max-width: 100%`.
- Galeri tidak memakai lebar piksel tetap. Kartu dapat menyusut dengan grid `minmax(0, 1fr)`.
- Sidebar memakai `16rem` pada breakpoint desktop.

## B. Gaya dasar mobile

`responsif.css` memakai satu kolom untuk `.isi` dan `.galeri` tanpa syarat media query. Berkas ini dimuat setelah stylesheet P5.

## C. Titik henti

- `48rem`: galeri berubah menjadi dua kolom.
- `60rem`: form dan bagian tentang bersanding sebagai sidebar dengan katalog; galeri menjadi tiga kolom.

Keduanya memakai `min-width` dan `rem`.

## D. Gambar dan tabel

Gambar dibatasi `max-width: 100%` dan tinggi otomatis. Halaman ini tidak memiliki tabel; jika tabel lebar ditambahkan, bungkus tabel dengan elemen `.table-wrap` yang memakai `overflow-x: auto`.

## E. Pemeriksaan dan bukti

Periksa di mode perangkat DevTools dan simpan tangkapan layar ke folder ini:

- [ ] 360 px ? satu kolom, tanpa gulir mendatar.
- [ ] 768 px ? galeri dua kolom, tanpa gulir mendatar.
- [ ] 1.280 px ? sidebar bersanding dengan katalog, galeri tiga kolom, tanpa gulir mendatar.
- [ ] Periksa gambar pada setiap lebar.

Catatan hasil pengujian:

| Lebar | Susunan yang terlihat | Gulir mendatar | Nama tangkapan layar |
| --- | --- | --- | --- |
| 360 px |  |  |  |
| 768 px |  |  |  |
| 1.280 px |  |  |  |

Tiket keluar:

- Mengapa gaya dasar ditulis untuk layar sempit lebih dulu:
- Bagaimana menentukan lebar titik henti:
- Kasus luberan dan perbaikannya:
