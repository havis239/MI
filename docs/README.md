# 🎓 Website MI Muhammadiyah Baruamba

> Website Profesional Madrasah - **Siap Hosting** ✅

---

## 📖 Tentang

Website resmi **Madrasah Ibtidaiyah Muhammadiyah Baruamba** yang terletak di Desa Adisana, Kec. Bumiayu, Kab. Brebes, Jawa Tengah.

---

## ✨ Fitur

- 🏠 **8 Halaman Lengkap** - Beranda, Tentang, Program, Prestasi, Guru, Berita, Galeri, Kontak
- 📱 **Responsive** - Mobile, Tablet, Desktop
- 📝 **Form Pendaftaran Online** - Terintegrasi WhatsApp
- 🗺️ **Google Maps** - Lokasi madrasah
- 🔍 **SEO Optimized** - Meta tags lengkap
- ⚡ **Fast Loading** - Caching & compression
- 🔒 **Secure** - HTTPS ready dengan security headers

---

## 📁 File Penting

```
d:\KKN\Web\
├── 📄 9 File HTML (index, tentang, program, dll)
├── 🎨 style.css - Styling
├── ⚙️ script.js - JavaScript
├── 🖼️ favicon.svg - Icon website
├── 📱 manifest.json - PWA
├── 🤖 robots.txt - SEO
├── 🗺️ sitemap.xml - Sitemap
├── ⚙️ .htaccess - Server config
└── 📖 PANDUAN.md - Panduan lengkap
```

---

## 🚀 Cara Upload ke Hosting

### **Langkah Singkat:**

