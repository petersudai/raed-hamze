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
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
              {reach.map((r, i) => (
                <Reveal key={r.region} delay={i * 0.08}>
                  <div className="border-t border-bronze/25 pt-6">
                    <span className="eyebrow text-bronze">{r.region}</span>
                    <p className="mt-3 text-2xl leading-snug text-ink">
                      {r.countries.join(", ")}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
