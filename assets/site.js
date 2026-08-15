/* ══════════════════════════════════════════════════════════════════
   IDM — shared rendering + behaviour for every page.
   Load order:  content.js  →  site.js  (both at the end of <body>)

   Every block below is guarded on the element existing, so each page
   only gets the pieces it actually contains.
══════════════════════════════════════════════════════════════════ */

const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const $   = id => document.getElementById(id);

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
    <details class="reveal rounded-2xl card-light overflow-hidden hover:border-brand/40 transition-colors">
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
    <li class="reveal flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-xl card-light px-6 py-5">
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
    <div class="reveal flex items-center gap-4 rounded-xl card-light px-5 py-4">
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
    <article class="reveal rounded-2xl card-light p-7 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
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
   BROCHURE — gated download
   Any element with [data-brochure] opens the modal. The file only
   downloads after the form is submitted, so every download is a
   captured lead.
══════════════════════════════════════════════════════════════════ */
/* The 10-page course syllabus. Renamed off "IDM course syllabus.pdf" —
   spaces in a filename have to be percent-encoded in every reference, and
   one missed escape is a silent 404. */
const BROCHURE_FILE = 'public/IDM-Course-Syllabus.pdf';
/* [[TODO: LEAD ENDPOINT — Formspree / Web3Forms / your own handler.
   While this is empty the details are NOT sent anywhere: the download
   still works, but you lose the lead, which is the entire point of
   gating it. ]] */
const BROCHURE_ENDPOINT = '';

if (document.querySelector('[data-brochure]')) {
  const dlg = document.createElement('dialog');
  dlg.id = 'brochureModal';
  dlg.className = 'modal';
  dlg.innerHTML = `
    <button class="modal-x" type="button" aria-label="Close">&times;</button>
    <p class="eyebrow mb-3">Programme brochure</p>
    <h2 class="font-display text-[1.5rem] sm:text-[1.8rem] leading-snug mb-2">Get the Full Brochure</h2>
    <p class="text-[.94rem] text-cream/65 leading-relaxed mb-7">
      The complete 12-module syllabus, the tool list, the internship structure.
    </p>

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
      <p class="font-display text-[1.2rem] text-accent mb-2">Thanks — check your downloads.</p>
      <p class="text-[.92rem] text-cream/65" id="brochureDoneMsg"></p>
    </div>`;
  document.body.appendChild(dlg);

  const form   = dlg.querySelector('#brochureForm');
  const errBox = dlg.querySelector('#brochureError');
  const done   = dlg.querySelector('#brochureDone');
  const doneMsg= dlg.querySelector('#brochureDoneMsg');
  const submit = form.querySelector('button[type=submit]');

  const open = () => {
    errBox.hidden = true; done.hidden = true; form.hidden = false;
    submit.disabled = false; submit.textContent = 'Download Brochure';
    dlg.showModal();
    dlg.querySelector('#b-name').focus();
  };
  document.querySelectorAll('[data-brochure]').forEach(el =>
    el.addEventListener('click', e => { e.preventDefault(); open(); }));

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

    submit.disabled = true;
    submit.textContent = 'Preparing…';

    const data = new FormData(form);
    data.append('source', 'brochure-download');
    data.append('page', location.pathname.split('/').pop() || 'index.html');

    if (BROCHURE_ENDPOINT) {
      try {
        await fetch(BROCHURE_ENDPOINT, {method: 'POST', body: data});
      } catch {
        /* Never block the download on the lead POST failing — the user
           did their part, and a lost lead is our problem, not theirs. */
      }
    }

    const sent = await deliver();
    form.hidden = true;
    done.hidden = false;
    doneMsg.textContent = sent
      ? "Your brochure is downloading. We'll be in touch shortly."
      : "We couldn't reach the file just now — we'll email the syllabus to you shortly.";
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
