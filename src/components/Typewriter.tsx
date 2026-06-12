import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Typewriter({ onIndexChange }: { onIndexChange?: (index: number) => void }) {
  const textIndex = useMotionValue(0);
  const texts = [
    "Yashvardhan",
    "an App Developer",
    "a Full-Stack Web Developer",
    "a UI/UX design enthusiast!",
    "passionate to learn things!"
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    const controls = animate(count, 60, {
      type: "tween",
      duration: 2,
      ease: "easeOut",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          let newIndex = 0;
          if (textIndex.get() === texts.length - 1) {
            newIndex = 0;
          } else {
            newIndex = textIndex.get() + 1;
          }
          textIndex.set(newIndex);
          if (onIndexChange) onIndexChange(newIndex);
          updatedThisRound.set(true);
        }
      }
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onIndexChange]);

  return <motion.span className="inline">{displayText}</motion.span>;
}
