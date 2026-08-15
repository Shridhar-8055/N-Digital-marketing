/* ══════════════════════════════════════════════════════════════════
   IDM — shared rendering + behaviour for every page.
   Load order:  content.js  →  site.js  (both at the end of <body>)

   Every block below is guarded on the element existing, so each page
   only gets the pieces it actually contains.
══════════════════════════════════════════════════════════════════ */

const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const $   = id => document.getElementById(id);

/* ── "typical course vs IDM" table ──────────────────────────────────
   A real <table>, so the relationship between a row label and its two
   values survives for screen readers. CSS restacks it into cards on
   narrow screens; data-label carries the column name into that view. */
if ($('compareBody')) {
  $('compareBody').innerHTML = COMPARE.map(([dimension, typical, idm]) => `
    <tr>
      <th scope="row">${esc(dimension)}</th>
      <td data-label="A typical course">${esc(typical)}</td>
      <td class="is-idm" data-label="IDM">${esc(idm)}</td>
    </tr>`).join('');
}

/* ── footer contact + social icons ──────────────────────────────── */
if ($('footContact') || $('footSocial')) {
  const c = CONTACT;

  if ($('footContact')) {
    const row = (icon, label, href) => href
      ? `<li><a href="${href}" class="foot-contact">${icon}<span>${esc(label)}</span></a></li>`
      : `<li><span class="foot-contact">${icon}<span>${esc(label)}</span></span></li>`;

    const ICON_PHONE = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>`;
    const ICON_WA = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 004.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm4.99 13.6c-.21.59-1.24 1.15-1.72 1.2-.44.05-.99.07-1.6-.1a13.3 13.3 0 01-1.45-.54c-2.55-1.1-4.22-3.67-4.35-3.84-.13-.17-1.05-1.39-1.05-2.65s.66-1.88.9-2.14c.23-.26.51-.32.68-.32h.49c.16 0 .37-.06.58.44.21.51.72 1.76.78 1.89.06.13.1.28.02.45-.09.17-.13.28-.26.43l-.39.45c-.13.13-.26.27-.11.53.15.26.66 1.09 1.42 1.76.97.87 1.79 1.14 2.05 1.27.26.13.41.11.56-.07.15-.17.64-.75.81-1.01.17-.26.34-.21.57-.13.23.09 1.47.69 1.72.82.26.13.43.19.49.3.06.1.06.6-.14 1.19z"/></svg>`;
    const ICON_MAIL = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.24l-8 4.62-8-4.62V6l8 4.62L20 6v2.24z"/></svg>`;
    const ICON_PIN = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>`;

    $('footContact').innerHTML =
      row(ICON_PHONE, c.phoneLabel, 'tel:' + c.tel)
      + row(ICON_WA, 'WhatsApp us', 'https://wa.me/' + c.whatsapp)
      + (c.email   ? row(ICON_MAIL, c.email, 'mailto:' + c.email) : '')
      + (c.address ? row(ICON_PIN, c.address, '') : '');
  }

  if ($('footSocial')) {
    const PATHS = {
      Instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 01-1.38-.9 3.8 3.8 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.24a6.6 6.6 0 100 13.2 6.6 6.6 0 000-13.2zm0 10.89a4.29 4.29 0 110-8.58 4.29 4.29 0 010 8.58zm8.4-11.15a1.54 1.54 0 11-3.08 0 1.54 1.54 0 013.08 0z',
      LinkedIn:  'M6.94 5a2 2 0 11-4 0 2 2 0 014 0zM3.2 8.5h3.5V21H3.2V8.5zm5.9 0h3.35v1.7h.05c.47-.85 1.6-1.75 3.3-1.75 3.53 0 4.2 2.2 4.2 5.05V21h-3.5v-6.1c0-1.45-.03-3.3-2.05-3.3-2.05 0-2.36 1.57-2.36 3.2V21H9.1V8.5z',
      YouTube:   'M23 12s0-3.4-.43-5.03a2.6 2.6 0 00-1.84-1.85C19.1 4.7 12 4.7 12 4.7s-7.1 0-8.73.42A2.6 2.6 0 001.43 6.97C1 8.6 1 12 1 12s0 3.4.43 5.03a2.6 2.6 0 001.84 1.85c1.63.42 8.73.42 8.73.42s7.1 0 8.73-.42a2.6 2.6 0 001.84-1.85C23 15.4 23 12 23 12zM9.75 15.27V8.73L15.5 12l-5.75 3.27z',
      Facebook:  'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z',
      X:         'M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.22-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23zm-1.16 17.52h1.83L7.01 4.13H5.05l12.03 15.64z',
    };
    $('footSocial').innerHTML = SOCIALS.map(([name, url]) => {
      const svg = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${PATHS[name] || ''}"/></svg>`;
      /* no URL yet: render it dimmed and inert rather than as a dead link */
      return url
        ? `<a class="foot-social" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${esc(name)}" title="${esc(name)}">${svg}</a>`
        : `<span class="foot-social is-off" aria-hidden="true" title="${esc(name)} (not set)">${svg}</span>`;
    }).join('');
  }
}

