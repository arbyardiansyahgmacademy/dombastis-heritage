# PRODUCT REQUIREMENTS DOCUMENT (PRD)

# DOMBASTIS HERITAGE

**Domain:** `dombastisheritage.web.id`  
**Jenis proyek:** Website restoran/katering kuliner kambing, nasi briyani, dan layanan aqiqah  
**Target implementasi:** Website statis multi-halaman yang dapat dijalankan secara lokal melalui Five Server di Visual Studio Code  
**Teknologi wajib:** HTML5, Bootstrap 5, CSS murni, dan JavaScript murni  
**Versi dokumen:** 1.0  
**Tanggal:** 20 Oktober 2026

---

## 1. Ringkasan Proyek

Dombastis Heritage adalah konsep website kuliner dengan identitas visual elegan, hangat, dan berakar pada nuansa heritage/Jawa—termasuk inspirasi arsitektur joglo—yang menampilkan sajian olahan kambing, nasi briyani, serta pilihan masakan dan paket aqiqah. Website harus memudahkan pengunjung mengenal brand, menjelajahi menu dan paket, melihat galeri, membaca artikel, lalu menghubungi pengelola melalui WhatsApp atau formulir kontak.

Website dibuat sebagai **frontend statis multi-halaman**, bukan SPA dan bukan landing page tunggal. Setiap halaman utama memiliki file HTML tersendiri. Tidak menggunakan framework JavaScript, build tools, database, atau backend. Fitur formulir yang memerlukan pengiriman data harus dijelaskan sebagai integrasi yang belum aktif sampai endpoint layanan eksternal disiapkan.

## 2. Tujuan

1. Menampilkan brand dan sajian dengan citra elegan, rapi, hangat, dan profesional.
2. Membantu calon pelanggan menemukan menu, paket, foto sajian, informasi aqiqah, dan cara pemesanan.
3. Mengarahkan pengunjung ke WhatsApp dengan pesan awal yang relevan.
4. Membangun struktur konten yang mudah dirayapi mesin pencari dan mudah dipahami mesin penjawab/AI.
5. Menyediakan fondasi teknis yang ringan, responsif, aksesibel, dan dapat dipelihara.
6. Mendukung pengembangan artikel secara terpisah di folder `blog/`.

## 3. Sasaran dan Audiens

- Keluarga atau individu yang mencari olahan kambing dan nasi briyani.
- Calon pelanggan yang membutuhkan hidangan untuk acara keluarga atau kegiatan bersama.
- Keluarga yang mencari informasi layanan masakan/paket aqiqah.
- Pengunjung lokal yang ingin melihat menu, paket, galeri, dan menghubungi pengelola.
- Pengunjung dari pencarian organik yang membutuhkan jawaban jelas mengenai menu, paket, pemesanan, dan layanan.

**Catatan:** Lokasi layanan, alamat, jam buka, nomor WhatsApp, harga, sertifikasi, testimoni, dan klaim bisnis wajib menggunakan data asli dari pemilik. Jangan mengarang informasi faktual.

## 4. Prinsip Teknologi dan Batasan

### 4.1 Teknologi yang diperbolehkan

- HTML5 semantik.
- Bootstrap 5 melalui file lokal atau CDN resmi.
- CSS murni dalam `assets/css/style.css`.
- JavaScript murni dalam `assets/js/main.js`.
- Bootstrap Icons boleh digunakan jika diperlukan, melalui CDN atau aset lokal.
- Five Server untuk menjalankan dan menguji website secara lokal.

### 4.2 Teknologi yang tidak boleh digunakan

- React, Vue, Angular, Svelte, atau framework UI JavaScript lainnya.
- Tailwind CSS, jQuery, atau framework CSS tambahan selain Bootstrap.
- Node.js sebagai runtime website, bundler, compiler, atau proses build wajib.
- Database, backend khusus, dan API buatan sendiri.
- Ketergantungan pada fitur server yang tidak tersedia pada Five Server.

### 4.3 Ketentuan implementasi

- Setiap halaman dapat dibuka langsung melalui file HTML masing-masing.
- Semua tautan internal menggunakan jalur relatif yang benar.
- Hindari fitur yang hanya berjalan melalui server produksi.
- Gunakan komponen Bootstrap secara langsung dengan markup HTML.
- JavaScript hanya untuk interaksi ringan: navbar, filter sederhana, modal/lightbox galeri, FAQ bila tidak memakai komponen Bootstrap, validasi form, tombol kembali ke atas, dan penyusunan pesan WhatsApp.
- Jangan membuat tombol palsu. Jika fungsi belum aktif, berikan keterangan yang jujur.

## 5. Sitemap dan Struktur File

Gunakan struktur berikut:

