"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import AnimatedText from "@/components/AnimatedText";

export default function What() {
  const culturalPoints = [
    "Musées & sites patrimoniaux — 1er pilote",
    "Narration adaptative multilingue",
    "Itinéraires dynamiques & détours",
  ];

  const mciPoints = [
    "Orientation en direct sur l’agenda",
    "Recommandations de sessions contextuelles",
    "Facilitation de networking",
    "Analytique d’engagement en temps réel",
    "Marque blanche par événement client",
  ];

  return (
    <section id="what" className="w-screen h-screen flex-shrink-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <div className="relative w-full md:w-[60%] max-w-[680px]">
        <SectionLabel text="QUOI" />
        
        <AnimatedText 
          text={"UNE PLATEFORME.\nINFINIMENT\nCONFIGURABLE."}
          className="text-headline uppercase"
          stagger={0.1}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-body text-muted italic mt-6 mb-14 max-w-[480px]"
        >
          Contenu géré par l&apos;équipe événementielle.
          Intelligence opérée par Virgil.
        </motion.p>

        <div className="flex flex-col gap-10">
          {/* Cultural Sites */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-[2px] bg-dim" />
              <span className="font-sans font-bold text-black tracking-widest text-xs uppercase">POUR LES SITES CULTURELS</span>
            </div>
            <ul className="space-y-2.5 pl-1">
              {culturalPoints.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center text-[13px] text-muted"
                >
                  <div className="w-[5px] h-[5px] rounded-full bg-blue/40 mr-3 flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* MCI Events */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-[2px] bg-blue" />
              <span className="font-sans font-bold text-black tracking-widest text-xs uppercase">POUR LES ÉVÉNEMENTS MCI</span>
            </div>
            <ul className="space-y-2.5 pl-1">
              {mciPoints.map((point, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center text-[13px] text-muted"
                >
                  <div className="w-[6px] h-[6px] rounded-full bg-blue mr-3 flex-shrink-0" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
