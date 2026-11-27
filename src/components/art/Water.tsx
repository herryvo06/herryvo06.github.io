import { useId } from "react";

/**
 * Water: surface-to-deep gradient band, optional --dusk reflection line and ≤4% grain.
 * Note: the feTurbulence grain costs ~1.5s of main-thread raster on large areas, so scenes
 * leave it off (Lighthouse TBT). Only use it on small areas.
 */
type Props = {
  x?: number;
  y: number;
  width: number;
  height: number;
  /** Path for the band's top edge; defaults to a straight line. */
  d?: string;
  reflection?: { x1: number; x2: number; y: number };
  grain?: boolean;
  className?: string;
};

export function Water({ x = 0, y, width, height, d, reflection, grain = false, className }: Props) {
  const id = useId();
  const shape = d ?? `M${x} ${y} H${x + width} V${y + height} H${x} Z`;
  return (
    <g className={className}>
      <defs>
        <linearGradient
          id={`${id}-water`}
          x1="0"
          y1={y}
          x2="0"
          y2={y + height}
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0"
            style={{ stopColor: "color-mix(in srgb, var(--current) 70%, var(--shallow))" }}
          />
          <stop offset="0.45" style={{ stopColor: "var(--current)" }} />
          <stop offset="1" style={{ stopColor: "var(--deep)" }} />
        </linearGradient>
        {grain && (
          <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.04 0" />
            <feComposite in2="SourceGraphic" operator="in" />
          </filter>
        )}
      </defs>
      <path d={shape} fill={`url(#${id}-water)`} />
      {grain && <path d={shape} fill="var(--foam)" filter={`url(#${id}-grain)`} />}
      {reflection && (
        <line
          x1={reflection.x1}
          x2={reflection.x2}
          y1={reflection.y}
          y2={reflection.y}
          stroke="var(--dusk)"
          strokeOpacity="0.8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </g>
  );
}