```text
dombastisheritage/
├── index.html
├── tentang-kami.html
├── menu.html
├── paket.html
├── galeri.html
├── blog.html
├── kontak.html
├── blog/
│   ├── olahan-kambing-untuk-acara-keluarga.html
│   ├── mengenal-nasi-briyani-dan-pilihan-sajiannya.html
│   └── panduan-memilih-paket-aqiqah.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   │   ├── logo-dombastis-heritage.svg
│   │   ├── hero-dombastis.webp
│   │   ├── menu/
│   │   ├── paket/
│   │   ├── galeri/
│   │   └── blog/
│   └── icons/
├── robots.txt
├── sitemap.xml
└── README.md
```

**Catatan URL:** Struktur di atas adalah struktur file lokal. Jika hosting static tidak mendukung URL tanpa ekstensi, tautan publik akan tetap memakai `.html`. Jangan mengklaim URL bersih tanpa ekstensi berfungsi sebelum server/hosting dikonfigurasi dengan benar. Jika domain nantinya memakai rewrite rules, siapkan aturan sesuai platform hosting.

## 6. Navigasi Global

Navbar utama:

1. Beranda
2. Tentang Kami
3. Menu
4. Paket
5. Galeri
6. Blog
7. Kontak

Ketentuan navbar:

- Logo/wordmark Dombastis Heritage di sebelah kiri.
- Menu desktop horizontal dan menu mobile menggunakan Bootstrap navbar collapse.
- Tautan halaman aktif diberi penanda visual dan `aria-current="page"`.
- Tombol CTA “Pesan via WhatsApp” dapat ditempatkan di navbar desktop jika ruang mencukupi.
- Navbar harus tetap mudah digunakan pada layar kecil dan keyboard.
- Semua halaman memiliki header, footer, floating WhatsApp, dan tombol back-to-top.

## 8. Persyaratan Semua Halaman

Semua halaman harus:

- Memiliki `<!doctype html>`, `lang="id"`, charset UTF-8, viewport, title unik, meta description unik, canonical yang sesuai saat domain sudah aktif, dan favicon.
- Menggunakan satu H1 utama yang menjelaskan topik halaman.
- Memiliki header/nav, main, dan footer semantik.
- Memiliki CTA yang jelas dan tidak menyesatkan.
- Memiliki tombol floating WhatsApp di semua halaman.
- Memiliki tombol back-to-top yang ditempatkan tepat di atas tombol floating WhatsApp; tombol back-to-top dapat muncul setelah pengguna menggulir halaman.
- Memiliki FAQ yang relevan pada halaman yang ditentukan, menggunakan pertanyaan dan jawaban asli serta tidak menjejalkan keyword.
- Memiliki internal link yang relevan ke Menu, Paket, Kontak, dan artikel terkait.
- Menggunakan gambar dengan `alt` deskriptif; gambar dekoratif memakai `alt=""`.
- Memastikan semua kontrol dapat digunakan dengan keyboard dan mempunyai nama aksesibel.
- Tidak memuat harga, alamat, jam buka, penghargaan, sertifikasi, jumlah pelanggan, atau klaim lain yang belum diverifikasi.
- Menghindari teks dummy, tautan `#` yang tidak berfungsi, dan tombol yang tidak melakukan apa pun.

## 9. Spesifikasi Halaman

### 9.1 Beranda — `index.html`

Urutan section wajib:

1. **Hero**
   - Foto hero sajian atau suasana tempat yang relevan.
   - H1 yang menjelaskan identitas kuliner Dombastis Heritage.
   - Subheading ringkas dan faktual tentang pilihan sajian.
   - CTA utama “Lihat Menu” menuju `menu.html`.
   - CTA kedua “Konsultasi Pesanan” menuju WhatsApp.
   - Foto hero harus dioptimalkan; jika menjadi LCP, jangan gunakan lazy loading.

2. **Deskripsi Singkat Tentang Kami**
   - Pengenalan brand, konsep heritage, dan fokus sajian.
   - Tautan ke halaman Tentang Kami.
   - Jangan menyatakan sejarah atau asal-usul brand tanpa data pemilik.

3. **3 Rekomendasi Menu**
   - Tiga kartu menu dengan gambar, nama, deskripsi singkat, dan tautan menuju halaman Menu.
   - Pilih contoh kategori yang benar-benar tersedia, misalnya olahan kambing, nasi briyani, dan sajian aqiqah.
   - Jangan mencantumkan harga jika belum disetujui pemilik.

4. **Mengapa Memilih Kami?**
   - Tampilkan 3–4 keunggulan yang sudah diverifikasi, misalnya variasi sajian, konsultasi kebutuhan acara, atau informasi pemesanan yang jelas.
   - Hindari klaim “terbaik”, “nomor satu”, “paling murah”, atau “terpercaya nomor satu” tanpa bukti yang dapat diperiksa.

5. **3 Paket Unggulan**
   - Tiga kartu paket dengan nama, ringkasan isi, sasaran penggunaan, dan tombol konsultasi.
   - Harga dapat disembunyikan sesuai kebijakan brand.
   - Detail paket harus sesuai data operasional sebenarnya.

6. **Galeri 6 Foto**
   - Grid enam foto menu, penyajian, atau suasana.
   - Setiap foto bisa diklik untuk membuka preview/lightbox.
   - Sertakan tautan ke Galeri.

