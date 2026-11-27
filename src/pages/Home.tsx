import { Footer } from "../components/Footer";
import { FlowDiagram } from "../components/FlowDiagram";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Nav";
import { RiverLine } from "../components/RiverLine";
import { TheCatch } from "../components/TheCatch";
import { Timeline } from "../components/Timeline";
import { sectionOrder } from "../content/site";
import { useActiveSection } from "../lib/useActiveSection";

export default function Home() {
  const active = useActiveSection(sectionOrder);
  return (
    <>
      <Nav active={active} />
      <RiverLine stations={sectionOrder} active={active} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <FlowDiagram />
        <TheCatch />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}
