import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { EMAIL, WA, PHONE_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/terms")({ component: TermsPage });

function TermsPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-serif text-4xl font-bold text-night">Terms & Conditions</h1>
        <p className="mt-2 text-sm text-muted">Last updated: October 2026</p>
        <div className="mt-8 space-y-6 text-sm text-muted leading-relaxed">
          <section>
            <h2 className="font-serif text-xl text-night">Use of this website</h2>
            <p className="mt-2">
              Content is provided for information about Bimolendu Dash Bipresh and Parampara Music Academy.
              Do not copy branding, photos or text for commercial use without written permission.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-night">Performances and bookings</h2>
            <p className="mt-2">
              Booking enquiries via WhatsApp or email are not a confirmed contract until fees, date and scope
              are agreed in writing. Travel, sound and accompaniment may be charged extra depending on the event.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-night">Courses and fees</h2>
            <p className="mt-2">
              Course prices on the <Link to="/courses" className="underline text-ink">Courses</Link> page are indicative.
              Final fees and policies are confirmed at enrolment. Missed classes are handled as agreed with the academy; refunds are not automatic.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-night">Accuracy</h2>
            <p className="mt-2">
              Confirm important details on WhatsApp ({PHONE_DISPLAY}) or email before relying on schedules and fees.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-night">Third-party links</h2>
            <p className="mt-2">Facebook, YouTube and other external links are outside our control.</p>
          </section>
          <section>
            <h2 className="font-serif text-xl text-night">Contact</h2>
            <p className="mt-2">
              <a className="underline text-ink" href={`mailto:${EMAIL}`}>{EMAIL}</a> or{" "}
              <a className="underline text-ink" href={WA} target="_blank" rel="noreferrer">WhatsApp</a>.
            </p>
          </section>
        </div>
        <p className="mt-10 text-sm">
          <Link to="/privacy" className="underline">Privacy Policy</Link> · <Link to="/faq" className="underline">FAQs</Link> · <Link to="/" className="underline">Home</Link>
        </p>
      </main>
    </SiteShell>
  );
}
