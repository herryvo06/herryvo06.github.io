import { m, useScroll } from "framer-motion";

/**
 * Thin animated river on the left edge connecting every section like a pipeline DAG.
 * Each section is a station; the active one glows --dusk. Decorative, hidden below 1024px.
 */
const TOP = 40;
const BOTTOM = 960;

export function RiverLine({ stations, active }: { stations: readonly string[]; active?: string }) {
  const { scrollYProgress } = useScroll();
  const step = (BOTTOM - TOP) / Math.max(stations.length - 1, 1);
  const ys = stations.map((_, i) => TOP + i * step);
  const d =
    `M16 0 L16 ${TOP} ` +
    ys
      .slice(0, -1)
      .map((y) => `C4 ${y + step / 3} 28 ${y + (2 * step) / 3} 16 ${y + step}`)
      .join(" ") +
    ` L16 1000`;
  const activeIndex = stations.indexOf(active ?? "");

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-[calc(var(--nav-h)+16px)] bottom-6 left-4 z-40 hidden w-8 lg:block"
    >
      <svg
        viewBox="0 0 32 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full overflow-visible"
      >
        <path
          d={d}
          fill="none"
          stroke="var(--shallow)"
          strokeOpacity="0.35"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={d}
          fill="none"
          stroke="var(--foam)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className="anim-flow"
        />
        <m.path
          d={d}
          fill="none"
          stroke="var(--shallow)"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>
      {stations.map((id, i) => {
        const isActive = i === activeIndex;
        const passed = activeIndex >= 0 && i < activeIndex;
        return (
          <span
            key={id}
            className={`absolute left-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ease-out ${
              isActive
                ? "scale-125 border-dusk bg-dusk shadow-[0_0_0_6px_rgba(242,166,90,0.2),0_0_18px_rgba(242,166,90,0.6)]"
                : passed
                  ? "border-shallow bg-shallow"
                  : "border-shallow bg-deep"
            }`}
            style={{ top: `${ys[i] / 10}%` }}
          />
        );
      })}
    </div>
  );
}
