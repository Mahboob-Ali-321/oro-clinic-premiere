import { useEffect, useRef, useState } from "react";
import { useInView } from "./Reveal";

type CountUpProps = {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
};

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

export function CountUp({
  end,
  duration = 1600,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [value, setValue] = useState(0);
  const finished = useRef(false);

  useEffect(() => {
    if (!inView || finished.current) return;

    let rafId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutQuart(progress);
      setValue(eased * end);

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setValue(end);
        finished.current = true;
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, end, duration]);

  const formatted = value.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
