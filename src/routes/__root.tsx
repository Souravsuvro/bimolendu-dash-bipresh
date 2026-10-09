import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteJsonLd } from "@/components/json-ld";
import appCss from "../styles.css?url";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  SITE_URL,
  OG_IMAGE,
} from "@/lib/site";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE_NAME} | Professional Singer & Vocal Artist` },
      { name: "description", content: SITE_DESCRIPTION },
      {
        name: "keywords",
        content:
          "Bimolendu Dash Bipresh, Bipresh, Bengali singer, Rabindra Sangeet, Nazrul Geeti, classical vocal, Parampara Music Academy, Sylhet, vocal training, online music class, Kolkata, Bangladesh",
      },
      { name: "author", content: SITE_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#1a2238" },
      { name: "geo.region", content: "BD-G" },
      { name: "geo.placename", content: "Sylhet" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: `${SITE_NAME} | ${SITE_TAGLINE}` },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: `${SITE_NAME} performing live` },
      { property: "og:locale", content: "en_GB" },
      { property: "og:locale:alternate", content: "bn_BD" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_NAME} | ${SITE_TAGLINE}` },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,650&family=Source+Sans+3:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <SiteJsonLd />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