1. **Login ke cPanel** hosting Anda
2. **Buka File Manager** → folder `public_html`
3. **Upload semua file** dari folder ini (kecuali file .md dan .txt)
4. **Install SSL Certificate** (Let's Encrypt)
5. **Buka domain** Anda di browser

✅ **Selesai! Website sudah live!**

### **Panduan Lengkap:**

📖 Baca file **[PANDUAN.md](PANDUAN.md)** untuk:
- Tutorial upload detail (cPanel, Netlify, GitHub Pages)
- Update domain & Google Maps
- Kustomisasi warna & konten
- Troubleshooting
- Dan lainnya

---

## ⚙️ Sebelum Upload

**PENTING!** Update 3 hal ini:

1. **Domain** di `sitemap.xml`, `robots.txt`, dan meta tags HTML
2. **Google Maps** di `kontak.html` (ambil embed code dari Google Maps)
3. **Info Kontak** pastikan nomor WA, email, alamat sudah benar

Detail lengkap ada di [PANDUAN.md](PANDUAN.md) bagian "Update Sebelum Upload"

---

## 🎨 Kustomisasi

### Ubah Warna
Edit `style.css` baris 9-17:
```css
:root {
  --emerald: #1a5c45;  /* Hijau utama */
  --gold: #c9a84c;      /* Emas aksen */
}
```

### Tambah Berita/Prestasi
Edit array di `script.js`:
- `NEWS` - Untuk berita
- `ACHIEVEMENTS` - Untuk prestasi

Detail lengkap ada di [PANDUAN.md](PANDUAN.md) bagian "Kustomisasi"

---

## 📞 Kontak

**MI Muhammadiyah Baruamba**
- 📱 WhatsApp: 0852-2892-9488
- 📧 Email: mimuhbaruamba@gmail.com
- 📍 Alamat: Desa Adisana, Kec. Bumiayu, Kab. Brebes, Jawa Tengah

---

## 📄 Lisensi

© 2026 MI Muhammadiyah Baruamba. All rights reserved.

---

<div align="center">

**🌟 READY FOR PRODUCTION 🌟**

Developed with ❤️ for education

**[Baca Panduan Lengkap](PANDUAN.md)** | **[Upload Sekarang](#-cara-upload-ke-hosting)**

</div>

## 📁 Struktur File
```
Web/
├── index.html    # File HTML utama
├── style.css     # File CSS styling
├── script.js     # File JavaScript
└── README.md     # Dokumentasi
```

## 🚀 Cara Deploy Website

### Opsi 1: GitHub Pages (GRATIS & MUDAH) ⭐ REKOMENDASI

1. **Buat Repository GitHub**
   - Buka https://github.com dan login
   - Klik tombol "New" untuk membuat repository baru
   - Nama repository: `mimuh-baruamba` atau `website-madrasah`
   - Pilih "Public"
   - Klik "Create repository"

2. **Upload File ke GitHub**
   ```powershell
   # Di PowerShell, masuk ke folder Web
   cd d:\KKN\Web
   
   # Inisialisasi git
   git init
   git add index.html style.css script.js
   git commit -m "Initial commit - Website MI Muhammadiyah Baruamba"
   
   # Link ke repository GitHub (ganti USERNAME dengan username GitHub Anda)
   git remote add origin https://github.com/USERNAME/mimuh-baruamba.git
   git branch -M main
   git push -u origin main
   ```

3. **Aktifkan GitHub Pages**
   - Buka repository di GitHub
   - Klik tab "Settings"
   - Scroll ke bagian "Pages" di menu kiri
   - Di "Source", pilih branch "main" dan folder "/ (root)"
   - Klik "Save"
   - Website akan live di: `https://USERNAME.github.io/mimuh-baruamba`

### Opsi 2: Netlify (GRATIS dengan Custom Domain)

1. **Buka Netlify**
   - Buka https://app.netlify.com
   - Login atau daftar (bisa pakai akun GitHub)

2. **Deploy via Drag & Drop**
   - Klik "Add new site" > "Deploy manually"
   - Drag & drop folder "Web" ke area upload
   - Website akan live dalam 1-2 menit
   - Gratis mendapat URL: `https://random-name.netlify.app`
   - Bisa ganti dengan custom domain gratis

### Opsi 3: Vercel (GRATIS & CEPAT)

1. **Buka Vercel**
   - Buka https://vercel.com
   - Login dengan akun GitHub

2. **Import Project**
   - Klik "New Project"
   - Import dari GitHub repository (jika sudah upload ke GitHub)
   - Atau upload langsung folder
   - Klik "Deploy"
   - Website live di: `https://project-name.vercel.app`

### Opsi 4: InfinityFree (GRATIS dengan PHP & Database)

1. **Daftar di InfinityFree**
   - Buka https://infinityfree.net
   - Daftar akun gratis

2. **Buat Website**
   - Buat account baru
   - Pilih subdomain gratis atau gunakan domain sendiri

3. **Upload via FTP**
   - Gunakan FileZilla atau FTP client lainnya
   - Upload semua file ke folder `htdocs`

### Opsi 5: Hosting Lokal/Server Sendiri

Jika punya VPS atau server sendiri:
```bash
# Install web server (Nginx atau Apache)
# Copy file ke /var/www/html/ atau folder web server
```

## 🌐 Custom Domain

Setelah deploy, Anda bisa menggunakan domain custom seperti:
- `mimuhbaruamba.sch.id`
- `mimuhbaruamba.ac.id`
- `mimuhbaruamba.com`

**Langkah menghubungkan domain:**
1. Beli domain di Niagahoster, IDCloudhost, atau registrar lain
2. Di DNS settings domain, tambahkan:
   - Untuk GitHub Pages: CNAME ke `username.github.io`
   - Untuk Netlify/Vercel: Ikuti petunjuk di dashboard

## 📝 Catatan Penting

- File sudah terpisah (HTML, CSS, JS) untuk memudahkan maintenance
- Website responsive dan mobile-friendly
- Semua data saat ini masih dummy/placeholder
- Perlu update dengan foto dan konten asli sekolah

## 🔧 Update Konten

Untuk mengupdate konten website:
1. Edit file `script.js` untuk data guru, fasilitas, berita, dll
2. Edit file `style.css` untuk mengubah warna atau tampilan
3. Edit file `index.html` untuk mengubah struktur halaman
4. Upload ulang file yang diubah ke hosting

## 📞 Support

Jika butuh bantuan lebih lanjut:
- Email: mimuhbaruamba@gmail.com
- WhatsApp: 0852-2892-9488

---
© 2026 MI Muhammadiyah Baruamba. All Rights Reserved.