/* ── success stories carousel ───────────────────────────────────── */
if ($('storyTrack')) {
  const initials = n => n.replace(/\[\[.*?\]\]/g, '').trim().split(/\s+/)
                         .filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('') || '?';

  $('storyTrack').innerHTML = STORIES.map(([name, photo, tint, company, from, to, pkg]) => `
    <article class="story">
      <div class="story-photo" style="background:${esc(tint)}">
        ${photo
          ? `<img src="${esc(photo)}" alt="${esc(name)}" loading="lazy" decoding="async">`
          : `<span class="story-initials" aria-hidden="true">${esc(initials(name))}</span>`}
      </div>
      <div class="story-body">
        <p class="story-name">${esc(name)}</p>
        <p class="story-company">${esc(company)}</p>
        <div class="story-move">
          <span class="story-from">${esc(from)}</span>
          <span class="story-arrow" aria-hidden="true">&rarr;</span>
          <span class="story-to">${esc(to)}</span>
        </div>
        <p class="story-pkg"><span>Package</span> <strong>${esc(pkg)}</strong></p>
      </div>
    </article>`).join('')
    + `
    <article class="story story-cta">
      <p class="text-[.95rem] text-inkDark/70 mb-5">Want to see more inspiring stories?</p>
      <button type="button" data-lead="placement" class="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-[.9rem] font-semibold">
        View All Success Stories <span aria-hidden="true">&rarr;</span>
      </button>
    </article>`;

  /* the small stack of faces above the carousel */
  if ($('storyFaces')) {
    $('storyFaces').innerHTML = STORIES.slice(0, 5).map(([name, photo, tint]) => `
      <span class="story-face" style="background:${esc(tint)}">
        ${photo ? `<img src="${esc(photo)}" alt="" loading="lazy">` : esc(initials(name))}
      </span>`).join('');
  }

  /* ── carousel controls ───────────────────────────────────────────
     Scrolls by one card, measured from the live layout rather than a
     hardcoded width, so it stays correct as the card resizes across
     breakpoints. */
  const track = $('storyTrack');
  const bar   = $('storyProgress');
  const step  = () => {
    const card = track.querySelector('.story');
    if (!card) return track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    return card.getBoundingClientRect().width + gap;
  };
  const paintBar = () => {
    if (!bar) return;
    const max = track.scrollWidth - track.clientWidth;
    bar.style.width = (max > 8 ? Math.min(100, (track.scrollLeft / max) * 100) : 100) + '%';
  };
  const go = dir => track.scrollBy({left: dir * step(), behavior: 'smooth'});

  const prev = $('storyPrev'), next = $('storyNext');
  if (prev) prev.addEventListener('click', () => go(-1));
  if (next) next.addEventListener('click', () => go(1));
  track.addEventListener('scroll', paintBar, {passive: true});
  addEventListener('resize', paintBar, {passive: true});
  paintBar();
}

/* ── headline number band, counts up on first view ──────────────── */
if ($('statBand')) {
  $('statBand').innerHTML = STATS.map(([value, suffix, label]) => `
    <article class="reveal card rounded-2xl px-5 py-7 sm:px-7 sm:py-8 text-center">
      <p class="stat-num" data-count="${esc(value)}" data-suffix="${esc(suffix)}">0${esc(suffix)}</p>
      <p class="mt-3 text-[.84rem] sm:text-[.9rem] text-cream/60">${esc(label)}</p>
    </article>`).join('');

  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const run = el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    if (still) { el.textContent = target + suffix; return; }
    const DUR = 1400, t0 = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - t0) / DUR);
      /* ease-out cubic: fast start, gentle landing */
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const counters = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { run(e.target); counters.unobserve(e.target); }
  }), {threshold: .6});
  $('statBand').querySelectorAll('.stat-num').forEach(el => counters.observe(el));
}

