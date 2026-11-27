import { Nav } from "../components/Nav";
import { RiverLine } from "../components/RiverLine";
import { sectionOrder } from "../content/site";
import { useActiveSection } from "../lib/useActiveSection";

export default function Home() {
  const active = useActiveSection(sectionOrder);
  return (
    <>
      <Nav active={active} />
      <RiverLine stations={sectionOrder} active={active} />
      <main id="main" tabIndex={-1} className="outline-none" />
    </>
  );
}
