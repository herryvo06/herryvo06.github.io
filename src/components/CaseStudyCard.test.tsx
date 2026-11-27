import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LazyMotion, domAnimation } from "framer-motion";
import { caseStudies } from "../content/site";
import { CaseStudyCard } from "./CaseStudyCard";

const sea = caseStudies.find((c) => c.slug === "southeast-asia-financial-flows")!;
const wip = caseStudies.find((c) => c.status === "in-progress")!;
const renderCard = (study = sea) =>
  render(
    <LazyMotion features={domAnimation}>
      <CaseStudyCard study={study} />
    </LazyMotion>,
  );

describe("CaseStudyCard", () => {
  it("expands and collapses inline", async () => {
    const user = userEvent.setup();
    renderCard();
    const toggle = screen.getByRole("button", { expanded: false });
    expect(document.getElementById(`${sea.slug}-details`)).toBeNull();
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById(`${sea.slug}-details`)).not.toBeNull();
    expect(screen.getByText(sea.nextTime!)).toBeInTheDocument();
    await user.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("gives the image alt text and explicit dimensions", () => {
    renderCard();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", sea.image!.alt);
    expect(img).toHaveAttribute("width", String(sea.image!.width));
    expect(img).toHaveAttribute("height", String(sea.image!.height));
  });

  it("shows the in-progress card without a toggle", () => {
    renderCard(wip);
    expect(screen.queryByRole("button")).toBeNull();
    expect(screen.getByText(wip.question)).toBeInTheDocument();
  });
});
