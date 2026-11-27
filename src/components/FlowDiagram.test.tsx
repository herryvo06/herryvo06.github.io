import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LazyMotion, domAnimation } from "framer-motion";
import { flows } from "../content/site";
import { FlowDiagram } from "./FlowDiagram";

beforeAll(() => {
  // jsdom has no IntersectionObserver (used by whileInView)
  globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  } as unknown as typeof IntersectionObserver;
});

const renderIt = () =>
  render(
    <LazyMotion features={domAnimation}>
      <FlowDiagram />
    </LazyMotion>,
  );

describe("FlowDiagram", () => {
  it("renders one tab per flow with the first selected", () => {
    renderIt();
    const tabs = screen.getAllByRole("tab");
    expect(tabs).toHaveLength(flows.length);
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent(flows[0].nodes[0].label);
  });

  it("moves between tabs with arrow keys, Home and End", async () => {
    const user = userEvent.setup();
    renderIt();
    const tabs = screen.getAllByRole("tab");
    tabs[0].focus();
    await user.keyboard("{ArrowRight}");
    expect(screen.getAllByRole("tab")[1]).toHaveAttribute("aria-selected", "true");
    expect(document.activeElement).toBe(screen.getAllByRole("tab")[1]);
    await user.keyboard("{End}");
    expect(screen.getAllByRole("tab")[flows.length - 1]).toHaveAttribute("aria-selected", "true");
    await user.keyboard("{ArrowRight}");
    expect(screen.getAllByRole("tab")[0]).toHaveAttribute("aria-selected", "true");
    await user.keyboard("{ArrowLeft}");
    expect(screen.getAllByRole("tab")[flows.length - 1]).toHaveAttribute("aria-selected", "true");
    await user.keyboard("{Home}");
    expect(screen.getAllByRole("tab")[0]).toHaveAttribute("aria-selected", "true");
  });

  it("hides the why-note card while T6 is unfilled", () => {
    renderIt();
    expect(screen.queryByRole("button", { expanded: false })).toBeNull();
  });
});
