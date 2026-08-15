/* ══════════════════════════════════════════════════════════════════
   IDM — ALL SITE COPY LIVES HERE
   Edit the arrays below; every page re-renders itself from them.
   Search for [[TODO ]] for anything still to be confirmed.

   SOURCE OF TRUTH: assets/Course Syllabus.pdf
   Modules, hours, tools, certifications, the internship phase and the
   assessment weightings below are transcribed from that document. If the
   syllabus changes, change it here — not in the HTML.
══════════════════════════════════════════════════════════════════ */

/* headline skills, used for the chip cloud */
const SKILLS = ["AI-First Marketing","Generative AI","Prompt Engineering","SEO","GEO",
  "Social Media","Google Ads","Meta Ads","Programmatic","Marketing Analytics","GA4",
  "Email & WhatsApp Automation","AI Agents","No-Code Automation","Martech & CRM",
  "Conversion Optimisation","Influencer Marketing","E-commerce"];

/* ── CONTACT & SOCIAL ─────────────────────────────────────────────
   Fill a social URL and its icon becomes a link; leave it empty and the
   icon renders dimmed and unclickable, so the footer never ships a dead
   link. Same for email and address: empty means the line is skipped.
   ────────────────────────────────────────────────────────────────── */
const CONTACT = {
  phoneLabel: '+91 96063 02009',
  tel:        '+919606302009',
  whatsapp:   '919606302009',
  /* [[TODO: ".iin" is not a real top-level domain. If this should be
     admissions@idmacademy.in, correct it here — as written, every reply
     a prospect sends will bounce. ]] */
  email:      'admissions@idmacademy.iin',
  address:    '587, 3rd Floor, 100 Feet Rd, Dwarakanagar, opposite Mariya Mart, Vajarahalli, Talaghattapura, Bengaluru, Karnataka 560062',
};

const SOCIALS = [
  ['Instagram', ''],         /* [[TODO: profile URLs]] */
  ['LinkedIn',  ''],
  ['YouTube',   ''],
  ['Facebook',  ''],
  ['X',         ''],
];

/* ── SUCCESS STORIES carousel ─────────────────────────────────────
   [name, photo, panel tint, company, from, to, package]

   ⚠ SAMPLE DATA. Every name, employer and salary below was made up to
   fill the layout, and the portraits are AI-generated, not photographs
   of graduates. Under a heading that reads "Real Stories. Real Impact.
   Real Careers." these are placement claims: publishing them as they
   stand is a false statement about outcomes, and naming an employer
   alongside an invented hire is a statement about that employer too.

   Before this section goes live, either:
     · replace every row with a real graduate who has consented in
       writing, an employer happy to be named, and the true package, or
     · delete the section.

   Company names here are deliberately invented rather than real brands,
   so nothing implicates a company that never hired anyone.
   ────────────────────────────────────────────────────────────────── */
const STORIES = [
  ["Arjun Menon",      "public/stories/s1.jpg", "#7a0000", "Northline Digital",
   "Fresher", "Performance Marketing Executive", "3.2 LPA"],
  ["Divya Raghavan",   "public/stories/s2.jpg", "#9c1111", "Brightfold Media",
   "Fresher", "SEO & GEO Specialist", "4.5 LPA"],
  ["Rohit Verma",      "public/stories/s3.jpg", "#5e0a0a", "Cluster Labs",
   "Fresher", "Social Media Manager", "3.8 LPA"],
  ["Meera Krishnan",   "public/stories/s4.jpg", "#8d1b1b", "Trailhead Growth",
   "Fresher", "Marketing Automation Specialist", "5.0 LPA"],
  ["Vishal Nair",      "public/stories/s5.jpg", "#700c0c", "Meridian Commerce",
   "Fresher", "Marketing Analyst", "4.2 LPA"],
  ["Nithya Balan",     "public/stories/s6.jpg", "#6b0f0f", "Papercup Studio",
   "Fresher", "AI Content Strategist", "3.6 LPA"],
  ["Karthik Iyer",     "public/stories/s7.jpg", "#a01717", "Lightbase Analytics",
   "Fresher", "CRO Specialist", "5.4 LPA"],
];

/* ── HEADLINE NUMBERS — home page stat band ───────────────────────
   [value, suffix, label]  — counted up when the band scrolls into view.
   Every figure here comes from the syllabus.
   ────────────────────────────────────────────────────────────────── */
