"use client";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function AnimatedText({ 
  text, 
  className = "", 
  stagger = 0.06 
}: { 
  text: string, 
  className?: string,
  stagger?: number
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const lines = text.split("\n");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger },
    },
  };

  const child: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: { 
      y: "0%", 
      opacity: 1, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-hidden pb-[0.15em] mb-0 leading-[1.1]">
          <motion.div variants={child} className="inline-block">
            {line}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
