"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import AnimatedText from "@/components/AnimatedText";

export default function Why() {
  const blocks = [
    {
      num: "01",
      title: "LES PARTICIPANTS MANQUENT L&apos;ESSENTIEL.",
      body: "La bonne session, la bonne rencontre, ou l’idée clé — oubliées. Pas d’accompagnement, pas de rétention."
    },
    {
      num: "02",
      title: "LES APPS DONNENT DES AGENDAS.",
      body: "Pas des guides. Les parcours audio statiques existent, mais ils n’écoutent pas, ne s’adaptent pas et ne décident pas quand parler."
    },
    {
      num: "03",
      title: "L&apos;ENGAGEMENT EST SOUS-EXPLOITÉ.",
      body: "L’avantage concurrentiel de MCI repose sur l’expérience participant — aujourd’hui, elle n’est ni mesurée, ni guidée, ni exploitée."
    }
  ];

  return (
    <section id="why" className="w-screen h-screen flex-shrink-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <div className="relative w-full md:w-[60%] max-w-[680px]">
        <SectionLabel text="POURQUOI" />
        
        <AnimatedText 
          text={"L’ENJEU N’EST PAS\nLE CONTENU.\nC’EST L’ACCOMPAGNEMENT."}
          className="text-headline uppercase"
          stagger={0.1}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-body text-muted mt-8 mb-12 max-w-[480px]"
        >
          Les clients de MCI investissent lourdement dans leurs événements.
          Pourtant, la plupart des participants repartent en ayant manqué
          l&apos;essentiel. L&apos;enjeu n&apos;est pas le contenu. C&apos;est l&apos;accompagnement.
        </motion.p>

        <div className="flex flex-col border-l border-dim pl-6 md:pl-8">
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6 last:mb-0"
            >
              <div className="font-mono text-[10px] text-blue tracking-[0.2em] mb-1.5">{block.num}</div>
              <h3 className="text-[11px] font-bold text-black tracking-[0.10em] uppercase mb-1.5 leading-tight">
                {block.title}
              </h3>
              <p className="text-[13px] text-muted leading-relaxed">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
