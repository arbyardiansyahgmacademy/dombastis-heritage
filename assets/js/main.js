/**
 * Dombastis Heritage - Main JavaScript
 * High Performance Pure JavaScript with Instant Page Transitions & Progressive Enhancement
 */

'use strict';

// Official WhatsApp Business Number
const WA_NUMBER = '6287787502950';

/* ==========================================================================
   TOP LOADING BAR CONTROLLER
   ========================================================================== */
let topLoadingBar = null;
let loaderTimer = null;

function getTopLoadingBar() {
  if (!topLoadingBar) {
    topLoadingBar = document.getElementById('topLoadingBar');
    if (!topLoadingBar) {
      topLoadingBar = document.createElement('div');
      topLoadingBar.id = 'topLoadingBar';
      document.body.prepend(topLoadingBar);
    }
  }
  return topLoadingBar;
}

function startTopLoader() {
  const bar = getTopLoadingBar();
  clearTimeout(loaderTimer);
  bar.style.transition = 'none';
  bar.style.width = '0%';
  bar.style.opacity = '1';
  bar.classList.add('loading');
  // force layout reflow
  void bar.offsetWidth;
  bar.style.transition = 'width 0.18s cubic-bezier(0.1, 0.8, 0.2, 1)';
  bar.style.width = '75%';
}

function finishTopLoader() {
  const bar = getTopLoadingBar();
  clearTimeout(loaderTimer);
  bar.style.transition = 'width 0.08s linear, opacity 0.12s ease 0.05s';
  bar.style.width = '100%';
  bar.style.opacity = '0';
  loaderTimer = setTimeout(() => {
    bar.classList.remove('loading');
    bar.style.width = '0%';
  }, 180);
}

/* ==========================================================================
   SUPER-FAST INSTANT PAGE TRANSITIONS (< 50ms, Snappy & Direct)
   ========================================================================== */
const pageCache = new Map();

const CORE_ROUTES = [
  '/',
  '/tentang-kami',
  '/menu',
  '/paket',
  '/galeri',
  '/blog',
  '/kontak',
  '/blog/panduan-memilih-paket-aqiqah',
  '/blog/olahan-kambing-untuk-acara-keluarga',
  '/blog/mengenal-nasi-briyani-dan-pilihan-sajiannya'
];

function isInternalLink(link) {
  if (!link || link.target === '_blank' || link.hasAttribute('download')) return false;
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return false;
  try {
    const url = new URL(link.href, window.location.origin);
    return url.origin === window.location.origin;
  } catch (e) {
    return false;
  }
}

function normalizePath(url) {
  try {
    const u = new URL(url, window.location.origin);
    return u.origin + (u.pathname.replace(/\/$/, '') || '/');
  } catch (e) {
    return url;
  }
}

function prefetchPage(url) {
  const key = normalizePath(url);
  if (pageCache.has(key)) return;
  fetch(url, { priority: 'low' })
    .then((res) => {
      if (res.ok) return res.text();
      throw new Error('Network response not ok');
    })
    .then((html) => {
      pageCache.set(key, html);
      pageCache.set(url.split('#')[0], html);
    })
    .catch(() => {});
}

function prefetchCoreRoutes() {
  const currentKey = normalizePath(window.location.href);
  const currentHtml = document.documentElement.outerHTML;
  pageCache.set(currentKey, currentHtml);
  pageCache.set(window.location.href.split('#')[0], currentHtml);

  CORE_ROUTES.forEach((route) => {
    const fullUrl = window.location.origin + route;
    if (normalizePath(fullUrl) !== currentKey) {
      prefetchPage(fullUrl);
    }
  });
}

