import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useRef, useState } from "react";
import { handle, tabMenu } from "../constants/tabs";

type NavbarProps = {
  refAt: number;
  setRefAt: React.Dispatch<React.SetStateAction<number>>;
  refs: React.RefObject<HTMLDivElement>[];
};

const Navbar: React.FC<NavbarProps> = ({ refAt, refs, setRefAt }) => {
  const { scrollY } = useScroll();
  const [shrink, setShrink] = useState(false);
  const navref = useRef<HTMLDivElement>(null);
  function update(latest: number): void {
    let height = navref.current!.scrollHeight;
    if (latest < height) {
      setShrink(false);
    } else if (latest > height) {
      setShrink(true);
    }
  }

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest);
  });
  return (
    <motion.nav
      ref={navref}
      variants={{
        visible: { height: "6rem", backgroundColor: "#000000" },
        hidden: { height: "4.4rem", backgroundColor: "#1c1d24" },
      }}
      animate={shrink ? "hidden" : "visible"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.2,
        staggerChildren: 0.05,
      }}
      className="flex h-24 w-full bg-black text-white fixed px-5 top-0 z-20 max-sm:flex-col"
    >
      <div className="font-dancing-script font-bold sm:text-4xl text-xl m-auto">
        Yashvardhan Kumar
      </div>
      <ul className="flex xs:gap-5 xs:text-sm gap-3 m-auto  cursor-pointer text-xs">
        {tabMenu.map((val, i) => (
          <li
            key={val}

            className={`transition-colors duration-500 ${
              refAt == i ? "text-ui-color" : "text-white"
            }  hover:text-ui-color`}
            aria-label="button"
            children={val}
            onClick={() => {
              refs[i].current?.scrollIntoView({
                behavior: "smooth",
              });
              console.log(refAt);

              setRefAt(refAt);
            }}
          />
        ))}
      </ul>
      <ul
        className="flex gap-3 m-auto text-lg max-md:hidden"
        children={handle.map((val) => {
          let Compo = val.icon;
          return (
            <motion.a
              key={val.url}
              whileHover={{
                color: val.color,
              }}
              // className={`hover:text-[${val.color}]`}
              href={val.url}
              target="_blank"
              children={<Compo />}
            />
          );
        })}
      />
    </motion.nav>
  );
};

export default Navbar;
