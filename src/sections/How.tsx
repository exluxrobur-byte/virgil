"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import AnimatedText from "@/components/AnimatedText";

export default function How() {
  const steps = [
    {
      num: "01",
      title: "SCAN",
      body: "QR code — aucun téléchargement.\nTrois questions. Virgil s’adapte."
    },
    {
      num: "02",
      title: "ÉCOUTE",
      body: "Lit les signaux d’engagement en temps réel :\nquestions posées, rythme, temps passé."
    },
    {
      num: "03",
      title: "ADAPTE",
      body: "Raconte, simplifie, questionne, suggère\ndes détours — ou redirige vers la suite."
    }
  ];

  return (
    <section id="how" className="w-screen h-screen flex-shrink-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <div className="relative w-full md:w-[60%] max-w-[680px]">
        <SectionLabel text="COMMENT" />

        <AnimatedText 
          text={"NI CHATBOT.\nNI AUDIOGUIDE."}
          className="text-headline uppercase"
          stagger={0.08}
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-body text-muted italic mt-6 mb-14 max-w-[480px]"
        >
          Un moteur de décision qui orchestre l&apos;expérience
          autour de la personne &mdash; et non du programme.
        </motion.p>

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.76, 0, 0.24, 1] }}
                className="h-[1px] w-full bg-dim mb-4"
              />
              <div className="font-mono text-[9px] text-blue tracking-[0.2em] mb-2">{step.num}</div>
              <h3 className="text-sm font-extrabold text-black tracking-[0.12em] uppercase mb-1.5">
                {step.title}
              </h3>
              <p className="text-[13px] text-muted whitespace-pre-line leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
