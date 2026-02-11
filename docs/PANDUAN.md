# 📖 PANDUAN LENGKAP WEBSITE MI MUHAMMADIYAH BARUAMBA

> Website Profesional Siap Hosting - Updated: 3 Februari 2026

---

## 📋 DAFTAR ISI

1. [Tentang Website](#tentang-website)
2. [Cara Upload ke Hosting](#cara-upload-ke-hosting)
3. [Update Sebelum Upload](#update-sebelum-upload)
4. [Kustomisasi Website](#kustomisasi-website)
5. [Troubleshooting](#troubleshooting)

---

## 🎓 TENTANG WEBSITE

Website ini memiliki **8 halaman lengkap**:

| Halaman | File | Deskripsi |
|---------|------|-----------|
| 🏠 Beranda | index.html | Landing page dengan hero section |
| 📖 Tentang | tentang.html | Profil, visi, misi madrasah |
| 📚 Program | program.html | Program unggulan & ekstrakurikuler |
| 🏆 Prestasi | prestasi.html | Daftar prestasi siswa |
| 👨‍🏫 Guru | guru.html | Profil tenaga pendidik |
| 📰 Berita | berita.html | Berita & pengumuman |
| 📸 Galeri | galeri.html | Dokumentasi foto kegiatan |
| 📞 Kontak | kontak.html | Info kontak & form pendaftaran |

**Fitur Unggulan:**
- ✅ Responsive (Mobile, Tablet, Desktop)
- ✅ Form Pendaftaran Online (terintegrasi WhatsApp)
- ✅ Google Maps
- ✅ SEO Optimized
- ✅ Fast Loading

---

## 🚀 CARA UPLOAD KE HOSTING

### METODE 1: CPANEL (SHARED HOSTING) ⭐ Recommended

#### Langkah 1: Login cPanel
```
1. Buka: cpanel.hosting-anda.com
2. Login dengan username & password hosting
```

#### Langkah 2: Upload File
```
1. Cari dan klik menu "File Manager"
2. Masuk ke folder "public_html" atau "www"
3. Klik tombol "Upload"
4. Pilih SEMUA file dari folder d:\KKN\Web\ kecuali:
   - Jangan upload file .md (dokumentasi)
   - Jangan upload QUICK_START.txt
   - Jangan upload folder .git (jika ada)

File yang WAJIB diupload (20 files):
✓ index.html           ✓ tentang.html         ✓ program.html
✓ prestasi.html        ✓ guru.html            ✓ berita.html
✓ galeri.html          ✓ kontak.html          ✓ 404.html
✓ style.css            ✓ script.js
✓ favicon.svg          ✓ manifest.json
✓ robots.txt           ✓ sitemap.xml          ✓ .htaccess
```

#### Langkah 3: Install SSL (HTTPS)
```
1. Kembali ke dashboard cPanel
2. Cari menu "SSL/TLS" atau "Let's Encrypt SSL"
3. Pilih domain Anda
4. Klik "Install" atau "Issue"
5. Tunggu beberapa menit hingga selesai
```

#### Langkah 4: Test Website
```
1. Buka domain Anda di browser: https://domain-anda.com
2. Test semua halaman berfungsi
3. Test form pendaftaran
4. Test di mobile browser
```

✅ **SELESAI! Website sudah LIVE!**

---

### METODE 2: NETLIFY (GRATIS & MUDAH) 🎯

```
1. Buka: https://netlify.com dan daftar (gratis)
2. Klik "Add new site" > "Deploy manually"
3. Drag & drop folder d:\KKN\Web\ ke browser
4. Tunggu deploy selesai
5. Website otomatis live di: random-name.netlify.app
6. (Optional) Sambungkan domain custom di Settings > Domain
```

---

## ⚙️ UPDATE SEBELUM UPLOAD

### 1. Update Domain (PENTING!)

Ganti `mi-baruamba.sch.id` dengan domain Anda di 3 file:

**File: sitemap.xml**
```xml
<!-- Ganti semua URL -->
<loc>https://mi-baruamba.sch.id/</loc>
<!-- Menjadi: -->
<loc>https://domain-anda.com/</loc>
```

**File: robots.txt**
```
Sitemap: https://domain-anda.com/sitemap.xml
```

**File: Semua HTML (index.html, tentang.html, dll)**
Cari dan ganti:
```html
<meta property="og:url" content="https://mi-baruamba.sch.id">
```
Menjadi:
```html
<meta property="og:url" content="https://domain-anda.com">
```

### 2. Update Google Maps

**File: kontak.html** (sekitar baris 245)

Cara mendapat embed code:
```
1. Buka https://www.google.com/maps
2. Cari: "Desa Adisana, Bumiayu, Brebes"
3. Klik "Share" atau "Bagikan"
4. Pilih tab "Embed a map"
5. Copy kode iframe
6. Paste di kontak.html (ganti iframe yang lama)
```

### 3. Verifikasi Info Kontak

Pastikan sudah benar di semua file HTML:
- ✅ WhatsApp: **0852-2892-9488**
- ✅ Email: **mimuhbaruamba@gmail.com**
- ✅ Alamat: **Desa Adisana, Kec. Bumiayu, Kab. Brebes**

---

## 🎨 KUSTOMISASI WEBSITE

### Mengubah Warna Tema

**File: style.css** (baris 9-17) 
```css
:root {
  --emerald:   #1a5c45;  /* Warna hijau utama */
  --emerald-d: #0f3d2e;  /* Hijau gelap */
  --gold:      #c9a84c;  /* Warna emas/aksen */
  --cream:     #faf7f0;  /* Background terang */
  --ink:       #2a2a2a;  /* Warna teks */
}
```

### Menambah/Edit Berita

**File: script.js** (baris 34-39)
```javascript
const NEWS = [
  { 
    badge: 'Pengumuman', 
    color: '#c9a84c', 
    icon: 'fa-newspaper',  
    date: '15 Januari 2026', 
    title: 'Pendaftaran Siswa Baru Tahun Ajaran 2026/2027', 
    desc: 'Pendaftaran dibuka mulai 1 Februari – 30 Juni 2026'
  },
  // Tambahkan berita baru di sini...
];
```

### Menambah/Edit Prestasi

**File: script.js** (baris 25-29)
```javascript
const ACHIEVEMENTS = [
  { 
    title: 'Juara 1 Lomba MTQ Tingkat Kecamatan', 
    year: '2024', 
    desc: 'Tilawah Al-Qur\'an kategori MI' 
  },
  // Tambahkan prestasi baru di sini...
];
```

### Menambah Foto Galeri

1. Buat folder: `assets/images/gallery/`
2. Upload foto (format: JPG/PNG, max 2MB)
3. Edit **script.js** bagian gallery (tambahkan kode berikut):

```javascript
// Ganti placeholder dengan foto asli
const galleryData = [
  {
    category: 'kegiatan',
    image: 'assets/images/gallery/foto1.jpg',
    title: 'Upacara Bendera',
    date: 'Januari 2026'
  },
  // tambahkan foto lainnya...
];
```

### Update Tahun Ajaran

**File: kontak.html** (baris 140)
```html
<select id="tahunAjaran" name="tahunAjaran" required>
  <option value="2026/2027">2026/2027</option>
  <option value="2027/2028">2027/2028</option>
  <!-- Tambahkan tahun baru setiap tahun -->
</select>
```

---

## 🔍 SETELAH WEBSITE LIVE

### 1. Submit ke Google Search Console

```
1. Buka: https://search.google.com/search-console
2. Klik "Add Property"
3. Masukkan domain: https://domain-anda.com
4. Verifikasi ownership (ikuti instruksi Google)
5. Submit Sitemap: https://domain-anda.com/sitemap.xml
```

### 2. Test Performance

Website untuk test:
- **PageSpeed Insights**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

### 3. Backup Rutin

- Backup file website setiap bulan
- Backup via cPanel File Manager > Compress > Download
- Atau gunakan fitur backup hosting

---

## 🛠️ TROUBLESHOOTING

### Website Tidak Bisa Diakses

**Penyebab & Solusi:**
```
❌ Domain belum dipoint ke hosting
   ✅ Set A Record di DNS domain ke IP hosting

❌ File tidak di folder yang benar
   ✅ Pastikan file ada di public_html atau www

❌ DNS belum propagasi
   ✅ Tunggu 1-24 jam setelah setting DNS
```

### SSL Error (Not Secure)

**Solusi:**
```
1. Install ulang SSL Certificate di cPanel
2. Clear cache browser (Ctrl+Shift+Delete)
3. Pastikan .htaccess sudah di-upload
4. Test di browser incognito
```

### Form Tidak Mengirim ke WhatsApp

**Penyebab & Solusi:**
```
❌ Nomor WhatsApp salah format
   ✅ Pastikan: 6285228929488 (62 = kode Indonesia)

❌ JavaScript error
   ✅ Tekan F12 di browser, check Console untuk error

❌ Browser block popup
   ✅ Allow popup di browser settings
```

### Halaman 404 Not Found

**Solusi:**
```
1. Pastikan .htaccess sudah di-upload
2. Check file permissions: 644 untuk files, 755 untuk folders
3. Clear cache browser
4. Restart server via cPanel (jika ada akses)
```

### Website Lambat Loading

**Solusi:**
```
1. Compress images (gunakan TinyPNG.com)
2. Enable caching via .htaccess (sudah otomatis)
3. Upgrade paket hosting jika perlu
4. Gunakan CDN untuk assets (optional)
```

---

## 📞 SUPPORT & KONTAK

**MI Muhammadiyah Baruamba**
- 📱 WhatsApp: 0852-2892-9488
- 📧 Email: mimuhbaruamba@gmail.com
- 📍 Desa Adisana, Kec. Bumiayu, Kab. Brebes, Jawa Tengah

**Untuk bantuan teknis hosting:**
- Hubungi support hosting Anda
- Atau hubungi nomor di atas

---

## 📁 STRUKTUR FILE

```
d:\KKN\Web\
│
├── 📄 index.html          # Halaman beranda
├── 📄 tentang.html        # Halaman tentang
├── 📄 program.html        # Halaman program
├── 📄 prestasi.html       # Halaman prestasi
├── 📄 guru.html           # Halaman guru
├── 📄 berita.html         # Halaman berita
├── 📄 galeri.html         # Halaman galeri
├── 📄 kontak.html         # Halaman kontak
├── 📄 404.html            # Error page
│
├── 🎨 style.css           # Styling website
├── ⚙️  script.js           # JavaScript functions
│
├── 🖼️  favicon.svg         # Icon website
├── 📱 manifest.json       # PWA manifest
├── 🤖 robots.txt          # SEO robots
├── 🗺️  sitemap.xml         # Sitemap untuk Google
├── ⚙️  .htaccess           # Apache server config
│
└── 📖 PANDUAN.md          # File ini - Panduan lengkap
```

---

## ✅ CHECKLIST FINAL

Sebelum Go Live:
- [ ] Semua file sudah di-upload ke hosting
- [ ] Domain sudah update di sitemap.xml, robots.txt, dan HTML
- [ ] Google Maps sudah update dengan lokasi yang benar
- [ ] SSL Certificate sudah terinstall (HTTPS)
- [ ] Test buka website di browser
- [ ] Test semua halaman berfungsi
- [ ] Test form pendaftaran kirim ke WhatsApp
- [ ] Test responsive di mobile
- [ ] Sitemap sudah di-submit ke Google Search Console

Setelah Live:
- [ ] Share link ke social media
- [ ] Update link website di akun social media
- [ ] Share ke grup WhatsApp orang tua/wali
- [ ] Setup monitoring uptime (optional)

---

<div align="center">

## 🎉 SELAMAT! WEBSITE SIAP DIGUNAKAN! 🎉

**Website Profesional untuk Madrasah**

Developed with ❤️ for **MI Muhammadiyah Baruamba**

© 2026 MI Muhammadiyah Baruamba. All rights reserved.

---

**Jika ada pertanyaan, jangan ragu untuk bertanya!**

</div>
