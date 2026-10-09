import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import {
  EDUCATION,
  CREDENTIALS,
  SOCIAL,
  WA,
  PHONE_DISPLAY,
  EMAIL,
} from "@/lib/site";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
          The artist
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-bold text-night">
          About Bimolendu Dash Bipresh
        </h1>
        <p className="mt-4 max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
          Officially Bimolendu Dash, and Bipresh to friends and family. A
          vocalist first — quality of tone, diction and emotion come before
          everything else.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
            <img
              src="/photos/portrait-blue-kurta.jpg"
              alt="Bimolendu Dash Bipresh professional portrait"
              className="w-full object-cover aspect-[4/5]"
              loading="eager"
            />
          </div>
          <div className="space-y-5 text-sm sm:text-base leading-relaxed text-ink">
            <p>
              From Habiganj in the greater Sylhet region, Bipresh carries the
              melodic traditions of Bengal — Rabindra Sangeet, Nazrul Geeti,
              classical purity, semi-classical forms, folk (including the
              Bhatiyali of his homeland) and modern Bengali and Hindi song.
            </p>
            <p>
              He trained at{" "}
              <strong className="font-semibold">Rabindra Bharati University</strong>{" "}
              (B.A. Hons and M.A. in Vocal Music) and later completed an M.A. in
              English Literature & Linguistics at Leading University. He is a
              Scholar of the{" "}
              <strong className="font-semibold">
                Indian Council for Cultural Relations (ICCR)
              </strong>
              , a former Lecturer at Sylhet Arts College, and the Director &
              Teacher of Parampara Music Academy in Bondor Bazar, Sylhet.
            </p>
            <p>
              Teaching continues beside the stage. The academy keeps the craft
              available to students without replacing performance — a place to
              study the tradition with the same standards he brings to every
              stage.
            </p>
            <p className="text-muted italic border-l-2 border-saffron-deep pl-4">
              “সিলেটের সংস্কৃতি পৌঁছে দিতে চাই বিশ্বজুড়ে।” — He wants to carry
              the culture of Sylhet to the world.
            </p>
          </div>
        </div>

        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
            Association
          </p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-night">
            With Anup Jalota
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr] items-start">
            <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
              <img
                src="/photos/with-anup-jalota.jpg"
                alt="Bimolendu Dash Bipresh with Anup Jalota"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-sm sm:text-base leading-relaxed text-ink space-y-3">
              <p>
                A cherished photograph with{" "}
                <strong className="font-semibold">Anup Jalota</strong> — the
                legendary “Bhajan Samraat”, Padma Shri recipient, and one of
                India’s most respected voices in bhajan and ghazal.
              </p>
              <p className="text-muted">
                Moments like these affirm the path of devotion and classical
                discipline that Bipresh continues to walk — on stage, in the
                classroom, and in every new release.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
            Path
          </p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-night">
            Education & roles
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EDUCATION.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-line bg-paper p-5 shadow-sm"
              >
                <h3 className="font-serif text-lg text-night">{e.title}</h3>
                <p className="mt-1 text-sm font-medium text-saffron-deep">
                  {e.place}
                </p>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {e.detail}
                </p>
              </div>
            ))}
          </div>
          <ul className="mt-6 space-y-2 text-sm sm:text-base text-ink">
            {CREDENTIALS.map((c) => (
              <li key={c} className="flex gap-2">
                <span className="text-saffron-deep shrink-0">✦</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 rounded-2xl border border-line bg-cream p-6 sm:p-8">
          <p className="font-serif text-xl sm:text-2xl text-night">
            Book a performance or join the academy
          </p>
          <p className="mt-2 text-sm text-muted max-w-xl">
            WhatsApp is the fastest way. Mention the date, city or course level
            and he will reply personally.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-night px-5 text-sm font-semibold text-cream hover:bg-night/90 transition-colors"
            >
              WhatsApp {PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink hover:bg-cream transition-colors"
            >
              Email
            </a>
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink hover:bg-cream transition-colors"
            >
              Facebook
            </a>
            <Link
              to="/courses"
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink hover:bg-cream transition-colors"
            >
              View courses
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
