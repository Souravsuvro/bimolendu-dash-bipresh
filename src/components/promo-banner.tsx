import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PROMO } from "@/lib/site";

const KEY = "bipresh-promo-dismissed";

export function PromoBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!PROMO.enabled) return;
    try {
      if (sessionStorage.getItem(KEY) !== "1") setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="relative z-[60] border-b border-saffron/30 bg-night text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
        <p className="text-xs sm:text-sm leading-snug flex-1">
          <span className="font-semibold text-saffron">New:</span> {PROMO.text}
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            to={PROMO.to}
            className="rounded-full bg-saffron px-3 py-1.5 text-xs font-semibold text-night hover:bg-saffron-deep hover:text-cream transition-colors"
          >
            {PROMO.cta}
          </Link>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss banner"
            className="inline-flex size-8 items-center justify-center rounded-full text-cream/70 hover:bg-night-soft hover:text-cream"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
