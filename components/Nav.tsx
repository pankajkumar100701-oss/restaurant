"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#experiences", label: "Experiences" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500 ${
          scrolled || open
            ? "border-cream/10 bg-ink/70 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-saffron to-ember font-serif text-sm font-semibold italic text-ink">
            S
          </span>
          <span className="font-serif text-lg tracking-tight">
            Saffron <span className="italic text-saffron">Hearth</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-4 py-2 transition ${
                  active === l.href ? "bg-cream/10 text-cream" : "text-cream/65 hover:text-cream"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reserve"
          className="hidden rounded-full bg-cream px-5 py-2 text-sm font-semibold text-ink transition hover:bg-saffron md:inline-block"
        >
          Book a table
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-cream transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-cream transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-cream/10 bg-ink/90 p-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {[...links, { href: "#reserve", label: "Book a table" }].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-serif text-2xl text-cream/90 hover:bg-cream/5 hover:text-saffron"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
