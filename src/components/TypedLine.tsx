import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const ROTATE_MS = 2500;
const TYPE_MS = 28;

/**
 * Types each fact in, holds, then rotates every 2.5s. Screen readers get the full list
 * (visually hidden) instead of the animation. Reduced motion shows the first fact statically.
 */
export function TypedLine({ facts, label }: { facts: string[]; label: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const fact = facts[index];

  useEffect(() => {
    if (reduce) return;
    if (chars < fact.length) {
      const t = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => {
        setIndex((i) => (i + 1) % facts.length);
        setChars(0);
      },
      ROTATE_MS - fact.length * TYPE_MS,
    );
    return () => clearTimeout(t);
  }, [chars, fact, facts.length, reduce]);

  return (
    <div aria-live="off" className="mono min-h-7 text-base text-foam">
      <span aria-hidden="true">
        <span className="text-dusk">{"> "}</span>
        {reduce ? facts[0] : fact.slice(0, chars)}
        <span className="ml-0.5 inline-block animate-pulse text-dusk">▍</span>
      </span>
      <div className="sr-only">
        <p>{label}</p>
        <ul>
          {facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