7. **3 Kartu Artikel Blog**
   - Gambar, kategori, judul, ringkasan, tanggal publikasi aktual, dan tautan baca.
   - Jangan menampilkan tanggal yang dibuat-buat.

8. **3 Kartu Testimoni/Ulasan**
   - Gunakan kutipan pelanggan asli yang telah mendapat izin untuk ditampilkan.
   - Jika belum tersedia, tampilkan section “Pengalaman Pelanggan” dalam keadaan draft/placeholder internal dan jangan menerbitkan testimoni fiktif sebagai fakta.
   - Jangan menciptakan nama, foto, rating, atau ulasan pelanggan.

9. **FAQ**
   - 4–6 pertanyaan umum yang relevan.
   - Contoh topik: cara melihat menu, konsultasi paket, pemesanan untuk acara, layanan aqiqah, jangkauan pengantaran (jawab hanya jika diketahui), dan cara menghubungi tim.

10. **CTA Penutup**
    - Ajakan menghubungi tim untuk menanyakan menu/paket.
    - Tombol WhatsApp dan tautan Kontak.

### 9.2 Tentang Kami — `tentang-kami.html`

Section wajib:

1. Hero halaman dan pengantar brand.
2. Cerita/konsep Dombastis Heritage; sejarah hanya boleh ditambahkan jika dikonfirmasi pemilik.
3. Visi dan misi, jika sudah disetujui.
4. **Keunggulan Kami**: poin yang faktual, terukur jika memungkinkan, dan dapat dibuktikan.
5. **Partnership**: logo/nama mitra hanya setelah izin dan konfirmasi. Jika belum ada, gunakan CTA “Jajaki Kerja Sama” tanpa mengarang daftar mitra.
6. **Terpercaya**: bangun kepercayaan dengan informasi yang transparan—detail menu, proses pemesanan, kanal kontak resmi, kebijakan pesanan, dan dokumentasi asli. Jangan mengklaim sertifikasi atau penghargaan yang tidak dimiliki.
7. Foto/visual pendukung.
8. FAQ.
9. CTA ke Menu, Paket, atau WhatsApp.

### 9.3 Menu — `menu.html`

Tujuan: menyajikan katalog menu yang mudah dijelajahi.

Section wajib:

1. Hero dan pengantar katalog.
2. Navigasi kategori atau filter sederhana:
   - **Olahan Kambing**: hanya item yang benar-benar dijual.
   - **Nasi Briyani**: variasi nasi briyani yang benar-benar tersedia.
   - **Masakan dan Olahan Aqiqah**: pilihan menu/paket sajian aqiqah sesuai operasional.
3. Kartu item menu berisi foto, nama, deskripsi, kategori, informasi ketersediaan bila perlu, dan tombol “Tanyakan Menu”.
4. Filter kategori boleh menggunakan JavaScript murni; konten inti harus tetap terbaca jika JavaScript tidak aktif.
5. Jangan menampilkan harga bila pemilik tidak menghendaki. Hindari klaim bahan, sertifikasi halal, asal bahan, atau metode masak yang belum dikonfirmasi.
6. FAQ.
7. CTA ke Paket dan WhatsApp.

### 9.4 Paket — `paket.html`

Section wajib:

1. Hero dan pengantar paket.
2. Daftar berbagai paket yang benar-benar tersedia, dikelompokkan sesuai kebutuhan: paket sajian keluarga, acara, dan aqiqah jika memang ditawarkan.
3. Setiap kartu paket berisi nama, ringkasan isi, jumlah/porsi hanya jika sudah dikonfirmasi, sasaran acara, pilihan penyesuaian jika tersedia, serta tombol konsultasi.
4. Jangan tampilkan harga jika kebijakan brand tidak mengizinkan.
5. Sediakan cara membandingkan paket dengan daftar fitur yang konsisten dan aksesibel.
6. Jelaskan cara pemesanan secara ringkas: pilih paket → hubungi tim → konfirmasi detail dan ketersediaan → persetujuan pesanan.
7. FAQ.
8. CTA ke WhatsApp/Kontak.

### 9.5 Galeri — `galeri.html`

Section wajib:

1. Hero singkat.
2. Grid gambar makanan, paket, penyajian, dan suasana yang tersedia.
3. Preview gambar dalam modal/lightbox yang dapat ditutup lewat tombol close, Escape, dan klik backdrop bila aman.
4. Tombol navigasi gambar sebelumnya/berikutnya jika diterapkan.
5. Gambar responsif dengan ukuran eksplisit (`width`/`height` atau `aspect-ratio`) untuk mencegah layout shift.
6. Caption singkat dan alt text deskriptif; jangan mengulang keyword secara tidak alami.
7. FAQ.
8. CTA.

### 9.6 Blog — `blog.html`

Section wajib:

