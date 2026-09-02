import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { requestAppointment } from "@/lib/appointments.functions";
import { Reveal } from "./Reveal";
import {
  ArrowRight,
  Baby,
  Clock,
  Wrench,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Stethoscope,
  Star,
  X,
} from "lucide-react";

const WHATSAPP =
  "https://wa.me/919616984243?text=Hi!%20I'd%20like%20to%20book%20a%20dental%20appointment.";

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="flex items-center gap-0.5 text-amber-500" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className={className} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

function GoogleG({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.2-.4-4.7H24v9h11.8c-.5 2.8-2 5.1-4.4 6.7v5.5h7.1c4.1-3.8 6.6-9.4 6.6-16.5Z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.7C8.1 41.2 15.4 46 24 46Z"
      />
      <path fill="#FBBC05" d="M11.8 28.3A13.2 13.2 0 0 1 11.1 24c0-1.5.3-2.9.7-4.3v-5.7H4.5A22 22 0 0 0 2 24c0 3.6.9 6.9 2.5 9.9l7.3-5.6Z" />
      <path
        fill="#EA4335"
        d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 29.9 2 24 2 15.4 2 8.1 6.8 4.5 14l7.3 5.7c1.7-5.2 6.5-9 12.2-9Z"
      />
    </svg>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-5 py-8 md:grid-cols-[auto_1fr] md:px-8">
        <Reveal delay={80} className="flex min-w-0 items-center gap-4">
          <GoogleG className="h-10 w-10 shrink-0" />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-3xl font-bold leading-none text-ink">5.0</span>
              <Stars />
            </div>
            <p className="mt-1 text-sm text-slate">1,004 Google Reviews</p>
          </div>
        </Reveal>
        <Reveal delay={180} as="p" className="text-sm leading-relaxed text-slate md:text-right">
          A perfect rating from over a thousand patients across Bhagalpur — for painless treatment,
          clear explanations and honest advice.
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="scale" className="relative">
          <img
            src="/assets/c3.jpg"
            alt="Dr. Anand Mohan examining a young patient"
            loading="lazy"
            className="aspect-4/5 w-full rounded-[1.75rem] object-cover shadow-[0_30px_60px_-40px_rgba(10,25,47,0.6)]"
          />
          <div className="card-soft absolute -bottom-6 left-4 flex items-center gap-3 px-5 py-4 md:left-8">
            <Stars className="h-4 w-4" />
            <span className="text-sm font-semibold text-ink">1,004 five-star reviews</span>
          </div>
        </Reveal>
        <div>
          <Reveal as="span" className="inline-flex items-center gap-2 rounded-full bg-chip-bg px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[1px] text-chip-text">
            Meet the doctor
          </Reveal>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-ink md:text-[2.75rem] md:leading-[1.15]">
            Dr. Anand Mohan
          </h2>
          <p className="mt-5 text-[1.05rem] leading-[1.7] text-slate">
            Dr. Anand Mohan has spent years caring for families in Bhagalpur with a calm, unhurried
            approach that puts nervous patients at ease. Patients consistently describe him as
            gentle and thorough — someone who takes the time to explain every step of treatment
            before it happens.
          </p>
          <p className="mt-4 text-[1.05rem] leading-[1.7] text-slate">
            From routine cleanings to root canals and implants, procedures at Oro Dental Clinic are
            known for being genuinely painless, efficient and honest about what you actually need.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
            <Reveal delay={120} className="card-soft px-5 py-4">
              <p className="text-2xl font-bold text-ink">1,000+</p>
              <p className="mt-1 text-sm text-slate">Happy patients</p>
            </Reveal>
            <Reveal delay={240} className="card-soft px-5 py-4">
              <p className="text-2xl font-bold text-ink">5.0 ★</p>
              <p className="mt-1 text-sm text-slate">Google rating</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Stethoscope,
    title: "General Checkup & Cleaning",
    text: "Thorough exams and professional scaling to keep teeth and gums healthy.",
  },
  {
    icon: ShieldCheck,
    title: "Root Canal Treatment (RCT)",
    text: "Painless, single-sitting root canals that save the natural tooth.",
  },
  {
    icon: Wrench,
    title: "Dental Implants",
    text: "Permanent, natural-looking replacements for missing teeth.",
  },
  {
    icon: Sparkles,
    title: "Cavity & Filling Treatment",
    text: "Tooth-coloured fillings that stop decay early and blend right in.",
  },
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    text: "Whitening, veneers and smile corrections done with a light touch.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    text: "Friendly, patient care that makes a child's first visits easy.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-chip-bg px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[1px] text-chip-text">
            Our services
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-ink md:text-[2.75rem] md:leading-[1.15]">
            Complete dental care under one roof
          </h2>
          <p className="mt-4 text-[1.05rem] leading-[1.7] text-slate">
            Modern equipment, strict sterilisation and treatment plans explained in plain language.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="article"
              key={s.title}
              delay={i * 90}
              className="card-soft card-lift p-7"
            >
              <span className="icon-anim grid h-12 w-12 place-items-center rounded-2xl bg-brand-light text-brand">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: "/assets/c1.jpg", alt: "Treatment room at Oro Dental Clinic" },
  { src: "/assets/c4.jpg", alt: "Dental examination in progress" },
  { src: "/assets/c2.jpg", alt: "Sterilised instrument tray and dental setup" },
  { src: "/assets/c6.jpg", alt: "Pediatric dental treatment at the clinic" },
  { src: "/assets/c5.jpg", alt: "Dr. Anand Mohan treating a patient" },
  { src: "/assets/c3.jpg", alt: "Child receiving gentle dental care" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-chip-bg px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[1px] text-chip-text">
            Gallery
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-ink md:text-[2.75rem] md:leading-[1.15]">
            Inside the clinic
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 80}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block aspect-4/3 w-full overflow-hidden rounded-2xl bg-white"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-ink/85 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setActive(null)}
            className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-ink"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={gallery[active]?.src}
            alt={gallery[active]?.alt ?? ""}
            className="max-h-[85vh] w-auto max-w-full rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}

