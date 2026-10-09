import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { EMAIL, WA } from "@/lib/site";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-serif text-4xl font-bold text-night">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: October 2026</p>
        <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-night">Who we are</h2>
            <p className="mt-2">
              This website presents Bimolendu Dash Bipresh and Parampara Music Academy (Sylhet, Bangladesh).
              Contact: <a className="underline text-ink" href={`mailto:${EMAIL}`}>{EMAIL}</a> or{" "}
              <a className="underline text-ink" href={WA} target="_blank" rel="noreferrer">WhatsApp</a>.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-night">Information we collect</h2>
            <p className="mt-2">
              This site does not run user accounts. If you use the contact form, your browser opens WhatsApp
              with a message you wrote — that message is handled by WhatsApp / Meta, not stored on this website.
              Emails you send go to the address above.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-night">Third-party services</h2>
            <p className="mt-2">
              Links and embeds may include Facebook, YouTube, WhatsApp and the hosting provider (Vercel).
              Those services have their own privacy policies.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-night">Cookies and analytics</h2>
            <p className="mt-2">
              The site may use essential technical cookies required to deliver pages. Any future analytics will be disclosed here.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-night">Your rights</h2>
            <p className="mt-2">
              To ask about personal data you sent by email or WhatsApp, contact the email or phone listed on this site.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-night">Changes</h2>
            <p className="mt-2">This policy may be updated; the date above will change when it is.</p>
          </section>
        </div>
        <p className="mt-10 text-sm">
          <Link to="/terms" className="underline">Terms & Conditions</Link> · <Link to="/" className="underline">Home</Link>
        </p>
      </main>
    </SiteShell>
  );
}
