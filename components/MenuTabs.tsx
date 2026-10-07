"use client";

import Image from "next/image";
import { useState } from "react";
import { menu, menuImages } from "@/lib/data";

const categories = Object.keys(menu);

export default function MenuTabs() {
  const [active, setActive] = useState(categories[0]);
  const [vegOnly, setVegOnly] = useState(false);
  const dishes = menu[active].filter((d) => !vegOnly || d.veg);
  const feature = menuImages[active];

  return (
    <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
      <div className="relative hidden lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-cream/10">
            {categories.map((c) => (
              <Image
                key={c}
                src={menuImages[c].src}
                alt={menuImages[c].caption}
                fill
                sizes="40vw"
                className={`object-cover transition-all duration-700 ${
                  c === active ? "scale-100 opacity-100" : "scale-110 opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-20">
              <p className="text-xs uppercase tracking-[0.25em] text-saffron">{active}</p>
              <p className="mt-1 font-serif text-2xl italic">{feature.caption}</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div role="tablist" className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-cream/10 bg-char/80 p-1 [scrollbar-width:none]">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={c === active}
                onClick={() => setActive(c)}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                  c === active ? "bg-saffron font-semibold text-ink shadow-lg shadow-saffron/20" : "text-cream/65 hover:text-cream"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <label className="flex cursor-pointer items-center gap-3 text-sm text-cream/70">
            <input
              type="checkbox"
              checked={vegOnly}
              onChange={(e) => setVegOnly(e.target.checked)}
              className="peer sr-only"
            />
            <span className="relative h-6 w-11 rounded-full bg-cream/15 transition peer-checked:bg-green-700 peer-focus-visible:ring-2 peer-focus-visible:ring-saffron after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-cream after:transition peer-checked:after:translate-x-5" />
            Veg only
          </label>
        </div>

        <ul role="tabpanel" key={`${active}-${vegOnly}`} className="mt-8 divide-y divide-cream/10">
          {dishes.map((d, i) => (
            <li
              key={d.name}
              className="rise group -mx-4 rounded-2xl px-4 py-5 transition hover:bg-cream/[0.03]"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  aria-label={d.veg ? "Vegetarian" : "Non-vegetarian"}
                  className={`grid h-4 w-4 shrink-0 translate-y-0.5 place-items-center rounded-[3px] border ${
                    d.veg ? "border-green-600" : "border-red-700"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${d.veg ? "bg-green-600" : "bg-red-700"}`} />
                </span>
                <h3 className="font-serif text-xl transition group-hover:text-saffron">{d.name}</h3>
                {d.tag && (
                  <span className="rounded-full border border-saffron/30 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-saffron">
                    {d.tag}
                  </span>
                )}
                <span className="mx-2 hidden flex-1 translate-y-[-4px] border-b border-dotted border-cream/20 sm:block" />
                <span className="ml-auto font-serif text-lg text-cream sm:ml-0">₹{d.price}</span>
              </div>
              <p className="mt-1.5 pl-7 text-sm text-cream/55">{d.desc}</p>
            </li>
          ))}
          {dishes.length === 0 && (
            <li className="py-6 text-cream/60">No vegetarian dishes in this section — try another tab.</li>
          )}
        </ul>
        <p className="mt-8 text-xs text-cream/40">
          All prices in ₹ and inclusive of taxes. Please tell us about allergies — most dishes can be adapted.
        </p>
      </div>
    </div>
  );
}