1. Hero/intro yang menjelaskan tujuan artikel.
2. Tiga kartu artikel, satu untuk masing-masing artikel di folder `blog/`.
3. Setiap kartu berisi gambar, kategori, judul, ringkasan, tanggal publikasi aktual, waktu baca jika dihitung secara wajar, dan tautan ke artikel.
4. Jika jumlah artikel bertambah, siapkan pola kartu dan kategori yang konsisten. Jangan tampilkan pagination yang tidak berfungsi.
5. FAQ.
6. CTA ke Menu/Paket/Kontak.

### 9.7 Kontak — `kontak.html`

Section wajib:

1. Hero dan instruksi menghubungi tim.
2. Informasi kontak yang sudah dikonfirmasi pemilik: nomor WhatsApp, email, alamat, jam operasional, serta area layanan bila memang tersedia.
3. **Form kontak** dengan field:
   - Nama (wajib).
   - Nomor WhatsApp/telepon (wajib).
   - Email (opsional).
   - Jenis kebutuhan (Menu / Paket Acara / Aqiqah / Kerja Sama / Lainnya).
   - Perkiraan tanggal acara (opsional).
   - Jumlah porsi/peserta (opsional).
   - Pesan (wajib).
   - Persetujuan penggunaan data untuk menanggapi pertanyaan (wajib).
4. Karena website statis tidak memiliki backend, form harus menggunakan salah satu opsi:
   - **Opsi default:** validasi di browser dan susun pesan WhatsApp dari data form; minta pengguna memeriksa pesan sebelum mengirim.
   - Alternatif: sambungkan ke layanan form eksternal setelah pemilik menyediakan endpoint dan kebijakan privasi.
   - Jangan menampilkan notifikasi “berhasil terkirim” jika data hanya divalidasi di browser.
5. Tombol WhatsApp, tautan sosial media resmi, dan peta hanya jika alamat benar sudah tersedia.
6. Jangan menampilkan peta palsu atau tautan sosial media contoh yang terlihat seperti akun resmi.
7. FAQ.
8. CTA penutup.

### 9.8 Tiga Artikel Blog

Buat tiga halaman HTML individual dalam folder `blog/`:

#### Artikel 1: `blog/olahan-kambing-untuk-acara-keluarga.html`

- Fokus: ide memilih olahan kambing untuk acara keluarga.
- Search intent: informasional dan komersial ringan.
- Struktur: H1, jawaban langsung 40–70 kata, pengantar, subjudul pilihan hidangan, hal yang perlu dipertimbangkan, cara konsultasi menu, FAQ, CTA ke Menu/Paket/Kontak.
- Jangan mengklaim manfaat kesehatan atau kualitas bahan tanpa sumber yang memadai.
- Internal link ke `../menu.html`, `../paket.html`, dan `../kontak.html`.

#### Artikel 2: `blog/mengenal-nasi-briyani-dan-pilihan-sajiannya.html`

- Fokus: pengenalan nasi briyani dan cara memilih sajian untuk acara.
- Struktur: H1, jawaban langsung 40–70 kata, pengantar, karakter umum hidangan, opsi penyajian yang benar-benar tersedia, tips memilih menu, FAQ, CTA.
- Hindari klaim autentisitas/asal resep yang tidak dapat dibuktikan.
- Internal link ke halaman Menu, Paket, dan Kontak menggunakan jalur `../`.

#### Artikel 3: `blog/panduan-memilih-paket-aqiqah.html`

- Fokus: panduan menilai kebutuhan dan memilih paket aqiqah.
- Struktur: H1, jawaban langsung 40–70 kata, pengantar, kebutuhan porsi, variasi menu, proses konsultasi, hal yang perlu dikonfirmasi, FAQ, CTA.
- Jelaskan informasi sebagai panduan umum; rincian layanan harus dikonfirmasi kepada pemilik.
- Hindari nasihat agama yang tidak bersumber dan jangan mengklaim sertifikasi/ketentuan khusus tanpa bukti.
- Internal link ke `../menu.html`, `../paket.html`, dan `../kontak.html`.

**Ketentuan seluruh artikel:**

- Bahasa Indonesia natural, informatif, orisinal, dan berorientasi pada pembaca.
- Artikel utama sebaiknya mendalam (target 900–1.300 kata bila topiknya memadai; jangan memanjangkan dengan pengulangan).
- Gunakan H2/H3 logis, paragraf ringkas, daftar bila membantu, dan jawaban langsung pada bagian awal.
- Metadata unik untuk setiap artikel.
- Breadcrumb yang jelas: Beranda → Blog → Judul Artikel.
- Tampilkan penulis dan tanggal hanya bila datanya benar.
- Sertakan sumber rujukan untuk klaim faktual eksternal bila digunakan.
- Jangan membuat artikel doorway yang hanya mengganti nama kota/kata kunci.
- Jangan mengarang pengalaman, kutipan pelanggan, data, atau klaim bisnis.

## 10. Floating WhatsApp dan Back-to-Top

### 10.1 Floating WhatsApp