/* ── skill chips — two counter-scrolling rows ───────────────────── */
if ($('skillRowA') || $('skillRowB')) {
  const chip = t => `<span class="skill-chip">${esc(t)}</span>`;
  const fillSkills = (el, list) => {
    const set = list.map(chip).join('');
    el.innerHTML = `<div class="marquee-set">${set}</div><div class="marquee-set" aria-hidden="true">${set}</div>`;
  };
  const half = Math.ceil(SKILLS.length / 2);
  if ($('skillRowA')) fillSkills($('skillRowA'), SKILLS.slice(0, half));
  if ($('skillRowB')) fillSkills($('skillRowB'), SKILLS.slice(half));
}

/* ── placement marquee — two rows, opposite directions ──────────── */
if ($('logoRowA') || $('logoRowB')) {
  const tile = ([file, brand]) =>
    `<div class="logo-tile"><img src="public/${file}" alt="${esc(brand)}" loading="lazy" decoding="async"></div>`;
  /* the set is duplicated so the loop has no visible seam; the copy is
     hidden from screen readers so each brand is announced once */
  const fill = (el, list) => {
    const set = list.map(tile).join('');
    el.innerHTML = `<div class="marquee-set">${set}</div><div class="marquee-set" aria-hidden="true">${set}</div>`;
  };
  const mid = Math.ceil(LOGOS.length / 2);
  if ($('logoRowA')) fill($('logoRowA'), LOGOS.slice(0, mid));
  if ($('logoRowB')) fill($('logoRowB'), LOGOS.slice(mid));
}

/* ── full curriculum accordion (curriculum.html) ────────────────── */
if ($('moduleGrid')) {
  $('moduleGrid').innerHTML = MODULES.map(([title, points, tools, days], i) => `
    <details class="reveal rounded-2xl bg-white border border-inkDark/10 overflow-hidden hover:border-brand/40 transition-colors">
      <summary class="flex items-start gap-4 p-6">
        <span class="shrink-0 grid place-items-center h-9 w-9 rounded-lg bg-brand/10 text-brand text-[.85rem] font-semibold">${String(i+1).padStart(2,'0')}</span>
        <span class="flex-1 min-w-0">
          <span class="block text-[.72rem] tracking-[.18em] uppercase text-brand font-semibold mb-1">Module ${i+1} · ${esc(days)} · 10 hrs</span>
          <span class="block font-display text-[1.02rem] leading-snug text-inkDark">${esc(title)}</span>
        </span>
        <span class="chev shrink-0 text-brand text-xl leading-none mt-1">+</span>
      </summary>
      <div class="px-6 pb-6 pl-[4.75rem]">
        <ul class="space-y-2.5 text-[.92rem] text-inkDark/70">
          ${points.map(p => `<li class="flex gap-2.5"><span class="text-brand shrink-0">›</span>${esc(p)}</li>`).join('')}
        </ul>
        <p class="mt-5 pt-4 border-t border-inkDark/10 text-[.82rem] text-inkDark/55">
          <span class="uppercase tracking-[.14em] text-brand font-semibold">Tools</span> · ${esc(tools)}
        </p>
      </div>
    </details>`).join('');
}

/* ── the internship phase (career.html) ─────────────────────────── */
if ($('internshipGrid')) {
  $('internshipGrid').innerHTML = INTERNSHIP.map(([title, when, points]) => `
    <article class="reveal card rounded-2xl p-9">
      <span class="eyebrow">${esc(when)}</span>
      <h3 class="mt-3 font-display text-[1.35rem] mb-6">${esc(title)}</h3>
      <ul class="space-y-3.5 text-[.94rem] text-cream/65 border-t border-line pt-6">
        ${points.map(p => `<li class="flex gap-3"><span class="text-accent mt-0.5 shrink-0">✓</span>${esc(p)}</li>`).join('')}
      </ul>
    </article>`).join('');
}

/* ── assessment weighting table (curriculum.html) ───────────────── */
if ($('assessmentList')) {
  $('assessmentList').innerHTML = ASSESSMENT.map(([name, what, weight]) => `
    <li class="reveal flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-xl bg-white border border-inkDark/10 px-6 py-5">
      <span class="font-display text-[1.5rem] leading-none text-brand shrink-0 sm:w-20">${esc(weight)}</span>
      <span class="flex-1 min-w-0">
        <span class="block font-display text-[1.02rem] text-inkDark">${esc(name)}</span>
        <span class="block mt-1 text-[.9rem] text-inkDark/65">${esc(what)}</span>
      </span>
    </li>`).join('');
}

