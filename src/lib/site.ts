export const WA = "https://wa.me/8801771499925";
export const EMAIL = "bimulendudash007@gmail.com";
export const PHONE_DISPLAY = "+880 1771-499925";

export const SOCIAL = {
  facebook: "https://www.facebook.com/biprish.dash",
  youtube: "https://www.youtube.com/channel/UChegjF0eGXRyVL1taqkBCxA",
  youtubeSearch: "https://www.youtube.com/results?search_query=Bimolendu+Dash+Bipresh",
  email: `mailto:${EMAIL}`,
  whatsapp: WA,
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/courses", label: "Courses" },
  { to: "/tools", label: "Tools" },
  { to: "/videos", label: "Videos" },
  { to: "/faq", label: "FAQs" },
];

export const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/courses", label: "Courses" },
  { to: "/tools", label: "Tools" },
  { to: "/videos", label: "Videos" },
  { to: "/faq", label: "FAQs" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
];

export function waMessage(text: string) {
  return `${WA}?text=${encodeURIComponent(text)}`;
}

/** Canonical production URL — used for SEO, OG, sitemap, share links */
export const SITE_URL = "https://bimolendu-dash-bipresh.vercel.app";

export const SITE_NAME = "Bimolendu Dash Bipresh";
export const SITE_TAGLINE = "Mastering the Melody, Inspiring the Musician";
export const SITE_DESCRIPTION =
  "Professional Bengali & Hindi vocalist — Rabindra Sangeet, Nazrul Geeti, classical, folk and film songs. Founder of Parampara Music Academy, Sylhet. Book performances or enrol in offline & online courses.";

export const OG_IMAGE = `${SITE_URL}/photos/live-mic.webp`;

export function shareUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function facebookShare(url: string) {
  return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
}

export function twitterShare(url: string, text: string) {
  return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
}

export function whatsappShare(url: string, text: string) {
  return `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`;
}

/** Promo banner copy — edit here to change campaign */
export const PROMO = {
  enabled: true,
  text: "Upcoming release — কাইন্দ নাগো ভবানী (Kaindo Nago Bhabani)",
  cta: "See videos",
  to: "/videos" as const,
};

export const EDUCATION = [
  {
    title: "M.A. in Vocal Music",
    place: "Rabindra Bharati University",
    detail: "Postgraduate study in vocal music, classical and Bengali song tradition.",
  },
  {
    title: "B.A. (Hons) in Vocal Music",
    place: "Rabindra Bharati University",
    detail: "Honours degree focused on vocal performance and music theory.",
  },
  {
    title: "M.A. in English Literature & Linguistics",
    place: "Leading University",
    detail: "Postgraduate study supporting teaching, research and cultural communication.",
  },
];

export const CREDENTIALS = [
  "Director & Teacher, Parampara Music Academy, Sylhet",
  "Former Lecturer, Sylhet Arts College",
  "Scholar, Indian Council for Cultural Relations (ICCR)",
];

export const COURSES = [
  {
    name: "Beginner Vocal",
    level: "Foundation",
    duration: "3–6 months (ongoing)",
    price: "৳1,500–2,500 / month",
    features: [
      "Breath, pitch and basic swaras",
      "Simple Rabindra Sangeet & folk songs",
      "Weekly in-person class (Sylhet)",
      "Practice guidance for home",
    ],
  },
  {
    name: "Intermediate Vocal",
    level: "Developing",
    duration: "6–12 months",
    price: "৳2,500–3,500 / month",
    features: [
      "Raga introduction & alankar",
      "Nazrul Geeti and semi-classical",
      "Performance posture and diction",
      "Monthly progress review",
    ],
  },
  {
    name: "Advanced / Classical",
    level: "Professional path",
    duration: "12+ months",
    price: "৳3,500–5,000 / month",
    features: [
      "Deep raga work, thumri, tappa, kirtan",
      "Stage repertoire building",
      "Recording & performance coaching",
      "Priority booking for academy events",
    ],
  },
  {
    name: "Instrument Lessons",
    level: "All levels",
    duration: "Flexible",
    price: "৳2,000–4,000 / month",
    features: [
      "Harmonium, tabla, flute, piano or guitar",
      "Aligned with vocal practice when useful",
      "One-to-one or small group",
      "Syllabus matched to student goals",
    ],
  },
];

