import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedAvatarProps {
  currentIndex: number;
}

const SVGs = [
  // 0: Yashvardhan (Avatar/Waving Hand)
  () => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full text-indigo-500 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
      initial={{ scale: 0.8, rotate: -10 }}
      animate={{ scale: 1, rotate: [0, 14, -8, 14, -4, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
    >
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </motion.svg>
  ),
  // 1: an App Developer (Mobile Phone)
  () => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: [0, -10, 0], opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
      <motion.path
        d="M9 10l2 2-2 2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.line
        x1="13" y1="14" x2="15" y2="14"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />
    </motion.svg>
  ),
  // 2: a Full-Stack Web Developer (Browser/Globe/Code)
  () => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      initial={{ rotateY: 90 }}
      animate={{ rotateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
      <motion.circle
        cx="15" cy="15" r="3"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.svg>
  ),
  // 3: a UI/UX design enthusiast! (Palette / Design)
  () => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full text-pink-500 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
      animate={{ rotate: [0, 5, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </motion.svg>
  ),
  // 4: passionate to learn things! (Brain / Rocket)
  () => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-full h-full text-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]"
      initial={{ y: 0 }}
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 5l0 14" />
      <path d="M18 13l-6-6-6 6" />
      <motion.path
        d="M12 5l0 14"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.path
        d="M18 13l-6-6-6 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <circle cx="12" cy="12" r="9" strokeWidth="1" strokeDasharray="4 4" />
    </motion.svg>
  )
];

const AnimatedAvatar: React.FC<AnimatedAvatarProps> = ({ currentIndex }) => {
  const CurrentSVG = SVGs[currentIndex % SVGs.length];

  return (
    <div className="w-full h-[400px] flex items-center justify-center relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          className="absolute inset-0 p-12"
        >
          <CurrentSVG />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedAvatar;
