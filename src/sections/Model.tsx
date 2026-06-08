"use client";
import { motion } from "framer-motion";
import SectionLabel from "@/components/SectionLabel";
import CountUp from "@/components/CountUp";

export default function Model() {
  const cards = [
    {
      top: (
        <div className="text-[42px] font-[900] text-blue font-syne leading-none mb-4 tracking-[-0.02em]">
          <CountUp to={6} duration={1000} />–<CountUp to={9} duration={1400} /> CHF
        </div>
      ),
      mid: "par session",
      bottom: "paiement web QR"
    },
    {
      top: (
        <div className="text-[42px] font-[900] text-blue font-syne leading-none mb-4 tracking-[-0.02em]">
          &lt; 0.20 CHF
        </div>
      ),
      mid: "coût IA",
      bottom: "par session"
    },
    {
      top: (
        <div className="text-[42px] font-[900] text-blue font-syne leading-none mb-4 tracking-[-0.02em]">
          <CountUp to={65} duration={1400} /> / <CountUp to={35} duration={1400} />
        </div>
      ),
      mid: "partage des revenus",
      bottom: "lieu / Virgil"
    }
  ];

  return (
    <section id="model" className="py-20 px-6 md:py-32 md:px-16 max-w-[1400px] mx-auto w-full">
      <SectionLabel text="MODÈLE" />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-card border border-blue rounded-[4px] p-8"
          >
            {card.top}
            <div className="text-[12px] text-muted mb-1">{card.mid}</div>
            <div className="text-[11px] text-[#555555]">{card.bottom}</div>
          </motion.div>
        ))}
      </div>

      {/* Value Grid */}
      <div className="mb-24">
        <div className="font-mono text-[9px] text-blue tracking-[0.2em] mb-8">
          POUR MCI EN TANT QUE PARTENAIRE STRATÉGIQUE
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          <div>
            <h4 className="font-syne text-[10px] font-[700] text-black tracking-[0.08em] uppercase mb-3">
              COUCHE DIFFÉRENCIANTE
            </h4>
            <p className="text-[12px] text-muted leading-relaxed">
              Vendable aux clients comme fonctionnalité d&apos;engagement premium.
              Aucun concurrent ne l&apos;offre aujourd&apos;hui.
            </p>
          </div>
          <div>
            <h4 className="font-syne text-[10px] font-[700] text-black tracking-[0.08em] uppercase mb-3">
              PARTAGE DES REVENUS
            </h4>
            <p className="text-[12px] text-muted leading-relaxed">
              MCI gagne sur chaque session activée lors de ses événements.
              Aucun coût de vente.
            </p>
          </div>
          <div>
            <h4 className="font-syne text-[10px] font-[700] text-black tracking-[0.08em] uppercase mb-3">
              INTELLIGENCE EN TEMPS RÉEL
            </h4>
            <p className="text-[12px] text-muted leading-relaxed">
              Quelles sessions et moments ont réellement capté l&apos;attention.
              Des données que les concurrents ne peuvent pas acheter.
            </p>
          </div>
        </div>
      </div>

      {/* Risk Line */}
      <div className="border-t border-dim pt-6 mt-12 md:mt-24">
        <div className="font-mono text-[9px] text-[#555555] leading-relaxed">
          RISQUE &nbsp;&middot;&nbsp; Pilote MVP ciblé sur un environnement muséal contrôlé
          &nbsp;&middot;&nbsp; Aucune dépendance aux systèmes MCI
          <br className="hidden md:block" />
          &nbsp;&middot;&nbsp; Aucun risque de validation App Store &nbsp;&middot;&nbsp; Lancement possible en quelques semaines
        </div>
      </div>
    </section>
  );
}
