import Reveal from "../components/Reveal";
import { timeline } from "../lib/data";

export default function CareerLedger() {
  return (
    <section id="ledger" className="bg-ink py-24 text-limestone sm:py-32">
      <div className="container-dossier">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-sand">02 · Career Ledger</span>
          <h2 className="mt-5 text-balance text-4xl leading-[1.05] sm:text-5xl">
            Two brokerages. One <span className="italic text-sand">unbroken line</span> of practice.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col">
          {timeline.map((entry, i) => (
            <Reveal key={entry.year} delay={i * 0.08}>
              <div className="group grid grid-cols-1 gap-3 border-t border-limestone/15 py-8 sm:grid-cols-12 sm:gap-6 sm:py-10">
                <div className="sm:col-span-3">
                  <span className="font-mono text-sm tracking-wider text-sand">{entry.range}</span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="text-2xl text-limestone">{entry.title}</h3>
                  <p className="mt-1 text-sm text-limestone/65">{entry.org}</p>
                </div>
                <div className="sm:col-span-5">
                  <p className="text-base leading-relaxed text-limestone/70">{entry.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="hairline border-limestone/15" />
        </div>
      </div>
    </section>
  );
}
