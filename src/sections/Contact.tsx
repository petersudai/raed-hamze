import { useState } from "react";
import Reveal from "../components/Reveal";
import Seal from "../components/Seal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-limestone sm:py-32">
      <div className="container-dossier">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow text-sand">09 · Get in Touch</span>
              <h2 className="mt-5 text-balance text-4xl leading-[1.05] sm:text-5xl">
                Start a conversation <span className="italic text-sand">worth documenting.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-limestone/70">
                Whether you're acquiring, selling, or exploring the UAE market for the first time,
                reach out directly. Every engagement begins with a conversation, not a pitch.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 hidden sm:block">
              <Seal size={96} tone="limestone" />
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <Reveal delay={0.1}>
              {submitted ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 border border-limestone/15 p-10 text-center">
                  <span className="eyebrow text-sand">Message sent</span>
                  <p className="max-w-sm text-limestone/70">
                    Thank you. Raed's team will respond within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                >
                  <label className="flex flex-col gap-2 sm:col-span-1">
                    <span className="eyebrow text-limestone/65">Full name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      className="border-b border-limestone/25 bg-transparent py-3 text-limestone outline-none placeholder:text-limestone/45 focus:border-sand"
                      placeholder="Jane Investor"
                    />
                  </label>
                  <label className="flex flex-col gap-2 sm:col-span-1">
                    <span className="eyebrow text-limestone/65">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="border-b border-limestone/25 bg-transparent py-3 text-limestone outline-none placeholder:text-limestone/45 focus:border-sand"
                      placeholder="jane@email.com"
                    />
                  </label>
                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="eyebrow text-limestone/65">Interested in</span>
                    <select
                      name="interest"
                      defaultValue="buying"
                      className="border-b border-limestone/25 bg-transparent py-3 text-limestone outline-none focus:border-sand [&>option]:text-ink"
                    >
                      <option value="buying">Buying in Abu Dhabi or Dubai</option>
                      <option value="selling">Selling a property</option>
                      <option value="offplan">Off-plan investment</option>
                      <option value="training">ThinkProp broker training</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="eyebrow text-limestone/65">Message</span>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      className="resize-none border-b border-limestone/25 bg-transparent py-3 text-limestone outline-none placeholder:text-limestone/45 focus:border-sand"
                      placeholder="Tell us what you're looking for..."
                    />
                  </label>
                  <button
                    type="submit"
                    className="eyebrow mt-2 w-fit rounded-full bg-bronze px-7 py-3.5 text-limestone transition-colors hover:bg-bronze-light sm:col-span-2"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
