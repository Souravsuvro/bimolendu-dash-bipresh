import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { FAQS, WA, SOCIAL } from "@/lib/site";

export const Route = createFileRoute("/faq")({ component: FaqPage });

function FaqPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">Help</p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-bold text-night">FAQs</h1>
        <p className="mt-4 text-muted text-sm sm:text-base">
          Common questions about Bimolendu Dash Bipresh, Parampara Music Academy and how to work with him.
        </p>
        <div className="mt-10 space-y-4">
          {FAQS.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-line bg-paper p-5 open:shadow-sm">
              <summary className="cursor-pointer font-semibold text-night list-none flex justify-between gap-4">
                {item.q}
                <span className="text-muted group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          <a href={WA} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-night px-5 font-semibold text-cream">
            Ask on WhatsApp
          </a>
          <Link to="/courses" className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 font-semibold">
            Courses
          </Link>
          <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center text-muted underline">
            Facebook
          </a>
        </div>
      </main>
    </SiteShell>
  );
}
