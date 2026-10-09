import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteShell } from "@/components/site-shell";
import {
  WA,
  EMAIL,
  EDUCATION,
  CREDENTIALS,
  SOCIAL,
  waMessage,
  PHONE_DISPLAY,
} from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

const genres = [
  { title: "Rabindra Sangeet", note: "Tagore's lyric and melody, sung with restraint and breath." },
  { title: "Nazrul Geeti", note: "The rebel poet's songs — force, ornament and clarity." },
  { title: "Classical", note: "Raga, sur and tala as the foundation of every other style." },
  { title: "Thumri, Tappa, Kirtan", note: "Semi-classical forms taught and performed with lineage." },
  { title: "Folk", note: "Regional Bengali song, unadorned and close to speech." },
  { title: "Modern & Film", note: "Bengali and Hindi modern, old and film repertoire." },
];

const instruments = ["Harmonium", "Tabla", "Flute", "Piano", "Guitar"];

function Home() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("Performance booking");
  const [note, setNote] = useState("");

  const enquire = (event: FormEvent) => {
    event.preventDefault();
    const body = [
      "Hello Bimolendu Dash Bipresh,",
      "",
      `Name: ${name || "—"}`,
      `Interest: ${interest}`,
      note ? `Note: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waMessage(body), "_blank", "noopener,noreferrer");
  };

  return (
    <SiteShell>
      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-8 sm:gap-10 px-4 sm:px-6 py-10 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div className="order-2 lg:order-1">
            <p className="mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-widest text-saffron-deep">Professional Singer</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-night leading-[1.1]">
              Bimolendu Dash<span className="mt-1 block text-saffron-deep">Bipresh</span>
            </h1>
            <p className="mt-4 sm:mt-5 max-w-md text-lg sm:text-xl text-ink font-medium">Mastering the Melody, Inspiring the Musician</p>
            <p className="mt-3 sm:mt-4 max-w-lg text-muted text-sm sm:text-base leading-relaxed">
              A vocalist first — Rabindra Sangeet, Nazrul Geeti, classical, semi-classical, folk, modern and film songs in Bengali and Hindi. Teaching continues beside the stage at Parampara Music Academy, Sylhet.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a href="#contact" className="inline-flex min-h-11 items-center justify-center rounded-full bg-saffron px-5 font-semibold text-night hover:bg-saffron-deep hover:text-cream transition-colors">Book a performance</a>
              <Link to="/courses" className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-paper px-5 font-semibold hover:bg-cream transition-colors">View courses</Link>
              <Link to="/videos" className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-paper px-5 font-semibold hover:bg-cream transition-colors">Videos</Link>
              <Link to="/gallery" className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-paper px-5 font-semibold hover:bg-cream transition-colors">Gallery</Link>
              <Link to="/about" className="inline-flex min-h-11 items-center justify-center rounded-full border border-line bg-paper px-5 font-semibold hover:bg-cream transition-colors">About</Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="font-medium text-night underline underline-offset-4 hover:text-saffron-deep">Facebook</a>
              <a href={SOCIAL.youtube} target="_blank" rel="noreferrer" className="font-medium text-night underline underline-offset-4 hover:text-saffron-deep">YouTube</a>
              <a href={WA} target="_blank" rel="noreferrer" className="font-medium text-night underline underline-offset-4 hover:text-saffron-deep">WhatsApp</a>
            </div>
          </div>
          <figure className="order-1 lg:order-2 relative">
            <img src="/photos/live-mic.jpg" alt="Bimolendu Dash Bipresh singing on stage" className="aspect-[3/4] w-full max-w-md mx-auto rounded-2xl object-cover object-top shadow-xl" />
            <figcaption className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 rounded-xl bg-paper/95 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm shadow">
              <span className="block font-semibold">Live in Sylhet</span>
              <span className="text-muted">Vocalist · Harmonium</span>
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
          <div className="overflow-hidden rounded-2xl border border-saffron-deep/30 bg-gradient-to-br from-cream via-paper to-cream shadow-sm">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto md:min-h-[220px]">
                <img src="/photos/kaindo-nago-bhabani-banner.jpg" alt="কাইন্দ নাগো ভবানী upcoming release" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-5 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">New release</p>
                <h2 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-night">কাইন্দ নাগো ভবানী</h2>
                <p className="mt-1 text-sm text-muted">Upcoming music video · Traditional · Arrangement by Prasenjit Sil & Subrata Bose</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link to="/videos" className="inline-flex min-h-10 items-center rounded-full bg-night px-4 text-sm font-semibold text-cream hover:bg-night/90">See videos & notify</Link>
                  <Link to="/gallery" className="inline-flex min-h-10 items-center rounded-full border border-line bg-paper px-4 text-sm font-semibold text-ink hover:bg-cream">Gallery</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-line bg-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-8 sm:gap-12 px-4 sm:px-6 py-12 sm:py-16 lg:grid-cols-2">
            <img src="/photos/stage-harmonium.jpg" alt="Bimolendu Dash Bipresh with harmonium" className="aspect-square w-full max-w-lg mx-auto lg:mx-0 rounded-2xl object-cover shadow-lg" />
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron-deep">The Artist</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-night">Voice before the classroom</h2>
              <p className="mt-4 text-muted text-sm sm:text-base leading-relaxed">
                Officially Bimolendu Dash, and Bipresh to friends and family. He performs across Bengali tradition and Hindi song, and he is an experienced voice trainer. The public identity is the singer: quality of tone, diction and emotion comes first. The academy keeps the craft available to students without replacing the stage.
              </p>
              <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 text-sm">
                {instruments.map((item) => (
                  <li key={item} className="rounded-xl border border-line bg-cream px-3 sm:px-4 py-2.5 sm:py-3 font-medium text-center sm:text-left">{item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <Link to="/about" className="inline-flex min-h-10 items-center rounded-full border border-line bg-paper px-4 text-sm font-semibold hover:bg-cream">Full biography</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron-deep">Education & credentials</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-night">Academic path</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {EDUCATION.map((ed) => (
              <article key={ed.title + ed.place} className="rounded-2xl border border-line bg-paper p-5">
                <h3 className="font-serif text-xl text-night">{ed.title}</h3>
                <p className="mt-1 text-sm font-semibold text-saffron-deep">{ed.place}</p>
                <p className="mt-2 text-sm text-muted leading-relaxed">{ed.detail}</p>
              </article>
            ))}
          </div>
          <ul className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
            {CREDENTIALS.map((c) => (
              <li key={c} className="rounded-full border border-line bg-cream px-4 py-2 text-sm font-medium">{c}</li>
            ))}
          </ul>
        </section>

        <section id="repertoire" className="border-y border-line bg-paper">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron-deep">Repertoire</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-night">What he sings</h2>
            <div className="mt-8 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {genres.map((genre) => (
                <article key={genre.title} className="rounded-2xl border border-line bg-cream p-4 sm:p-5 hover:shadow-md transition-shadow">
                  <h3 className="font-serif text-xl sm:text-2xl text-night">{genre.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{genre.note}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/videos" className="inline-flex min-h-11 items-center rounded-full bg-night px-5 font-semibold text-cream">Watch videos</Link>
            </div>
          </div>
        </section>

        <section id="academy" className="bg-night text-cream">
          <div className="mx-auto grid max-w-6xl gap-8 sm:gap-10 px-4 sm:px-6 py-12 sm:py-16 lg:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-saffron">Beside the stage</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">Parampara Music Academy</h2>
              <p className="mt-4 text-cream/80 text-sm sm:text-base leading-relaxed">Bondor Bazar, Sylhet. Students learn vocal music and the instruments he plays, with the same standards he uses on stage.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/courses" className="inline-flex min-h-11 items-center rounded-full bg-saffron px-5 font-semibold text-night">Course pricing</Link>
                <a href={waMessage("Hello, I want to enrol at Parampara Music Academy.")} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-cream/30 px-5 font-semibold text-cream">Enrol on WhatsApp</a>
              </div>
            </div>
            <div className="rounded-2xl bg-night-soft p-5 sm:p-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-saffron mb-1">Location</p>
                <p className="text-sm sm:text-base">Parampara Music Academy, Bondor Bazar, Sylhet, Bangladesh</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-saffron mb-1">Phone / WhatsApp</p>
                <a className="underline underline-offset-4 hover:text-saffron transition-colors" href={WA} target="_blank" rel="noreferrer">{PHONE_DISPLAY}</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-saffron mb-1">Email</p>
                <a className="underline underline-offset-4 break-all hover:text-saffron transition-colors" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-saffron mb-1">Social</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-saffron">Facebook</a>
                  <a href={SOCIAL.youtube} target="_blank" rel="noreferrer" className="underline underline-offset-4 hover:text-saffron">YouTube</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-line bg-paper mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
          <h2 className="text-center font-serif text-3xl sm:text-4xl font-bold text-night">Write to him</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted text-sm sm:text-base">Performance bookings, collaborations and academy enquiries open in WhatsApp with your message already written.</p>
          <form onSubmit={enquire} className="mt-8 space-y-4 rounded-2xl border border-line bg-cream p-4 sm:p-6 md:p-8">
            <label className="block text-sm font-semibold">Name
              <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-base font-normal outline-none focus:ring-2 focus:ring-saffron/40" placeholder="Your name" />
            </label>
            <label className="block text-sm font-semibold">Interest
              <select value={interest} onChange={(e) => setInterest(e.target.value)} className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-base font-normal outline-none focus:ring-2 focus:ring-saffron/40">
                <option>Performance booking</option>
                <option>Course enrolment</option>
                <option>Collaboration</option>
                <option>General enquiry</option>
              </select>
            </label>
            <label className="block text-sm font-semibold">Note (optional)
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} className="mt-1.5 w-full rounded-xl border border-line bg-paper px-4 py-3 text-base font-normal outline-none focus:ring-2 focus:ring-saffron/40 resize-y" placeholder="Date, city, style preference…" />
            </label>
            <button type="submit" className="w-full min-h-12 rounded-full bg-night text-cream font-semibold hover:bg-night-soft transition-colors">Continue on WhatsApp</button>
          </form>
          <p className="mt-6 text-center text-sm text-muted">
            Or call / message <a href={WA} className="underline text-ink" target="_blank" rel="noreferrer">{PHONE_DISPLAY}</a>
            {" · "}<Link to="/faq" className="underline text-ink">FAQs</Link>
            {" · "}<Link to="/privacy" className="underline text-ink">Privacy</Link>
            {" · "}<Link to="/terms" className="underline text-ink">Terms</Link>
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
