import {
  SITE_NAME,
  SITE_TAGLINE,
  shareUrl,
  facebookShare,
  twitterShare,
  whatsappShare,
} from "@/lib/site";

type Props = {
  path?: string;
  title?: string;
  className?: string;
};

export function ShareButtons({
  path = "/",
  title = `${SITE_NAME} — ${SITE_TAGLINE}`,
  className = "",
}: Props) {
  const url = shareUrl(path);
  const btn =
    "inline-flex min-h-10 items-center justify-center rounded-full border border-line bg-paper px-4 text-sm font-semibold text-ink hover:bg-cream transition-colors";

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <a
        href={facebookShare(url)}
        target="_blank"
        rel="noreferrer"
        className={btn}
      >
        Share on Facebook
      </a>
      <a
        href={whatsappShare(url, title)}
        target="_blank"
        rel="noreferrer"
        className={btn}
      >
        Share on WhatsApp
      </a>
      <a
        href={twitterShare(url, title)}
        target="_blank"
        rel="noreferrer"
        className={btn}
      >
        Share on X
      </a>
      <button
        type="button"
        className={btn}
        onClick={async () => {
          try {
            if (navigator.share) {
              await navigator.share({ title, url, text: title });
            } else {
              await navigator.clipboard.writeText(url);
              alert("Link copied");
            }
          } catch {
            try {
              await navigator.clipboard.writeText(url);
              alert("Link copied");
            } catch {
              /* ignore */
            }
          }
        }}
      >
        Copy link
      </button>
    </div>
  );
}
