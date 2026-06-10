"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32 snap-start">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-body text-black max-w-[600px] mx-auto text-center"
      >
        MCI n&apos;ach&egrave;te pas un produit. Il acquiert un avantage que personne d&apos;autre n&apos;a.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="text-body text-muted max-w-[600px] mx-auto text-center mt-6"
      >
        MCI per&ccedil;oit une part de revenus sur chaque session activ&eacute;e dans ses &eacute;v&eacute;nements &mdash; et obtient les donn&eacute;es d&apos;engagement qui rendent ses futurs &eacute;v&eacute;nements meilleurs que tout ce que la concurrence peut promettre.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-mono text-[10px] text-muted tracking-wider uppercase mt-8 text-center"
      >
        Lancement pilote &mdash; dans les semaines suivant une d&eacute;cision de partenariat
      </motion.p>

      <motion.a
        href="mailto:virgil@dorier.com"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-10 border-[1.5px] border-blue text-blue px-8 py-[14px] font-sans font-bold text-[13px] tracking-[0.08em] hover:bg-blue hover:text-white transition-all uppercase rounded-none"
      >
        Lancer la conversation &rarr;
      </motion.a>
    </section>
  );
}
