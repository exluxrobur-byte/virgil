"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex-shrink-0 flex flex-col items-center justify-center px-6 pt-32 pb-24 overflow-x-hidden snap-start">
      {/* Date label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-label text-blue font-mono tracking-widest uppercase mb-8"
      >
        Pitch Day &mdash; 10 Juin 2026
      </motion.p>

      {/* Main title */}
      <AnimatedText
        text={"Le guide qui écoute\navant de parler."}
        className="text-headline text-center"
        stagger={0.04}
      />

      {/* Video Demo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        className="w-full max-w-[300px] mt-10 mb-6 rounded-[36px] overflow-hidden border-[8px] border-[#f4f4f4] shadow-2xl bg-black/5"
      >
        <video 
          src="/assets/olympic-concierge-demo.mp4"
          autoPlay 
          muted 
          loop 
          playsInline
          controls
          className="w-full h-auto block"
        />
      </motion.div>

      {/* Blue divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
        className="w-[200px] h-[2px] bg-blue mt-8 mb-8 origin-center"
      />

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.8 }}
        className="text-body text-muted max-w-[560px] text-center"
      >
        Une visite, un &eacute;v&eacute;nement, une ville &mdash; v&eacute;cus &agrave; travers une IA qui vous lit en temps r&eacute;el et adapte chaque instant &agrave; qui vous &ecirc;tes.
      </motion.p>

      {/* Tags */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="font-mono text-[9px] text-muted tracking-wider mt-8"
      >
        Mus&eacute;es &middot; &Eacute;v&eacute;nements &middot; Tourisme urbain &middot; IA temps r&eacute;el
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-1"
      >
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-muted"
        >
          <path d="M5 8 L10 13 L15 8" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
