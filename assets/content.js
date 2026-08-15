/* ══════════════════════════════════════════════════════════════════
   IDM — ALL SITE COPY LIVES HERE
   Edit the arrays below; every page re-renders itself from them.
   Search for [[TODO ]] for anything still to be confirmed.
══════════════════════════════════════════════════════════════════ */

const SKILLS = ["Business & Marketing","Branding","Website","SEO","Content Creation",
  "Social Media","Meta Ads","Google Ads","LinkedIn Ads","Email Marketing",
  "Business Automation","Analytics","AI Tools","E-commerce","Performance Marketing","Video Editing"];

/* [title, [what's inside]] — order is the module order */
const MODULES = [
  ["Business & Marketing Fundamentals", ["Understand the core of digital marketing strategy","Learn the customer journey & buyer personas","Build a marketing funnel (TOFU, MOFU, BOFU)","Set measurable KPIs & growth goals"]],
  ["Building a Digital Presence", ["Domain, hosting & CMS setup","Build your first website or landing page","Set up tracking (Google Analytics & Meta Pixel)","Master plugins & essential web tools"]],
  ["Search Engine Optimization (SEO)", ["On-page, off-page & technical SEO","Keyword research & content optimization","Build high-quality backlinks","Use GSC, SEMrush and Ahrefs"]],
  ["Content Marketing & Blogging", ["Build a winning content strategy","Write SEO-friendly blog content","Master the AIDA & PAS copy frameworks","Create content that attracts and converts"]],
  ["Social Media Strategy (SMO)", ["Optimize profiles across every major platform","Create content calendars that convert","Engagement tactics — Reels, polls, stories","Drive organic growth & visibility"]],
  ["Meta (Facebook & Instagram) Ads", ["Run objective-based ad campaigns","Advanced targeting & pixel setup","Design high-converting creatives","Scale campaigns with smart budgeting"]],
  ["Google Ads & YouTube Ads", ["Master search, display & video ads","Launch Performance Max campaigns","Track conversions & reduce CPC","Optimize campaigns for maximum ROI"]],
  ["LinkedIn Ads & B2B Marketing", ["Build powerful B2B campaigns","Target decision-makers effectively","Generate high-quality leads","Nurture & convert with content strategy"]],
  ["Email Marketing & Automation", ["Build & segment your email list","Create automated workflows","Write high-converting email copy","Use tools like Mailchimp & Klaviyo"]],
  ["Performance Marketing & ROAS", ["Understand CPC, CPL, ROAS and LTV","Build funnel-based campaign strategies","Run A/B tests to optimize ads","Scale campaigns profitably"]],
  ["Analytics, Tracking & Reporting", ["Set up GA4, Tag Manager & Looker Studio","Track goals, conversions & key metrics","Build performance dashboards","Turn data into actionable strategy"]],
  ["E-commerce & Funnel Marketing", ["Launch & optimize online stores","Design product pages that convert","Build full-funnel ad strategies","Upsell, cross-sell & retarget"]],
  ["Branding & Creative Strategy", ["Visual identity & storytelling","Design ads that stop the scroll","Use Canva & Figma for creatives","Build a memorable brand voice"]],
  ["Marketing Automation & Tools", ["Workflows with Zapier & HubSpot","Automate lead nurturing & follow-ups","Chatbots & WhatsApp marketing","Personalize campaigns at scale"]],
  ["Real-World Projects & Case Studies", ["Work on live campaigns & mock clients","Research competitors & build strategy","Analyze real industry case studies","Apply everything you've learned"]],
  ["Career, Freelancing & Agency Setup", ["Build your portfolio & personal brand","Freelance platforms & how to price","Resume & LinkedIn optimization","Set up your own agency step by step"]],
];

/* ── "WHAT YOU ACTUALLY LEARN" — the five layers, home page ────────
   [number, layer name, [things taught in it]]
   ────────────────────────────────────────────────────────────────── */
const LAYERS = [
  ["01", "Marketing",
   ["Digital Marketing Foundations","Customer Psychology","Funnels","Research","Branding","Strategy"]],
  ["02", "Acquisition",
   ["SEO","GEO","Social Media","Google Ads","Meta Ads","Programmatic Advertising"]],
  ["03", "Creation",
   ["AI Content","Copywriting","Creative Workflows","Video & Visual Content","Personalisation"]],
  ["04", "Automation",
   ["Email Automation","WhatsApp Automation","CRM Workflows","n8n","Zapier","Make","AI Agents"]],
  ["05", "Intelligence",
   ["GA4","Looker Studio","Attribution","Marketing Analytics","CRO","Experimentation","ROI"]],
];

