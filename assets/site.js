/* ══════════════════════════════════════════════════════════════════
   IDM — shared rendering + behaviour for every page.
   Load order:  content.js  →  site.js  (both at the end of <body>)

   Every block below is guarded on the element existing, so each page
   only gets the pieces it actually contains.
══════════════════════════════════════════════════════════════════ */

const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const $   = id => document.getElementById(id);

/* ── skill chips ────────────────────────────────────────────────── */
if ($('skillChips')) {
  $('skillChips').innerHTML = SKILLS.map(s =>
    `<span class="rounded-full border border-line bg-surface px-5 py-2.5 text-[.9rem] text-cream/70 hover:border-brandLift hover:text-cream transition-colors">${esc(s)}</span>`
  ).join('');
}

/* ── placement marquee ──────────────────────────────────────────── */
/* [[TODO: replace with real partner logos — only companies that have agreed to be listed]] */
if ($('logoTrack')) {
  const tiles = () => Array.from({length:6}, (_,i) =>
    `<div class="grid place-items-center h-20 w-44 rounded-xl border border-line bg-surface text-cream/35 text-[.8rem] tracking-wide">LOGO ${i+1}</div>`
  ).join('');
  $('logoTrack').innerHTML =
    `<div class="flex gap-4 shrink-0">${tiles()}</div><div class="flex gap-4 shrink-0" aria-hidden="true">${tiles()}</div>`;
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
    p.setAttribute('aria-label', LAYERS[i][1] + " — show what's covered");
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

/* sticky nav goes solid once you scroll */
const nav = $('nav');
if (nav) {
  /* the bar is glass at all times; scrolling just thickens it */
  const onScroll = () => nav.classList.toggle('is-stuck', scrollY > 20);
  addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

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