- Muncul pada seluruh halaman utama dan artikel.
- Tetap terlihat tanpa menutupi konten penting, cookie notice, tombol form, atau kontrol galeri.
- Menggunakan ikon yang mudah dikenali dan label aksesibel, misalnya `aria-label="Hubungi Dombastis Heritage melalui WhatsApp"`.
- Nomor WhatsApp harus diganti dengan nomor resmi format internasional tanpa tanda `+`, spasi, atau tanda baca pada URL `https://wa.me/ NOMOR`.
- Teks awal dapat berbeda berdasarkan halaman, misalnya “Halo, saya ingin bertanya tentang menu Dombastis Heritage.”
- Gunakan `target="_blank"` dan `rel="noopener noreferrer"` untuk tautan eksternal bila sesuai.

### 10.2 Back-to-Top

- Ditempatkan tepat di atas tombol floating WhatsApp dengan jarak visual memadai.
- Muncul setelah scroll melewati ambang tertentu dan tersembunyi saat dekat bagian atas.
- Saat ditekan, gulir ke atas dengan perilaku halus; hormati `prefers-reduced-motion`.
- Memiliki `aria-label="Kembali ke atas"`, fokus keyboard terlihat, dan ukuran target sentuh memadai.
- Pastikan posisi tidak menutupi tombol penting di perangkat mobile.

## 11. Persyaratan SEO, AEO, dan GEO untuk 2026

**Penting:** SEO/AEO/GEO tidak dapat menjamin peringkat nomor satu. Posisi hasil pencarian ditentukan oleh banyak faktor di luar kendali pengembang. PRD ini menetapkan praktik teknis dan konten yang sehat, bukan jaminan ranking.

### 11.1 SEO On-Page

- Satu `<title>` unik per halaman; sasaran sekitar 50–60 karakter jika alami dan relevan.
- Meta description unik, ringkas, informatif, dan sesuai isi; gunakan batas editorial proyek **maksimal 120 karakter**.
- Satu H1 utama; H2/H3 mengikuti hierarki semantik.
- Slug dan nama file mudah dipahami, lowercase, menggunakan tanda hubung, dan tanpa parameter yang tidak perlu.
- Canonical absolut pada URL final yang benar ketika domain aktif.
- Open Graph dan metadata sosial yang sesuai.
- Internal link kontekstual dan breadcrumb.
- Optimasi gambar: nama file deskriptif, alt text faktual, WebP/AVIF jika kompatibel, dimensi eksplisit.
- Hindari keyword stuffing, halaman duplikat, doorway pages, dan konten tipis.
- Jangan menjanjikan “nomor satu” atau hasil SEO tertentu.

### 11.2 AEO (Answer Engine Optimization)

- Berikan jawaban ringkas langsung di awal halaman/artikel untuk pertanyaan utama.
- Gunakan heading berbentuk pertanyaan jika memang sesuai dengan kebutuhan pengguna.
- Buat FAQ berdasarkan pertanyaan nyata pelanggan.
- Jawaban harus jelas, spesifik, dan dapat berdiri sendiri; hindari jawaban yang hanya berisi promosi.
- Gunakan tabel/list untuk informasi yang lebih mudah dibandingkan, jika sesuai.
- Pastikan informasi bisnis penting konsisten di seluruh situs.

### 11.3 GEO (Generative Engine Optimization)

- Tulis konten yang faktual, mudah dipahami, dan memiliki konteks yang cukup.
- Jelaskan entitas brand, jenis sajian, layanan, dan wilayah layanan hanya berdasarkan data yang benar.
- Tambahkan sumber tepercaya untuk klaim eksternal yang penting.
- Bangun halaman yang menjawab kebutuhan nyata, bukan sekadar mengulang keyword.
- Gunakan informasi penulis/reviewer hanya jika benar dan dapat dipertanggungjawabkan.
- Jangan menjanjikan bahwa konten pasti dikutip atau direkomendasikan oleh sistem AI.

### 11.4 SEO Lokal

- Jika bisnis memiliki lokasi fisik atau wilayah layanan, tampilkan nama bisnis, alamat, nomor telepon, jam, dan area layanan secara konsisten.
- Gunakan profil bisnis lokal (misalnya Google Business Profile) hanya jika memenuhi persyaratan platform dan dikelola pemilik.
- Buat halaman lokasi hanya jika ada layanan nyata dan informasi unik yang berguna.
- Jangan membuat alamat, kantor cabang, nomor telepon, atau area layanan palsu.
- Tambahkan tautan peta hanya untuk lokasi yang telah diverifikasi.

### 11.5 Structured Data

Gunakan JSON-LD hanya jika kontennya benar-benar tampak dan sesuai dengan tipe schema:

