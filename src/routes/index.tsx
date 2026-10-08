import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Menu,
  X,
  Mic2,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Music2,
  Disc3,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

const WA = "https://wa.me/8801771499925";
const EMAIL = "bimulendudash007@gmail.com";

const genres = [
  { title: "Rabindra Sangeet", note: "Tagore’s lyric and melody, sung with restraint and breath." },
  { title: "Nazrul Geeti", note: "The rebel poet’s songs — force, ornament and clarity." },
  { title: "Classical", note: "Raga, sur and tala as the foundation of every other style." },
  { title: "Thumri, Tappa, Kirtan", note: "Semi-classical forms taught and performed with lineage." },
  { title: "Folk", note: "Regional Bengali song, unadorned and close to speech." },
  { title: "Modern & film", note: "Bengali and Hindi modern, old and film repertoire." },
];

const instruments = ["Harmonium", "Tabla", "Flute", "Piano", "Guitar"];

function waLink(message: string) {
  return `${WA}?text=${encodeURIComponent(message)}`;
}

function Home() {
  const [open, setOpen] = useState(false);
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
    window.open(waLink(body), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#top" className="font-serif text-lg font-medium tracking-tight">
            Bimolendu Dash Bipresh
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
            <a href="#about" className="hover:text-ink">About</a>
            <a href="#repertoire" className="hover:text-ink">Repertoire</a>
            <a href="#academy" className="hover:text-ink">Academy</a>
            <a href="#contact" className="hover:text-ink">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-night px-4 py-2 text-sm font-semibold text-cream md:inline-flex"
            >
              WhatsApp
            </a>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden">
            {[
              ["#about", "About"],
              ["#repertoire", "Repertoire"],
              ["#academy", "Academy"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium"
              >
                {label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="mt-1 rounded-full bg-night px-4 py-3 text-center font-semibold text-cream"
            >
              WhatsApp
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-saffron-deep">
              Professional singer
            </p>
            <h1 className="text-5xl text-night md:text-6xl">
              Bimolendu Dash
              <span className="mt-1 block text-saffron-deep">Bipresh</span>
            </h1>
            <p className="mt-5 max-w-md text-xl text-ink">
              Mastering the Melody, Inspiring the Musician
            </p>
            <p className="mt-4 max-w-lg text-muted">
              A vocalist first — Rabindra Sangeet, Nazrul Geeti, classical,
              semi-classical, folk, modern and film songs in Bengali and Hindi.
              Teaching continues beside the stage at Parampara Music Academy, Sylhet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center rounded-full bg-saffron px-5 font-semibold text-night"
              >
                Book a performance
              </a>
              <a
                href="#repertoire"
                className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 font-semibold"
              >
                Hear the repertoire
              </a>
            </div>
          </div>
          <figure className="relative">
            <img
              src="/photos/live-mic.jpg"
              alt="Bimolendu Dash Bipresh singing on stage"
              className="aspect-[3/4] w-full rounded-2xl object-cover object-top shadow-lg"
            />
            <figcaption className="absolute bottom-4 left-4 rounded-xl bg-paper/95 px-4 py-3 text-sm shadow">
              <span className="block font-semibold">Live in Sylhet</span>
              <span className="text-muted">Vocalist · Harmonium</span>
            </figcaption>
          </figure>
        </section>

        <section id="about" className="border-y border-line bg-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
            <img
              src="/photos/stage-harmonium.jpg"
              alt="Bimolendu Dash Bipresh accompanying himself on harmonium"
              className="aspect-square w-full rounded-2xl object-cover"
            />
            <div>
              <div className="mb-3 flex items-center gap-2 text-saffron-deep">
                <Mic2 className="size-5" />
                <span className="text-sm font-semibold uppercase tracking-widest">The artist</span>
              </div>
              <h2 className="text-4xl text-night">Voice before the classroom</h2>
              <p className="mt-4 text-muted">
                Officially Bimolendu Dash, and Bipresh to friends and family. He
                performs across Bengali tradition and Hindi song, and he is an
                experienced voice trainer. The public identity is the singer:
                quality of tone, diction and emotion comes first. The academy
                keeps the craft available to students without replacing the stage.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {instruments.map((item) => (
                  <li key={item} className="rounded-xl border border-line bg-cream px-4 py-3 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="repertoire" className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2 text-saffron-deep">
                <Music2 className="size-5" />
                <span className="text-sm font-semibold uppercase tracking-widest">Repertoire</span>
              </div>
              <h2 className="text-4xl text-night">What he sings</h2>
            </div>
            <Disc3 className="hidden size-8 text-saffron md:block" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {genres.map((genre) => (
              <article key={genre.title} className="rounded-2xl border border-line bg-paper p-5">
                <h3 className="text-2xl">{genre.title}</h3>
                <p className="mt-2 text-sm text-muted">{genre.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="academy" className="bg-night text-cream">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2 text-saffron">
                <GraduationCap className="size-5" />
                <span className="text-sm font-semibold uppercase tracking-widest">Beside the stage</span>
              </div>
              <h2 className="text-4xl">Parampara Music Academy</h2>
              <p className="mt-4 text-cream/80">
                Bondor Bazar, Sylhet. Students learn vocal music and the instruments
                he plays, with the same standards he uses on stage. Classes stay
                secondary to performance work — a place to study the tradition, not
                a replacement for it.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-cream/90">
                <li>Vocal: classical, Rabindra Sangeet, Nazrul, folk, film</li>
                <li>Instruments: harmonium, tabla, flute, piano, guitar</li>
                <li>In-person teaching in Sylhet</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-night-soft p-6">
              <p className="flex items-start gap-2">
                <MapPin className="mt-1 size-4 shrink-0 text-saffron" />
                Parampara Music Academy, Bondor Bazar, Sylhet, Bangladesh
              </p>
              <p className="mt-4 flex items-center gap-2">
                <Phone className="size-4 text-saffron" />
                <a className="underline underline-offset-4" href={WA}>+880 1771-499925</a>
              </p>
              <p className="mt-3 flex items-center gap-2">
                <Mail className="size-4 text-saffron" />
                <a className="underline underline-offset-4" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-center text-4xl text-night">Write to him</h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted">
            Performance bookings, collaborations and academy enquiries open in WhatsApp
            with your message already written.
          </p>
          <form onSubmit={enquire} className="mt-8 space-y-4 rounded-2xl border border-line bg-paper p-5 md:p-8">
            <label className="block text-sm font-semibold">
              Name
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-line bg-cream px-4 py-3 font-normal outline-none"
                placeholder="Your name"
              />
            </label>
            <label className="block text-sm font-semibold">
              I am writing about
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="mt-1 w-full rounded-xl border border-line bg-cream px-4 py-3 font-normal outline-none"
              >
                <option>Performance booking</option>
                <option>Collaboration</option>
                <option>Academy class</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="block text-sm font-semibold">
              Message
              <textarea
                required
                rows={4}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="mt-1 w-full rounded-xl border border-line bg-cream px-4 py-3 font-normal outline-none"
                placeholder="Date, city, song type, or what you want to learn"
              />
            </label>
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-night font-semibold text-cream"
            >
              Continue on WhatsApp
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-line px-4 py-8 text-center text-sm text-muted">
        <p className="font-serif text-base text-ink">Bimolendu Dash Bipresh</p>
        <p className="mt-1">Mastering the Melody, Inspiring the Musician</p>
        <p className="mt-2">Parampara Music Academy · Bondor Bazar, Sylhet</p>
      </footer>
    </div>
  );
}
