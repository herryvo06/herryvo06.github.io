import { useId, useRef, useState, type KeyboardEvent } from "react";
import { flowIntro, flows, sections, stageNames, ui } from "../content/site";
import { container } from "../lib/ui";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const s = sections.flows;

/** KM 5 · How my data flows: tabs of real work, each drawn as a river of pipeline stations. */
export function FlowDiagram() {
  const baseId = useId();
  const [selected, setSelected] = useState(0);
  const [openNode, setOpenNode] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const tab = flows[selected];

  const select = (i: number) => {
    setSelected(i);
    setOpenNode(null);
    tabRefs.current[i]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = flows.length - 1;
    const keys: Record<string, number> = {
      ArrowRight: selected === last ? 0 : selected + 1,
      ArrowLeft: selected === 0 ? last : selected - 1,
      Home: 0,
      End: last,
    };
    if (e.key in keys) {
      e.preventDefault();
      select(keys[e.key]);
    }
  };

  const n = tab.nodes.length;
  const note = openNode !== null ? tab.nodes[openNode]?.why : undefined;

  return (
    <section id={s.id} aria-labelledby={`${s.id}-title`} className="bg-deep-tint py-24">
      <div className={container}>
        <SectionHeader km={s.km} name={s.name} title={s.title} titleId={`${s.id}-title`} />
        <p className="-mt-6 mb-10 max-w-[68ch] text-silt">{flowIntro}</p>

        <div role="tablist" aria-label={ui.flowTabsLabel} className="flex flex-wrap gap-3">
          {flows.map((f, i) => {
            const isSel = i === selected;
            return (
              <button
                key={f.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`${baseId}-tab-${f.id}`}
                aria-selected={isSel}
                aria-controls={`${baseId}-panel`}
                tabIndex={isSel ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={onKeyDown}
                className={`ripple min-h-11 rounded-full px-5 text-base transition-colors duration-200 ${
                  isSel
                    ? "bg-dusk font-semibold text-deep"
                    : "border-2 border-shallow text-foam hover:border-dusk"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <Reveal>
          <div
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${tab.id}`}
            tabIndex={0}
            className="relative mt-12 rounded-[12px] px-2 py-4"
          >
            {/* the river connecting the stations */}
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 40"
              preserveAspectRatio="none"
              className="pointer-events-none absolute top-[76px] right-[6%] left-[6%] hidden h-10 w-[88%] lg:block"
            >
              <path
                d="M0 20 C 60 4, 140 36, 200 20 S 340 4, 400 20 S 540 36, 600 20 S 740 4, 800 20 S 940 36, 1000 20"
                fill="none"
                stroke="var(--shallow)"
                strokeWidth="6"
                strokeOpacity="0.55"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M0 20 C 60 4, 140 36, 200 20 S 340 4, 400 20 S 540 36, 600 20 S 740 4, 800 20 S 940 36, 1000 20"
                fill="none"
                stroke="var(--foam)"
                strokeOpacity="0.5"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                className="anim-flow"
              />
            </svg>

            <ol
              className="relative grid gap-6"
              style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}
            >
              {tab.nodes.map((node, i) => {
                const station = (
                  <>
                    <span className="km-label block h-12 text-center">
                      {stageNames[node.stage]}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mx-auto my-4 block h-6 w-6 rounded-full border-[3px] ${
                        openNode === i ? "border-dusk bg-dusk" : "border-shallow bg-deep"
                      } shadow-[0_0_0_6px_var(--deep-tint)]`}
                    />
                    <span className="block text-center text-base text-foam">{node.label}</span>
                  </>
                );
                return (
                  <li key={`${tab.id}-${node.stage}`} className="flex flex-col">
                    {node.why ? (
                      <button
                        type="button"
                        aria-expanded={openNode === i}
                        aria-controls={`${baseId}-note`}
                        onClick={() => setOpenNode(openNode === i ? null : i)}
                        onFocus={() => setOpenNode(i)}
                        onMouseEnter={() => setOpenNode(i)}
                        className="rounded-[12px] p-2"
                      >
                        {station}
                      </button>
                    ) : (
                      <div className="p-2">{station}</div>
                    )}
                  </li>
                );
              })}
            </ol>

            {note && (
              <p
                id={`${baseId}-note`}
                className="mt-8 max-w-[68ch] rounded-[12px] border-l-4 border-dusk bg-(--current) p-6 text-foam"
              >
                {note}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
