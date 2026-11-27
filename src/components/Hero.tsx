import { m } from "framer-motion";
import { profile, sections, ui } from "../content/site";
import { btnPrimary, btnSecondary, chip, container, iconLink } from "../lib/ui";
import { Float } from "./art";
import { HeroSpring } from "./art/scenes/HeroSpring";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";
import { TypedLine } from "./TypedLine";

const s = sections.source;

/** KM 0 · Source: name, role, rotating facts, CTAs; About strip below. */
export function Hero() {
  return (
    <section id={s.id} aria-labelledby="hero-name" className="relative bg-deep">
      <div
        className={`${container} relative grid min-h-[calc(100vh-var(--nav-h))] grid-cols-1 items-center gap-6 pt-6 pb-20 lg:grid-cols-12`}
      >
        <div className="lg:col-span-7">
          <p className="km-label">
            {s.km} · {s.name.toUpperCase()} ·{" "}
            <span lang="vi" className="normal-case">
              {s.vn}
            </span>
          </p>
          <h1 id="hero-name" className="mt-4 text-5xl text-foam lg:text-[72px]">
            {profile.name}
          </h1>
          <p className="mt-3 text-[22px] text-foam">{profile.role}</p>
          <div className="mt-4">
            <TypedLine facts={profile.typedFacts} label={profile.typedFactsLabel} />
          </div>
          <p className="mt-4 max-w-[60ch] text-silt">{profile.pitch}</p>
          <p className={`${chip} mt-5 border border-shallow bg-deep-tint text-foam`}>
            {profile.status}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href={profile.resumeUrl} download className={btnPrimary}>
              <DownloadIcon />
              {ui.downloadResume}
            </a>
            <a href={`mailto:${profile.email}`} className={btnSecondary}>
              <MailIcon />
              {ui.emailMe}
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
            >
              <GitHubIcon />
              <span className="sr-only">
                {ui.github} {ui.newTabHint}
              </span>
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
            >
              <LinkedInIcon />
              <span className="sr-only">
                {ui.linkedin} {ui.newTabHint}
              </span>
            </a>
          </div>
        </div>
        <div className="hidden lg:col-span-5 lg:block">
          <HeroSpring className="h-auto w-full" />
        </div>

        <a
          href="#flows"
          className="mono absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 rounded-full px-3 py-1 text-silt hover:text-foam"
        >
          <svg
            width="24"
            height="34"
            viewBox="-12 -24 24 34"
            aria-hidden="true"
            className="anim-bob"
          >
            <Float />
          </svg>
          {ui.scrollCue}
        </a>
      </div>

      {/* About strip */}
      <div className={`${container} grid grid-cols-1 gap-6 pb-24 lg:grid-cols-12`}>
        <m.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-[68ch] text-foam lg:col-span-7"
        >
          {profile.about}
        </m.p>
        <ul className="flex flex-wrap content-start gap-3 lg:col-span-5 lg:justify-end">
          {profile.stats.map((stat) => (
            <li
              key={stat.label}
              className={`${chip} gap-2 border border-shallow bg-deep-tint py-2 text-foam`}
            >
              <span className="font-semibold text-dusk">{stat.value}</span>
              {stat.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