/* ── curriculum preview — titles only, links out (index.html) ───── */
if ($('modulePreview')) {
  $('modulePreview').innerHTML = MODULES.map(([title, , , days], i) => `
    <div class="reveal flex items-center gap-4 rounded-xl bg-white border border-inkDark/10 px-5 py-4">
      <span class="shrink-0 grid place-items-center h-8 w-8 rounded-lg bg-brand/10 text-brand text-[.78rem] font-semibold">${String(i+1).padStart(2,'0')}</span>
      <span class="min-w-0">
        <span class="block text-[.66rem] tracking-[.16em] uppercase text-brand/70 font-semibold">${esc(days)}</span>
        <span class="block font-display text-[.98rem] leading-snug text-inkDark">${esc(title)}</span>
      </span>
    </div>`).join('');
}

/* ── "what happens when you join" progression (index.html) ──────── */
if ($('journey')) {
  const last = JOURNEY.length - 1;
  $('journey').innerHTML = JOURNEY.map(([lead, becomes, topics], i) => {
    const payoff = i === last;
    return `
    <li class="journey-step reveal ${payoff ? 'is-payoff' : ''}">
      <span class="journey-dot" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
      <div class="min-w-0">
        <p class="text-[.66rem] md:text-[.8rem] tracking-[.16em] md:tracking-[.18em] uppercase ${payoff ? 'text-accent' : 'text-cream/40'} mb-1.5 md:mb-2">${esc(lead)}</p>
        <h3 class="font-display text-[.98rem] md:text-[1.45rem] leading-snug ${payoff ? 'text-accent' : 'text-cream'}">${esc(becomes)}</h3>
        <p class="mt-1.5 md:mt-2.5 text-[.78rem] md:text-[.94rem] text-cream/60">${esc(topics)}</p>
      </div>
    </li>`;
  }).join('');
}

/* ── the five layers (index.html) ───────────────────────────────── */
if ($('layerStack')) {
  $('layerStack').innerHTML = LAYERS.map(([num, name, items, img]) => `
    <article class="layer reveal">
      <span class="layer-bg" aria-hidden="true"${img ? ` style="background-image:url('${esc(img)}')"` : ''}></span>
      <span class="layer-scrim" aria-hidden="true"></span>
      <span class="layer-rail" aria-hidden="true"></span>

      <!-- collapsed spine (accordion mode only) -->
      <div class="layer-v" aria-hidden="true">
        <span class="layer-v-num">${esc(num)}</span>
        <span class="layer-v-name">${esc(name)}</span>
      </div>

      <!-- expanded content -->
      <div class="layer-h">
        <div class="layer-head">
          <span class="layer-num">${esc(num)}</span>
          <span class="layer-name">${esc(name)}</span>
        </div>
        <div class="layer-chips">
          ${items.map(t => `<span class="layer-chip">${esc(t)}</span>`).join('')}
        </div>
      </div>
    </article>`).join('');

  /* Open state is a class, not :hover — a phone has no hover, so these
     panels were completely inert on touch. Pointer devices still open on
     mouseenter, so the desktop feel is unchanged. */
  const panels = [...$('layerStack').querySelectorAll('.layer')];
  const openPanel = el => panels.forEach(p => p.classList.toggle('is-open', p === el));
  openPanel(panels[0]);

  const finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches;
  panels.forEach((p, i) => {
    p.tabIndex = 0;
    p.setAttribute('role', 'button');
    p.setAttribute('aria-label', LAYERS[i][1] + ": show what's covered");
    if (finePointer) p.addEventListener('mouseenter', () => openPanel(p));
    p.addEventListener('click', () => openPanel(p));
    p.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPanel(p); }
    });
  });
}

/* ── FAQs ───────────────────────────────────────────────────────── */
if ($('faqList')) {
  $('faqList').innerHTML = FAQS.map(([q, a]) => `
    <details class="reveal card rounded-xl overflow-hidden">
      <summary class="flex items-center gap-4 p-5 sm:p-6">
        <span class="flex-1 font-display text-[1rem] leading-snug">${esc(q)}</span>
        <span class="chev shrink-0 text-accent text-xl leading-none">+</span>
      </summary>
      <p class="px-5 sm:px-6 pb-6 text-[.94rem] text-cream/65 leading-relaxed">${esc(a)}</p>
    </details>`).join('');
}

