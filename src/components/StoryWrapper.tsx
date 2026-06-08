"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function StoryWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 4 panels: translate from 0% to -75%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-bg w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Horizontal Sliding Content */}
        <motion.div 
          style={{ x }} 
          className="flex h-full w-[400vw]"
        >
          {children}
        </motion.div>

        {/* Phone Mockup pinned right */}
        <div className="absolute right-0 top-0 h-full w-[35%] hidden md:flex items-center justify-center pointer-events-none">
          <PhoneMockup scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}
