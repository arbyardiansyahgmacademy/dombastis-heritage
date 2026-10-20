# DOMBASTIS HERITAGE

Website resmi kuliner olahan kambing, nasi briyani rempah autentik, dan layanan paket masakan aqiqah bernuansa kehangatan warisan (*heritage*) nusantara.

- **Domain Target:** `dombastisheritage.web.id`
- **Konsep Desain:** *Deep Emerald & Imperial Gold Heritage Dining*
- **Teknologi:** HTML5 Semantik, Bootstrap 5 (CDN resmi), CSS3 murni, dan JavaScript ES6 murni.
- **URL Routing:** Clean URLs (bebas ekstensi `.html` pada seluruh tautan publik).
- **Integrasi WhatsApp:** Menggunakan ikon resmi WhatsApp dengan format tautan kontekstual.

---

## 1. Struktur Proyek

```text
dombastis-heritage/
├── index.html                                        # Halaman Beranda
├── tentang-kami.html & tentang-kami/index.html       # Halaman Tentang Kami
├── menu.html & menu/index.html                       # Katalog Menu & Filter
├── paket.html & paket/index.html                     # Paket Jamuan & Aqiqah
├── galeri.html & galeri/index.html                   # Galeri Dokumentasi Foto
├── blog.html & blog/index.html                       # Listing Artikel & Panduan
├── kontak.html & kontak/index.html                   # Form Kontak & Info
├── blog/
│   ├── olahan-kambing-untuk-acara-keluarga.html
│   ├── mengenal-nasi-briyani-dan-pilihan-sajiannya.html
│   └── panduan-memilih-paket-aqiqah.html
├── assets/
│   ├── css/
│   │   └── style.css                                 # Desain sistem emerald & gold
│   ├── js/
│   │   └── main.js                                   # Validasi, filter, dialog lightbox
│   ├── img/
│   │   ├── logo-dombastis-heritage.svg               # Logo brand resmi
│   │   ├── logo-badge.svg                            # Lencana heraldik emas
│   │   ├── hero-dombastis.webp                       # Foto hero beresolusi tinggi (WebP < 150KB)
│   │   ├── menu/                                     # Foto sajian menu
│   │   ├── paket/                                    # Foto sajian paket
│   │   ├── galeri/                                   # Foto galeri jamuan
│   │   └── blog/                                     # Thumbnail artikel edukasi
│   └── icons/
│       └── whatsapp-official.svg                     # Ikon resmi brand WhatsApp
├── .htaccess                                         # Rewrite rules Apache untuk clean URL
├── fiveserver.config.js                              # Konfigurasi clean URL Five Server lokal
├── vercel.json                                       # Konfigurasi deployment Vercel
├── robots.txt                                        # Indeksasi mesin pencari
├── sitemap.xml                                       # Peta situs SEO
└── README.md                                         # Dokumentasi teknis
```

---

## 2. Cara Menjalankan Secara Lokal (Five Server)

Website ini dirancang sebagai **frontend statis multi-halaman** yang tidak memerlukan build step, bundler, atau runtime server backend.

1. Buka folder `dombastis-heritage` di **Visual Studio Code**.
2. Pastikan ekstensi **Five Server** (atau Live Server) sudah terpasang.
3. Buka file `index.html`.
4. Klik tombol **Go Live** di status bar bawah VS Code.
5. Website akan otomatis terbuka di browser Anda (misalnya `http://127.0.0.1:5500/` atau `http://localhost:5500/`).
6. Seluruh tautan navigasi bekerja menggunakan format **Clean URLs** (`/tentang-kami`, `/menu`, `/paket`, `/galeri`, `/blog`, `/kontak`).

---

## 3. Fitur Utama & Kepatuhan PRD

1. **Clean URLs Tanpa Ekstensi `.html`:**
   - Seluruh tautan internal pada navbar, tombol CTA, kartu, breadcrumb, dan footer mengarah ke URL bersih (contoh: `/menu`, `/paket`).
   - Tersedia konfigurasi `fiveserver.config.js`, `.htaccess` (Apache), dan `vercel.json` untuk menjamin clean URL aktif di berbagai platform hosting.
   - Setiap halaman juga memiliki folder direktori dengan `index.html` sebagai fallback kompatibilitas penuh.

2. **Ikon Resmi WhatsApp:**
   - Menggunakan geometri SVG resmi dari WhatsApp dengan warna brand `#25D366`.
   - Tersedia pada header CTA, tombol formulir pemesanan, kartu menu/paket, dan tombol floating di sudut kanan bawah dengan efek *pulse ring* lembut.

3. **Formulir Kontak Jujur & Transparan (Static Architecture):**
   - Tidak menampilkan klaim palsu bahwa data "telah tersimpan di database".
   - Melakukan validasi di sisi browser, menyusun pesan WhatsApp yang rapi, menampilkan kotak pratinjau pesan untuk ditinjau oleh pengguna, lalu membuka aplikasi WhatsApp resmi.

4. **Katalog Menu Interaktif:**
   - Filter tab kategori menu (Semua, Olahan Kambing, Nasi Briyani, Olahan Aqiqah) yang bekerja secara progresif. Tetap dapat dibaca meski JavaScript dimatikan.

5. **Galeri dengan Dialog Lightbox Aksesibel:**
   - Menggunakan elemen standar `<dialog>` dengan atribut `closedby="any"` dan fallback JavaScript.
   - Mendukung penutupan dengan tombol Close, tombol Escape keyboard, navigasi panah kiri/kanan, dan klik di luar area konten.

6. **SEO, AEO, dan Structured Data:**
   - Setiap halaman memiliki `<title>` unik (sekitar 50-60 karakter) dan `<meta name="description">` (maksimal 120 karakter).
   - Tiga artikel blog dilengkapi dengan *Direct Answer Box* (40–70 kata) di awal artikel untuk optimasi mesin pencari dan penjawab AI.
   - Schema JSON-LD valid: `Restaurant`, `WebSite`, `Menu`, `ImageGallery`, `Blog`, `BlogPosting`, dan `ContactPage`.