const testimonials = [
  {
    quote:
      "I walked in quite anxious and walked out relaxed. The doctor's skill and gentle hands made the whole visit stress-free, and every question I had was answered patiently.",
    name: "Abhijeet K.",
    role: "General Checkup Patient",
  },
  {
    quote:
      "I had a root canal and a cleaning done here. Both were quick, completely painless, and he explained exactly what he was doing at each stage.",
    name: "Priyanka S.",
    role: "RCT & Cleaning Patient",
  },
  {
    quote:
      "It's a relief to finally have dental care of this standard right here in our town — clean setup, modern equipment and honest advice.",
    name: "Ravi M.",
    role: "Long-term Patient",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-chip-bg px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[1px] text-chip-text">
              Patient stories
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-ink md:text-[2.75rem] md:leading-[1.15]">
              What our patients say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <GoogleG className="h-8 w-8" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-ink">5.0</span>
                <Stars className="h-4 w-4" />
              </div>
              <p className="text-sm text-slate">1,004 Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              delay={i * 90}
              className="card-soft card-lift flex h-full flex-col p-7"
            >
              <Stars className="h-4 w-4" />
              <blockquote className="mt-4 flex-1 text-[1rem] leading-[1.7] text-slate">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-black/5 pt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-slate">{t.role}</p>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Star, title: "1,000+ five-star reviews", text: "A perfect 5.0 rating on Google from patients across Bhagalpur." },
  { icon: ShieldCheck, title: "Painless & efficient", text: "Modern technique and careful anaesthesia keep treatment comfortable." },
  { icon: MessageCircle, title: "Clear communication", text: "You'll know what's being done, why, and what it costs — before it starts." },
  { icon: MapPin, title: "Trusted local clinic", text: "Right at Tilkamanjhi Chowk, serving families for years." },
];

export function WhyUs() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="max-w-2xl text-3xl font-bold tracking-[-0.02em] text-ink md:text-[2.75rem] md:leading-[1.15]">
          Why patients choose Oro
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 90} className="card-soft card-lift p-7">
              <span className="icon-anim grid h-12 w-12 place-items-center rounded-2xl bg-brand-light text-brand">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{r.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const hours = [
  { day: "Monday – Saturday", time: "9:00 AM – 2:00 PM, 5:00 PM – 8:30 PM" },
  { day: "Sunday", time: "10:00 AM – 1:00 PM (emergency only)" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const submitAppointment = useServerFn(requestAppointment);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    try {
      await submitAppointment({
        data: {
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          service: String(fd.get("service") ?? ""),
          preferred_date: String(fd.get("date") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      form.reset();
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call or WhatsApp us instead.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-chip-bg px-4 py-2 text-[0.75rem] font-semibold uppercase tracking-[1px] text-chip-text">
            Contact & booking
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-ink md:text-[2.75rem] md:leading-[1.15]">
            Book your appointment
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <div className="card-soft p-7">
              <h3 className="text-lg font-semibold text-ink">Visit us</h3>
              <p className="mt-3 flex gap-3 text-[0.98rem] leading-relaxed text-slate">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                Oro Dental Clinic, Tilkamanjhi Chowk, Opposite To Kalyan Jewellers, Jail Road,
                Sabour Rd, Bhagalpur, Bihar 812001
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="tel:+919616984243" className="btn-pill btn-brand">
                  <Phone className="h-4 w-4" />
                  +91 96169 84243
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill btn-glass"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="card-soft p-7">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-ink">
                <Clock className="h-5 w-5 text-brand" />
                Clinic hours
              </h3>
              <dl className="mt-4 space-y-3">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-black/5 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="text-[0.95rem] font-medium text-ink">{h.day}</dt>
                    <dd className="text-right text-[0.9rem] text-slate">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="overflow-hidden rounded-[1.25rem] border border-black/5">
              <iframe
                title="Map to Oro Dental Clinic, Bhagalpur"
                src="https://www.google.com/maps?q=Oro%20Dental%20Clinic%2C%20Tilkamanjhi%20Chowk%2C%20Jail%20Road%2C%20Sabour%20Rd%2C%20Bhagalpur%2C%20Bihar%20812001&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>

          <Reveal
            delay={140}
            as="form"
            className="card-soft h-fit p-7"
            onSubmit={handleSubmit}
          >
            <h3 className="text-lg font-semibold text-ink">Request an appointment</h3>
            <div className="mt-5 space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className="mt-1.5 h-12 w-full rounded-xl border border-black/10 bg-surface px-4 text-[0.95rem] text-ink outline-none focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-ink">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  className="mt-1.5 h-12 w-full rounded-xl border border-black/10 bg-surface px-4 text-[0.95rem] text-ink outline-none focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="service" className="text-sm font-medium text-ink">
                  Preferred service
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-1.5 h-12 w-full rounded-xl border border-black/10 bg-surface px-4 text-[0.95rem] text-ink outline-none focus:border-brand"
                >
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                  <option>Other / Not sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="text-sm font-medium text-ink">
                  Preferred date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="mt-1.5 h-12 w-full rounded-xl border border-black/10 bg-surface px-4 text-[0.95rem] text-ink outline-none focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className="mt-1.5 w-full rounded-xl border border-black/10 bg-surface px-4 py-3 text-[0.95rem] text-ink outline-none focus:border-brand"
                />
              </div>
              <button type="submit" className="btn-pill btn-brand w-full">
                Request Appointment
                <ArrowRight className="h-4 w-4" />
              </button>
              {sent && (
                <p className="text-center text-sm font-medium text-brand">
                  Thanks! Please also call or WhatsApp us to confirm your slot.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="text-2xl font-bold text-white">Oro</p>
          <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[2px] text-white/60">
            Dental Clinic
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Gentle, expert dental care in Bhagalpur — led by Dr. Anand Mohan.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-white">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {["Services", "About", "Gallery", "Reviews", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-white">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold text-white">Get in touch</p>
          <p className="mt-4 text-sm leading-relaxed">
            Tilkamanjhi Chowk, Opposite Kalyan Jewellers, Jail Road, Sabour Rd, Bhagalpur, Bihar
            812001
          </p>
          <a href="tel:+919616984243" className="mt-3 block text-sm hover:text-white">
            +91 96169 84243
          </a>
          <a href="#contact" className="btn-pill btn-brand mt-5">
            Book Appointment
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50 md:px-8">
        © {new Date().getFullYear()} Oro Dental Clinic, Bhagalpur. All rights reserved.
      </div>
    </footer>
  );
}