const STATS = [
  ["12",  "",  "Modules"],
  ["120", "",  "Live hours"],
  ["30",  "+", "Certifications"],
  ["2",   "",  "Months of internship"],
];

/* ── PLACEMENT MARQUEE ────────────────────────────────────────────
   [file in public/, brand name for the alt text]
   Rendered as two rows scrolling in opposite directions. Split point is
   the midpoint, so adding a logo rebalances both rows automatically.

   [[TODO: LEGAL — these are third-party trademarks shown under a
   "Get Placed At" heading, which represents that IDM students are placed
   at these companies. Show a logo only where you have (a) an actual
   placement or hiring relationship and (b) written permission to use the
   mark. Remove any that fail either test.]]
   ────────────────────────────────────────────────────────────────── */
const LOGOS = [
  ["airbnb.png",   "Airbnb"],
  ["myntra.png",   "Myntra"],
  ["blinkit.png",  "Blinkit"],
  ["district.png", "District by Zomato"],
  ["tinder.png",   "Tinder"],
  ["bewakoof.png", "Bewakoof"],
  ["godrej.png",   "Godrej"],
  ["oyo.png",      "OYO"],
  ["muthoot.png",  "Muthoot Finance"],
  ["matrix.png",   "Matrix Realty"],
  ["sunwing.png",  "Sunwing Solutions"],
  ["novamind.png", "Novamind"],
];

/* ── THE 12 MODULES ───────────────────────────────────────────────
   [title, [key topics], tools covered, day range]
   60 training days · 120 hours · 10 hours per module.
   ────────────────────────────────────────────────────────────────── */
