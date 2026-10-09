import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { NAV, FOOTER_LINKS, SOCIAL, WA, PHONE_DISPLAY, EMAIL } from "@/lib/site";

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col">
      <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            to="/"
            className="font-serif text-base sm:text-lg font-semibold tracking-tight text-night"
          >
            Bimolendu Dash Bipresh
          </Link>
          <nav className="hidden items-center gap-5 lg:gap-7 text-sm font-medium text-muted md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-night px-4 py-2 text-sm font-semibold text-cream hover:bg-night-soft transition-colors md:inline-flex min-h-10 items-center"
            >
              WhatsApp
            </a>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden bg-cream">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium hover:bg-paper"
              >
                {item.label}
              </Link>
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

      <div className="flex-1">{children}</div>

      <footer className="border-t border-line bg-paper">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-serif text-lg font-semibold text-night">
                Bimolendu Dash Bipresh
              </p>
              <p className="mt-2 text-sm text-muted">
                Professional singer · Parampara Music Academy, Sylhet
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-night underline underline-offset-4 hover:text-saffron-deep"
                >
                  Facebook
                </a>
                <a
                  href={SOCIAL.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-night underline underline-offset-4 hover:text-saffron-deep"
                >
                  YouTube
                </a>
                <a
                  href={SOCIAL.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-night underline underline-offset-4 hover:text-saffron-deep"
                >
                  WhatsApp
                </a>
                <a
                  href={SOCIAL.email}
                  className="text-sm font-medium text-night underline underline-offset-4 hover:text-saffron-deep"
                >
                  Email
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
                Explore
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {FOOTER_LINKS.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-muted hover:text-ink transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
                Contact
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  <a href={WA} target="_blank" rel="noreferrer" className="hover:text-ink">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="hover:text-ink break-all">
                    {EMAIL}
                  </a>
                </li>
                <li>Bondor Bazar, Sylhet, Bangladesh</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
                Motto
              </p>
              <p className="mt-3 text-sm text-muted italic">
                Mastering the Melody, Inspiring the Musician
              </p>
            </div>
          </div>
          <p className="mt-10 border-t border-line pt-6 text-center text-xs text-muted">
            © {new Date().getFullYear()} Bimolendu Dash Bipresh · Parampara Music Academy
          </p>
        </div>
      </footer>
    </div>
  );
}
