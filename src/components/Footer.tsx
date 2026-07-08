import Seal from "./Seal";

export default function Footer() {
  return (
    <footer className="bg-ink py-12 text-limestone/65">
      <div className="container-dossier flex flex-col gap-8 border-t border-limestone/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Seal size={32} spin={false} tone="limestone" />
          <div className="font-mono text-xs leading-relaxed">
            <div className="text-limestone/70">Sky Land Middle East Properties LLC OPC</div>
            <div>License CN-1827517 · Brokerage 202303496562</div>
          </div>
        </div>
        <div className="flex flex-col gap-1 font-mono text-xs sm:items-end">
          <span>© {new Date().getFullYear()} Raed Hamze. All rights reserved.</span>
          <span>Abu Dhabi &amp; Dubai, United Arab Emirates</span>
        </div>
      </div>
    </footer>
  );
}
