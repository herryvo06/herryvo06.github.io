import { useEffect, useState } from "react";
import { nav, profile, ui } from "../content/site";
import { btnPrimary } from "../lib/ui";

/** Sticky nav: transparent at top, --deep with blur after 40px; active link underlined in --dusk. */
export function Nav({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-[var(--nav-h)] transition-colors duration-300 ease-out ${
        scrolled
          ? "bg-deep/85 backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] shadow-[0_1px_0_rgba(232,241,242,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label={ui.mainNavLabel}
        className="mx-auto flex h-full w-full max-w-[1228px] items-center gap-8 px-6 lg:px-16"
      >
        <a href="/#source" aria-label={ui.homeLabel} className="font-display text-2xl text-foam">
          {profile.logo}
        </a>
        <ul className="ml-auto flex items-center gap-8">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`py-2 text-base underline-offset-8 transition-colors duration-200 hover:text-foam ${
                    isActive ? "text-foam underline decoration-dusk decoration-2" : "text-silt"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a href={profile.resumeUrl} className={`${btnPrimary} px-5 text-sm`}>
          {ui.resumeButton}
        </a>
      </nav>
    </header>
  );
}
