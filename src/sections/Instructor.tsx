import Reveal from "../components/Reveal";
import { img } from "../lib/data";

export default function Instructor() {
  return (
    <section className="relative bg-limestone py-24 sm:py-32">
      <div className="container-dossier">
        <div className="relative overflow-hidden rounded-sm bg-petrol">
          <img
            src={img.interior}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="relative grid gap-10 p-8 sm:p-14 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="eyebrow text-sand">08 · Shaping the Industry</span>
                <h2 className="mt-5 text-balance text-3xl leading-[1.1] text-limestone sm:text-4xl lg:text-5xl">
                  Certified Instructor at{" "}
                  <span className="italic text-sand">ThinkProp Real Estate Training Institute.</span>
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-limestone/75">
                  Beyond brokerage, Raed delivers the Abu Dhabi Broker Licensing Course and Annual
                  Renewal Licensing Course, and leads Madhmoun initiative sessions promoting
                  transparency and standardized real estate practices. He has trained over 1,000
                  brokers and represented ThinkProp as a panel speaker on UAE market trends and
                  regulation.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={0.15} className="flex flex-col gap-4 border-l border-limestone/20 pl-6">
                <div>
                  <div className="font-display text-3xl text-sand">1,000+</div>
                  <div className="mt-1 text-xs text-limestone/70">Brokers trained</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-sand">2</div>
                  <div className="mt-1 text-xs text-limestone/70">Flagship licensing courses delivered</div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
