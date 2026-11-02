/**
 * PERSONALIZE YOUR SITE HERE (這裡修改個人資料)
 * Leave email and githubUsername empty until you are ready to publish them.
 * e.g. email: "yourname@example.com", githubUsername: "your-github-id"
 */
const SITE = {
  displayName: 'Y. Huang',
  initials: 'YH',
  email: '',
  githubUsername: '',
  resumeUrl: '' // optional: e.g. 'resume.pdf'
};

// Populate your name and contact buttons without showing fake links.
document.querySelectorAll('[data-site-name]').forEach(node => { node.textContent = SITE.displayName; });
document.querySelectorAll('[data-site-initials]').forEach(node => { node.textContent = SITE.initials; });
const footerLogo = document.querySelector('.footer-logo');
if (footerLogo) footerLogo.innerHTML = `${SITE.initials.replace(/[&<>"']/g, '')}<span>.</span>`;
document.title = `${SITE.displayName} | Digital Hardware Portfolio`;
document.getElementById('copyright-year').textContent = new Date().getFullYear();
const contactActions = document.getElementById('contact-actions');
const contactLinks = [];
if (SITE.email.trim()) contactLinks.push({text: 'Email me ↗', href: `mailto:${SITE.email.trim()}`, className: 'btn btn-primary'});
if (SITE.githubUsername.trim()) contactLinks.push({text: 'GitHub profile ↗', href: `https://github.com/${encodeURIComponent(SITE.githubUsername.trim())}`, className: 'btn btn-quiet'});
if (SITE.resumeUrl.trim()) contactLinks.push({text: 'Download CV ↗', href: SITE.resumeUrl.trim(), className: 'btn btn-quiet'});
if (contactLinks.length) {
  contactActions.textContent = '';
  contactLinks.forEach(item => {
    const a = document.createElement('a');
    a.textContent = item.text;
    a.href = item.href;
    a.className = item.className;
    if (item.href.startsWith('https://')) {a.target = '_blank'; a.rel = 'noopener noreferrer';}
    contactActions.appendChild(a);
  });
}

// Build PE cells programmatically for compact, readable SVG markup.
const peGroup = document.getElementById('pe-tiles');
if (peGroup) {
  const ns = 'http://www.w3.org/2000/svg';
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
    const rect = document.createElementNS(ns,'rect');
    rect.setAttribute('x', 160 + c * 25);
    rect.setAttribute('y', 134 + r * 25);
    rect.setAttribute('width',17);
    rect.setAttribute('height',17);
    rect.setAttribute('rx',3);
    rect.setAttribute('fill', (r+c) % 5 === 0 ? 'url(#peGrad)' : '#225075');
    rect.setAttribute('stroke', (r+c) % 5 === 0 ? '#82cfff' : '#467b9e');
    rect.setAttribute('stroke-width','.65');
    rect.setAttribute('opacity', (r+c)%5 === 0 ? '.96' : '.82');
    peGroup.appendChild(rect);
  }
}
const miniPeGroup = document.getElementById('small-pe-tiles');
if (miniPeGroup) {
  const ns = 'http://www.w3.org/2000/svg';
  for (let r=0;r<6;r++) for(let c=0;c<8;c++){
    const rect=document.createElementNS(ns,'rect');
    rect.setAttribute('x',139+c*21);rect.setAttribute('y',70+r*21);rect.setAttribute('width',15);rect.setAttribute('height',15);rect.setAttribute('rx',2);
    rect.setAttribute('fill',(r+c)%4===0?'url(#tileBg)':'#1f4b77');
    rect.setAttribute('stroke',(r+c)%4===0?'#9cdeff':'#4382ad');rect.setAttribute('stroke-width','.55');
    miniPeGroup.appendChild(rect);
  }
}
const pixelGrid = document.getElementById('pixel-grid');
if (pixelGrid) {
  const ns = 'http://www.w3.org/2000/svg';
  for(let r=0;r<5;r++) for(let c=0;c<5;c++){
    const rect=document.createElementNS(ns,'rect');
    rect.setAttribute('x',52+c*35);rect.setAttribute('y',13+r*35);
    rect.setAttribute('width',34);rect.setAttribute('height',34);rect.setAttribute('rx',2);
    const active=(r>=1&&r<=3&&c>=1&&c<=3);
    rect.setAttribute('fill',active?(r+c)%2?'#258f7d':'#186a61':'#194b49');
    rect.setAttribute('stroke','#3d8c80');rect.setAttribute('stroke-width','.6');
    pixelGrid.appendChild(rect);
  }
}

// Project category filter.
const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');
filters.forEach(filter => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;
    filters.forEach(btn => {
      const selected = btn === filter;
      btn.classList.toggle('active', selected);
      btn.setAttribute('aria-pressed', String(selected));
    });
    projects.forEach(project => {
      project.hidden = category !== 'all' && project.dataset.category !== category;
    });
  });
});

// Mobile navigation.
const menuBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('primary-nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded',String(open));
  menuBtn.setAttribute('aria-label',open?'Close navigation':'Open navigation');
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded','false');
  menuBtn.setAttribute('aria-label','Open navigation');
}));

// Fade-in only when supported. Ensure all content stays readable otherwise.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: .08, rootMargin: '0px 0px 70px 0px'});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
}
