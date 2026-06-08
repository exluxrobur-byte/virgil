"use client";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

export default function Close() {
  return (
    <section id="close" className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-16">
      <div className="text-center w-full flex flex-col items-center">
        <AnimatedText
          text={"VIRGIL EST PRÊT."}
          className="text-display text-black text-center"
          stagger={0.06}
        />
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="w-[200px] h-[2px] bg-blue mx-auto my-8 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="font-mono text-label text-blue tracking-[0.18em] mb-14 uppercase text-center"
        >
          LE PILOTE COMMENCE QUAND VOUS LE D&Eacute;CIDEZ.
        </motion.p>

        <motion.a
          href="mailto:virgil@dorier.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3, duration: 0.5 }}
          className="inline-block border-[1.5px] border-blue text-blue px-8 py-[14px] font-sans font-bold text-[13px] tracking-[0.08em] hover:bg-blue hover:text-white transition-all duration-300 ease-out uppercase"
        >
          DEMANDER UN PARTENARIAT &rarr;
        </motion.a>
      </div>

      <div className="absolute bottom-8 left-0 w-full text-center">
        <span className="font-mono text-[9px] text-muted tracking-wider">
          DORIER CREATIVE TECH &mdash; 2026
        </span>
      </div>
    </section>
  );
}
