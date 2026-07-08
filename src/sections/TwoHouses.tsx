import Reveal from "../components/Reveal";
import { companies } from "../lib/data";

export default function TwoHouses() {
  return (
    <section id="houses" className="bg-limestone py-24 sm:py-32">
      <div className="container-dossier">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-bronze">03 · The Two Houses</span>
          <h2 className="mt-5 text-balance text-4xl leading-[1.05] text-ink sm:text-5xl">
            One vision, <span className="italic text-bronze">two emirates.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {companies.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.12}>
              <article className="group relative flex h-full flex-col overflow-hidden bg-ink text-limestone">
                <div className="relative h-72 overflow-hidden sm:h-80">
                  <img
                    src={c.image}
                    alt={`${c.name}, ${c.place}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                    <div>
                      <p className="eyebrow text-sand">{c.place}</p>
                      <h3 className="mt-1 text-3xl">{c.name}</h3>
                    </div>
                    <span className="font-mono text-xs text-limestone/70">{c.founded}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-7">
                  <p className="text-sm leading-relaxed text-limestone/70">{c.body}</p>
                  <p className="mt-auto font-mono text-[11px] tracking-wide text-sand/80">
                    {c.license}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
