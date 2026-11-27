import { useId } from "react";
import { Float, Ripple, Water } from "..";

/** 404: an empty hook under a bobbing float, and a ripple. Decorative. */
export function NotFoundScene({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 320 260" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: "var(--deep)" }} />
          <stop
            offset="1"
            style={{ stopColor: "color-mix(in srgb, var(--current) 60%, var(--deep))" }}
          />
        </linearGradient>
      </defs>
      <rect width="320" height="110" fill={`url(#${id}-sky)`} />
      <Water y={110} width={320} height={150} reflection={{ x1: 220, x2: 262, y: 122 }} />

      {/* line from the rod tip (off-canvas, upper right) to the float */}
      <path
        d="M320 0 Q250 40 170 96"
        fill="none"
        stroke="var(--foam)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Ripple x={170} y={110} rings={3} spread={16} className="anim-ripple" />
      <g className="anim-bob">
        <Float x={170} y={104} scale={1.1} />
        {/* line below the surface down to the empty hook */}
        <line
          x1="170"
          y1="114"
          x2="170"
          y2="196"
          stroke="var(--foam)"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M170 196 V214 a10 10 0 0 1 -20 0 v-4 M150 210 l-4 5"
          fill="none"
          stroke="var(--foam)"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
