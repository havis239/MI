/* ═══════════════════════════════════════════════════════
   MI MUHAMMADIYAH BARUAMBA - JAVASCRIPT
   Website resmi Madrasah Ibtidaiyah Muhammadiyah Baruamba
   ═══════════════════════════════════════════════════════ */

// ═══════════ DATA ═══════════
const FACILITIES = [
  { icon:'fa-door-open',  color:'#2e7d5e', title:'Ruang Kelas Nyaman',       desc:'6 ruang kelas yang kondusif untuk pembelajaran' },
  { icon:'fa-books',      color:'#e67e22', title:'Perpustakaan',             desc:'Koleksi buku lengkap dan ruang baca yang nyaman' },
  { icon:'fa-chalkboard', color:'#8e44ad', title:'Ruang Guru',              desc:'Ruang guru yang nyaman untuk persiapan mengajar' },
  { icon:'fa-user-tie',   color:'#c0392b', title:'Ruang Kepala Madrasah',   desc:'Ruang pimpinan untuk administrasi dan pelayanan' },
  { icon:'fa-heartbeat',  color:'#27ae60', title:'UKS (Unit Kesehatan)',    desc:'Ruang kesehatan untuk pemeriksaan dan perawatan siswa' },
  { icon:'fa-archive',    color:'#16a085', title:'Gudang',                  desc:'Tempat penyimpanan perlengkapan dan inventaris madrasah' }
];

const TEACHERS = [
  { name:'Slamet, S.Pd.I., M.Pd',      role:'Kepala Madrasah', info:'NIP. 19670801 200501 1 001 | TMT: 17-07-1987' },
  { name:'Shohifah, S.Pd.I',           role:'Guru Kelas I',   info:'NIP. 19700311 200501 2 002 | TMT: 01-08-1991' },
  { name:'Fa\'izah, S.Ag',             role:'Guru Kelas II',  info:'NIP. 19680915 199703 2 001 | TMT: 01-10-2002' },
  { name:'Uswatun Hasanah, S.Pd.I',    role:'Guru Kelas III', info:'S1 – 2014 | TMT: 17-04-2000' },
  { name:'Abdul Wahid',                role:'Guru Kelas IV',  info:'SLTA – 2008 | TMT: 19-07-1994' },
  { name:'Dian Mulyana, S.Pd',         role:'Guru Kelas V',   info:'S1 – 2011 | TMT: 01-07-2007' },
  { name:'Agi Septi Astri, S.Pd',      role:'Guru Kelas VI',  info:'S1 – 2012 | TMT: 01-07-2009' },
  { name:'Fathimatuz Zahro, S.Pd.I',   role:'Guru PAI',       info:'S1 – 2008 | TMT: 01-07-2010' },
  { name:'Salsabila Rizki Rifikoh, S.Pd', role:'Guru Kelas', info:'S1 – 2024 | TMT: 01-01-2025' }
];

const ACHIEVEMENTS = [
  { title:'Juara 1 Lomba MTQ Tingkat Kecamatan', year:'2024', desc:'Tilawah Al-Qur\'an kategori MI' },
  { title:'Juara 2 Lomba Cerdas Cermat',         year:'2024', desc:'Tingkat Kecamatan Bumiayu' },
  { title:'Juara 3 Lomba Tartil Al-Qur\'an',     year:'2024', desc:'Tingkat Kecamatan Bumiayu' },
  { title:'Peserta Terbaik MTQ',                 year:'2023', desc:'Tingkat Kabupaten Brebes' }
];

const NEWS = [
  { badge:'Pengumuman', color:'#c9a84c', icon:'fa-newspaper',  date:'15 Januari 2026', title:'Pendaftaran Siswa Baru Tahun Ajaran 2026/2027', desc:'Pendaftaran dibuka mulai 1 Februari – 30 Juni 2026. Informasi lengkap hubungi 0852-2892-9488' },
  { badge:'Kegiatan',   color:'#2e7d5e', icon:'fa-star-and-crescent', date:'10 Januari 2026', title:'Peringatan Maulid Nabi Muhammad SAW 1448 H', desc:'Kegiatan peringatan Maulid Nabi dengan berbagai lomba Islami dan santunan anak yatim' },
  { badge:'Prestasi',   color:'#e67e22', icon:'fa-trophy',     date:'5 Januari 2026',  title:'Siswa MI Muhammadiyah Raih Juara MTQ',      desc:'Alhamdulillah, siswa kelas 6 berhasil meraih juara 1 lomba MTQ tingkat kabupaten' }
];