/* ── career: roles ──────────────────────────────────────────────── */
if ($('roleGrid')) {
  $('roleGrid').innerHTML = ROLES.map(([title, blurb, tags]) => `
    <article class="reveal card rounded-2xl p-7 flex flex-col">
      <h3 class="font-display text-[1.12rem] leading-snug mb-3">${esc(title)}</h3>
      <p class="text-[.93rem] text-cream/65 leading-relaxed flex-1">${esc(blurb)}</p>
      <div class="flex flex-wrap gap-2 mt-6 pt-5 border-t border-line">
        ${tags.map(t => `<span class="rounded-full border border-line px-3 py-1 text-[.76rem] text-cream/55">${esc(t)}</span>`).join('')}
      </div>
    </article>`).join('');
}

/* ── career: the three routes out ───────────────────────────────── */
if ($('pathGrid')) {
  $('pathGrid').innerHTML = PATHS.map(([title, blurb, points], i) => `
    <article class="reveal card rounded-2xl p-9">
      <span class="eyebrow">Path ${String(i+1).padStart(2,'0')}</span>
      <h3 class="mt-3 font-display text-[1.35rem] mb-3">${esc(title)}</h3>
      <p class="text-[.94rem] text-cream/65 leading-relaxed mb-6">${esc(blurb)}</p>
      <ul class="space-y-3.5 text-[.94rem] text-cream/65 border-t border-line pt-6">
        ${points.map(p => `<li class="flex gap-3"><span class="text-accent mt-0.5 shrink-0">✓</span>${esc(p)}</li>`).join('')}
      </ul>
    </article>`).join('');
}

/* ── career: what we actually do for you ────────────────────────── */
if ($('supportGrid')) {
  $('supportGrid').innerHTML = SUPPORT.map(([title, blurb], i) => `
    <article class="reveal rounded-2xl bg-white border border-inkDark/8 p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <span class="block text-[.72rem] tracking-[.18em] uppercase text-brand font-semibold mb-3">${String(i+1).padStart(2,'0')}</span>
      <h3 class="font-display text-[1.08rem] mb-2.5 text-brandAlt">${esc(title)}</h3>
      <p class="text-[.92rem] leading-relaxed text-inkDark/70">${esc(blurb)}</p>
    </article>`).join('');
}

if ($('year')) $('year').textContent = new Date().getFullYear();

/* ══════════════════════════════════════════════════════════════════
   BEHAVIOUR
══════════════════════════════════════════════════════════════════ */

/* The nav has a single fixed appearance — no scroll listener, because it
   no longer changes with scroll position. Styling lives in .nav-glass. */

/* mobile menu */
const navToggle = $('navToggle');
const menu      = $('mobileMenu');
if (navToggle && menu) {
  navToggle.addEventListener('click', () => {
    const open = !menu.classList.toggle('hidden');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.add('hidden');
    navToggle.setAttribute('aria-expanded','false');
  }));
}

/* scroll reveal */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:.12, rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal').forEach((el,i) => {
  el.style.transitionDelay = (i % 4) * 70 + 'ms';
  io.observe(el);
});

/* one accordion open at a time, per group */
document.querySelectorAll('[data-accordion]').forEach(group => {
  group.addEventListener('toggle', e => {
    if (e.target.tagName !== 'DETAILS' || !e.target.open) return;
    group.querySelectorAll('details[open]').forEach(d => { if (d !== e.target) d.open = false; });
  }, true);
});

/* ── scroll progress bar ────────────────────────────────────────── */
const bar = $('scrollBar');
if (bar) {
  /* Written straight from the scroll handler rather than deferred into a
     rAF. It is a single style write, the browser already coalesces scroll
     events, and a rAF gate needs a "frame pending" flag that stays stuck
     if a frame never arrives — which is exactly what happens in a
     background tab. */
  const paint = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? Math.min(100, (scrollY / max) * 100) : 0) + '%';
  };
  addEventListener('scroll', paint, {passive: true});
  addEventListener('resize', paint, {passive: true});
  paint();
}

/* ── cursor spotlight on cards ──────────────────────────────────────
   Pointer-device only: on touch there is no cursor to follow, and the
   listener would just cost battery. Reads are cheap (event coords) and
   the write is batched into one rAF. */
if (matchMedia('(hover:hover) and (pointer:fine)').matches) {
  let frame = null;
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('pointermove', e => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
        card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
        frame = null;
      });
    });
  });
}

