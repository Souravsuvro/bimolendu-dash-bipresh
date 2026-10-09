import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { GALLERY, SOCIAL, WA } from "@/lib/site";

export const Route = createFileRoute("/gallery")({ component: GalleryPage });

function GalleryPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
          On stage & beyond
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-bold text-night">
          Gallery
        </h1>
        <p className="mt-4 max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
          Portraits, stage moments, the upcoming release banner for{" "}
          <span className="font-medium text-ink">কাইন্দ নাগো ভবানী</span>, and a
          cherished photograph with Anup Jalota — the Bhajan Samraat.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item) => (
            <figure
              key={item.src}
              className="group overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-night/5">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4 sm:p-5">
                <p className="font-serif text-base sm:text-lg text-night leading-snug">
                  {item.caption}
                </p>
                {item.credit && (
                  <p className="mt-1.5 text-xs text-muted leading-relaxed">
                    {item.credit}
                  </p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-cream p-6 sm:p-8 text-center">
          <p className="font-serif text-xl sm:text-2xl text-night">
            Follow for more moments
          </p>
          <p className="mt-2 text-sm text-muted max-w-md mx-auto">
            Stage clips, new releases and academy updates appear first on
            Facebook and YouTube.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-[#1877F2] px-5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Facebook
            </a>
            <a
              href={SOCIAL.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-[#FF0000] px-5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              YouTube
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-night px-5 text-sm font-semibold text-cream hover:bg-night/90 transition-colors"
            >
              WhatsApp
            </a>
            <Link
              to="/videos"
              className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 text-sm font-semibold text-ink hover:bg-cream transition-colors"
            >
              Watch videos
            </Link>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
