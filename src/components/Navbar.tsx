import { useMotionValueEvent, useScroll, motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { handle, tabMenu } from "../constants/tabs";

type NavbarProps = {
  refAt: number;
  setRefAt: React.Dispatch<React.SetStateAction<number>>;
  refs: React.RefObject<HTMLDivElement>[];
};

const NAV_TRANSITION_DURATION = 0.45;

const Navbar: React.FC<NavbarProps> = ({ refAt, refs, setRefAt }) => {
  const { scrollY } = useScroll();
  const [shrink, setShrink] = useState(false);
  const navref = useRef<HTMLDivElement>(null);

  // References to measure tab layout
  const containerRef = useRef<HTMLUListElement>(null);
  const tabRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Motion values to animate the left and right edges of the capsule slider independently
  const leftEdge = useMotionValue(0);
  const rightEdge = useMotionValue(0);
  const prevRefAt = useRef(refAt);
  const isInitial = useRef(true);

  function update(latest: number): void {
    if (latest > 20) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  }

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest);
  });

  // Track layout and animate edges to create a stretchy "pull" effect
  useEffect(() => {
    const container = containerRef.current;
    const activeTab = tabRefs.current[refAt];
    if (!container || !activeTab) return;

    const updateCoords = (animateTransition = true) => {
      const activeRect = activeTab.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const targetLeft = activeRect.left - containerRect.left;
      const targetRight = targetLeft + activeRect.width;

      if (!animateTransition) {
        leftEdge.set(targetLeft);
        rightEdge.set(targetRight);
      } else {
        const isMovingRight = refAt > prevRefAt.current;
        if (isMovingRight) {
          // Moving Right: right edge (leading) shoots ahead, left edge (trailing) lags
          animate(rightEdge, targetRight, {
            type: "spring",
            stiffness: 350,
            damping: 22,
          });
          animate(leftEdge, targetLeft, {
            type: "spring",
            stiffness: 240,
            damping: 26,
          });
        } else {
          // Moving Left: left edge (leading) shoots ahead, right edge (trailing) lags
          animate(leftEdge, targetLeft, {
            type: "spring",
            stiffness: 350,
            damping: 22,
          });
          animate(rightEdge, targetRight, {
            type: "spring",
            stiffness: 240,
            damping: 26,
          });
        }
      }
    };

    if (isInitial.current) {
      // Small timeout to ensure DOM layout is completed and measured correctly
      const timer = setTimeout(() => {
        updateCoords(false);
        isInitial.current = false;
      }, 50);
      return () => clearTimeout(timer);
    } else {
      updateCoords(true);
    }

    prevRefAt.current = refAt;

    const handleResize = () => updateCoords(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [refAt]);

  // Derived width from the distance between left and right edges
  const widthTransform = useTransform([leftEdge, rightEdge], (latest) => {
    const l = latest[0] as number;
    const r = latest[1] as number;
    return r - l;
  });

  return (
    <motion.nav
      ref={navref}
      initial="visible"
      style={{ left: "50%", x: "-50%", backgroundColor: "transparent" }}
      variants={{
        visible: { 
          width: "100%",
          maxWidth: "2000px",
          top: "0px",
        },
        hidden: { 
          width: "95%",
          maxWidth: "785px",
          top: "12px",
        },
      }}
      animate={shrink ? "hidden" : "visible"}
      transition={{
        duration: NAV_TRANSITION_DURATION,
        ease: "easeInOut",
      }}
      className="fixed z-50 flex items-center gap-3 text-white pointer-events-none bg-transparent"
    >
      {/* 1. Main Navbar Box (Logo & Menu links) */}
      <motion.div
        layout
        variants={{
          visible: {
            width: "fit-content",
            borderRadius: "0px",
            height: "96px",
            backgroundColor: "rgba(0, 0, 0, 1)", 
            borderColor: "rgba(255, 255, 255, 0)",
            boxShadow: "0px 0px 0px rgba(0,0,0,0)",
            filter: ["blur(0px)", "blur(6px)", "blur(0px)"]
          },
          hidden: { 
            borderRadius: "9999px",
            width: "fit-content",
            height: "65px",
            backgroundColor: "rgba(0, 0, 0, 0)", 
            borderColor: "rgba(255, 255, 255, 0.15)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)",
            filter: ["blur(0px)", "blur(6px)", "blur(0px)"]
          },
        }}
        transition={{
          duration: NAV_TRANSITION_DURATION,
          ease: "easeInOut",
        }}
        className="pointer-events-auto flex-grow flex items-center justify-center sm:justify-between px-1 xs:px-2 sm:px-3 backdrop-blur-lg border max-sm:flex-col max-sm:gap-2"
      >
        {!shrink && <div className="font-dancing-script font-bold sm:text-3xl text-xl flex items-center">
          Yashvardhan Kumar
        </div>}
        <ul
          ref={containerRef}
          className="relative flex items-center sm:gap-4 sm:text-sm gap-2 cursor-pointer text-xs font-poppins px-1.5 py-1"
        >
          {/* Stretchy circular glassmorphic pill slider background (increased opacity brand bg & border, brand glow) */}
          <motion.div
            className="absolute top-1 bottom-1 bg-ui-color/30 backdrop-blur-md border border-ui-color/60 rounded-full z-0 pointer-events-none shadow-[0_4px_12px_rgba(230,50,75,0.35),inset_0_1px_0_rgba(255,255,255,0.15)]"
            style={{
              left: leftEdge,
              width: widthTransform,
            }}
          />
          {tabMenu.map((val, i) => (
            <li
              key={val}
              ref={(el) => (tabRefs.current[i] = el)}
              className={`relative z-10 transition-colors duration-300 px-3.5 py-1.5 rounded-full font-medium ${
                refAt == i ? "text-ui-color font-bold" : "text-white/60 hover:text-white"
              }`}
              aria-label="button"
              children={val}
              onClick={() => {
                refs[i].current?.scrollIntoView({
                  behavior: "smooth",
                });
                setRefAt(i);
              }}
            />
          ))}
        </ul>

        {/* If NOT shrunk, render social handles inside the main box */}
        {!shrink && (
          <div className="flex items-center gap-4 text-lg max-md:hidden">
            {handle.map((val) => {
              const Compo = val.icon;
              return (
                <motion.a
                  key={val.url}
                  layoutId={`social-${val.url}`}
                  initial={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    borderWidth: "1px",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                  }}
                  animate={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    borderColor: "rgba(255, 255, 255, 0)",
                    borderWidth: "1px",
                    boxShadow: "0px 0px 0px rgba(0,0,0,0), inset 0 0px 0 rgba(255, 255, 255, 0)",
                    borderRadius: "50%",
                    width: "32px",
                    height: "32px",
                  }}
                  transition={{
                    layout: { duration: NAV_TRANSITION_DURATION, ease: "easeInOut" },
                    width: { duration: NAV_TRANSITION_DURATION, ease: "easeInOut" },
                    height: { duration: NAV_TRANSITION_DURATION, ease: "easeInOut" },
                    backgroundColor: { delay: NAV_TRANSITION_DURATION, duration: 0.15 },
                    borderColor: { delay: NAV_TRANSITION_DURATION, duration: 0.15 },
                    boxShadow: { delay: NAV_TRANSITION_DURATION, duration: 0.15 },
                    borderRadius: { delay: NAV_TRANSITION_DURATION, duration: 0.15 },
                  }}
                  whileHover={{ color: val.color }}
                  href={val.url}
                  target="_blank"
                  className="transition-colors duration-300 group flex items-center justify-center text-white border border-transparent"
                >
                  <Compo className="text-lg" />
                </motion.a>
              );
            })}
          </div>
        )}
      </motion.div>

      {/* 2. Floating Social handles (rendered outside the main box when shrunk) */}
      {shrink && (
        <div className="pointer-events-auto flex items-center gap-3 max-md:hidden shrink-0">
          {handle.map((val) => {
            const Compo = val.icon;
            return (
              <motion.a
                key={val.url}
                layoutId={`social-${val.url}`}
                initial={{
                  backgroundColor: "rgba(255, 255, 255, 0)",
                  borderColor: "rgba(255, 255, 255, 0)",
                  borderWidth: "1px",
                  boxShadow: "0px 0px 0px rgba(0,0,0,0), inset 0 0px 0 rgba(255, 255, 255, 0)",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                }}
                animate={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  borderWidth: "1px",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                }}
                transition={{
                  layout: { duration: NAV_TRANSITION_DURATION, ease: "easeInOut" },
                  width: { duration: NAV_TRANSITION_DURATION, ease: "easeInOut" },
                  height: { duration: NAV_TRANSITION_DURATION, ease: "easeInOut" },
                  backgroundColor: { duration: NAV_TRANSITION_DURATION, ease: "easeInOut" },
                  borderColor: { duration: NAV_TRANSITION_DURATION, ease: "easeInOut" },
                  boxShadow: { duration: NAV_TRANSITION_DURATION, ease: "easeInOut" },
                  borderRadius: { duration: NAV_TRANSITION_DURATION, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.15,
                  color: val.color,
                  borderColor: `${val.color}88`,
                  boxShadow: `0 8px 24px ${val.color}33`,
                }}
                whileTap={{ scale: 0.95 }}
                href={val.url}
                target="_blank"
                className="flex items-center justify-center text-white border border-transparent backdrop-blur-md transition-colors duration-300"
              >
                <Compo className="text-xl" />
              </motion.a>
            );
          })}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