const MODULES = [
  ["Digital Marketing & AI-First Foundations",
   ["Evolution of marketing: traditional → digital → AI-first",
    "Digital ecosystem: SEO, SEM, social, content, email, Martech",
    "Marketing funnels (TOFU–MOFU–BOFU), RACE & AIDA frameworks",
    "Consumer psychology, the attention economy, platform behaviour",
    "Business goals, ICP, personas and journey maps",
    "Live exercise: build a persona & journey map for a real brand"],
   "ChatGPT · Claude · Miro · Canva", "Days 1–5"],

  ["Generative AI for Marketing",
   ["Gen AI fundamentals & prompt engineering (zero/few-shot)",
    "AI content creation: ad copy, blogs, captions, scripts",
    "AI personalisation at scale; evaluating and editing AI output",
    "Multi-modal content: text, image, short video",
    "Live exercise: build a 2-week content calendar, fully AI-drafted"],
   "ChatGPT · Claude · Gemini · Canva AI · Jasper", "Days 6–10"],

  ["SEO & Generative Engine Optimisation (GEO)",
   ["SEO fundamentals & ranking systems; on-page, off-page, technical",
    "Keyword research & search-intent mapping with AI",
    "Programmatic SEO using AI; content optimisation workflows",
    "Generative Engine Optimisation: ranking inside ChatGPT and Google AI Overviews",
    "Live exercise: full SEO audit + AI-assisted content brief for a client site"],
   "Google Search Console · Ahrefs/Ubersuggest · SurferSEO · ChatGPT", "Days 11–15"],

  ["Social Media Marketing & AI Content Engines",
   ["Platform algorithms: Instagram, LinkedIn, YouTube, Facebook",
    "Content strategy, calendars, engagement & virality mechanics",
    "AI-powered content generation and scheduling systems",
    "Influencer collaboration, UGC & community building basics",
    "Live exercise: run a 2-week organic social sprint for a live page"],
   "Meta Business Suite · Canva · Hootsuite/Buffer · ChatGPT", "Days 16–20"],

  ["Performance Marketing: Google Ads & Meta Ads",
   ["Campaign structure, keyword & audience targeting",
    "AI-generated ad copy and creatives; budget & bid strategy",
    "Retargeting, lookalike audiences, performance tracking",
    "Live exercise: launch and optimise a live/simulated ad campaign"],
   "Google Ads · Meta Ads Manager · AdCreative.ai", "Days 21–25"],

  ["Programmatic Advertising & Marketing Analytics",
   ["DSP ecosystem, real-time bidding, dynamic creative optimisation",
    "Cross-device targeting, brand safety & fraud prevention basics",
    "GA4 setup, event tracking, dashboards & attribution models",
    "Live exercise: build a GA4 + Looker Studio performance dashboard",
    "Month 1 milestone: mini-project presentation"],
   "Display & Video 360 · GA4 · Looker Studio · Hotjar", "Days 26–30"],

  ["Email, WhatsApp & Lifecycle Marketing Automation",
   ["Lifecycle funnels (acquisition → retention); segmentation",
    "Email campaign design, drip workflows, AI personalisation",
    "WhatsApp/SMS automation for Indian D2C and local business",
    "Live exercise: build a 5-email automated nurture sequence"],
   "Mailchimp · HubSpot · WATI/AiSensy", "Days 31–35"],

  ["Marketing Automation & AI Agents",
   ["AI agents vs. workflows; planning, memory & tool-use concepts",
    "No-code automation: triggers, actions, multi-step workflows",
    "Building an AI marketing agent for content, reporting and alerts",
    "Human-in-the-loop guardrails, risks and limitations",
    "Live exercise: build and deploy a working no-code AI marketing agent"],
   "Zapier · Make · ChatGPT/Claude API basics", "Days 36–40"],

  ["Martech Stack, CRM & Customer Data",
   ["Martech ecosystem overview: CRM, CDP and DMP concepts",
    "First-party vs third-party data, privacy & consent in a cookieless world",
    "CRM-based lifecycle automation and lead scoring",
    "Vendor evaluation basics; designing a simple Martech stack",
    "Live exercise: map a CRM-driven customer journey for a business"],
   "Salesforce/HubSpot CRM · Google Analytics", "Days 41–45"],

  ["Conversion Rate Optimisation & Landing Pages",
   ["Funnel analysis, A/B testing & experimentation frameworks",
    "AI-powered heatmaps and user-behaviour insights",
    "Landing page design, copywriting & no-code page building",
    "Live exercise: design, launch and A/B test a landing page"],
   "Hotjar · VWO/Optimizely · WordPress/Shopify · Canva", "Days 46–50"],

  ["Influencer, Community Growth & E-commerce",
   ["Influencer identification, evaluation & campaign structuring",
    "Community building, social listening & sentiment analysis",
    "E-commerce and D2C basics: marketplaces, listings, retention",
    "Live exercise: build a micro-influencer outreach and UGC plan"],
   "Upfluence/HypeAuditor · Shopify", "Days 51–55"],

  ["Capstone Project, Portfolio & Career Prep",
   ["One end-to-end AI-powered campaign: strategy → content → ads → automation → analytics",
    "Resume, LinkedIn profile and portfolio building",
    "Mock interviews and client-facing communication practice",
    "Month 2 milestone: capstone presentation to a review panel"],
   "Every tool covered in the programme", "Days 56–60"],
];

/* ── "WHAT YOU ACTUALLY LEARN" — the five layers, home page ────────
   [number, layer name, [things taught in it], background image]
   The 4th field is the panel background — swap in a photograph any time —
   portrait, roughly 900x1200 or larger, and it should read well dark,
   because it sits under a scrim with cream type on top.
   ────────────────────────────────────────────────────────────────── */
const LAYERS = [
  ["01", "Marketing",
   ["Digital Marketing Foundations","Customer Psychology","Funnels","Research","Branding","Strategy"],
   "public/layers/01-marketing.jpg"],
  ["02", "Acquisition",
   ["SEO","GEO","Social Media","Google Ads","Meta Ads","Programmatic Advertising"],
   "public/layers/02-acquisition.jpg"],
  ["03", "Creation",
   ["AI Content","Copywriting","Creative Workflows","Video & Visual Content","Personalisation"],
   "public/layers/03-creation.jpg"],
  ["04", "Automation",
   ["Email Automation","WhatsApp Automation","CRM Workflows","n8n","Zapier","Make","AI Agents"],
   "public/layers/04-automation.jpg"],
  ["05", "Intelligence",
   ["GA4","Looker Studio","Attribution","Marketing Analytics","CRO","Experimentation","ROI"],
   "public/layers/05-intelligence.jpg"],
];

/* ── "WHAT HAPPENS WHEN YOU JOIN IDM" ─────────────────────────────
   [lead-in, what you become, the topics behind it]
   The last row is the payoff and renders highlighted — keep it last.
   ────────────────────────────────────────────────────────────────── */
