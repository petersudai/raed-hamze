import Reveal from "../components/Reveal";
import { img, stats } from "../lib/data";

export default function Profile() {
  return (
    <section id="profile" className="relative bg-limestone py-24 sm:py-32">
      <div className="container-dossier">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-bronze">01 · Profile</span>
              <h2 className="mt-5 text-balance text-4xl leading-[1.05] text-ink sm:text-5xl">
                A career built on{" "}
                <span className="italic text-bronze">documentation, discipline,</span> and the long
                view.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 overflow-hidden rounded-sm">
              <img
                src={img.portrait}
                alt="Portrait placeholder for Raed Hamze"
                className="aspect-[4/5] w-full max-w-sm object-cover grayscale contrast-110"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <Reveal delay={0.15} className="flex flex-col gap-6 text-lg leading-relaxed text-ink/80">
              <p>
                With over 22 years of real estate experience in the UAE, Raed Hamze is the Founder
                &amp; CEO of Sky Land Middle East Properties in Abu Dhabi and Luxury Sky Land in
                Dubai. Alongside leading two brokerages, he serves as a certified instructor at
                ThinkProp Real Estate Training Institute, delivering the Abu Dhabi Broker Licensing
                Course and the Annual Renewal Licensing Course.
              </p>
              <p>
                He is licensed in both Abu Dhabi and Dubai, holding certifications including CIPS,
                CRB, Off-Plan Development Sales, Madhmoun, and AML. His leadership blends strategic
                growth, international investor relations, and market transparency, ensuring local
                and global clients receive trusted, professional service.
              </p>
              <p>
                Raed has represented the UAE real estate sector internationally in Japan, China,
                Russia, and Nigeria, promoting the Emirates as a premier destination for global
                investment and relocation.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-bronze/25 bg-bronze/25 sm:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={0.05 * i} className="bg-limestone p-6">
                  <div className="font-display text-3xl text-bronze sm:text-4xl">
                    {s.value}
                    <span className="text-xl">{s.suffix}</span>
                  </div>
                  <div className="mt-2 text-xs leading-snug text-ink/70">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
