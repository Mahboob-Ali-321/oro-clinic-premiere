import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12, ...options },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView } as const;
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  variant?: "up" | "scale";
  [key: string]: unknown;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as,
  variant = "up",
  ...rest
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={`${variant === "scale" ? "reveal-scale" : "reveal"} ${inView ? "is-revealed" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
