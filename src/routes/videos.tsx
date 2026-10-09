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
          Published performances by Bimolendu Dash Bipresh — devotional,
          Nazrul Geeti, Bhatiyali folk and more. Stage and studio clips also
          appear on his Facebook and YouTube channel.
        </p>

        <section className="mt-10 overflow-hidden rounded-2xl border border-saffron-deep/30 bg-gradient-to-br from-cream via-paper to-cream shadow-sm">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[280px]">
              <img
                src="/photos/kaindo-nago-bhabani-banner.jpg"
                alt="কাইন্দ নাগো ভবানী — Upcoming music video banner"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
                New release
              </p>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-night leading-snug">
                কাইন্দ নাগো ভবানী
              </h2>
              <p className="mt-1 text-sm font-medium text-ink">
                Kaindo Nago Bhabani — Upcoming music video
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Artist: <strong className="text-ink">Bimolendu Dash</strong>
                <br />
                Lyrics &amp; Composition: Traditional
                <br />
                Lyrics Extension: Dilip Chandra Roy
                <br />
                Music Arrangement: Prasenjit Sil &amp; Subrata Bose
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={WA + "?text=" + encodeURIComponent("Hello Bipresh, please notify me when কাইন্দ নাগো ভবানী is released.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center rounded-full bg-night px-4 text-sm font-semibold text-cream hover:bg-night/90 transition-colors"
                >
                  Notify me on WhatsApp
                </a>
                <Link
                  to="/gallery"
                  className="inline-flex min-h-10 items-center rounded-full border border-line bg-paper px-4 text-sm font-semibold text-ink hover:bg-cream transition-colors"
                >
                  See banner in Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 space-y-12">
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
                {v.category && (
                  <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
                    {v.category}
                  </p>
                )}
                <h2 className="mt-1 font-serif text-xl sm:text-2xl text-night">
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

        <div className="mt-14 rounded-2xl border border-line bg-cream p-6 sm:p-8 text-center">
          <p className="font-serif text-xl sm:text-2xl text-night">
            More on social
          </p>
          <p className="mt-2 text-sm text-muted max-w-md mx-auto">
            Live clips, reels and new uploads appear on Facebook and the
            YouTube channel.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-[#1877F2] px-5 text-sm font-semibold text-white hover:opacity-90"
            >
              Facebook
            </a>
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-[#FF0000] px-5 text-sm font-semibold text-white hover:opacity-90"
            >
              YouTube channel
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-night px-5 text-sm font-semibold text-cream hover:bg-night/90"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
