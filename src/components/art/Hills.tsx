import { useId } from "react";

/** Hills: smooth Bézier band with a vertical gradient and a lit right edge (sun upper right). */
type Props = {
  /** Closed path of the hill shape. */
  d: string;
  tone?: "far" | "near" | "shore";
  /** Optional open path along the right-hand slopes, drawn as a thin highlight. */
  highlight?: string;
  className?: string;
};

const TONES = {
  far: ["color-mix(in srgb, var(--current) 75%, var(--shallow))", "var(--current)"],
  near: ["var(--current)", "var(--deep)"],
  /** Foreground land seen against water: darker than the water so the bank reads. */
  shore: ["color-mix(in srgb, var(--deep) 75%, var(--current))", "var(--deep)"],
} as const;

export function Hills({ d, tone = "far", highlight, className }: Props) {
  const id = useId();
  const [top, bottom] = TONES[tone];
  return (
    <g className={className}>
      <defs>
        <linearGradient id={`${id}-hill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: top }} />
          <stop offset="1" style={{ stopColor: bottom }} />
        </linearGradient>
      </defs>
      <path d={d} fill={`url(#${id}-hill)`} />
      {highlight && (
        <path
          d={highlight}
          fill="none"
          stroke="var(--foam)"
          strokeOpacity="0.4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </g>
  );
}
