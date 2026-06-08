"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import SectionLabel from "@/components/SectionLabel";

const blocks = [
  {
    num: "I",
    title: "Le même script pour chaque visiteur",
    body: "Expert ou novice — mêmes mots, même rythme, sans adaptation.",
  },
  {
    num: "II",
    title: "L’attention s’effondre après 8 minutes",
    body: "L’écoute passive ne tient pas. Le contenu est excellent. La délivrance est cassée.",
  },
  {
    num: "III",
    title: "L’institution n’en savait rien",
    body: "Aucun signal, aucune donnée. La même expérience brisée se rejoue chaque jour.",
  },
];

export default function Problem() {
  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center px-16">
      <div className="w-[60%] max-w-[680px]">
        <SectionLabel text="Le problème △" />

        <div className="mt-4">
          <AnimatedText
            text={"Des guides statiques.\nDes humains vivants."}
            className="text-headline uppercase"
            stagger={0.03}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body text-muted mt-8 max-w-[580px]"
        >
          Les clients MCI investissent des centaines de milliers dans leurs &eacute;v&eacute;nements. Pourtant la plupart repartent sans avoir v&eacute;cu la rencontre d&eacute;cisive.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-body text-muted italic mt-4 max-w-[580px]"
        >
          Le manque n&apos;est pas dans le contenu. Il est dans l&apos;accompagnement.
        </motion.p>

        {/* Numbered blocks */}
        <div className="mt-10 space-y-6">
          {blocks.map((block, i) => (
            <motion.div
              key={block.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="border-l-[2px] border-blue pl-5"
            >
              <p className="font-mono text-[10px] text-blue tracking-wider uppercase mb-1">
                {block.num}
              </p>
              <p className="font-sans font-bold text-[15px] text-black">
                {block.title}
              </p>
              <p className="text-body text-muted mt-1">{block.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
