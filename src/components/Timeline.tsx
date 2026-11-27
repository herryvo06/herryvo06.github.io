import { roles, sections } from "../content/site";
import { chip, container } from "../lib/ui";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const s = sections.experience;

/** KM 30 · Downstream: experience, newest first, copied exactly from the résumé. */
export function Timeline() {
  return (
    <section id={s.id} aria-labelledby={`${s.id}-title`} className="bg-deep-tint py-24">
      <div className={container}>
        <SectionHeader km={s.km} name={s.name} title={s.title} titleId={`${s.id}-title`} />
        <ol className="relative">
          {roles.map((r, i) => (
            <li key={`${r.title}-${r.start}`} className="grid grid-cols-1 gap-x-6 pb-8 last:pb-0 lg:grid-cols-[200px_32px_1fr]">
              <p className="mono pt-6 text-silt lg:text-right">
                {r.start} – {r.end}
              </p>
              {/* river rail */}
              <div aria-hidden="true" className="relative hidden lg:block">
                <span
                  className={`absolute left-1/2 w-[3px] -translate-x-1/2 bg-shallow/50 ${
                    i === 0 ? "top-8" : "-top-0"
                  } ${i === roles.length - 1 ? "h-8" : "-bottom-8"}`}
                />
                <span className="absolute top-[26px] left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-shallow bg-deep-tint" />
              </div>
              <Reveal delay={i * 0.05}>
                <div className="rounded-[12px] bg-current p-6 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                  <h3 className="text-2xl text-foam">{r.title}</h3>
                  <p className="mt-1 text-base text-foam">
                    {r.org} · {r.location}
                  </p>
                  <p className="mt-3 text-foam">{r.line}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {r.stack.map((t) => (
                      <li key={t} className={`${chip} bg-deep text-foam`}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
