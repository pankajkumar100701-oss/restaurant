"use client";

import { useEffect, useState } from "react";
import { reviews } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((n) => (n + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const r = reviews[i];

  return (
    <div
      className="mx-auto max-w-4xl text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="font-serif text-7xl leading-none text-saffron/40" aria-hidden>
        “
      </p>
      <div aria-live="polite" className="min-h-[220px] sm:min-h-[180px]">
        <blockquote key={i} className="rise font-serif text-2xl leading-snug sm:text-4xl">
          {r.quote}
        </blockquote>
        <p key={`c${i}`} className="rise mt-8 text-sm text-cream/55" style={{ animationDelay: "120ms" }}>
          <span className="text-saffron">★★★★★</span>
          <span className="mx-3 text-cream/20">|</span>
          <span className="font-semibold text-cream">{r.name}</span> · {r.source}
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {reviews.map((rv, n) => (
          <button
            key={rv.name}
            aria-label={`Show review ${n + 1}`}
            onClick={() => setI(n)}
            className={`h-1.5 rounded-full transition-all ${n === i ? "w-10 bg-saffron" : "w-4 bg-cream/20 hover:bg-cream/40"}`}
          />
        ))}
      </div>
    </div>
  );
}
