"use client";

import { motion } from "framer-motion";

const cards = [
  {
    number: "< 0,20 CHF",
    label: "Coût IA par session",
    body: "L’on-device gère 65% des interactions. Le cloud en fallback.",
  },
  {
    number: "65 / 35",
    label: "Partage des revenus",
    body: "Les achats s'effectuent de manière fluide et sécurisée via Stripe directement dans l'application.",
  },
  {
    number: "App Store & Play Store",
    label: "Distribution Globale",
    body: "Téléchargement natif standard. Installation fluide, sécurisée et rassurante pour l'utilisateur.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.15 * i, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function Stats() {
  return (
    <section className="w-full py-24 px-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-card border border-dim p-8 rounded"
          >
            <p className="text-[clamp(28px,3vw,36px)] font-black text-blue leading-[1.1] tracking-tight break-words">
              {card.number}
            </p>
            <p className="font-mono text-label text-blue tracking-wider uppercase mt-3 mb-2">
              {card.label}
            </p>
            <p className="text-body text-muted">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
