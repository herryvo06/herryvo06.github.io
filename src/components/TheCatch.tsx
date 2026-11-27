import { caseStudies, sections } from "../content/site";
import { container } from "../lib/ui";
import { CaseStudyCard } from "./CaseStudyCard";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const s = sections.catch;

/** KM 20 · The Catch: case studies, 2 per row; the in-progress card spans the row. */
export function TheCatch() {
  return (
    <section id={s.id} aria-labelledby={`${s.id}-title`} className="bg-deep py-24">
      <div className={container}>
        <SectionHeader km={s.km} name={s.name} vn={s.vn} title={s.title} titleId={`${s.id}-title`} />
        <Reveal>
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
