import Reveal from "../components/Reveal";
import { testimonials } from "../lib/data";

export default function Testimonials() {
  return (
    <section className="bg-ink py-24 text-limestone sm:py-32">
      <div className="container-dossier">
        <Reveal className="max-w-xl">
          <span className="eyebrow text-sand">07 · In Their Words</span>
          <h2 className="mt-5 text-balance text-4xl leading-[1.05] sm:text-5xl">
            What clients and peers <span className="italic text-sand">say.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12}>
              <figure className="flex h-full flex-col justify-between gap-8 border border-limestone/15 p-8 sm:p-10">
                <blockquote className="font-display text-xl italic leading-relaxed text-limestone/90 sm:text-2xl">
                  "{t.quote}"
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-limestone/15 pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sand/50 font-mono text-xs text-sand">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                  <div>
                    <div className="text-sm text-limestone">{t.name}</div>
                    <div className="font-mono text-xs text-limestone/65">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
