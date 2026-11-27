/** Ripple: concentric open arcs on the water surface. */
type Props = { x?: number; y?: number; rings?: number; spread?: number; className?: string };

export function Ripple({ x = 0, y = 0, rings = 3, spread = 14, className }: Props) {
  return (
    // Position on the outer group, className (CSS animation) on the inner one: a CSS transform
    // would otherwise override the SVG transform attribute.
    <g transform={`translate(${x} ${y})`}>
      <g className={className} fill="none" strokeLinecap="round" strokeWidth="1.5">
        {Array.from({ length: rings }, (_, i) => {
          const rx = spread * (i + 1);
          const ry = rx * 0.28;
          return (
            <path
              key={i}
              d={`M${-rx} 0 A${rx} ${ry} 0 0 0 ${rx} 0`}
              stroke="var(--foam)"
              strokeOpacity={0.7 - i * (0.3 / Math.max(rings - 1, 1))}
            />
          );
        })}
      </g>
    </g>
  );
}