const JOURNEY = [
  ["You start", "Thinking like a marketer",
   "Strategy, psychology, funnels & fundamentals."],
  ["You start", "Creating like a modern marketer",
   "Content, creative & AI-assisted production."],
  ["You start", "Acquiring like a performance marketer",
   "Google, Meta, SEO, GEO & paid acquisition."],
  ["You start", "Automating like a system builder",
   "Workflows, CRM, AI agents & marketing automation."],
  ["You start", "Measuring like an analyst",
   "GA4, attribution, dashboards, CRO & ROI."],
  ["You leave with", "Proof of work most companies are actually looking for",
   "Projects, internship, capstone & portfolio."],
];

/* ── THE INTERNSHIP — months 3 and 4 ──────────────────────────────
   [phase, weeks, [what you do]]
   ────────────────────────────────────────────────────────────────── */
const INTERNSHIP = [
  ["Applied Foundations", "Weeks 1–6",
   ["Onboarding onto a live client or in-house brand account",
    "Own the SEO and social content calendar for one real brand, end to end",
    "Assist on live Google and Meta Ads campaigns under mentor review",
    "Weekly reporting through GA4 and Looker Studio dashboards"]],
  ["Ownership & Specialisation", "Weeks 6–12",
   ["Independently run one channel (SEO, paid, social or automation) on a live account",
    "Build and ship one automation or AI-agent workflow used in production",
    "Prepare a full campaign performance review with optimisation recommendations",
    "Final internship presentation, performance appraisal and career support"]],
];

/* ── HOW YOU ARE ASSESSED ─────────────────────────────────────────
   [component, what it is, weighting]
   ────────────────────────────────────────────────────────────────── */
const ASSESSMENT = [
  ["Attendance & Participation", "Minimum 80% attendance across the live sessions", "10%"],
  ["Weekly Assignments & Quizzes", "12 graded module-end assignments", "25%"],
  ["Month 1 Mini-Project", "A live or simulated ad campaign plus an analytics dashboard", "15%"],
  ["Capstone Project", "End-to-end AI marketing campaign and presentation", "25%"],
  ["Internship Performance", "Mentor evaluation across months 3 and 4", "25%"],
];

const FAQS = [
  ["What makes IDM different from other digital marketing courses?",
   "Most courses still teach a 2019 syllabus of Facebook Ads, basic SEO and a bit of Canva, while agencies have moved to AI-first, automation-driven teams. Here, ads are one module out of twelve. AI, automation and Martech are the core, and the certificate only comes after a live capstone and real internship deliverables."],
  ["How long is the programme, and how is it structured?",
   "Five months in total: a 60-day practical bootcamp of 120 live hours, then a 3-month internship. The bootcamp runs 2 hours a day, 5 days a week, as 12 modules of 5 days and 10 hours each."],
  ["What does a typical week look like?",
   "Day 1 is a concept session with a live demo. Day 2 is a guided hands-on lab on the same topic. Day 3 is tool-specific practice and a mini-task. Day 4 applies it to a real or simulated brand. Day 5 is review, doubt-clearing and a module assessment. Two hours a day, every day."],
  ["Is this course beginner-friendly?",
   "Yes. We start from fundamentals and assume no marketing background. The only entry requirement is that you are genuinely willing to do the work: there is 80% minimum attendance, graded assignments, a capstone review panel and mentor sign-off."],
  ["Is the internship guaranteed, and is it real work?",
   "The 3-month internship is part of the programme, not an optional add-on. You work on live client or in-house brand accounts under mentor supervision, with weekly deliverables, a final presentation to faculty and a client stakeholder, and a performance appraisal."],
  ["Do you offer placement assistance?",
   "You get structured career support: resume and LinkedIn work, portfolio building, mock interviews, client-facing communication practice, and an internship-to-opportunity pipeline."],
  ["What certifications will I actually hold at the end?",
   "The IDM Certificate of Completion and an Internship Certificate, plus guided support to earn 30+ free third-party certifications from Google, HubSpot, Meta, Semrush and HP LIFE. Those are issued by the platforms themselves at no cost. Our job is making sure you actually finish them."],
  ["What tools will I learn?",
   "Over 100, hands-on: 50+ AI tools including ChatGPT, Claude, Gemini, Midjourney, n8n, Zapier, Make and Synthesia, and 50+ marketing and Martech platforms including Google Ads, GA4, Looker Studio, Ahrefs, SEMrush, HubSpot, Klaviyo, Salesforce and Shopify. The list is reviewed every batch."],
  ["Can I join if I'm a student or a working professional?",
   "Both. Sessions are 2 hours a day, 5 days a week, so it is built to run alongside a job or a degree."],
  ["How do I get a certificate?",
   "Minimum 80% attendance in the practical phase, a successful capstone submission, and a satisfactory internship mentor sign-off. There is no certificate without the work."],
  ["How can I enroll in the programme?",
   "Submit the application form on this page."],
];

