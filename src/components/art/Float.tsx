/** Fishing float: two-tone capsule (--dusk top, --foam bottom). The site's focal motif. */
type Props = { x?: number; y?: number; scale?: number; className?: string };

export function Float({ x = 0, y = 0, scale = 1, className }: Props) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} className={className}>
      {/* antenna */}
      <line x1="0" y1="-22" x2="0" y2="-13" stroke="var(--foam)" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
      {/* top half */}
      <path d="M-7 0 V-6 a7 7 0 0 1 14 0 V0 Z" fill="var(--dusk)" />
      {/* bottom half */}
      <path d="M-7 0 H7 V6 a7 7 0 0 1 -14 0 Z" fill="var(--foam)" />
      {/* right-edge highlight (light from upper right) */}
      <path d="M4.5 -9 a5 5 0 0 1 1.5 3.5" fill="none" stroke="var(--foam)" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
}
