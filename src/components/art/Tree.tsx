/** Tree: circle or rounded-triangle crown on a thin trunk. 3 variants, rotated for variety. */
type Props = { x?: number; y?: number; variant?: 0 | 1 | 2; scale?: number; className?: string };

export function Tree({ x = 0, y = 0, variant = 0, scale = 1, className }: Props) {
  const tilt = [-4, 0, 5][variant];
  return (
    <g className={className}>
      <g transform={`translate(${x} ${y}) scale(${scale}) rotate(${tilt})`}>
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="-12"
          stroke="var(--foam)"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {variant === 1 ? (
          <path
            d="M0 -34 Q2 -34 3 -32 L11 -16 Q12 -12 8 -12 H-8 Q-12 -12 -11 -16 L-3 -32 Q-2 -34 0 -34 Z"
            fill="var(--leaf)"
          />
        ) : (
          <circle
            cx="0"
            cy={variant === 0 ? -20 : -19}
            r={variant === 0 ? 10 : 8}
            fill="var(--leaf)"
          />
        )}
        {/* right-edge highlight */}
        <path
          d={
            variant === 1
              ? "M3 -29 L8 -18"
              : variant === 0
                ? "M5 -27 a8 8 0 0 1 3 6"
                : "M4 -25 a6 6 0 0 1 2.5 5"
          }
          fill="none"
          stroke="var(--foam)"
          strokeOpacity="0.45"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
    </g>
  );
}