/* ══════════════════════════════════════════════════════════════════
   LEAD MODAL — three variants, one dialog
     brochure-button  hands over the PDF once the form is submitted
     auto-popup       the 5s timed general enquiry, no download
     placement        the carousel's "View All Success Stories" card
   All three share the fields and the sheet; VARIANTS holds the copy and
   whether a file is delivered. A trigger names its variant with
   data-lead, or uses data-brochure as shorthand for the first.
══════════════════════════════════════════════════════════════════ */
/* The 10-page course syllabus. Renamed off "IDM course syllabus.pdf" —
   spaces in a filename have to be percent-encoded in every reference, and
   one missed escape is a silent 404. */
const BROCHURE_FILE = 'public/IDM-Course-Syllabus.pdf';
/* ══════════════════════════════════════════════════════════════════
   LEAD CAPTURE -> GOOGLE SHEET
   Both the brochure modal and the application form post here.
   Setup is in google-apps-script.gs — deploy it, paste the /exec URL
   below, and rows start appearing in the sheet.
   Deployed 15 Aug 2026. Health check: open the URL in a browser, it
   answers {"ok":true,...,"rows":N}. If you redeploy the script, Apps
   Script issues a NEW /exec URL unless you update the existing
   deployment — update it here if it changes.
══════════════════════════════════════════════════════════════════ */
const LEADS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzWVxn-XPb1lq9OL5z-fPbfpmEveF8IQs1hO4tLU_H4Rf8rkJljX3rCQc45nvpmb7Jn/exec';

/* Apps Script answers a POST with a 302 to a googleusercontent URL that
   carries no CORS headers, so a normal fetch rejects AFTER the row has
   already been written — a success that looks like a failure. no-cors
   avoids that: the request is sent, the response is simply opaque.
   URL-encoded keeps it a simple request, so there is no preflight
   (Apps Script cannot answer an OPTIONS preflight anyway). */
const sendLead = async fields => {
  if (!LEADS_ENDPOINT) return false;
  try {
    await fetch(LEADS_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
      body: new URLSearchParams({
        ...fields,
        page: location.pathname.split('/').pop() || 'index.html',
        submitted: new Date().toISOString(),
      }).toString(),
    });
    return true;
  } catch {
    return false;   /* never surfaced to the user; see the callers */
  }
};

const VARIANTS = {
  'brochure-button': {
    eyebrow:  'Programme brochure',
    title:    'Get the Full Brochure',
    body:     'The complete 12-module syllabus, the tool list, the internship structure.',
    cta:      'Download Brochure',
    working:  'Preparing…',
    download: true,
    doneTitle:'Thanks, check your downloads.',
    doneBody: "Your brochure is downloading. We'll be in touch shortly.",
  },
  'placement': {
    eyebrow:  'Placement support',
    title:    'See Where Our Learners Landed',
    body:     'Leave your details and our placement team will share the full list of roles, companies and packages, and walk you through how the support actually works.',
    cta:      'Request Placement Details',
    working:  'Sending…',
    download: false,
    doneTitle:"Thanks, we've got your details.",
    doneBody: 'Our team will reach out to you within 24 hours.',
  },
  'auto-popup': {
    eyebrow:  'Talk to a mentor',
    title:    'Have a Question First?',
    body:     'Leave your details and a mentor will call you back with the session timings, the fee and honest answers, before you commit to anything.',
    cta:      'Request a Callback',
    working:  'Sending…',
    download: false,
    doneTitle:"Thanks, we've got your details.",
    doneBody: 'A mentor will call you back shortly.',
  },
};