async function navigateTo(url, push = true) {
  const cleanUrl = url.split('#')[0];
  const normalizedKey = normalizePath(cleanUrl);
  startTopLoader();

  try {
    let html = pageCache.get(normalizedKey) || pageCache.get(cleanUrl);
    if (!html) {
      const res = await fetch(cleanUrl);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      html = await res.text();
      pageCache.set(normalizedKey, html);
      pageCache.set(cleanUrl, html);
    }

    const parser = new DOMParser();
    const newDoc = parser.parseFromString(html, 'text/html');

    // 1. Update Document Title
    if (newDoc.title) {
      document.title = newDoc.title;
    }

    // 2. Direct, Instant DOM Content Swap (Zero Delay, No Sluggish Transition)
    const currentMain = document.querySelector('main');
    const newMain = newDoc.querySelector('main');
    if (currentMain && newMain) {
      currentMain.innerHTML = newMain.innerHTML;
      currentMain.className = newMain.className;
      if (newMain.id) currentMain.id = newMain.id;
    } else {
      window.location.href = url;
      return;
    }

    // 3. Update Breadcrumb bar
    const currentBreadcrumb = document.querySelector('.article-breadcrumb-bar');
    const newBreadcrumb = newDoc.querySelector('.article-breadcrumb-bar');
    if (currentBreadcrumb && newBreadcrumb) {
      currentBreadcrumb.innerHTML = newBreadcrumb.innerHTML;
    } else if (newBreadcrumb && !currentBreadcrumb) {
      const header = document.querySelector('.site-header');
      if (header) header.insertAdjacentElement('afterend', newBreadcrumb.cloneNode(true));
    } else if (currentBreadcrumb && !newBreadcrumb) {
      currentBreadcrumb.remove();
    }

    // 4. Update Active Nav link states
    const targetPath = new URL(url, window.location.origin).pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.navbar-nav .nav-link').forEach((navLink) => {
      const linkPath = new URL(navLink.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
      if (linkPath === targetPath || (linkPath !== '/' && targetPath.startsWith(linkPath))) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });

    // 5. Scroll immediately to top or anchor (instantaneous, no scroll lag)
    if (url.includes('#')) {
      const hash = url.split('#')[1];
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

    // 6. Close mobile navbar if open
    const navbarCollapse = document.getElementById('navbarMain');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      if (window.bootstrap && bootstrap.Collapse) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
        else navbarCollapse.classList.remove('show');
      } else {
        navbarCollapse.classList.remove('show');
      }
    }

    // 7. Re-initialize interactive features
    initPageFeatures();

    // 8. Update browser history
    if (push) {
      history.pushState({ url }, '', url);
    }

    finishTopLoader();
  } catch (err) {
    finishTopLoader();
    window.location.href = url;
  }
}

