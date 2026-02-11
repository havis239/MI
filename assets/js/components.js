// ═══════════ LOAD NAVBAR & FOOTER ═══════════
// File ini digunakan untuk load navbar dan footer di semua halaman

document.addEventListener('DOMContentLoaded', function() {
  
  // ─── NAVBAR ───
  const navbarHTML = `
<nav class="nav" id="nav">
  <div class="container">
    <div class="nav-inner">
      <a href="../index.html" class="nav-logo">
        <img src="../assets/images/favicon.svg" alt="Logo MI Baruamba" class="nav-logo-img">
        MI Muhammadiyah Baruamba
      </a>
      <ul class="nav-links">
        <li><a href="../index.html" class="active">Beranda</a></li>
        <li class="dropdown">
          <a href="tentang.html">Profil</a>
          <div class="dropdown-menu">
            <a href="tentang.html"><i class="fas fa-info-circle"></i> Tentang Kami</a>
            <a href="fasilitas.html"><i class="fas fa-building"></i> Fasilitas</a>
            <a href="guru.html"><i class="fas fa-chalkboard-teacher"></i> Guru & Staff</a>
          </div>
        </li>
        <li><a href="program.html">Program</a></li>
        <li><a href="prestasi.html">Prestasi</a></li>
        <li><a href="galeri.html">Galeri</a></li>
        <li><a href="berita.html">Berita</a></li>
        <li><a href="kontak.html">Kontak</a></li>
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- Mobile Menu -->
<div class="overlay-mobile" id="overlayMobile"></div>
<div class="nav-menu-mobile" id="navMobile">
  <a href="../index.html"><i class="fas fa-home"></i> Beranda</a>
  <a href="tentang.html"><i class="fas fa-info-circle"></i> Profil</a>
  <a href="tentang.html" style="padding-left:30px;font-size:0.9rem">↳ Tentang Kami</a>
  <a href="fasilitas.html" style="padding-left:30px;font-size:0.9rem">↳ Fasilitas</a>
  <a href="guru.html" style="padding-left:30px;font-size:0.9rem">↳ Guru & Staff</a>
  <a href="program.html"><i class="fas fa-graduation-cap"></i> Program</a>
  <a href="prestasi.html"><i class="fas fa-trophy"></i> Prestasi</a>
  <a href="berita.html"><i class="fas fa-newspaper"></i> Berita</a>
  <a href="galeri.html"><i class="fas fa-images"></i> Galeri</a>
  <a href="kontak.html"><i class="fas fa-envelope"></i> Kontak</a>
</div>
  `;

  // ─── FOOTER ───
  const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="footer-logo"><img src="../assets/images/favicon.svg" alt="Logo MI Baruamba" class="nav-logo-img"> MI Muhammadiyah Baruamba</div>
        <p>Lembaga pendidikan Islam berkualitas yang membentuk generasi beriman, berilmu, dan berakhlak mulia di bawah naungan Persyarikatan Muhammadiyah.</p>
        <div class="social-links">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/mimuhbaruamba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          <a href="https://wa.me/6282324114647" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Halaman</h4>
        <ul>
          <li><a href="../index.html"><i class="fas fa-chevron-right"></i> Beranda</a></li>
          <li><a href="tentang.html"><i class="fas fa-chevron-right"></i> Tentang Kami</a></li>
          <li><a href="program.html"><i class="fas fa-chevron-right"></i> Program</a></li>
          <li><a href="guru.html"><i class="fas fa-chevron-right"></i> Guru</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Informasi</h4>
        <ul>
          <li><a href="prestasi.html"><i class="fas fa-chevron-right"></i> Prestasi</a></li>
          <li><a href="galeri.html"><i class="fas fa-chevron-right"></i> Galeri</a></li>
          <li><a href="berita.html"><i class="fas fa-chevron-right"></i> Berita</a></li>
          <li><a href="kontak.html"><i class="fas fa-chevron-right"></i> Kontak</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Kontak</h4>
        <ul>
          <li><i class="fas fa-map-marker-alt"></i> Baruamba, Bumiayu, Brebes, Jateng</li>
          <li><i class="fas fa-phone"></i> +6282324114647</li>
          <li><i class="fas fa-envelope"></i> mimuhbaruamba@gmail.com</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 MI Muhammadiyah Baruamba. All Rights Reserved.</p>
    </div>
  </div>
</footer>

<button class="scroll-top" id="scrollTop" aria-label="Kembali ke atas"><i class="fas fa-arrow-up"></i></button>
<a href="https://wa.me/6282324114647" class="whatsapp-float" target="_blank" aria-label="Chat WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>
  `;

  // ─── INSERT NAVBAR & FOOTER ───
  const navbarPlaceholder = document.getElementById('navbar-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navbarPlaceholder) {
    navbarPlaceholder.outerHTML = navbarHTML;
  }

  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = footerHTML;
  }

  // ─── SET ACTIVE LINK ───
  // Set active menu berdasarkan URL saat ini
  setTimeout(() => {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a, .nav-menu-mobile a');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === '../index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, 10);

});