- `Organization` atau `LocalBusiness`/tipe bisnis yang tepat pada halaman terkait, dengan properti yang benar-benar diketahui.
- `WebSite` pada situs utama.
- `BreadcrumbList` untuk halaman bertingkat dan artikel.
- `Article` atau `BlogPosting` pada artikel, dengan tanggal dan penulis yang benar.
- `Product`/`Offer` hanya bila memang sesuai dan informasi produk/harga/ketersediaan benar.
- `Menu`/`MenuItem` hanya jika format dan konten aktual memenuhi definisi schema yang dipilih.
- FAQPage hanya jika FAQ benar-benar tersedia dan mengikuti pedoman mesin pencari terkini; jangan mengharapkan FAQ rich result pasti ditampilkan.
- Jangan membuat rating/review schema dari ulasan fiktif atau menandai ulasan yang tidak terlihat di halaman.
- Validasi JSON-LD dengan validator schema dan alat pengujian hasil kaya sebelum publikasi.

### 11.6 File dan indeksasi

- `robots.txt` tidak memblokir halaman penting.
- `sitemap.xml` memuat URL kanonis yang benar-benar bisa diakses publik.
- Pastikan semua halaman penting dapat dijangkau melalui tautan internal.
- Setelah domain aktif, verifikasi di Google Search Console dan kirim sitemap.
- Jangan menambahkan URL lokal atau staging ke sitemap produksi.
- Gunakan halaman 404 yang informatif jika hosting mendukungnya.

## 12. Target Performa dan PageSpeed

Target proyek adalah hasil **hijau pada Core Web Vitals/PageSpeed sejauh dapat dicapai**, tetapi skor 100 atau warna hijau tidak dapat dijamin sebelum pengujian pada hosting, perangkat, jaringan, dan data lapangan.

### 12.1 Target Core Web Vitals

Gunakan ambang “baik” yang umum dipakai:

- **LCP:** ≤ 2,5 detik.
- **INP:** ≤ 200 milidetik.
- **CLS:** ≤ 0,1.

Nilai lapangan dapat berbeda dari hasil Lighthouse laboratorium. Uji ulang setelah website dipasang di domain produksi.

### 12.2 Aturan optimasi

- Kompres semua foto; gunakan WebP/AVIF sesuai dukungan dan kebutuhan.
- Sajikan gambar dengan ukuran mendekati ukuran tampilan, menggunakan `srcset`/`sizes` bila perlu.
- Tambahkan `width` dan `height` atau `aspect-ratio` untuk mencegah CLS.
- Gunakan `loading="lazy"` untuk gambar di bawah fold; jangan lazy-load gambar hero/LCP.
- Pertimbangkan `fetchpriority="high"` pada gambar LCP jika sesuai.
- Gunakan `defer` untuk script non-kritis.
- Hindari JavaScript berat, library berlebihan, slider besar, video autoplay, dan efek scroll yang mahal.
- Batasi font, bobot font, dan permintaan eksternal.
- Gunakan CDN Bootstrap hanya bila tersedia dan stabil; pertimbangkan file lokal untuk mengurangi ketergantungan jaringan.
- Minimalkan CSS custom yang tidak digunakan tanpa mengorbankan keterbacaan kode.
- Pastikan gambar tidak memuat ukuran penuh yang jauh lebih besar daripada kebutuhan tampilan.
- Gunakan cache dan kompresi di server produksi jika didukung hosting.
- Jangan menambahkan analytics/chat widget eksternal tanpa kebutuhan dan evaluasi performa.

### 12.3 Pengujian

- Jalankan Lighthouse/PageSpeed Insights pada semua template halaman utama dan artikel.
- Uji mobile dan desktop.
- Target internal: Performance, Accessibility, Best Practices, SEO setinggi mungkin; sasaran awal ≥90 untuk setiap kategori jika realistis.
- Periksa Core Web Vitals lapangan setelah data mencukupi.
- Catat hasil sebelum dan sesudah optimasi.
- Jangan menuliskan skor sebagai fakta sebelum benar-benar diuji pada URL publik.

## 13. Aksesibilitas dan Responsivitas

- Desain mobile-first dan responsif untuk lebar 320 px ke atas.
- Gunakan elemen HTML semantik, label form eksplisit, dan pesan validasi yang dapat dibaca pembaca layar.
- Navigasi keyboard dan focus state harus terlihat.
- Kontras warna teks memenuhi WCAG AA sejauh memungkinkan.
- Jangan mengandalkan warna saja untuk menyampaikan status.
- Sediakan `alt` yang bermakna dan caption bila konteks membutuhkan.
- Hormati `prefers-reduced-motion`.
- Modal/lightbox mengelola fokus dengan baik, dapat ditutup via Escape, dan tidak menjebak pengguna.
- Uji zoom 200% dan tampilan portrait/landscape.
- Hindari teks terlalu kecil dan tombol terlalu rapat.

## 14. Fungsionalitas JavaScript

`assets/js/main.js` bertanggung jawab untuk:

1. Tombol back-to-top dan perilaku tampil/sembunyi.
2. Pengelolaan pesan WhatsApp yang kontekstual.
3. Validasi sisi klien dan penyusunan pesan dari form kontak.
4. Filter kategori menu, dengan progressive enhancement.
5. Preview/lightbox galeri.
6. Fitur kecil yang benar-benar dibutuhkan, tanpa menambah dependensi besar.

Aturan:

