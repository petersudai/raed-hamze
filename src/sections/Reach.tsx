import Reveal from "../components/Reveal";
import { reach, img } from "../lib/data";

export default function Reach() {
  return (
    <section className="bg-limestone py-24 sm:py-32">
      <div className="container-dossier">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-bronze">06 · International Reach</span>
              <h2 className="mt-5 text-balance text-4xl leading-[1.05] text-ink sm:text-5xl">
                Representing the UAE, <span className="italic text-bronze">on the ground.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
                Raed has carried the UAE real estate sector's message abroad, promoting the
                Emirates as a premier destination for global investment and relocation across four
                continents.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 overflow-hidden rounded-sm">
              <img
                src={img.facade}
                alt="Modern glass facade"
                className="aspect-video w-full object-cover"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <div className="flex flex-col">
              {reach.map((r, i) => (
                <Reveal key={r.country} delay={i * 0.07}>
                  <div className="flex items-center justify-between gap-6 border-t border-bronze/25 py-6">
                    <span className="text-2xl text-ink">{r.country}</span>
                    <span className="hidden font-mono text-xs text-ink/65 sm:block">{r.note}</span>
                  </div>
                </Reveal>
              ))}
              <div className="hairline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
