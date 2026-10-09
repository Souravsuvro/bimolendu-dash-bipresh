import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { COURSES, waMessage, PHONE_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/courses")({ component: CoursesPage });

function CoursesPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
          Parampara Music Academy
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-bold text-night">
          Courses
        </h1>
        <p className="mt-4 max-w-2xl text-muted text-sm sm:text-base leading-relaxed">
          Learn voice and instruments with Bimolendu Dash Bipresh. Choose{" "}
          <strong className="text-ink font-semibold">Academy (offline)</strong> in
          Sylhet or <strong className="text-ink font-semibold">Online</strong>{" "}
          classes. Fees below are indicative — confirm schedule, level and final
          pricing on WhatsApp before you enrol.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href={waMessage(
              "Hello, I want to enrol in an Academy (offline) course at Parampara Music Academy, Sylhet."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-night px-5 font-semibold text-cream hover:bg-night-soft transition-colors"
          >
            Enrol Academy (Offline)
          </a>
          <a
            href={waMessage(
              "Hello, I want to enrol in an Online course with Parampara Music Academy."
            )}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-paper px-5 font-semibold hover:bg-cream transition-colors"
          >
            Enrol Online
          </a>
          <Link
            to="/faq"
            className="inline-flex min-h-11 items-center text-muted underline underline-offset-4"
          >
            Course FAQs
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {COURSES.map((c) => (
            <article
              key={c.name}
              className="flex flex-col rounded-2xl border border-line bg-paper p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-saffron-deep">
                {c.level}
              </p>
              <h2 className="mt-1 font-serif text-2xl text-night">{c.name}</h2>
              <p className="mt-2 text-sm text-muted">Duration: {c.duration}</p>
              <p className="mt-3 text-xl font-semibold text-night">{c.price}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                {c.features.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={waMessage(
                    `Hello, I want to enrol in the ${c.name} course — Academy (Offline) at Parampara Music Academy, Bondor Bazar, Sylhet. Please share available slots and enrolment steps.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-saffron px-4 text-center text-sm font-semibold text-night hover:bg-saffron-deep hover:text-cream transition-colors"
                >
                  Enrol Academy (Offline)
                </a>
                <a
                  href={waMessage(
                    `Hello, I want to enrol in the ${c.name} course — Online with Parampara Music Academy. Please share schedule, platform and enrolment steps.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-night bg-cream px-4 text-center text-sm font-semibold text-night hover:bg-night hover:text-cream transition-colors"
                >
                  Enrol Online
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-14 rounded-2xl border border-line bg-cream p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-night">How enrolment works</h2>
          <ol className="mt-4 list-decimal pl-5 space-y-2 text-sm text-muted">
            <li>Choose a course level that matches your experience.</li>
            <li>
              Pick <strong className="text-ink">Academy (Offline)</strong> for
              in-person classes in Sylhet, or{" "}
              <strong className="text-ink">Online</strong> for remote lessons.
            </li>
            <li>
              Message WhatsApp ({PHONE_DISPLAY}) with your name, preferred time
              and goal — the button already fills the message for you.
            </li>
            <li>Agree fees, start date and a trial class if offered.</li>
            <li>
              Academy students join at Bondor Bazar, Sylhet; online students
              receive the meeting link and practice plan.
            </li>
          </ol>
          <p className="mt-4 text-sm text-muted">
            Also see{" "}
            <Link to="/videos" className="underline text-ink">
              Videos
            </Link>
            ,{" "}
            <Link to="/faq" className="underline text-ink">
              FAQs
            </Link>{" "}
            and{" "}
            <Link to="/terms" className="underline text-ink">
              Terms
            </Link>
            .
          </p>
        </section>
      </main>
    </SiteShell>
  );
}
