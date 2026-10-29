/* ============================================================
   Code Minds Creative — app.js
   Reveal animations, nav, drawer, counters, marquee, magnetic
   buttons, scroll progress, forms. Respects reduced-motion.
   ============================================================ */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---- Nav scrolled state + scroll progress + back-to-top ---- */
  const nav = $('.nav'), prog = $('#progress'), toTop = $('#toTop');
  const onScroll = () => {
    const y = window.scrollY;
    nav && nav.classList.toggle('scrolled', y > 20);
    toTop && toTop.classList.toggle('show', y > 600);
    if (prog) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop && toTop.addEventListener('click', () =>
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));

  /* ---- Mobile drawer ---- */
  const burger = $('#burger'), drawer = $('#drawer'), close = $('#drawerClose');
  const setDrawer = (open) => {
    if (!drawer) return;
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    burger && burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger && burger.addEventListener('click', () => setDrawer(true));
  close  && close.addEventListener('click', () => setDrawer(false));
  drawer && $$('a', drawer).forEach(a => a.addEventListener('click', () => setDrawer(false)));
  document.addEventListener('keydown', e => e.key === 'Escape' && setDrawer(false));

  /* ---- Reveal on scroll (fade / slide / scale / stagger) ---- */
  const revealEls = $$('.reveal, .reveal-l, .reveal-r, .reveal-s, [data-stagger]');
  if (reduce) {
    revealEls.forEach(el => el.classList.add('in'));
  } else if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target;
        if (el.hasAttribute('data-stagger')) {
          const step = parseInt(el.dataset.stagger || '90', 10);
          [...el.children].forEach((c, i) => (c.style.transitionDelay = i * step + 'ms'));
        }
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---- Count-up for [data-count] ---- */
  const counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const cio = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        if (reduce) { el.textContent = target + suffix; cio.unobserve(el); return; }
        const dur = 1600, t0 = performance.now();
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => cio.observe(el));
  }

  /* ---- Duplicate marquee / testimonial tracks for seamless loop ---- */
  if (!reduce) $$('[data-loop]').forEach(el => (el.innerHTML += el.innerHTML));

  /* ---- Magnetic buttons ---- */
  if (!reduce && window.matchMedia('(pointer:fine)').matches) {
    $$('[data-magnetic]').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .28}px)`;
      });
      btn.addEventListener('mouseleave', () => (btn.style.transform = ''));
    });
  }

  /* ---- AJAX form handler (contact + brief). Needs [data-ajax-form] + endpoint in action ---- */
  $$('form[data-ajax-form]').forEach(form => {
    const status = $('.form-status', form);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = $('button[type="submit"]', form);
      // Lightweight required-field check
      let ok = true;
      $$('[required]', form).forEach(f => {
        const bad = !String(f.value).trim() || (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
        f.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      if (!ok) { status && (status.textContent = 'Please complete the highlighted fields.', status.className = 'form-status err'); return; }

      btn && (btn.disabled = true, btn.dataset.label = btn.textContent, btn.textContent = 'Sending…');
      status && (status.textContent = '', status.className = 'form-status');
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { 'X-Requested-With': 'fetch' } });
        const data = await res.json();
        if (data.success) {
          form.reset();
          status && (status.textContent = data.message, status.className = 'form-status ok');
        } else {
          status && (status.textContent = data.message || 'Something went wrong.', status.className = 'form-status err');
        }
      } catch (_) {
        status && (status.textContent = 'Network error. Please call ' + (form.dataset.phone || '') + ' or email us.', status.className = 'form-status err');
      } finally {
        btn && (btn.disabled = false, btn.textContent = btn.dataset.label || 'Submit');
      }
    });
  });

  /* ---- Brief modal (animated, service-specific) ---- */
  const modal = document.getElementById('brief-modal');
  if (modal) {
    const openModal = () => {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      const first = modal.querySelector('input:not([type=hidden]),select,textarea');
      if (first && !reduce) setTimeout(() => first.focus(), 450);
    };
    const closeModal = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    };
    $$('[data-open-brief]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); openModal(); }));
    $$('[data-close-brief]', modal).forEach(b => b.addEventListener('click', closeModal));
    modal.addEventListener('click', e => {
      if (e.target === modal || e.target.classList.contains('modal-overlay')) closeModal();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
    if (location.hash === '#brief') openModal();
  }

  /* ---- Auto-populate Service Select from URL Query Parameter ---- */
  const serviceSelect = $('#c-service');
  if (serviceSelect) {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = (params.get('service') || '').toLowerCase().trim();
    if (serviceParam) {
      const slugMap = {
        'logo-design': 'Logo Design',
        'web-development': 'Web Development',
        'ecommerce-shopify': 'Ecommerce & Shopify',
        'video-animation': 'Video Animation',
        'branding': 'Branding',
        'digital-marketing': 'Digital Marketing',
        'mobile-apps': 'Mobile Apps',
        'ppc': 'PPC Advertising',
        'complete-package': 'Complete package'
      };
      const matchVal = slugMap[serviceParam] || serviceParam;
      const opt = [...serviceSelect.options].find(o =>
        o.value.toLowerCase() === matchVal.toLowerCase() ||
        o.text.toLowerCase() === matchVal.toLowerCase() ||
        o.value.toLowerCase().includes(serviceParam)
      );
      if (opt) serviceSelect.value = opt.value;
    }
  }

  /* ---- FAQ accordion ---- */
  $$('.faq-q').forEach(q => q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    const ans = item && item.querySelector('.faq-a');
    if (!ans) return;
    const open = item.classList.toggle('open');
    ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '';
    q.setAttribute('aria-expanded', String(open));
  }));
})();
