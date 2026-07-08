import Reveal from "../components/Reveal";
import { awards } from "../lib/data";

export default function Awards() {
  const doubled = [...awards, ...awards];

  return (
    <section id="awards" className="overflow-hidden bg-ink py-24 text-limestone sm:py-32">
      <div className="container-dossier">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-sand">05 · Recognition</span>
          <h2 className="mt-5 text-balance text-4xl leading-[1.05] sm:text-5xl">
            Recognized by the <span className="italic text-sand">names that set the standard.</span>
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="flex flex-col gap-2 border-t border-limestone/15 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
                <div>
                  <h3 className="text-xl text-limestone sm:text-2xl">{a.title}</h3>
                  <p className="mt-1 font-mono text-xs tracking-wide text-sand/80">{a.org}</p>
                </div>
                {a.year && <span className="font-mono text-sm text-limestone/65">{a.year}</span>}
              </div>
            </Reveal>
          ))}
          <div className="hairline border-limestone/15" />
        </div>
      </div>

      <div className="mt-16 border-t border-limestone/10 py-6">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {doubled.map((a, i) => (
            <span key={i} className="eyebrow text-limestone/55">
              {a.org}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
