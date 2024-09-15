import Navbar from "./components/Navbar";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Home from "./components/sections/home";
import About from "./components/sections/about";
import Skills from "./components/sections/skills";
import Portfolio from "./components/sections/portfolio";
import ContactMe from "./components/sections/aboutme";
function App() {
  const { scrollY } = useScroll();

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);
  const [refAt, setRefAt] = useState(0);
  const refs = [homeRef, aboutRef, portfolioRef, contactMeRef];

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    handleNavigation(latest);
  });

  const handleNavigation = (y: number) => {
    let home = homeRef.current;
    let about = aboutRef.current;
    let portfolio = portfolioRef.current;
    let contactMe = contactMeRef.current;
    let offsetSummer = (e: HTMLDivElement | null) => {
      return e ? e.offsetTop + e.offsetHeight - 70 : 0;
    };
    if (y <= offsetSummer(home)) {
      setRefAt(0);
    } else if (y <= offsetSummer(about)) {
      setRefAt(1);
    } else if (y <= offsetSummer(portfolio)) {
      setRefAt(2);
    } else if (y <= offsetSummer(contactMe)) {
      setRefAt(3);
    }
  };
  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar refAt={refAt} refs={refs} setRefAt={setRefAt} />
      <div className="h-24"></div>
      <Home reference={homeRef} />
      <About reference={aboutRef} />

      <Portfolio reference={portfolioRef} />
      <ContactMe
        reference={contactMeRef}
        refAt={refAt}
        refs={refs}
        setRefAt={setRefAt}
      />
    </div>
  );
}

export default App;
