import { useState } from "react";
import { m } from "framer-motion";
import { caseStudyHeadings as H, caseStudyNav, ui, type CaseStudy } from "../content/site";
import { btnPrimary, btnSecondary, chip } from "../lib/ui";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/** KM 20 card. Collapsed: image, label, title, question, metric chips, stack. Expands inline. */
export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false);
  const detailsId = `${study.slug}-details`;

  if (study.status === "in-progress") {
    return (
      <article
        aria-labelledby={`${study.slug}-title`}
        className="rounded-[12px] border-2 border-dashed border-shallow p-8 lg:col-span-2"
      >
        <div className="flex flex-wrap items-center gap-4">
          <p className="mono uppercase tracking-[0.08em] text-silt">{study.label}</p>
          <span className={`${chip} border border-dusk text-dusk`}>{ui.inProgress}</span>
        </div>
        <h3 id={`${study.slug}-title`} className="mt-3 text-[28px] text-foam">
          {study.title}
        </h3>
        <p className="mt-2 text-silt">{study.question}</p>
      </article>
    );
  }

  const sectionsList = [
    { key: "question", show: true },
    { key: "data", show: !!study.data },
    { key: "approach", show: study.approach.length > 0 },
    { key: "result", show: true },
    { key: "nextTime", show: !!study.nextTime },
    { key: "links", show: study.links.length > 0 },
  ].filter((x) => x.show) as { key: keyof typeof H }[];

  return (
    <article
      aria-labelledby={`${study.slug}-title`}
      className={`flex flex-col overflow-hidden rounded-[12px] bg-(--current) shadow-[0_12px_32px_rgba(0,0,0,0.25)] ${
        open ? "lg:col-span-2" : ""
      }`}
    >
      <div className={open ? "grid gap-8 lg:grid-cols-2" : "flex flex-1 flex-col"}>
        {study.image && (
          <img
            src={study.image.src}
            alt={study.image.alt}
            width={study.image.width}
            height={study.image.height}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full rounded-[12px] bg-white object-contain p-2"
          />
        )}
        <div className="flex flex-1 flex-col p-8">
          <p className="mono uppercase tracking-[0.08em] text-foam">{study.label}</p>
          <h3 id={`${study.slug}-title`} className="mt-3 text-[28px] text-foam">
            {study.title}
          </h3>
          <p className="mt-3 text-foam italic">“{study.question}”</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {study.results.map((r) => (
              <li key={r.label} className={`${chip} gap-2 bg-deep py-1.5 text-foam`}>
                <span className="font-semibold text-dusk">{r.value}</span>
                {r.label}
              </li>
            ))}
          </ul>
          <p className="mono mt-5 text-foam">{study.stack.join(" · ")}</p>
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <button
              type="button"
              aria-expanded={open}
              aria-controls={detailsId}
              onClick={() => setOpen((o) => !o)}
              className={btnPrimary}
            >
              {open ? ui.closeCaseStudy : ui.readCaseStudy}
              <span aria-hidden="true">{open ? "↑" : "↓"}</span>
            </button>
            {study.links.map((l) => (
              <a key={l.url} href={l.url} {...ext} className={btnSecondary}>
                {l.label}
                <span className="sr-only"> {ui.newTabHint}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {open && (
        <m.div
          id={detailsId}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="grid gap-8 border-t border-shallow/40 p-8 lg:grid-cols-[180px_1fr]"
        >
          <nav aria-label={`${ui.caseStudyNavLabel}: ${study.title}`} className="hidden lg:block">
            <ul className="sticky top-[calc(var(--nav-h)+24px)] space-y-2">
              {sectionsList.map(({ key }) => (
                <li key={key}>
                  <a href={`#${study.slug}-${key}`} className="mono text-foam hover:text-dusk">
                    {caseStudyNav[key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-[68ch] space-y-10">
            <Block id={`${study.slug}-question`} title={H.question}>
              <p>{study.question}</p>
            </Block>

            {study.data && (
              <Block id={`${study.slug}-data`} title={H.data}>
                <p>{study.data}</p>
              </Block>
            )}

            {study.approach.length > 0 && (
              <Block id={`${study.slug}-approach`} title={H.approach}>
                {study.approachSteps && (
                  <ol className="mb-4 flex flex-wrap items-center gap-2" aria-label={H.approach}>
                    {study.approachSteps.map((step, i) => (
                      <li key={step} className="flex items-center gap-2">
                        <span className={`${chip} bg-deep text-foam`}>{step}</span>
                        {i < study.approachSteps!.length - 1 && (
                          <span aria-hidden="true" className="text-foam">
                            →
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                )}
                {study.approach.map((p) => (
                  <p key={p} className="mt-2">
                    {p}
                  </p>
                ))}
                {study.judgement && (
                  <p className="mt-4 border-l-4 border-dusk pl-4">{study.judgement}</p>
                )}
              </Block>
            )}

            <Block id={`${study.slug}-result`} title={H.result}>
              <ul className="mb-4 grid grid-cols-3 gap-4">
                {study.results.map((r) => (
                  <li key={r.label} className="rounded-[12px] bg-deep p-4">
                    <span className="block font-display text-4xl text-dusk">{r.value}</span>
                    <span className="mono text-foam">{r.label}</span>
                  </li>
                ))}
              </ul>
              {study.resultNotes && (
                <ul className="list-disc space-y-2 pl-5">
                  {study.resultNotes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              )}
            </Block>

            {study.nextTime && (
              <Block id={`${study.slug}-nextTime`} title={H.nextTime}>
                <p>{study.nextTime}</p>
              </Block>
            )}

            <Block id={`${study.slug}-links`} title={H.links}>
              <ul className="flex flex-wrap gap-4">
                {study.links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} {...ext} className="link">
                      {l.label}
                      <span className="sr-only"> {ui.newTabHint}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </Block>
          </div>
        </m.div>
      )}
    </article>
  );
}

function Block({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-h`}
      className="scroll-mt-[calc(var(--nav-h)+24px)] text-foam"
    >
      <h4 id={`${id}-h`} className="mb-3 font-display text-2xl text-foam">
        {title}
      </h4>
      {children}
    </section>
  );
}
