"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const screens = [
  { src: "/assets/virgil_sc1.png", alt: "Quiz visiteur" },
  { src: "/assets/virgil_sc2.png", alt: "Guide muséal" },
  { src: "/assets/virgil_sc3.png", alt: "Score engagement" },
  { src: "/assets/virgil_sc4.png", alt: "Événement MCI" },
];

export default function PhoneMockup({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Screens slide horizontally based on scrollYProgress

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-6, -10, -14]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <div style={{ perspective: 1000 }} className="pointer-events-none">
      <motion.div
        style={{ y: yParallax, rotateY, rotateX }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* iPhone outer shell (shadows) */}
        <div
          className="relative w-[240px] h-[500px] md:w-[280px] md:h-[580px] lg:w-[300px] lg:h-[620px] rounded-[40px] bg-white"
          style={{ boxShadow: "20px 28px 64px -8px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)" }}
        >
          {/* Hardware-accelerated inner mask */}
          <div 
            className="absolute inset-[6px] rounded-[34px] overflow-hidden bg-white"
            style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
          >
            {/* Sliding screens matching panel scroll */}
            <motion.div 
              className="flex h-full w-[400%]"
              style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]) }}
            >
              {screens.map((screen, i) => (
                <div key={i} className="relative h-full w-[25%] bg-white flex-shrink-0">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    className="object-cover"
                    sizes="300px"
                    priority={i === 0}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Border overlay */}
          <div className="absolute inset-0 rounded-[40px] border-[6px] border-[#e0e0e0] pointer-events-none z-20" />

          {/* Notch */}
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[100px] h-[24px] bg-white rounded-b-[14px] z-30" />

          {/* Home indicator */}
          <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 w-[80px] h-[3px] bg-black/10 rounded-full z-30" />
        </div>
      </motion.div>
    </div>
  );
}