if (document.querySelector('[data-brochure], [data-lead]')) {
  const dlg = document.createElement('dialog');
  dlg.id = 'brochureModal';
  dlg.className = 'modal';
  dlg.innerHTML = `
    <button class="modal-x" type="button" aria-label="Close">&times;</button>
    <p class="eyebrow mb-3" id="mEyebrow"></p>
    <h2 class="font-display text-[1.5rem] sm:text-[1.8rem] leading-snug mb-2" id="mTitle"></h2>
    <p class="text-[.94rem] text-cream/65 leading-relaxed mb-7" id="mBody"></p>

    <form id="brochureForm" novalidate>
      <label class="modal-label" for="b-name">Name</label>
      <input class="modal-input" id="b-name" name="name" type="text" required autocomplete="name">

      <label class="modal-label" for="b-email">Email</label>
      <input class="modal-input" id="b-email" name="email" type="email" required autocomplete="email">

      <label class="modal-label" for="b-phone">Phone</label>
      <input class="modal-input" id="b-phone" name="phone" type="tel" required autocomplete="tel"
             inputmode="tel" pattern="[0-9+()\s-]{7,}">

      <p id="brochureError" class="modal-error" hidden></p>
      <button class="btn-primary w-full rounded-full px-8 py-4 font-semibold mt-6" type="submit">
        Download Brochure
      </button>
      <p class="text-[.76rem] text-cream/45 text-center mt-4">
        We'll only use your details to contact you about this programme.
      </p>
    </form>

    <div id="brochureDone" class="text-center py-6" hidden>
      <p class="font-display text-[1.2rem] text-accent mb-2" id="brochureDoneTitle"></p>
      <p class="text-[.92rem] text-cream/65" id="brochureDoneMsg"></p>
    </div>`;
  document.body.appendChild(dlg);

  const form   = dlg.querySelector('#brochureForm');
  const errBox = dlg.querySelector('#brochureError');
  const done   = dlg.querySelector('#brochureDone');
  const doneMsg= dlg.querySelector('#brochureDoneMsg');
  const submit = form.querySelector('button[type=submit]');

  let opener = 'brochure-button';       /* recorded as Source in the sheet */
  const open = (via) => {
    opener = via || 'brochure-button';
    const v = VARIANTS[opener] || VARIANTS['brochure-button'];
    dlg.querySelector('#mEyebrow').textContent = v.eyebrow;
    dlg.querySelector('#mTitle').textContent   = v.title;
    dlg.querySelector('#mBody').textContent    = v.body;
    errBox.hidden = true; done.hidden = true; form.hidden = false;
    submit.disabled = false; submit.textContent = v.cta;
    dlg.showModal();
    dlg.querySelector('#b-name').focus();
  };
  /* [data-lead="<variant>"] picks the copy; [data-brochure] is the
     brochure shorthand and stays as it was. */
  document.querySelectorAll('[data-brochure], [data-lead]').forEach(el =>
    el.addEventListener('click', e => {
      e.preventDefault();
      open(el.dataset.lead || 'brochure-button');
    }));

  /* ── timed popup ──────────────────────────────────────────────────
     Opens once, 5s in. The rules exist so it never becomes a nuisance:
       · submitted   -> never again on this device (localStorage)
       · dismissed   -> not again this session   (sessionStorage)
       · mid-typing  -> wait, do not steal the cursor from someone who
                        is already filling the application form
     Storage is wrapped because Safari private mode throws on access
     rather than returning null. */
  const DONE_KEY = 'idm.brochure.submitted';
  const SEEN_KEY = 'idm.brochure.seen';
  const store = (area, key, val) => {
    try {
      if (val === undefined) return window[area].getItem(key);
      window[area].setItem(key, val);
    } catch { return null; }
  };
  /* ?popup on the URL forces it open regardless of the flags. Once you
     submit the form the "submitted" flag is permanent for that device,
     so without an override there is no way to see the popup again short
     of clearing site data — which makes it impossible to demo. */
  const forced = new URLSearchParams(location.search).has('popup');
  const handled = () => !forced &&
    (store('localStorage', DONE_KEY) === '1' || store('sessionStorage', SEEN_KEY) === '1');

  const autoOpen = () => {
    if (dlg.open || handled()) return;
    const busy = /^(INPUT|SELECT|TEXTAREA)$/.test((document.activeElement || {}).tagName || '');
    if (busy) { setTimeout(autoOpen, 8000); return; }   /* try again later */
    /* Marked as shown at open time, not on close. The dialog "close" event
       proved unreliable, and keying suppression off a dismissal would let
       the popup return if that event were ever missed. Shown-once is the
       guarantee worth having. */
    store('sessionStorage', SEEN_KEY, '1');
    open('auto-popup');
  };
  if (!handled()) setTimeout(autoOpen, 5000);

  dlg.querySelector('.modal-x').addEventListener('click', () => dlg.close());
  /* click on the backdrop (i.e. outside the panel) closes it */
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

  const fail = msg => { errBox.textContent = msg; errBox.hidden = false; };

  /* Fires the download. Still HEAD-probes first: if the file is ever
     moved or a deploy drops it, the user gets an honest message rather
     than a broken file. */
  const deliver = async () => {
    try {
      const res = await fetch(BROCHURE_FILE, {method: 'HEAD'});
      if (!res.ok) return false;
    } catch {
      /* file:// or an opaque response — can't probe, so just try it */
    }
    const a = document.createElement('a');
    a.href = BROCHURE_FILE;
    a.download = 'IDM-Course-Syllabus.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    return true;
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    errBox.hidden = true;

    if (!form.checkValidity()) {
      fail('Please fill in your name, a valid email and a phone number.');
      form.reportValidity();
      return;
    }

    const v = VARIANTS[opener] || VARIANTS['brochure-button'];
    submit.disabled = true;
    submit.textContent = v.working;

    /* Never block the download on the lead POST — the user did their
       part, and a lost lead is our problem, not theirs. */
    await sendLead({
      source: opener,
      name:   form.querySelector('#b-name').value.trim(),
      email:  form.querySelector('#b-email').value.trim(),
      phone:  form.querySelector('#b-phone').value.trim(),
    });

    store('localStorage', DONE_KEY, '1');   /* they responded; stop asking */

    /* only the brochure variant hands over a file */
    const sent = v.download ? await deliver() : true;
    form.hidden = true;
    done.hidden = false;
    dlg.querySelector('#brochureDoneTitle').textContent = v.doneTitle;
    doneMsg.textContent = sent
      ? v.doneBody
      : "We couldn't reach the file just now. We'll email the syllabus to you shortly.";
  });
}

