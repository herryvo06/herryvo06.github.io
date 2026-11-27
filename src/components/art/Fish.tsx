import { useId } from "react";

/** Fish: ellipse body + triangle tail + small circle eye. 3 sizes plus a glowing golden fish. */
export type FishSize = "small" | "medium" | "big" | "golden";

type Props = {
  x?: number;
  y?: number;
  size?: FishSize;
  facing?: "left" | "right";
  className?: string;
};

const SCALE: Record<FishSize, number> = { small: 0.6, medium: 0.85, big: 1.2, golden: 0.85 };

export function Fish({ x = 0, y = 0, size = "medium", facing = "left", className }: Props) {
  const id = useId();
  const s = SCALE[size];
  const golden = size === "golden";
  const flip = facing === "right" ? -1 : 1;
  return (
    <g className={className}>
      <g transform={`translate(${x} ${y}) scale(${s * flip} ${s})`}>
        <defs>
          <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style={{ stopColor: golden ? "var(--dusk)" : "var(--shallow)" }} />
            <stop
              offset="1"
              style={{ stopColor: golden ? "var(--dusk)" : "var(--current)" }}
              stopOpacity={golden ? 0.85 : 1}
            />
          </linearGradient>
          {golden && (
            <radialGradient id={`${id}-glow`}>
              <stop offset="0" style={{ stopColor: "var(--dusk)" }} stopOpacity="0.45" />
              <stop offset="1" style={{ stopColor: "var(--dusk)" }} stopOpacity="0" />
            </radialGradient>
          )}
        </defs>
        {golden && <ellipse cx="4" cy="0" rx="34" ry="22" fill={`url(#${id}-glow)`} />}
        <path d="M14 0 L28 -9 Q25 0 28 9 Z" fill={`url(#${id}-body)`} />
        <ellipse cx="0" cy="0" rx="17" ry="9" fill={`url(#${id}-body)`} />
        <path
          d="M-6 -8 Q4 -10 12 -4"
          fill="none"
          stroke="var(--foam)"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="-9" cy="-2" r="1.8" fill="var(--foam)" />
      </g>
    </g>
  );
}
