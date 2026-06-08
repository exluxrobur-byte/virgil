"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import SectionLabel from "@/components/SectionLabel";

export default function Solution() {
  return (
    <section className="w-screen h-screen flex-shrink-0 flex items-center px-16">
      <div className="w-[60%] max-w-[680px]">
        <SectionLabel text="La solution" />

        <div className="mt-4">
          <AnimatedText
            text={"Virgil ne joue pas\nune piste.\nIl lit la salle."}
            className="text-headline uppercase"
            stagger={0.03}
          />
        </div>

        {/* Info boxes */}
        <div className="mt-10 grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card p-6 rounded"
          >
            <p className="font-mono text-label text-blue tracking-wider uppercase mb-2">
              Premi&egrave;re visite
            </p>
            <p className="text-body text-muted">
              l&apos;app se t&eacute;l&eacute;charge en un clic depuis l&apos;App Store ou Google Play. Le mod&egrave;le IA s&apos;adapte automatiquement &agrave; l&apos;appareil.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-card p-6 rounded"
          >
            <p className="font-mono text-label text-blue tracking-wider uppercase mb-2">
              Visites suivantes
            </p>
            <p className="text-body text-muted">
              les achats se font directement dans l&apos;application de mani&egrave;re s&eacute;curis&eacute;e via Stripe. La session d&eacute;marre imm&eacute;diatement. 65% des interactions tournent en local, sans cloud.
            </p>
          </motion.div>
        </div>

        {/* Two columns — What Virgil is / isn't */}
        <div className="mt-10 grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="font-sans font-bold text-[15px] text-black mb-2">
              Ce qu&apos;est Virgil
            </p>
            <p className="text-body text-muted">
              Un moteur de d&eacute;cision stateful &mdash; Pas un chatbot. Une couche d&apos;orchestration qui adapte chaque moment &agrave; la personne.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="font-sans font-bold text-[15px] text-black mb-2">
              Ce qu&apos;il n&apos;est pas
            </p>
            <p className="text-body text-muted">
              Un script avec un bouton play &mdash; Il fait la diff&eacute;rence entre un enfant qui s&apos;ennuie et un expert qui veut aller plus loin.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
