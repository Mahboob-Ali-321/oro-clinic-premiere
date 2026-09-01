import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.2c-1.6 0-2.4.8-4 .8-2.4 0-4 1.7-4 4.4 0 2.5.8 3.9 1.4 6.1.4 1.6.5 3.3.9 4.6.3 1.1.9 1.7 1.7 1.7 1.1 0 1.5-1 1.8-2.5.3-1.6.6-3.1 2.2-3.1s1.9 1.5 2.2 3.1c.3 1.5.7 2.5 1.8 2.5.8 0 1.4-.6 1.7-1.7.4-1.3.5-3 .9-4.6.6-2.2 1.4-3.6 1.4-6.1 0-2.7-1.6-4.4-4-4.4-1.6 0-2.4-.8-4-.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-light text-brand">
            <ToothIcon className="h-6 w-6" />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block text-2xl font-bold tracking-tight text-ink">Oro</span>
            <span className="mt-1 block text-[0.65rem] font-medium uppercase tracking-[2px] text-slate">
              Dental Clinic
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.95rem] font-medium text-slate transition-colors hover:text-brand"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a href="#contact" className="btn-pill btn-brand hidden sm:inline-flex">
            Book Appointment
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="btn-pill btn-glass h-12 w-12 !p-0 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 rounded-2xl border border-black/10 bg-white/85 p-4 shadow-xl backdrop-blur-lg lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3.5 text-base font-medium text-ink hover:bg-brand-light hover:text-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-pill btn-brand mt-2 w-full sm:hidden"
          >
            Book Appointment
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