// ═══════════ RENDER ═══════════
function getInitials(name) {
  return name.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
}

document.getElementById('facilitiesGrid').innerHTML = FACILITIES.map(f =>
  `<div class="facility-card reveal">
    <div class="facility-thumb" style="background:linear-gradient(135deg,${f.color},${f.color}dd)">
      <i class="fas ${f.icon}"></i><span>${f.title}</span>
    </div>
    <div class="facility-body">
      <h3>${f.title}</h3>
      <p>${f.desc}</p>
    </div>
  </div>`
).join('');

document.getElementById('teachersGrid').innerHTML = TEACHERS.map(t => {
  const colors = ['#1a5c45','#2e7d5e','#e67e22','#8e44ad','#c0392b','#16a085','#2980b9','#d35400','#27ae60'];
  const c = colors[TEACHERS.indexOf(t) % colors.length];
  return `<div class="teacher-card reveal">
    <div class="teacher-avatar" style="background:linear-gradient(135deg,${c},${c}bb)">
      <div class="teacher-initials">${getInitials(t.name)}</div>
    </div>
    <div class="teacher-body">
      <h3>${t.name}</h3>
      <p class="teacher-role">${t.role}</p>
      <p class="teacher-nip">${t.info}</p>
    </div>
  </div>`;
}).join('');

document.getElementById('achievementsGrid').innerHTML = ACHIEVEMENTS.map(a =>
  `<div class="achievement-card reveal">
    <div class="achievement-icon"><i class="fas fa-medal"></i></div>
    <div>
      <h3>${a.title}</h3>
      <span class="achievement-year">${a.year}</span>
      <p>${a.desc}</p>
    </div>
  </div>`
).join('');

document.getElementById('newsGrid').innerHTML = NEWS.map(n =>
  `<article class="news-card reveal">
    <div class="news-thumb" style="background:linear-gradient(135deg,${n.color},${n.color}cc)">
      <i class="fas ${n.icon}"></i>
      <span class="news-badge" style="background:${n.color}">${n.badge}</span>
    </div>
    <div class="news-body">
      <span class="news-date"><i class="far fa-calendar"></i> ${n.date}</span>
      <h3>${n.title}</h3>
      <p>${n.desc}</p>
      <a href="#" class="news-link">Baca Selengkapnya <i class="fas fa-arrow-right"></i></a>
    </div>
  </article>`
).join('');

// ═══════════ NAV SCROLL ═══════════
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // shadow
  nav.classList.toggle('scrolled', window.scrollY > 30);

  // active link
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ═══════════ MOBILE NAV ═══════════
const navToggle   = document.getElementById('navToggle');
const navMobile   = document.getElementById('navMobile');
const overlayMob  = document.getElementById('overlayMobile');

function closeMobile() { navMobile.classList.remove('open'); overlayMob.classList.remove('open'); }
navToggle.addEventListener('click', () => { navMobile.classList.toggle('open'); overlayMob.classList.toggle('open'); });
overlayMob.addEventListener('click', closeMobile);
navMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobile));

// ═══════════ COUNTER ═══════════
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1200;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ═══════════ REVEAL ON SCROLL ═══════════
const reveals = document.querySelectorAll('.reveal');
const counters = document.querySelectorAll('.counter');
let countersDone = false;

function checkReveal() {
  const wh = window.innerHeight;
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < wh * 0.88) el.classList.add('visible');
  });
  // counters
  if (!countersDone) {
    const statsEl = document.querySelector('.stats');
    if (statsEl.getBoundingClientRect().top < wh * 0.9) {
      counters.forEach(animateCounter);
      countersDone = true;
    }
  }
}
window.addEventListener('scroll', checkReveal);
checkReveal();

// ═══════════ SCROLL TOP ─────
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
});
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

// ═══════════ CONTACT FORM ═══════════
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  this.reset();
  setTimeout(() => toast.classList.remove('show'), 3400);
});