const FAQS = [
  ["What makes IDM different from other digital marketing courses?",
   "Most courses hand you recorded lectures and a certificate. This is a live online, execution-first program run out of a working agency — every session is delivered live, and you spend most of your time actually building campaigns, with mentors reviewing your work."],
  ["Is this course beginner-friendly?",
   "Yes. We assume zero marketing background and start from fundamentals. What we do expect is that you show up live for the sessions and do the campaign work between them — the programme only works if you execute."],
  ["How long is the course, and what's the format?",
   "18 weeks, fully online and fully live — no recorded lectures. 120 hours of live training in total, roughly 7 hours a week, split between expert-led sessions, mentor-assisted work and supervised practice. [[TODO: confirm the session days and timings.]]"],
  ["Will I get a certificate after completion?",
   "Yes — you receive a completion certificate. Far more useful, though, is the portfolio of live campaign work you'll have built by the end."],
  ["Will I get practical experience during the course?",
   "That's the whole point. You'll work on real client campaigns with real budgets from the early weeks onward, not simulated exercises."],
  ["Do you offer internships or placement assistance?",
   "[[TODO: state exactly what you offer, and promise only what you can contractually deliver. Vague placement guarantees are a common source of consumer complaints.]]"],
  ["What tools and platforms will I learn?",
   "Meta Ads Manager, Google Ads, GA4, Google Tag Manager, Looker Studio, Search Console, SEMrush/Ahrefs, Mailchimp or Klaviyo, Zapier, HubSpot, Canva and Figma — plus current AI tooling."],
  ["Can I join if I'm a student or a working professional?",
   "Both. At roughly 7 hours of live training a week over 18 weeks, it is built to run alongside a job or a degree. [[TODO: confirm the session days and timings — evenings, weekends, or both.]]"],
  ["How can I enroll in the program?",
   "Submit the application form on this page and pay the registration fee. Shortlisted applicants are interviewed, and the program fee is only payable after you're selected."],
  ["What support will I get after completing the course?",
   "[[TODO: describe your alumni support — community access, refresher sessions, job referrals, etc.]]"],
];

/* ── CAREER PAGE ──────────────────────────────────────────────────
   Roles the program is built to prepare you for.
   `salary` is deliberately left as a TODO: publish a range only if you
   can point to a source (Glassdoor / AmbitionBox / your own placements).
   ────────────────────────────────────────────────────────────────── */
const ROLES = [
  ["Performance Marketing Executive",
   "Own paid campaigns end to end — budgets, targeting, creative testing and the ROAS number the business is judged on.",
   ["Meta Ads","Google Ads","A/B testing","Budget scaling"]],
  ["SEO Specialist",
   "Grow organic traffic through technical fixes, keyword strategy and content that actually ranks and converts.",
   ["Technical SEO","Keyword research","GSC","Ahrefs / SEMrush"]],
  ["Social Media Manager",
   "Run a brand's presence across platforms — calendar, creative direction, community and the growth that follows.",
   ["Content calendars","Reels & shorts","Community","Organic growth"]],
  ["Content Marketer",
   "Turn positioning into blogs, landing pages and campaigns that pull qualified traffic instead of vanity views.",
   ["Copy frameworks","Blog SEO","Landing pages","Storytelling"]],
  ["Email & Automation Specialist",
   "Build the lifecycle nobody sees but everybody feels — segmentation, flows and follow-ups that recover revenue.",
   ["Klaviyo / Mailchimp","Segmentation","Zapier","HubSpot"]],
  ["Marketing Analyst",
   "Wire up the tracking, build the dashboards and tell the team what the data is actually saying.",
   ["GA4","Tag Manager","Looker Studio","Attribution"]],
  ["Brand & Creative Strategist",
   "Shape how a brand looks and sounds, then translate that into creative that stops the scroll.",
   ["Visual identity","Ad creative","Canva / Figma","Brand voice"]],
  ["Freelance Digital Marketer",
   "Run your own client roster — with the pricing, proposals and delivery systems taught explicitly in Module 16.",
   ["Pricing","Proposals","Client comms","Retainers"]],
  ["Agency Founder",
   "Productise what you've learned and build a team around it. You'll have seen an agency run from the inside for 18 weeks.",
   ["Service design","Hiring","Ops","Sales"]],
];

/* The three routes out of the program. */
const PATHS = [
  ["Get Hired",
   "Join an agency or an in-house marketing team as a junior-to-mid marketer — with campaign work already in your portfolio.",
   ["Portfolio of live campaign results","Resume & LinkedIn rebuilt with you","Mock interviews with practising marketers","Introductions to hiring teams — [[TODO: describe exactly what you do here]]"]],
  ["Go Freelance",
   "Build an independent client base. We cover the unglamorous half — scoping, pricing, contracts and getting paid on time.",
   ["How to price work without underselling","Proposals and scoping that hold up","Finding your first three clients","Delivering solo without burning out"]],
  ["Build Your Own",
   "Start your own agency or grow your own venture using the same systems you spent 18 weeks running.",
   ["Positioning and service design","Productised offers and retainers","When and how to make your first hire","Ops and reporting that scale"]],
];

/* What actually happens on the career side of the program. */
const SUPPORT = [
  ["Portfolio Reviews",
   "Your live campaign work is packaged into case studies that stand up in an interview — reviewed line by line with a mentor."],
  ["Resume & LinkedIn",
   "Rewritten around outcomes and metrics rather than course titles, because that is what hiring managers scan for."],
  ["Mock Interviews",
   "Practice rounds with marketers who sit on the other side of the table — including the case-study and metrics questions."],
  ["Interview Preparation",
   "Platform-specific drills on Meta, Google and GA4 so you can answer the practical questions, not just the theory ones."],
  ["Hiring Introductions",
   "[[TODO: describe precisely what you provide — referrals? a shared candidate pool? Only claim what you can deliver.]]"],
  ["Alumni Network",
   "[[TODO: describe your alumni community, refresher access and ongoing support, or remove this card.]]"],
];
