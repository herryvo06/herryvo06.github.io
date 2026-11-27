import { footer, profile, sections, ui } from "../content/site";
import { btnPrimary, btnSecondary, container, iconLink } from "../lib/ui";
import { CuaHoi } from "./art/scenes/CuaHoi";
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const s = sections.contact;
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/** KM 50 · Cửa Hội: where the Lam River meets the sea, and where the site ends. */
export function Footer() {
  return (
    <footer id={s.id} aria-labelledby={`${s.id}-title`} className="relative bg-deep">
      <CuaHoi className="block h-[220px] w-full" />
      <div className={`${container} pt-16 pb-10 text-center`}>
        <p className="km-label">
          {s.km} · {s.name.toUpperCase()} ·{" "}
          <span lang="vi" className="normal-case">
            {s.vn}
          </span>
        </p>
        <h2 id={`${s.id}-title`} className="mt-4 text-[40px] text-foam">
          {s.title}
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href={profile.resumeUrl} download className={btnPrimary}>
            <DownloadIcon />
            {ui.downloadResume}
          </a>
          <a href={`mailto:${profile.email}`} className={btnSecondary}>
            <MailIcon />
            {ui.emailMe}
          </a>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <a href={profile.links.github} {...ext} className={iconLink}>
            <GitHubIcon />
            <span className="sr-only">
              {ui.github} {ui.newTabHint}
            </span>
          </a>
          <a href={profile.links.linkedin} {...ext} className={iconLink}>
            <LinkedInIcon />
            <span className="sr-only">
              {ui.linkedin} {ui.newTabHint}
            </span>
          </a>
        </div>
        <p className="mono mt-6 text-silt">{profile.email}</p>

        <hr className="mt-16 border-foam/10" />
        <p className="mono mt-6 flex flex-wrap justify-center gap-x-3 text-silt">
          <a href={profile.links.source} {...ext} className="link text-silt">
            {footer.sourceLabel}
            <span className="sr-only"> {ui.newTabHint}</span>
          </a>
          <span aria-hidden="true">·</span>
          <span>
            {footer.updatedLabel}: {__BUILD_DATE__}
          </span>
          <span aria-hidden="true">·</span>
          <span>{footer.builtBy}</span>
        </p>
      </div>
    </footer>
  );
}
