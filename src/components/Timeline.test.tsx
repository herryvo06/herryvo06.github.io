import { render, screen } from "@testing-library/react";
import { LazyMotion, domAnimation } from "framer-motion";
import { roles } from "../content/site";
import { Timeline } from "./Timeline";

beforeAll(() => {
  globalThis.IntersectionObserver ??= class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  } as unknown as typeof IntersectionObserver;
});

// Exact strings from public/resume.pdf (titles, organisations, locations, dates).
const RESUME = [
  ["Data Support Assistant", "ITS Team, Knox College", "Galesburg, IL", "Sep 2026 – Present"],
  ["EdTech Analytics Assistant", "Brightspace LMS Team, Knox College", "Galesburg, IL", "Aug 2026 – Present"],
  ["SQL & Database Architecture Extern", "Extern | Breaking Games", "Remote", "Aug 2026 – Oct 2026"],
  [
    "Undergraduate Researcher – Dickson Self-reciprocal Polynomials",
    "Knox College | Advisor: Prof. Neranga Fernando",
    "Galesburg, IL",
    "Nov 2025 – Mar 2026",
  ],
  ["Data Analytics Intern", "MathExpress Center", "Hanoi, Vietnam", "May 2025 – Aug 2025"],
];

describe("Timeline", () => {
  it("lists every role newest first, matching the résumé", () => {
    render(
      <LazyMotion features={domAnimation}>
        <Timeline />
      </LazyMotion>,
    );
    const items = screen.getAllByRole("listitem").filter((li) => li.querySelector(":scope > p"));
    expect(items).toHaveLength(RESUME.length);
    expect(roles).toHaveLength(RESUME.length);
    RESUME.forEach(([title, org, location, dates], i) => {
      expect(items[i].querySelector("h3")).toHaveTextContent(title);
      expect(items[i]).toHaveTextContent(`${org} · ${location}`);
      expect(items[i]).toHaveTextContent(dates);
    });
  });
});
