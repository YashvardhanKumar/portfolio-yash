import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Inline SVG Icons ───────────────────────────────────
const icons = {
  smartphone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
  ),
  bolt: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400/60"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  ),
  bell: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
  ),
  chat: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ),
  brain: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400/60"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
  ),
  book: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400/60"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  rocket: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#e6324b]/60"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3"/></svg>
  ),
  lightbulb: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400/60"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
  ),
};

interface HeroVisualProps {
  currentIndex: number;
}

// ── Shared animation variants ──────────────────────────
const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const floatUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ACCENT = "#e6324b";

// ── 0: "Yashvardhan" — Identity / Name ─────────────────
// Animated terminal typing out a greeting
const IdentityScene = () => (
  <motion.div
    variants={containerVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute inset-0 flex items-center justify-center"
  >
    {/* Floating code brackets */}
    {["{", "}", "<", "/>", "( )", "=>"].map((char, i) => (
      <motion.span
        key={char}
        className="absolute font-mono text-white/10 font-bold select-none"
        style={{
          fontSize: `${24 + i * 8}px`,
          top: `${15 + i * 12}%`,
          left: `${10 + ((i * 17) % 80)}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.05, 0.15, 0.05],
          rotate: [0, i % 2 === 0 ? 10 : -10, 0],
        }}
        transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
      >
        {char}
      </motion.span>
    ))}

    {/* Terminal window */}
    <motion.div
      variants={floatUp}
      className="relative w-[320px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Title bar */}
      <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-white/40 font-mono">terminal</span>
      </div>
      {/* Terminal body */}
      <div className="bg-[#0d1117] p-5 font-mono text-sm leading-relaxed">
        <div className="text-green-400/80">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-blue-300">dev</span>{" "}
          <span className="text-white/60">=</span>{" "}
          <span className="text-yellow-300">{`{`}</span>
        </div>
        <motion.div
          className="ml-4 text-white/70"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          name: <span className="text-green-300">"Yashvardhan"</span>,
        </motion.div>
        <motion.div
          className="ml-4 text-white/70"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          role: <span className="text-green-300">"Developer"</span>,
        </motion.div>
        <motion.div
          className="ml-4 text-white/70"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          passion: <span className="text-orange-300">Infinity</span>
        </motion.div>
        <div className="text-yellow-300">{`}`}</div>
        <motion.div
          className="mt-2 flex items-center gap-1"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span className="text-[#e6324b]">❯</span>
          <span className="w-2 h-4 bg-white/80 inline-block" />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

// ── 1: "an App Developer" — Mobile App ─────────────────
// Floating phone mockup with app UI elements
const AppDevScene = () => (
  <motion.div
    variants={containerVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute inset-0 flex items-center justify-center"
  >
    {/* Floating notification badges */}
    {[
      { icon: icons.smartphone, x: "15%", y: "20%", delay: 0 },
      { icon: icons.bolt, x: "78%", y: "30%", delay: 0.5 },
      { icon: icons.bell, x: "25%", y: "75%", delay: 1 },
      { icon: icons.chat, x: "70%", y: "70%", delay: 1.5 },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="absolute w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center justify-center text-lg"
        style={{ left: item.x, top: item.y }}
        animate={{ y: [0, -12, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
      >
        {item.icon}
      </motion.div>
    ))}

    {/* Phone mockup */}
    <motion.div
      variants={floatUp}
      className="relative w-[200px] h-[380px] rounded-[2.5rem] border-2 border-white/20 bg-[#0d1117] overflow-hidden shadow-2xl shadow-purple-900/30"
      animate={{ y: [0, -10, 0], rotateY: [0, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ perspective: 800 }}
    >
      {/* Status bar */}
      <div className="flex justify-between items-center px-6 pt-3 pb-1">
        <span className="text-[10px] text-white/40 font-mono">9:41</span>
        <div className="flex gap-1">
          <div className="w-3 h-1.5 rounded-sm bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
        </div>
      </div>
      {/* Notch */}
      <div className="mx-auto w-20 h-5 rounded-b-2xl bg-black mb-3" />
      {/* App content */}
      <div className="px-4 space-y-3">
        <motion.div
          className="h-24 rounded-2xl bg-gradient-to-br from-[#e6324b]/40 to-purple-600/30 border border-white/10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="flex gap-2">
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              className="flex-1 h-16 rounded-xl bg-white/8 border border-white/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + n * 0.15, duration: 0.4 }}
            />
          ))}
        </div>
        {[1, 2, 3].map((n) => (
          <motion.div
            key={n}
            className="flex items-center gap-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 + n * 0.15, duration: 0.4 }}
          >
            <div className="w-8 h-8 rounded-lg bg-white/10" />
            <div className="flex-1 space-y-1">
              <div className="h-2 rounded bg-white/15 w-3/4" />
              <div className="h-1.5 rounded bg-white/8 w-1/2" />
            </div>
          </motion.div>
        ))}
      </div>
      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-2 pt-3 flex justify-around">
        {["◻", "○", "△"].map((s, i) => (
          <motion.span
            key={i}
            className="text-white/20 text-xs"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

// ── 2: "a Full-Stack Web Developer" — Web/Code ────────
// Browser window with animated code and network graph
const WebDevScene = () => (
  <motion.div
    variants={containerVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute inset-0 flex items-center justify-center"
  >
    {/* Floating tech tags */}
    {["React", "Node", "TS", "API", "DB", "CSS"].map((tag, i) => (
      <motion.span
        key={tag}
        className="absolute px-2 py-1 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-white/30"
        style={{
          top: `${20 + ((i * 13) % 60)}%`,
          left: `${5 + ((i * 16) % 85)}%`,
        }}
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
      >
        {tag}
      </motion.span>
    ))}

    {/* Browser window */}
    <motion.div
      variants={floatUp}
      className="relative w-[340px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Browser chrome */}
      <div className="bg-[#1a1a2e] px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 h-5 rounded-md bg-white/5 flex items-center px-2">
          <span className="text-[10px] text-white/30 font-mono">https://yashvardhan.dev</span>
        </div>
      </div>
      {/* Code editor */}
      <div className="bg-[#0d1117] p-4 font-mono text-xs leading-relaxed">
        {[
          { line: 1, indent: 0, code: <><span className="text-purple-400">import</span> <span className="text-blue-300">{'{ useState }'}</span> <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span></> },
          { line: 2, indent: 0, code: <></> },
          { line: 3, indent: 0, code: <><span className="text-purple-400">export default function</span> <span className="text-yellow-300">App</span><span className="text-white/50">() {'{'}</span></> },
          { line: 4, indent: 1, code: <><span className="text-purple-400">const</span> [<span className="text-blue-300">data</span>, <span className="text-blue-300">setData</span>] = <span className="text-yellow-300">useState</span>(<span className="text-orange-300">null</span>)</> },
          { line: 5, indent: 1, code: <></> },
          { line: 6, indent: 1, code: <><span className="text-purple-400">return</span> <span className="text-white/40">(</span></> },
          { line: 7, indent: 2, code: <><span className="text-[#e6324b]">{'<div'}</span> <span className="text-green-300">className</span>=<span className="text-yellow-300">"app"</span><span className="text-[#e6324b]">{'>'}</span></> },
          { line: 8, indent: 3, code: <><span className="text-[#e6324b]">{'<h1>'}</span><span className="text-white/70">Hello World</span><span className="text-[#e6324b]">{'</h1>'}</span></> },
          { line: 9, indent: 2, code: <><span className="text-[#e6324b]">{'</div>'}</span></> },
          { line: 10, indent: 1, code: <><span className="text-white/40">)</span></> },
          { line: 11, indent: 0, code: <><span className="text-white/50">{'}'}</span></> },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="flex"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          >
            <span className="w-6 text-right text-white/15 mr-3 select-none">{item.line}</span>
            <span style={{ marginLeft: `${item.indent * 16}px` }}>{item.code}</span>
          </motion.div>
        ))}
        <motion.div
          className="mt-1 flex items-center"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <span className="w-6 text-right text-white/15 mr-3">12</span>
          <span className="w-2 h-4 bg-white/60 inline-block" />
        </motion.div>
      </div>
    </motion.div>
  </motion.div>
);

// ── 3: "a UI/UX design enthusiast!" — Design ──────────
// Design canvas with floating UI components
const DesignScene = () => (
  <motion.div
    variants={containerVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    className="absolute inset-0 flex items-center justify-center"
  >
    {/* Floating design elements */}
    <motion.div
      className="absolute w-[300px] h-[300px]"
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 2 === 0 ? ACCENT : "#8b5cf6",
            top: `${50 + 45 * Math.sin((i * Math.PI * 2) / 6)}%`,
            left: `${50 + 45 * Math.cos((i * Math.PI * 2) / 6)}%`,
            opacity: 0.3,
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </motion.div>

    {/* Design card stack */}
    <div className="relative w-[280px] h-[340px]">
      {/* Back card */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/10 border border-white/5"
        animate={{ rotate: [6, 8, 6], y: [4, 0, 4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Mid card */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e6324b]/10 to-indigo-600/10 border border-white/5"
        animate={{ rotate: [-3, -5, -3], y: [2, -2, 2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Front card — Design canvas */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-[#0d1117] border border-white/10 overflow-hidden shadow-2xl shadow-black/50"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Toolbar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
          {["□", "○", "△", "✎", "T"].map((tool, i) => (
            <motion.div
              key={i}
              className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] text-white/30 hover:bg-white/5"
              whileHover={{ scale: 1.2, color: ACCENT }}
            >
              {tool}
            </motion.div>
          ))}
          <div className="ml-auto flex gap-1">
            <div className="w-4 h-4 rounded-full" style={{ background: ACCENT }} />
            <div className="w-4 h-4 rounded-full bg-purple-500" />
            <div className="w-4 h-4 rounded-full bg-cyan-500" />
          </div>
        </div>
        {/* Canvas content */}
        <div className="p-4 space-y-3">
          {/* Hero mockup */}
          <motion.div
            className="h-16 rounded-xl bg-gradient-to-r from-[#e6324b]/20 to-purple-600/20 border border-white/5 flex items-center justify-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-[10px] text-white/20 font-mono">Hero Section</span>
          </motion.div>
          {/* Grid layout */}
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <motion.div
                key={n}
                className="h-14 rounded-lg bg-white/5 border border-white/5"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + n * 0.1, type: "spring", stiffness: 200 }}
              />
            ))}
          </div>
          {/* Bottom bar mockup */}
          <motion.div
            className="flex gap-2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            <div className="flex-1 h-8 rounded-lg bg-[#e6324b]/20 border border-[#e6324b]/20" />
            <div className="w-20 h-8 rounded-lg bg-white/5 border border-white/5" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </motion.div>
);

// ── 4: "passionate to learn things!" — Learning ────────
// Animated skill dashboard with progress bars and streak
const LearningScene = () => {
  const skills = [
    { name: "React / Next.js", level: 92, color: "#61dafb" },
    { name: "Flutter / Dart", level: 85, color: "#02569B" },
    { name: "Node / Express", level: 88, color: "#68a063" },
    { name: "TypeScript", level: 90, color: "#3178c6" },
    { name: "UI/UX Design", level: 78, color: "#e6324b" },
  ];

  const recentTopics = ["System Design", "GraphQL", "Rust", "K8s", "WebGL"];

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            top: `${10 + ((i * 17) % 80)}%`,
            left: `${5 + ((i * 15) % 90)}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0, 0.4, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
        />
      ))}

      <motion.div
        variants={floatUp}
        className="relative w-[320px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Header */}
        <div className="bg-[#1a1a2e] px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#e6324b] to-purple-600 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <div>
              <div className="text-xs text-white/80 font-medium">Skill Tracker</div>
              <div className="text-[10px] text-white/30">Always leveling up</div>
            </div>
          </div>
          {/* Streak badge */}
          <motion.div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
            <span className="text-[10px] text-orange-400 font-mono font-bold">365d</span>
          </motion.div>
        </div>

        {/* Body */}
        <div className="bg-[#0d1117] p-5 space-y-3.5">
          {/* Skill bars */}
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[11px] text-white/60 font-mono">{skill.name}</span>
                <span className="text-[10px] font-mono" style={{ color: skill.color }}>{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}

          {/* Divider */}
          <div className="border-t border-white/5 pt-3">
            <div className="text-[10px] text-white/30 mb-2 font-mono">Currently exploring</div>
            <div className="flex flex-wrap gap-1.5">
              {recentTopics.map((topic, i) => (
                <motion.span
                  key={topic}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-white/40"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 + i * 0.08, type: "spring", stiffness: 300 }}
                >
                  {topic}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Scenes array ───────────────────────────────────────
const scenes = [IdentityScene, AppDevScene, WebDevScene, DesignScene, LearningScene];

// ── Main Component ─────────────────────────────────────
const HeroVisual: React.FC<HeroVisualProps> = ({ currentIndex }) => {
  const CurrentScene = scenes[currentIndex % scenes.length];

  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      <AnimatePresence mode="wait">
        <CurrentScene key={currentIndex} />
      </AnimatePresence>
    </div>
  );
};

export default HeroVisual;
