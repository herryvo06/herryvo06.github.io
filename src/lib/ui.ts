/** Shared class names (layout + buttons). Visual only: no copy here. */
export const container = "mx-auto w-full max-w-[1228px] px-6 lg:px-16";

const btn =
  "ripple inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-sans text-base font-semibold transition-colors duration-200 ease-out";

/** --deep on --dusk = 7.4:1 */
export const btnPrimary = `${btn} bg-dusk text-deep hover:bg-[color-mix(in_srgb,var(--dusk)_88%,var(--foam))]`;
export const btnSecondary = `${btn} border-2 border-shallow text-foam hover:border-dusk`;
export const iconLink =
  "ripple inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-shallow text-foam transition-colors duration-200 hover:border-dusk hover:text-dusk";
export const chip = "mono inline-flex items-center rounded-full px-3 py-1";
