import { motion } from "framer-motion";
import { img } from "../lib/data";
import Seal from "../components/Seal";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={img.heroSkyline}
          alt="Dubai skyline at dusk"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/40" />
      </div>

      <div className="container-dossier relative z-10 pb-20 pt-40 sm:pb-28">
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-bronze" />
            <span className="eyebrow text-sand">Abu Dhabi · Dubai · United Arab Emirates</span>
          </motion.div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl text-balance text-[13vw] leading-[0.95] text-limestone sm:text-6xl lg:text-7xl"
            >
              Twenty-one years of
              <span className="block italic text-sand">building trust</span>
              in UAE real estate.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden shrink-0 lg:block"
            >
              <Seal size={128} tone="limestone" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 border-t border-limestone/20 pt-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-md text-base leading-relaxed text-limestone/75">
              Raed Hamze, Founder &amp; CEO of Sky Land Middle East and Luxury Sky Land. Certified
              Instructor at ThinkProp. ADREC Licensed. International REALTOR® Member, NAR.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="eyebrow rounded-full bg-bronze px-6 py-3.5 text-limestone transition-colors hover:bg-bronze-light"
              >
                Book a Consultation
              </a>
              <a
                href="#profile"
                className="eyebrow rounded-full border border-limestone/40 px-6 py-3.5 text-limestone transition-colors hover:border-limestone"
              >
                View Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
