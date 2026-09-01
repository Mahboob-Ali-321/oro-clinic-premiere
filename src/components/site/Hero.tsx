import { ArrowRight, Phone } from "lucide-react";
import { Navbar } from "./Navbar";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[92vh] overflow-hidden bg-surface">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/assets/c1.jpg"
          alt="Dr. Anand Mohan treating a patient at Oro Dental Clinic in Bhagalpur"
          className="animate-kenburns h-full w-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(248,250,252,0.93) 0%, rgba(248,250,252,0.65) 28%, rgba(248,250,252,0.15) 48%, rgba(248,250,252,0) 55%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 md:hidden"
        style={{
          background:
            "linear-gradient(155deg, rgba(248,250,252,0.96) 0%, rgba(248,250,252,0.85) 25%, rgba(248,250,252,0.55) 50%, rgba(248,250,252,0.1) 75%)",
        }}
      />

      <Navbar />

      <div className="mx-auto flex min-h-[92vh] max-w-7xl items-center px-8 pt-32 pb-20 md:px-8">
        <div className="max-w-[800px]">
          <span
            className="animate-rise inline-flex items-center gap-2 rounded-full bg-chip-bg px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[1px] text-chip-text"
            style={{ animationDelay: "0s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Trusted Dental Care · Bhagalpur
          </span>

          <h1
            className="animate-rise mt-6 text-[2.5rem] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[3.5rem] lg:text-[4.5rem]"
            style={{ animationDelay: "0.1s" }}
          >
            Healthy smiles.
            <br />
            <span className="text-brand">Gentle</span>, expert care.
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-[1.15rem] font-normal leading-[1.6] text-slate"
            style={{ animationDelay: "0.2s" }}
          >
            Oro Dental Clinic provides compassionate, high-quality dental care in Bhagalpur —
            trusted by over 1,000 patients with a perfect 5.0 rating.
          </p>

          <div
            className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "0.3s" }}
          >
            <a href="#contact" className="btn-pill btn-brand">
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+919616984243" className="btn-pill btn-glass">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
