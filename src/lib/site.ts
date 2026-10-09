export const WA = "https://wa.me/8801771499925";
export const EMAIL = "bimulendudash007@gmail.com";
export const PHONE_DISPLAY = "+880 1771-499925";

export const SOCIAL = {
  facebook: "https://www.facebook.com/biprish.dash",
  youtube: "https://www.youtube.com/results?search_query=Bimolendu+Dash+Bipresh",
  email: `mailto:${EMAIL}`,
  whatsapp: WA,
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/videos", label: "Videos" },
  { to: "/faq", label: "FAQs" },
];

export const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/videos", label: "Videos" },
  { to: "/faq", label: "FAQs" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
];

export function waMessage(text: string) {
  return `${WA}?text=${encodeURIComponent(text)}`;
}

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
  {
    title: "B.A. (Hons) in English Literature & Linguistics",
    place: "Leading University",
    detail: "Undergraduate foundation in language and literature.",
  },
  {
    title: "Secondary education",
    place: "Nabiganj J. K. High School",
    detail: "Habiganj, greater Sylhet region.",
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
    title: "Emon Bhajan Jogyo Deho Peye",
    note: "Devotional / traditional — lyrical performance",
    url: "https://www.youtube.com/watch?v=ip_IUDJcfJ4",
  },
];

export const FAQS = [
  {
    q: "Who is Bimolendu Dash Bipresh?",
    a: "Bimolendu Dash (known as Bipresh) is a professional Bengali and Hindi vocalist, voice trainer, and founder of Parampara Music Academy in Sylhet. He holds postgraduate degrees in Vocal Music (Rabindra Bharati University) and English Literature & Linguistics (Leading University).",
  },
  {
    q: "What styles does he perform?",
    a: "Rabindra Sangeet, Nazrul Geeti, classical and semi-classical (including thumri, tappa, kirtan), folk, modern Bengali and Hindi, film and old songs.",
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
    a: "See the Videos page for published performances, and follow his Facebook profile for live clips and updates.",
  },
];
