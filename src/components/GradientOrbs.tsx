import { motion } from "framer-motion";

type Orb = {
  /** Tailwind position classes e.g. "top-10 right-10" */
  position: string;
  /** Tailwind size classes e.g. "w-[400px] h-[400px]" */
  size: string;
  /** Tailwind gradient classes */
  gradient: string;
  /** Blur amount e.g. "blur-[80px]" */
  blur?: string;
  /** Animation duration in seconds */
  duration?: number;
  /** Animation delay in seconds */
  delay?: number;
};

const GradientOrbs = ({ orbs }: { orbs: Orb[] }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {orbs.map((orb, i) => (
      <motion.div
        key={i}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: orb.duration ?? 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: orb.delay ?? 0,
        }}
        className={`absolute rounded-full ${orb.position} ${orb.size} ${orb.gradient} ${orb.blur ?? "blur-[80px]"}`}
      />
    ))}
  </div>
);

export default GradientOrbs;
