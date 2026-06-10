"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import SectionLabel from "@/components/SectionLabel";

export default function MCI() {
  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center px-6 md:px-16">
      <div className="w-full md:w-[60%] max-w-[680px]">
        <SectionLabel text="Pour les événements MCI" />

        <div className="mt-4">
          <AnimatedText
            text={"Le même moteur.\nUn nouveau terrain."}
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
          Le pilote mus&eacute;al prouve le moteur. Les &eacute;v&eacute;nements MCI sont l&apos;extension naturelle.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-[13px] md:text-body text-muted italic mt-2 md:mt-4 max-w-[580px] leading-relaxed"
        >
          Virgil dans un &eacute;v&eacute;nement MCI : prochaine session, navigation, mise en relation, donn&eacute;es d&apos;engagement.
        </motion.p>

        {/* Subsections */}
        <div className="mt-6 md:mt-10 space-y-4 md:space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border-l-[2px] border-dashed border-blue pl-4 md:pl-5"
          >
            <p className="font-sans font-bold text-[14px] md:text-[15px] text-black mb-1">
              Pour les participants
            </p>
            <p className="text-[13px] md:text-body text-muted leading-relaxed">
              Un guide dans le programme &mdash; Un compagnon qui sait ce qui vous int&eacute;resse et vous dit exactement o&ugrave; &ecirc;tre.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-l-[2px] border-dashed border-blue pl-4 md:pl-5"
          >
            <p className="font-sans font-bold text-[14px] md:text-[15px] text-black mb-1">
              Pour les organisateurs
            </p>
            <p className="text-[13px] md:text-body text-muted leading-relaxed">
              Les donn&eacute;es que personne n&apos;a &mdash; Quelles sessions ont retenu l&apos;attention. L&apos;engagement enfin mesurable.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