/* ── CAREER PAGE ──────────────────────────────────────────────────
   Roles the program is built to prepare you for.
   Publish a salary range only if you can point to a source
   (Glassdoor / AmbitionBox / your own placements).
   ────────────────────────────────────────────────────────────────── */
const ROLES = [
  ["Performance Marketing Executive",
   "Own paid campaigns end to end: budgets, targeting, creative testing and the ROAS number the business is judged on.",
   ["Google Ads","Meta Ads","AdCreative.ai","Bid strategy"]],
  ["SEO & GEO Specialist",
   "Grow organic visibility across search and, increasingly, inside AI answers, through technical fixes, intent mapping and content that ranks.",
   ["Technical SEO","GEO","Search Console","Ahrefs / SurferSEO"]],
  ["Social Media Manager",
   "Run a brand's presence across platforms: calendar, creative direction, community and the growth that follows.",
   ["Meta Business Suite","Content calendars","Hootsuite","UGC"]],
  ["AI Content Strategist",
   "Produce at a volume a manual team cannot match, without sounding like a machine, using prompt systems, editing and brand voice.",
   ["Prompt engineering","Jasper","Canva AI","Multi-modal"]],
  ["Marketing Automation Specialist",
   "Build the lifecycle nobody sees but everybody feels: segmentation, drip flows, WhatsApp journeys and AI agents that run themselves.",
   ["Zapier","Make","n8n","HubSpot","WATI"]],
  ["Marketing Analyst",
   "Wire up the tracking, build the dashboards and tell the team what the data is actually saying.",
   ["GA4","Looker Studio","Attribution","Hotjar"]],
  ["Martech / CRM Executive",
   "Own the stack itself: CRM, customer data, lead scoring and the privacy rules that now govern all of it.",
   ["HubSpot","Salesforce","CDP concepts","Lead scoring"]],
  ["CRO Specialist",
   "Turn existing traffic into more revenue through funnel analysis, experimentation and landing pages that actually convert.",
   ["A/B testing","Hotjar","VWO","Landing pages"]],
  ["Freelancer or Agency Founder",
   "Run your own client roster or build a team around it, with a live portfolio and a shipped AI agent to point at.",
   ["Portfolio","Pricing","Client comms","Retainers"]],
];

/* The three routes out of the programme. */
const PATHS = [
  ["Get Your Dream Job",
   "Walk into interviews with something to show: a capstone campaign defended to a panel, a shipped AI agent, and three months on live client accounts. Not a certificate and a hope.",
   ["A capstone campaign presented to a review panel","30+ verifiable third-party certifications","Resume, LinkedIn and portfolio built with you","Mock interviews and client-communication practice"]],
  ["Build Your Own Agency",
   "Start your own agency or grow your own venture using the same stack you spent five months running.",
   ["Positioning and service design","Productised offers and retainers","When and how to make your first hire","Ops and reporting that scale"]],
];

/* What actually happens on the career side of the programme. */
const SUPPORT = [
  ["Capstone Review Panel",
   "Your final campaign is presented to an internal panel: strategy, content, ads, automation and analytics, defended out loud."],
  ["Portfolio Building",
   "Module 12 is dedicated to it. Live campaign work and your shipped AI agent are packaged into something a hiring manager can actually open."],
  ["Resume & LinkedIn",
   "Rebuilt around outcomes and the 30+ third-party certifications you will be holding, because that is what recruiters filter on."],
  ["Mock Interviews",
   "Practice rounds plus client-facing communication drills, so the first time you explain your ROAS number is not in a real interview."],
  ["Live Account Experience",
   "Three months on real client or in-house brand accounts with mentor sign-off and a performance appraisal, not a simulated task list."],
  ["Internship-to-Opportunity Pipeline",
   "Strong interns are routed toward openings as they arise."],
];
