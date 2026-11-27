import { Nav } from "../components/Nav";
import { sectionOrder } from "../content/site";
import { useActiveSection } from "../lib/useActiveSection";

export default function Home() {
  const active = useActiveSection(sectionOrder);
  return (
    <>
      <Nav active={active} />
      <main id="main" tabIndex={-1} className="outline-none" />
    </>
  );
}