export const VIDEOS = [
  {
    id: "ip_IUDJcfJ4",
    title: "Emon Bhajan Jogyo Deho Peye (এমন ভজন যোগ্য দেহ পেয়ে)",
    note: "Traditional / devotional lyrical performance. Artist: Bimolendu Dash Bipresh. Music direction: Dr. Tapan Roy. Released on Aalo.",
    url: "https://www.youtube.com/watch?v=ip_IUDJcfJ4",
    category: "Devotional",
  },
  {
    id: "fpk-N1xKH_E",
    title: "Nomo Nomo Nomo Maa Go (নমঃ নমঃ নমঃ মাগো)",
    note: "Lyrical devotional with Dr. Tapan Roy / Aalo. Traditional arrangement.",
    url: "https://www.youtube.com/watch?v=fpk-N1xKH_E",
    category: "Devotional",
  },
  {
    id: "zS6MfRMy3yo",
    title: "ডানা ভাইঙ্গা পড়লাম আমি কলকাতার উপর (Dana Bhainga Porlam)",
    note: "Bhatiyali folk by Hemanga Biswas — a personal signature song for Bipresh, performed with deep connection to Habiganj and greater Sylhet.",
    url: "https://www.youtube.com/watch?v=zS6MfRMy3yo",
    category: "Folk",
  },
  {
    id: "HjStRXtlmxc",
    title: "সুরে ও বাণীর মালা দিয়ে (Sure o Banir Mala Diye) — Nazrul Geeti",
    note: "Nazrul Geeti performance by Bimolendu Dash Bipresh.",
    url: "https://www.youtube.com/watch?v=HjStRXtlmxc",
    category: "Nazrul",
  },
  {
    id: "eVVjli6WGjM",
    title: "চাই না মাগো রাজা হতে (Chai Na Mago Raja Hote) — Shyama Sangeet",
    note: "Ramprasadi / Shyama Sangeet. Released on Maatir Gaan.",
    url: "https://www.youtube.com/watch?v=eVVjli6WGjM",
    category: "Devotional",
  },
  {
    id: "E4ZsQzkKqjo",
    title: "যদি কাগজে লেখ নাম (Jodi Kagaje Lekh Naam)",
    note: "Personal channel performance.",
    url: "https://www.youtube.com/watch?v=E4ZsQzkKqjo",
    category: "Modern",
  },
  {
    id: "aVHKUSkXvOI",
    title: "চুপি চপি রাত দিন (Chupi Chupi Raat Din)",
    note: "Personal channel performance.",
    url: "https://www.youtube.com/watch?v=aVHKUSkXvOI",
    category: "Modern",
  },
];

export const GALLERY = [
  {
    src: "/photos/kaindo-nago-bhabani-banner.webp",
    alt: "কাইন্দ নাগো ভবানী — Upcoming release banner featuring Bimolendu Dash",
    caption: "কাইন্দ নাগো ভবানী (Kaindo Nago Bhabani) — Upcoming music video",
    credit: "Artist: Bimolendu Dash · Lyrics & Composition: Traditional · Lyrics Extension: Dilip Chandra Roy · Music Arrangement: Prasenjit Sil & Subrata Bose",
  },
  {
    src: "/photos/portrait-blue-kurta.webp",
    alt: "Bimolendu Dash Bipresh in blue embroidered kurta before Durga idols",
    caption: "Professional portrait — blue embroidered kurta",
    credit: "Studio portrait with Durga backdrop",
  },
  {
    src: "/photos/with-anup-jalota.webp",
    alt: "Bimolendu Dash Bipresh with Anup Jalota, the Bhajan Samraat",
    caption: "With Anup Jalota — Bhajan Samraat",
    credit: "A memorable meeting with the legendary Padma Shri singer",
  },
  {
    src: "/photos/portrait-white-kurta.webp",
    alt: "Bimolendu Dash Bipresh seated in white kurta on marble steps",
    caption: "Professional portrait — white kurta",
    credit: "Piyush Kunj Photography",
  },
  {
    src: "/photos/stage-harmonium.webp",
    alt: "Bimolendu Dash Bipresh performing live with harmonium",
    caption: "Live on stage — vocal & harmonium",
    credit: "Piyush Kunj Photography",
  },
  {
    src: "/photos/live-mic.webp",
    alt: "Bimolendu Dash Bipresh singing live with microphone on stage",
    caption: "Live performance — stage energy",
    credit: "Stage concert",
  },
];

export const FAQS = [
  {
    q: "Who is Bimolendu Dash Bipresh?",
    a: "Bimolendu Dash (known as Bipresh) is a professional Bengali and Hindi vocalist, voice trainer, and founder of Parampara Music Academy in Sylhet. He holds postgraduate degrees in Vocal Music (Rabindra Bharati University) and English Literature & Linguistics (Leading University). He is an ICCR scholar and former lecturer at Sylhet Arts College.",
  },
  {
    q: "What styles does he perform?",
    a: "Rabindra Sangeet, Nazrul Geeti, classical and semi-classical (including thumri, tappa, kirtan), folk (including Bhatiyali), modern Bengali and Hindi, film and old songs.",
  },
  {
    q: "Where is the academy?",
    a: "Parampara Music Academy is in Bondor Bazar, Sylhet, Bangladesh. Classes are primarily in-person.",
  },
  {
    q: "How do I book a performance?",
    a: "Message on WhatsApp (+880 1771-499925) with the date, city, event type and preferred repertoire. You can also use the contact form on the Home page.",
  },
  {
    q: "How do I enroll in a course?",
    a: "Open the Courses page, choose a programme, then message WhatsApp to confirm fees, schedule and a trial class. Enrolment is confirmed after discussion with the academy.",
  },
  {
    q: "Are online classes available?",
    a: "Core teaching is in Sylhet. Online or hybrid options may be arranged for some students — ask on WhatsApp.",
  },
  {
    q: "What instruments can I learn?",
    a: "Harmonium, tabla, flute, piano and guitar, alongside or separate from vocal training.",
  },
  {
    q: "Where can I watch his performances?",
    a: "See the Videos page for published performances, the Gallery for stage photos, and follow his Facebook profile (facebook.com/biprish.dash) and YouTube channel for more clips and updates.",
  },
  {
    q: "Are there free practice tools on the site?",
    a: "Yes. The Tools page offers a free practice metronome, breathing timer, vocal warm-up generator and reference tone (Sa / A440). They run in your browser. For guided voice training, enrol at Parampara Music Academy or message on WhatsApp.",
  },
];
