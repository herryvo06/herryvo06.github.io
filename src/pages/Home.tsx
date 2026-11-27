import { sectionOrder } from "../content/site";
import { useActiveSection } from "../lib/useActiveSection";

export default function Home() {
  useActiveSection(sectionOrder);
  return <main id="main" tabIndex={-1} className="outline-none" />;
}
