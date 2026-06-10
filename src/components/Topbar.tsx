"use client";

import { motion } from "framer-motion";

export default function Topbar() {
  return (
    <motion.nav
      initial={{ y: -48 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-12 z-50 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md border-b border-dim"
    >
      {/* Left — Logo */}
      <span className="font-sans font-bold text-sm text-black">Virgil</span>

      {/* Center — Tagline */}
      <span className="hidden md:block font-mono text-[9px] text-muted tracking-widest uppercase">
        Votre guide &agrave; travers la culture
      </span>

      {/* Right — Badge */}
      <span className="font-mono text-[9px] text-blue tracking-wider uppercase text-right leading-tight max-w-[120px] md:max-w-none">
        MCI Innovation Award 2026
      </span>
    </motion.nav>
  );
}
