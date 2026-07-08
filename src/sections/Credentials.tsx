import Reveal from "../components/Reveal";
import { credentials } from "../lib/data";

export default function Credentials() {
  return (
    <section className="bg-limestone py-24 sm:py-32">
      <div className="container-dossier">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-bronze">04 · Credentials</span>
          <h2 className="mt-5 text-balance text-4xl leading-[1.05] text-ink sm:text-5xl">
            Every designation, <span className="italic text-bronze">earned and current.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-bronze/25 bg-bronze/25 sm:grid-cols-4">
          {credentials.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.04} className="group bg-limestone p-6 sm:p-8">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-bronze/50 font-mono text-[11px] tracking-tight text-bronze transition-colors group-hover:bg-bronze group-hover:text-limestone">
                  {c.code}
                </div>
                <p className="text-sm leading-snug text-ink/70">{c.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
