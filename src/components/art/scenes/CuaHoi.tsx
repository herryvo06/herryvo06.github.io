import { useId } from "react";
import { Hills, Ripple, Tree, Water } from "..";

/** Cửa Hội: the Lam River widens into the sea at the horizon, dusk sun on the right. Decorative. */
export function CuaHoi({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 1100 260"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="xMidYMax slice"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--deep)" }} />
          <stop
            offset="1"
            style={{ stopColor: "color-mix(in srgb, var(--current) 75%, var(--deep))" }}
          />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="1" r="0.5">
          <stop offset="0" style={{ stopColor: "var(--dusk)" }} stopOpacity="0.4" />
          <stop offset="1" style={{ stopColor: "var(--dusk)" }} stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${id}-above`}>
          <rect width="1100" height="150" />
        </clipPath>
      </defs>

      {/* Band 1: sky + setting sun (focal point) */}
      <rect width="1100" height="150" fill={`url(#${id}-sky)`} />
      <g clipPath={`url(#${id}-above)`}>
        <ellipse cx="860" cy="150" rx="150" ry="90" fill={`url(#${id}-glow)`} />
        <circle cx="860" cy="150" r="34" fill="var(--dusk)" />
      </g>

      {/* Band 2: far bank on the left, where the river comes from */}
      <Hills tone="far" d="M0 104 C70 92 150 98 230 122 C262 132 290 142 320 150 H0 Z" />
      <Tree x={96} y={98} variant={0} scale={0.8} />
      <Tree x={128} y={99} variant={1} scale={0.7} />

      {/* Band 3: the sea, with the sun's reflection */}
      <Water y={150} width={1100} height={110} />
      <g stroke="var(--dusk)" strokeLinecap="round" strokeWidth="1.5">
        <line x1="818" x2="902" y1="160" y2="160" strokeOpacity="0.8" />
        <line x1="834" x2="886" y1="172" y2="172" strokeOpacity="0.6" />
        <line x1="848" x2="872" y1="184" y2="184" strokeOpacity="0.45" />
      </g>

      {/* Band 4: near bank, the river mouth opens between the two banks */}
      <Hills tone="shore" d="M0 206 C120 204 230 222 330 244 C360 251 380 256 400 260 H0 Z" />
      <Ripple x={360} y={186} rings={3} spread={18} />
    </svg>
  );
}
