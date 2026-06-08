"use client";

import { motion } from "framer-motion";
import Ticker from "@/components/Ticker";

export default function Citation() {
  return (
    <section className="w-full py-32 flex flex-col items-center justify-center">
      {/* Ticker */}
      <div className="w-full mb-16 text-blue">
        <Ticker
          text="MCI perçoit une part de revenus sur chaque session activée · et obtient les données que la concurrence ne peut pas offrir"
          speed={30}
          className="text-blue"
        />
      </div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-headline italic text-center max-w-[800px] px-6"
      >
        &laquo;&nbsp;Virgil ne remplace pas le conservateur. Il en donne un &agrave; chaque visiteur.&nbsp;&raquo;
      </motion.blockquote>

      {/* Attribution */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-label text-muted font-mono tracking-wider uppercase mt-6"
      >
        Virgil &mdash; vision produit, 2026
      </motion.p>
    </section>
  );
}
