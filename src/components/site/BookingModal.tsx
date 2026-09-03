import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "oro_booking_modal_shown";

export function BookingModal() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const alreadyShown =
      typeof window !== "undefined" ? sessionStorage.getItem(STORAGE_KEY) : null;
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => setVisible(true));
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    setVisible(false);
    setTimeout(() => {
      setOpen(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem(STORAGE_KEY, "true");
      }
    }, 300);
  };

  const scrollToForm = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    close();
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 ${
        open ? "block" : "hidden"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-ink/70 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />
      <div
        className={`relative w-full max-w-[22rem] scale-95 rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300 sm:max-w-md sm:p-8 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full text-slate transition-colors hover:bg-surface hover:text-ink sm:right-4 sm:top-4"
          aria-label="Close booking popup"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="pr-8 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          Book Your Appointment
        </h2>
        <p className="mt-3 text-[1rem] leading-relaxed text-slate">
          Get expert dental care from Dr. Anand Mohan — book your slot in seconds.
        </p>

        <button
          type="button"
          onClick={scrollToForm}
          className="btn-pill btn-brand mt-6 w-full"
        >
          Book Appointment Now
        </button>
      </div>
    </div>
  );
}
