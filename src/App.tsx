import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { ui } from "./content/site";
import Home from "./pages/Home";

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <a
            href="#main"
            className="sr-only-focusable fixed top-3 left-3 z-[60] rounded-full bg-dusk px-4 py-2 font-semibold text-deep"
          >
            {ui.skipLink}
          </a>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </LazyMotion>
  );
}