/* ── intro video: fetch only once it is actually reached ────────────
   The file is several megabytes for a few seconds. Attaching the src up
   front means every visitor pays for it, including the ones who never
   scroll this far — so the source is held in data-src and swapped in on
   intersection. */
document.querySelectorAll('video[data-src]').forEach(v => {
  const io2 = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io2.unobserve(v);
      v.src = v.dataset.src;
      v.load();
      /* autoplay can be refused (data-saver, iOS low-power). It is muted
         and has controls, so a refusal just leaves it paused — not broken. */
      v.play().catch(() => {});
    });
  }, {rootMargin: '200px'});
  io2.observe(v);
});

/* ── application form -> the same sheet ─────────────────────────── */
const applyForm = $('applyForm');
if (applyForm) {
  const err  = $('applyError');
  const done = $('applyDone');
  const btn  = applyForm.querySelector('button[type=submit]');

  applyForm.addEventListener('submit', async e => {
    e.preventDefault();
    err.hidden = true;

    if (!applyForm.checkValidity()) {
      err.textContent = 'Please complete every field before submitting.';
      err.hidden = false;
      applyForm.reportValidity();
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending…';

    const get = sel => (applyForm.querySelector(sel) || {}).value || '';
    const ok = await sendLead({
      source: 'application',
      name:   get('#f-name').trim(),
      phone:  get('#f-phone').trim(),
      email:  get('#f-email').trim(),
      status: get('#f-status'),
      city:   get('#f-city').trim(),
    });

    /* An opaque response cannot be read, so `ok` only tells us the
       request left the browser. If no endpoint is configured at all we
       still confirm to the user rather than blaming them for our gap —
       but that case is loud in the console so it gets noticed. */
    if (!LEADS_ENDPOINT) {
      console.warn('[IDM] LEADS_ENDPOINT is empty. This application was NOT recorded.');
    }
    applyForm.hidden = true;
    done.hidden = false;
    done.scrollIntoView({block: 'center', behavior: 'smooth'});
  });
}

/* ── floating WhatsApp + call buttons ───────────────────────────────
   Injected rather than pasted into three files. rel=noopener on the
   WhatsApp link because it opens a new tab: without it the opened page
   gets a handle back to this one through window.opener. */
const CONTACT_PHONE = '+919606302009';       /* dialled by tel: */
const CONTACT_WA    = '919606302009';        /* wa.me wants no + or spaces */

if (!document.querySelector('.fab-stack')) {
  const fabs = document.createElement('div');
  fabs.className = 'fab-stack';
  fabs.innerHTML = `
    <a class="fab fab-wa" target="_blank" rel="noopener noreferrer"
       href="https://wa.me/${CONTACT_WA}?text=${encodeURIComponent("Hi, I'd like to know more about the IDM programme.")}"
       aria-label="Chat with us on WhatsApp" title="WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z"/><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.02h-.01c-1.52 0-3.02-.41-4.32-1.18l-.31-.18-3.21.84.86-3.13-.2-.32a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 012.41 5.83c0 4.54-3.7 8.24-8.23 8.24z"/></svg>
    </a>
    <a class="fab fab-call" href="tel:${CONTACT_PHONE}" aria-label="Call us" title="Call">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/></svg>
    </a>`;
  document.body.appendChild(fabs);
}
