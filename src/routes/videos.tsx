import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { VIDEOS, SOCIAL, WA, waMessage } from "@/lib/site";

export const Route = createFileRoute("/videos")({ component: VideosPage });

function VideosPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
          Performances
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-bold text-night">
          Videos
        </h1>
        <p className="mt-4 max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
          Published performances and studio work. More clips appear regularly on
          Facebook. For live bookings, message WhatsApp.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-night px-5 font-semibold text-cream"
          >
            Facebook
          </a>
          <a
            href={SOCIAL.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 font-semibold"
          >
            YouTube search
          </a>
          <Link
            to="/courses"
            className="inline-flex min-h-11 items-center text-muted underline"
          >
            Courses
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {VIDEOS.map((v) => (
            <article
              key={v.id}
              className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm"
            >
              <div className="aspect-video bg-night/5">
                <iframe
                  title={v.title}
                  src={`https://www.youtube.com/embed/${v.id}`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h2 className="font-serif text-xl text-night">{v.title}</h2>
                <p className="mt-1 text-sm text-muted">{v.note}</p>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-saffron-deep underline underline-offset-4"
                >
                  Watch on YouTube
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-2xl border border-line bg-cream p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-night">More on social media</h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            Live stage clips, academy moments and new releases are shared on
            Facebook. Follow{" "}
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              className="underline text-ink"
            >
              Bimolendu Dash (বিপ্রেশ)
            </a>{" "}
            for the latest.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={waMessage(
                "Hello Bimolendu Dash Bipresh, I would like to book a performance."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-saffron px-5 font-semibold text-night"
            >
              Book via WhatsApp
            </a>
            <Link
              to="/faq"
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 font-semibold"
            >
              FAQs
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
