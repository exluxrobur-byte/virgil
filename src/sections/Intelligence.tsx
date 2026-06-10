"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import SectionLabel from "@/components/SectionLabel";

const tags = [
  "Curiosité → narratif",
  "Fatigue → quiz",
  "Enfant → ludique",
  "Expert → profond",
];

export default function Intelligence() {
  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center px-6 md:px-16">
      <div className="w-full md:w-[60%] max-w-[680px]">
        <SectionLabel text="L&apos;intelligence &#9678;" />

        <div className="mt-4">
          <AnimatedText
            text={"Chaque signal.\nChaque décision.\nMesurée."}
            className="text-headline uppercase"
            stagger={0.03}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[13px] md:text-body text-muted mt-4 md:mt-8 max-w-[580px] leading-relaxed"
        >
          Le moteur score l&apos;engagement en continu et route l&apos;interaction suivante en cons&eacute;quence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-[13px] md:text-body text-muted mt-2 md:mt-4 max-w-[580px] leading-relaxed"
        >
          Les conservateurs voient tout : quelles &oelig;uvres ont captiv&eacute;, o&ugrave; les visiteurs ont d&eacute;croch&eacute;.
        </motion.p>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-card border border-dim px-3 py-1.5 rounded-full text-[11px] font-mono text-muted"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
