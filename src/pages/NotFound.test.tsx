import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { notFound } from "../content/site";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("shows the got-away message and a link back to the source", () => {
    render(
      <MemoryRouter initialEntries={["/nope"]}>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(notFound.title);
    expect(screen.getByRole("link", { name: notFound.back })).toHaveAttribute("href", "/");
  });
});
