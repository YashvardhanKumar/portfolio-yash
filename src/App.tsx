import Navbar from "./components/Navbar";
import { useRef, useState, useEffect } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Home from "./components/sections/home";
import About from "./components/sections/about";
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

  // Ref to block scroll spy updating during programmatic smooth scroll
  const isProgrammaticScroll = useRef(false);
  const timeoutId = useRef<number | null>(null);
  const scrollListenerRef = useRef<(() => void) | null>(null);

  // Wrap setRefAt to block scroll spy triggers until smooth scroll stops completely
  const handleSetRefAt = (index: React.SetStateAction<number>) => {
    const nextIndex = typeof index === "function" ? (index as Function)(refAt) : index;
    setRefAt(nextIndex);

    isProgrammaticScroll.current = true;
    
    // Clear any existing scroll listener and timeout
    if (scrollListenerRef.current) {
      window.removeEventListener("scroll", scrollListenerRef.current);
    }
    if (timeoutId.current) clearTimeout(timeoutId.current);

    // Debounce function to detect when smooth scrolling has stopped
    const handleScrollEnd = () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeoutId.current = window.setTimeout(() => {
        isProgrammaticScroll.current = false;
        if (scrollListenerRef.current) {
          window.removeEventListener("scroll", scrollListenerRef.current);
          scrollListenerRef.current = null;
        }
      }, 150);
    };

    scrollListenerRef.current = handleScrollEnd;
    window.addEventListener("scroll", handleScrollEnd);
    handleScrollEnd(); // Initialize first timeout
  };

  // Clean up timers and listeners on unmount
  useEffect(() => {
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      if (scrollListenerRef.current) {
        window.removeEventListener("scroll", scrollListenerRef.current);
      }
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    handleNavigation(latest);
  });

  const handleNavigation = (y: number) => {
    if (isProgrammaticScroll.current) return;

    // Force last tab (Contact Me) if we have reached the bottom of the page
    const isAtBottom = y + window.innerHeight >= document.documentElement.scrollHeight - 15;
    if (isAtBottom) {
      setRefAt(3);
      return;
    }

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
      <Navbar refAt={refAt} refs={refs} setRefAt={handleSetRefAt} />
      <div className="h-24"></div>
      <Home reference={homeRef} />
      <About reference={aboutRef} />

      <Portfolio reference={portfolioRef} />
      <ContactMe
        reference={contactMeRef}
        refAt={refAt}
        refs={refs}
        setRefAt={handleSetRefAt}
      />
    </div>
  );
}

export default App;