- Gunakan strict mode bila sesuai.
- Pastikan kode aman ketika elemen tertentu tidak tersedia pada suatu halaman.
- Hindari inline event handler seperti `onclick` di HTML.
- Jangan memasukkan data pribadi form ke analytics atau log.
- Validasi browser bukan pengganti validasi server; karena tidak ada backend, jangan menyatakan data telah disimpan.
- Jika JavaScript gagal, konten dan navigasi inti tetap dapat digunakan.

## 15. Footer

Footer konsisten di semua halaman:

- Logo dan deskripsi singkat.
- Navigasi utama.
- Tautan menu/paket populer.
- Kontak resmi yang telah diverifikasi.
- Sosial media resmi jika tersedia.
- Tautan kebijakan privasi jika form mengumpulkan data dan kebijakan sudah disiapkan.
- Copyright dengan tahun berjalan atau tahun statis yang dipelihara.
- Jangan memasukkan alamat atau jam buka yang belum terkonfirmasi.

## 16. Metadata Awal yang Disarankan

Metadata berikut adalah draf editorial dan wajib disesuaikan dengan fakta layanan:

| Halaman | Title draf | Meta description draf |
| --- | --- | --- |
| Beranda | Dombastis Heritage \| Sajian Kambing & Nasi Briyani | Jelajahi pilihan olahan kambing, nasi briyani, dan sajian aqiqah dari Dombastis Heritage. |
| Tentang Kami | Tentang Dombastis Heritage dan Konsep Sajian Kami | Kenali konsep Dombastis Heritage, pilihan sajian, nilai layanan, dan peluang kerja sama. |
| Menu | Menu Olahan Kambing, Nasi Briyani & Aqiqah | Lihat pilihan menu olahan kambing, nasi briyani, dan sajian aqiqah yang tersedia. |
| Paket | Paket Sajian Acara dan Aqiqah \| Dombastis Heritage | Temukan pilihan paket sajian untuk kebutuhan keluarga dan acara. Konsultasikan kebutuhan Anda. |
| Galeri | Galeri Sajian dan Momen Dombastis Heritage | Lihat foto sajian, pilihan paket, dan dokumentasi Dombastis Heritage. |
| Blog | Artikel Kuliner dan Panduan Sajian \| Dombastis Heritage | Baca panduan memilih sajian kambing, nasi briyani, dan paket aqiqah untuk berbagai kebutuhan. |
| Kontak | Kontak dan Pemesanan \| Dombastis Heritage | Hubungi Dombastis Heritage untuk bertanya tentang menu, paket, dan kebutuhan pemesanan. |

Periksa panjang title dan meta description secara otomatis atau manual sebelum publikasi. Jangan memaksakan keyword jika membuat metadata tidak natural.

## 17. Kebutuhan Konten dan Aset

Pemilik proyek perlu menyediakan atau menyetujui:

- Logo resmi atau izin untuk membuat logo konsep.
- Nomor WhatsApp bisnis.
- Alamat dan wilayah layanan jika ingin dipublikasikan.
- Jam operasional.
- Daftar menu aktual beserta deskripsi.
- Daftar paket dan detail isi/porsi.
- Foto asli menu, paket, dan tempat.
- Link media sosial resmi.
- Ulasan pelanggan asli dan izin publikasi.
- Informasi partnership yang sudah disetujui.
- Kebijakan pemesanan, pembatalan, pengiriman, dan privasi bila berlaku.

Sebelum data tersedia, gunakan placeholder yang jelas di lingkungan pengembangan dan tandai sebagai TODO. Hapus semua placeholder sebelum website diluncurkan.

## 18. Kriteria Penerimaan (Acceptance Criteria)

### Struktur

- [ ] Semua 7 halaman utama tersedia sebagai file terpisah.
- [ ] Tiga artikel tersedia di folder `blog/`.
- [ ] Header, footer, tombol WhatsApp, dan back-to-top konsisten di semua halaman.
- [ ] Semua link internal menggunakan path yang benar dari halaman utama maupun folder `blog/`.

### Konten

- [ ] Beranda memiliki hero, deskripsi, 3 rekomendasi menu, keunggulan, 3 paket, 6 foto galeri, 3 kartu artikel, 3 testimoni asli/section draft, FAQ, dan CTA.
- [ ] Tentang Kami memuat keunggulan, partnership, elemen kepercayaan, FAQ, dan CTA.
- [ ] Menu memuat kategori olahan kambing, nasi briyani, dan masakan/olahan aqiqah.
- [ ] Paket memuat berbagai paket yang disetujui pemilik, FAQ, dan CTA.
- [ ] Galeri memiliki preview/lightbox, FAQ, dan CTA.
- [ ] Blog menampilkan 3 artikel, FAQ, dan CTA.
- [ ] Kontak memiliki form, kanal sosial resmi, FAQ, dan CTA.
- [ ] Ketiga artikel memiliki struktur heading, jawaban langsung, FAQ, CTA, dan internal link.

### Teknis