// Global click & hover delegation for instant navigation
function setupInstantNavigation() {
  // Prefetch on hover and touch
  document.addEventListener('pointerenter', (e) => {
    const link = e.target.closest('a');
    if (link && isInternalLink(link)) {
      prefetchPage(link.href);
    }
  }, { capture: true, passive: true });

  document.addEventListener('touchstart', (e) => {
    const link = e.target.closest('a');
    if (link && isInternalLink(link)) {
      prefetchPage(link.href);
    }
  }, { capture: true, passive: true });

  // Instant transition on click
  document.addEventListener('click', (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    const link = e.target.closest('a');
    if (link && isInternalLink(link)) {
      const currentUrl = window.location.href.split('#')[0];
      const targetUrl = link.href.split('#')[0];

      if (currentUrl === targetUrl && link.href.includes('#')) {
        return;
      }

      e.preventDefault();
      navigateTo(link.href);
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    navigateTo(window.location.href, false);
  });
}

/* ==========================================================================
   PAGE FEATURES INITIALIZATION (RE-RUNS ON PAGE TRANSITION)
   ========================================================================== */
function initPageFeatures() {
  getTopLoadingBar();

  /* 1. Header Scrolled State */
  const header = document.querySelector('.site-header');
  if (header) {
    let headerTicking = false;
    const handleScrollHeader = () => {
      if (!headerTicking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 40) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
          headerTicking = false;
        });
        headerTicking = true;
      }
    };
    window.removeEventListener('scroll', handleScrollHeader);
    window.addEventListener('scroll', handleScrollHeader, { passive: true });
    window.requestAnimationFrame(handleScrollHeader);
  }

  /* 2. Back to Top Button */
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    let bttTicking = false;
    const handleScrollBTT = () => {
      if (!bttTicking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
          } else {
            backToTopBtn.classList.remove('show');
          }
          bttTicking = false;
        });
        bttTicking = true;
      }
    };
    window.removeEventListener('scroll', handleScrollBTT);
    window.addEventListener('scroll', handleScrollBTT, { passive: true });
    window.requestAnimationFrame(handleScrollBTT);

    backToTopBtn.onclick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  /* 3. Contextual WhatsApp Order Links */
  const waButtons = document.querySelectorAll('[data-wa-message]');
  waButtons.forEach((btn) => {
    btn.onclick = (e) => {
      const message = btn.getAttribute('data-wa-message') || 'Halo Dombastis Heritage, saya ingin bertanya tentang menu dan layanan Anda.';
      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`;
      if (btn.tagName.toLowerCase() === 'a') {
        btn.setAttribute('href', waUrl);
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener noreferrer');
      } else {
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
    };
  });

  /* 4. Menu Category Filtering (Menu Page) */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item-card');
  if (filterBtns.length > 0 && menuItems.length > 0) {
    filterBtns.forEach((btn) => {
      btn.onclick = () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');

        menuItems.forEach((item) => {
          const category = item.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            item.style.display = '';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          } else {
            item.style.display = 'none';
          }
        });
      };
    });
  }

  /* 5. Accessible Lightbox Modal (Gallery Page & Grid) */
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('galleryLightbox');
  if (lightbox && galleryItems.length > 0) {
    const lightboxImg = lightbox.querySelector('#lightboxImage');
    const lightboxTitle = lightbox.querySelector('#lightboxTitle');
    const lightboxDesc = lightbox.querySelector('#lightboxDesc');
    const closeBtn = lightbox.querySelector('#lightboxCloseBtn');
    const prevBtn = lightbox.querySelector('#lightboxPrevBtn');
    const nextBtn = lightbox.querySelector('#lightboxNextBtn');

    let currentIndex = 0;
    const galleryData = [];

    galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      const titleElem = item.querySelector('.gallery-caption-title');
      const descElem = item.querySelector('.gallery-caption-desc');

      galleryData.push({
        src: img ? (img.getAttribute('data-large-src') || img.src) : '',
        alt: img ? img.alt : '',
        title: titleElem ? titleElem.textContent.trim() : 'Dokumentasi Dombastis Heritage',
        desc: descElem ? descElem.textContent.trim() : ''
      });

      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', `Lihat foto: ${titleElem ? titleElem.textContent.trim() : 'Galeri'}`);

      const openItem = () => {
        currentIndex = index;
        updateLightboxContent(currentIndex);
        if (typeof lightbox.showModal === 'function') {
          lightbox.showModal();
        }
      };

      item.onclick = openItem;
      item.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openItem();
        }
      };
    });

    const updateLightboxContent = (index) => {
      if (!galleryData[index]) return;
      const data = galleryData[index];
      if (lightboxImg) {
        lightboxImg.src = data.src;
        lightboxImg.alt = data.alt;
      }
      if (lightboxTitle) lightboxTitle.textContent = data.title;
      if (lightboxDesc) lightboxDesc.textContent = data.desc;
    };

    if (closeBtn) closeBtn.onclick = () => lightbox.close();
    if (prevBtn) {
      prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
        updateLightboxContent(currentIndex);
      };
    }
    if (nextBtn) {
      nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % galleryData.length;
        updateLightboxContent(currentIndex);
      };
    }

    lightbox.onclick = (event) => {
      if (event.target === lightbox) lightbox.close();
    };
  }

  /* 6. Blog Article Table of Contents (TOC) Dynamic Generator */
  const articleContent = document.getElementById('articleContent');
  const tocList = document.getElementById('tocList');
  if (articleContent && tocList) {
    tocList.innerHTML = '';
    const headings = articleContent.querySelectorAll('h2');
    headings.forEach((h, index) => {
      const id = h.id || 'section-' + (index + 1);
      if (!h.id) h.id = id;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = h.textContent;
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  const tocToggle = document.getElementById('tocToggle');
  const tocBody = document.getElementById('tocBody');
  if (tocToggle && tocBody) {
    tocToggle.onclick = function () {
      this.classList.toggle('active');
      tocBody.classList.toggle('open');
    };
  }

  /* 7. Article FAQ Accordion */
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((btn) => {
    btn.onclick = function () {
      const item = this.closest('.faq-item');
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    };
  });

  /* 8. Social Share Buttons Handler */
  document.querySelectorAll('.share-btn').forEach((btn) => {
    btn.onclick = function () {
      const type = this.getAttribute('data-share');
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(document.title);
      let shareUrl = '';
      switch (type) {
        case 'wa': shareUrl = 'https://wa.me/?text=' + title + '%20' + url; break;
        case 'fb': shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url; break;
        case 'tw': shareUrl = 'https://twitter.com/intent/tweet?text=' + title + '&url=' + url; break;
        case 'li': shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + url; break;
        case 'copy':
          navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Tautan artikel berhasil disalin ke clipboard!');
          });
          return;
      }
      if (shareUrl) window.open(shareUrl, '_blank', 'width=600,height=500');
    };
  });

  /* 9. Contact Form - Validation & WhatsApp Message Composer */
  const contactForm = document.getElementById('heritageContactForm');
  if (contactForm) {
    const previewContainer = document.getElementById('formMessagePreview');
    const previewText = document.getElementById('previewTextContent');
    const sendWaBtn = document.getElementById('sendWaFromFormBtn');

    contactForm.onsubmit = (e) => {
      e.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const name = document.getElementById('inputNama')?.value.trim() || '';
      const phone = document.getElementById('inputPhone')?.value.trim() || '';
      const email = document.getElementById('inputEmail')?.value.trim() || '-';
      const needType = document.getElementById('inputNeedType')?.value || 'Konsultasi Umum';
      const eventDate = document.getElementById('inputDate')?.value.trim() || 'Belum ditentukan';
      const portion = document.getElementById('inputPortion')?.value.trim() || 'Belum ditentukan';
      const message = document.getElementById('inputMessage')?.value.trim() || '';

      const formattedMessage = 
`*PERMINTAAN KONSULTASI / PESANAN*
*Dombastis Heritage*
----------------------------------------
*Nama:* ${name}
*No. Kontak:* ${phone}
*Email:* ${email}
*Kebutuhan:* ${needType}
*Perkiraan Tanggal:* ${eventDate}
*Estimasi Porsi/Pax:* ${portion}
*Catatan / Pesan:*
${message}
----------------------------------------
_Pesan ini disusun melalui form kontak website Dombastis Heritage._`;

      if (previewContainer && previewText) {
        previewText.textContent = formattedMessage;
        previewContainer.style.display = 'block';
        previewContainer.scrollIntoView({ behavior: 'smooth' });
      }

      if (sendWaBtn) {
        sendWaBtn.onclick = () => {
          const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;
          window.open(waUrl, '_blank', 'noopener,noreferrer');
        };
      }
    };
  }
}

/* ==========================================================================
   DOCUMENT READY ENTRYPOINT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Setup instant navigation delegation
  setupInstantNavigation();

  // Initialize interactive features
  initPageFeatures();

  // Pre-cache core site pages when the browser is idle to avoid competing with FCP/LCP
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => prefetchCoreRoutes(), { timeout: 3500 });
  } else {
    setTimeout(prefetchCoreRoutes, 3000);
  }
});
