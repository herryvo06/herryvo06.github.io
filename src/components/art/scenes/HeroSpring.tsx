import { useId } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Hills, Ripple, Tree, Water } from "..";

/**
 * Hero spring: a small source between two hills; the river starts as a thin line and
 * flows down-left towards the RiverLine. Low dusk sun upper right. Decorative.
 */
export function HeroSpring({ className }: { className?: string }) {
  const id = useId();
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Gentle parallax: max 20px shift, off under reduced motion.
  const far = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 20]);
  const near = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 8]);

  return (
    <svg viewBox="0 0 480 440" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--deep)" }} />
          <stop offset="1" style={{ stopColor: "color-mix(in srgb, var(--current) 70%, var(--deep))" }} />
        </linearGradient>
        <radialGradient id={`${id}-sun`}>
          <stop offset="0.45" style={{ stopColor: "var(--dusk)" }} stopOpacity="0.35" />
          <stop offset="1" style={{ stopColor: "var(--dusk)" }} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.18" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id={`${id}-mask`}>
          <rect width="480" height="440" fill={`url(#${id}-fade)`} />
        </mask>
      </defs>

      <g mask={`url(#${id}-mask)`}>
        {/* Band 1: sky + sun (the single --dusk focal point) */}
        <rect width="480" height="300" fill={`url(#${id}-sky)`} />
        <m.g style={{ y: far }}>
          <circle cx="392" cy="96" r="58" fill={`url(#${id}-sun)`} />
          <circle cx="392" cy="96" r="22" fill="var(--dusk)" />

          {/* Band 2: far hills, the spring sits in the notch between them */}
          <Hills
            tone="far"
            d="M0 262 C60 182 110 142 150 150 C190 158 214 218 238 236 C262 200 300 130 350 125 C400 120 450 170 480 200 V320 H0 Z"
            highlight="M154 152 C190 162 214 218 236 234 M354 126 C400 121 448 168 478 198"
          />
        </m.g>

        {/* Band 3: near land with a few trees */}
        <m.g style={{ y: near }}>
          <Hills
            tone="near"
            d="M0 300 C80 262 160 270 240 250 C320 232 420 262 480 244 V440 H0 Z"
            highlight="M300 240 C360 236 420 260 478 245"
          />
          <Tree x={330} y={252} variant={0} scale={0.9} />
          <Tree x={352} y={250} variant={1} scale={0.75} />
          <Tree x={424} y={258} variant={2} scale={0.8} />
          <Tree x={70} y={292} variant={1} scale={0.85} />
        </m.g>

        {/* Band 4: the river, a thin spring that widens as it flows down-left */}
        <Water
          y={236}
          width={480}
          height={204}
          d="M236 238 C214 290 262 320 170 360 C110 388 40 400 0 410 V440 H70 C130 428 236 400 266 352 C290 312 246 286 242 238 Z"
          reflection={{ x1: 168, x2: 212, y: 372 }}
        />
        <ellipse cx="239" cy="238" rx="9" ry="3" fill="color-mix(in srgb, var(--current) 60%, var(--shallow))" />
        <Ripple x={239} y={238} rings={2} spread={10} className="anim-ripple" />
      </g>
    </svg>
  );
}
