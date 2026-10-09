import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  EMAIL,
  PHONE_DISPLAY,
  SOCIAL,
  FAQS,
  OG_IMAGE,
} from "@/lib/site";

function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SiteJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    alternateName: ["Bipresh", "Bimalendu Das Bipresh", "বিমলেন্দু দাশ"],
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: OG_IMAGE,
    jobTitle: "Professional Singer & Vocal Trainer",
    email: EMAIL,
    telephone: PHONE_DISPLAY,
    sameAs: [SOCIAL.facebook],
    knowsAbout: [
      "Rabindra Sangeet",
      "Nazrul Geeti",
      "Indian Classical Music",
      "Bengali Folk",
      "Vocal Training",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Rabindra Bharati University" },
      { "@type": "CollegeOrUniversity", name: "Leading University" },
    ],
    worksFor: {
      "@type": "MusicSchool",
      name: "Parampara Music Academy",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sylhet",
        addressCountry: "BD",
        streetAddress: "Bondor Bazar",
      },
    },
  };

  const org = {
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    name: "Parampara Music Academy",
    description:
      "Vocal and instrument training in Sylhet — classical, Rabindra Sangeet, Nazrul Geeti, folk, film. Offline and online courses.",
    url: `${SITE_URL}/courses`,
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bondor Bazar",
      addressLocality: "Sylhet",
      addressCountry: "BD",
    },
    founder: { "@type": "Person", name: SITE_NAME },
    areaServed: ["Sylhet", "Bangladesh", "Kolkata", "Bengali diaspora"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: SITE_TAGLINE,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@type": "Person", name: SITE_NAME },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLdScript data={person} />
      <JsonLdScript data={org} />
      <JsonLdScript data={website} />
      <JsonLdScript data={faq} />
    </>
  );
}