- [ ] Website berjalan melalui Five Server tanpa build step.
- [ ] Tidak ada framework selain Bootstrap untuk CSS; CSS tambahan adalah CSS murni.
- [ ] JavaScript murni dan tidak memerlukan backend.
- [ ] Form tidak mengklaim data terkirim jika hanya membuka WhatsApp.
- [ ] Tidak ada error JavaScript fatal di console.
- [ ] Tidak ada tautan rusak, gambar gagal, atau tombol tanpa fungsi.
- [ ] Tampilan responsif pada ponsel, tablet, dan desktop.
- [ ] Semua gambar memiliki alt yang sesuai dan dimensi yang ditentukan.
- [ ] Metadata unik untuk setiap halaman, title sekitar 60 karakter atau kurang sesuai kebutuhan, meta description maksimal 120 karakter.
- [ ] Canonical dan sitemap hanya menggunakan URL produksi yang valid.
- [ ] Structured data sesuai konten yang terlihat dan telah divalidasi.
- [ ] Lighthouse/PageSpeed diuji pada halaman utama dan artikel setelah deployment.
- [ ] Tidak ada testimoni, harga, alamat, klaim layanan, atau sertifikasi palsu.

## 19. Checklist Uji Manual

1. Buka `index.html` melalui Five Server.
2. Klik setiap item navbar dari desktop dan mobile.
3. Buka langsung tiap halaman HTML, termasuk artikel dalam folder `blog/`.
4. Uji seluruh tombol CTA dan tautan WhatsApp setelah nomor resmi dimasukkan.
5. Uji form dengan field kosong, email invalid, dan pesan valid.
6. Pastikan form menampilkan instruksi sebelum membuka WhatsApp dan tidak mengklaim data tersimpan.
7. Uji filter menu saat JavaScript aktif dan pastikan konten tetap terbaca tanpa JS.
8. Buka dan tutup preview galeri memakai mouse, keyboard, dan Escape.
9. Gulir halaman dan uji tombol back-to-top.
10. Periksa console browser dan Network untuk error atau aset terlalu besar.
11. Uji viewport 320 px, 375 px, 768 px, 1024 px, dan desktop lebar.
12. Uji aksesibilitas dasar: keyboard, fokus, label, alt, kontras.
13. Jalankan Lighthouse/PageSpeed pada deployment publik.
14. Validasi title, meta description, canonical, sitemap, robots.txt, dan JSON-LD.
15. Pastikan konten placeholder telah diganti dengan data asli.

## 20. Cara Menjalankan dengan Five Server

1. Buka folder proyek `dombastisheritage` di Visual Studio Code.
2. Pastikan ekstensi **Five Server** telah terpasang dan aktif.
3. Buka `index.html`.
4. Klik **Go Live** atau jalankan Five Server sesuai konfigurasi ekstensi.
5. Website akan terbuka di browser melalui alamat localhost yang ditampilkan oleh ekstensi.
6. Navigasikan ke halaman lain melalui navbar dan uji seluruh fitur.
7. Tidak perlu `npm install`, build, atau server backend.

**Catatan:** Five Server dipakai untuk pengembangan lokal. SEO teknis produksi, canonical, sitemap, redirect, cache, kompresi, dan URL tanpa ekstensi perlu diverifikasi setelah website diunggah ke hosting domain `dombastisheritage.web.id`.

## 21. Rencana Pengerjaan

1. **Fondasi:** struktur folder, token CSS, navbar, footer, dan komponen global.
2. **Halaman utama:** Beranda, Tentang Kami, Menu, Paket, Galeri, Blog, Kontak.
3. **Artikel:** tiga halaman artikel HTML dengan internal link.
4. **Interaksi:** WhatsApp, form-to-WhatsApp, lightbox, filter menu, back-to-top.
5. **SEO:** metadata, heading, canonical, JSON-LD, robots.txt, sitemap.xml.
6. **Performa dan aksesibilitas:** kompresi gambar, responsive test, keyboard test, Lighthouse.
7. **QA dan deployment:** cek semua link, ganti placeholder, deploy ke domain, validasi SEO produksi.

## 22. Instruksi Akhir untuk Developer/AI Agent

Bangun website sesuai PRD ini dengan HTML5, Bootstrap 5, CSS murni, dan JavaScript murni. Buat setiap halaman sebagai file HTML terpisah. Pastikan seluruh website dapat dijalankan langsung melalui Five Server tanpa proses build. Terapkan desain Elegant Heritage Dining dengan nuansa joglo/heritage secara halus, fokus pada foto makanan, keterbacaan, dan CTA pemesanan.

Jangan mengarang fakta bisnis. Tandai informasi yang belum tersedia sebagai TODO internal yang jelas, lalu jangan menampilkannya sebagai klaim publik. Jangan menjanjikan ranking nomor satu atau skor PageSpeed hijau sebelum pengujian. Prioritaskan HTML semantik, aksesibilitas, performa, konten yang bermanfaat, metadata unik, internal linking, structured data yang valid, dan pengalaman pengguna yang baik.
