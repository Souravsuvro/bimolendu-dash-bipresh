import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { VIDEOS, SOCIAL, WA } from "@/lib/site";

export const Route = createFileRoute("/videos")({ component: VideosPage });

function VideosPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
          Listen
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-bold text-night">
          Videos
        </h1>
        <p className="mt-4 max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
          Play Bimolendu Dash Bipresh’s published performances on this page.
          More stage and studio clips are shared on Facebook.
        </p>

        <div className="mt-10 space-y-12">
          {VIDEOS.map((v) => (
            <article
              key={v.id}
              className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm"
            >
              <div className="relative aspect-video w-full bg-night">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h2 className="font-serif text-xl sm:text-2xl text-night">
                  {v.title}
                </h2>
                {v.note && (
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {v.note}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center rounded-full border border-line bg-cream px-4 font-semibold text-ink hover:bg-paper transition-colors"
                  >
                    Open on YouTube
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-2xl border border-line bg-cream p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-night">More performances</h2>
          <p className="mt-3 text-sm text-muted leading-relaxed max-w-2xl">
            Live stage recordings, ভাটিয়ালি and other repertoire are often posted
            on Facebook. New YouTube releases will appear here as they are
            published.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-night px-5 font-semibold text-cream hover:bg-night-soft transition-colors"
            >
              Facebook performances
            </a>
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 font-semibold hover:bg-cream transition-colors"
            >
              Search YouTube
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center text-muted underline underline-offset-4"
            >
              Request a song on WhatsApp
            </a>
            <Link
              to="/courses"
              className="inline-flex min-h-11 items-center text-muted underline underline-offset-4"
            >
              Courses
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
