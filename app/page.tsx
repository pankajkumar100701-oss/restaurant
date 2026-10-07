import Image from "next/image";
import Nav from "@/components/Nav";
import MenuTabs from "@/components/MenuTabs";
import Newsletter from "@/components/Newsletter";
import ReservationForm from "@/components/ReservationForm";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { accolades, experiences, gallery, img, restaurant, signatures } from "@/lib/data";

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-saffron">
      <span className="font-serif text-sm italic tracking-normal text-cream/40">{n}</span>
      <span className="h-px w-8 bg-saffron/50" />
      {children}
    </p>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* ───────── Hero ───────── */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40">
          <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-saffron/15 blur-[140px]" />
          <div className="pointer-events-none absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-ember/10 blur-[120px]" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="rise inline-flex items-center gap-2 rounded-full border border-cream/10 bg-cream/5 px-4 py-1.5 text-xs text-cream/70 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Indiranagar, Bengaluru · Dinner from 7 pm
              </p>
              <h1
                className="rise mt-7 font-serif text-[clamp(3rem,7.5vw,6.5rem)] font-light leading-[0.95] tracking-[-0.03em]"
                style={{ animationDelay: "100ms" }}
              >
                Fire, spice
                <br />
                &amp; <span className="text-gradient italic">slow</span> cooking.
              </h1>
              <p className="rise mt-8 max-w-md text-lg leading-relaxed text-cream/65" style={{ animationDelay: "200ms" }}>
                A modern Indian kitchen built around a charcoal hearth — regional recipes, seasonal
                produce, and a dal that simmers through the night.
              </p>
              <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "300ms" }}>
                <a
                  href="#reserve"
                  className="group inline-flex items-center gap-3 rounded-full bg-saffron py-2 pl-7 pr-2 font-semibold text-ink shadow-xl shadow-saffron/20 transition hover:bg-cream"
                >
                  Reserve a table
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-saffron">
                    <Arrow />
                  </span>
                </a>
                <a href="#menu" className="group inline-flex items-center gap-2 px-3 py-3 font-semibold text-cream/80 hover:text-cream">
                  Explore the menu <Arrow />
                </a>
              </div>

              <div className="rise mt-14 flex items-center gap-5" style={{ animationDelay: "400ms" }}>
                <div className="flex -space-x-3">
                  {["1565557623262-b51c2513a641", "1599487488170-d11ec9c172f0", "1610192244261-3f33de3f55e4"].map((id) => (
                    <div key={id} className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-ink">
                      <Image src={img(id, 120)} alt="" fill sizes="44px" className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p>
                    <span className="text-saffron">★★★★★</span> <span className="font-semibold">4.8</span>
                  </p>
                  <p className="text-cream/50">from 2,300+ diners</p>
                </div>
              </div>
            </div>

            <div className="rise relative mx-auto w-full max-w-md lg:max-w-none" style={{ animationDelay: "200ms" }}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[50%_40%] rounded-b-[2.5rem] border border-cream/10 shadow-2xl shadow-black/60">
                <Image
                  src={img("1626777552726-4a6b54c97e46", 1400)}
                  alt="A thali with rice, breads and curries"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              </div>

              <div className="float absolute -left-4 bottom-16 flex items-center gap-3 rounded-2xl border border-cream/10 bg-ink/80 p-3 pr-5 shadow-2xl backdrop-blur-xl sm:-left-10">
                <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                  <Image src={img("1563379091339-03b21ab4a4f8", 200)} alt="" fill sizes="56px" className="object-cover" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-saffron">Tonight&apos;s special</p>
                  <p className="font-serif text-lg leading-tight">Dum Gosht Biryani</p>
                  <p className="text-xs text-cream/50">₹645 · serves 2</p>
                </div>
              </div>

              <div
                className="float absolute -right-2 top-16 rounded-2xl border border-cream/10 bg-ink/80 px-5 py-4 text-center shadow-2xl backdrop-blur-xl sm:-right-6"
                style={{ animationDelay: "-3s" }}
              >
                <p className="font-serif text-3xl text-saffron">12<span className="text-lg">hrs</span></p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-cream/60">Dal on the hearth</p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── Accolades marquee ───────── */}
        <div className="overflow-hidden border-y border-cream/10 py-6" aria-label="Awards">
          <div className="marquee flex w-max gap-14 whitespace-nowrap">
            {[...accolades, ...accolades].map((a, i) => (
              <span key={i} className="flex items-center gap-14 font-serif text-xl italic text-cream/50" aria-hidden={i >= accolades.length}>
                {a} <span className="not-italic text-saffron">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ───────── Story ───────── */}
        <section id="story" className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-16 px-5 py-32 md:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <Image src={img("1577219491135-ce391730fb2c", 1000)} alt="Our head chef plating a dish" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-6 hidden w-52 overflow-hidden rounded-3xl border-[6px] border-ink shadow-2xl sm:block">
              <div className="relative aspect-square">
                <Image src={img("1551218808-94e220e084d2", 500)} alt="Fresh vegetables being chopped" fill sizes="210px" className="object-cover" />
              </div>
            </div>
            <div className="absolute -left-4 top-10 rounded-full bg-saffron px-5 py-5 text-center font-serif leading-tight text-ink shadow-xl">
              <span className="block text-2xl">Est.</span>
              <span className="text-sm">2019</span>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <SectionLabel n="01">Our story</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-[3.4rem]">
              Recipes from grandmothers, <span className="text-gradient italic">fire</span> from the street.
            </h2>
            <p className="mt-7 leading-relaxed text-cream/65">
              Chef Arjun Mehra grew up between his nani&apos;s kitchen in Lucknow and the kebab
              stalls of Old Delhi. Saffron Hearth is where those two worlds meet — slow, patient
              home cooking finished over live charcoal.
            </p>
            <p className="mt-4 leading-relaxed text-cream/65">
              We grind our masalas every morning, source vegetables from farms around Hoskote, and
              change a third of the menu with every season.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-cream/10 pt-8">
              {[
                ["40+", "Spices ground daily"],
                ["14", "Regional recipes"],
                ["90%", "Locally sourced"],
              ].map(([v, l]) => (
                <div key={l} className="flex flex-col-reverse">
                  <dt className="mt-1 text-xs leading-snug text-cream/50">{l}</dt>
                  <dd className="font-serif text-4xl font-light text-saffron">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 font-serif text-2xl italic text-cream/80">— Arjun Mehra, Head Chef</p>
          </Reveal>
        </section>

        {/* ───────── Signatures ───────── */}
        <section className="relative bg-char py-32">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <SectionLabel n="02">From the hearth</SectionLabel>
                <h2 className="mt-6 font-serif text-4xl font-light tracking-tight sm:text-6xl">
                  Signature <span className="italic">dishes</span>
                </h2>
              </div>
              <a href="#menu" className="group inline-flex items-center gap-2 rounded-full border border-cream/15 px-5 py-2.5 text-sm transition hover:border-saffron hover:text-saffron">
                Full menu <Arrow />
              </a>
            </Reveal>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {signatures.map((s, i) => (
                <Reveal key={s.name} delay={i * 120}>
                  <article className="group relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-cream/10">
                    <Image src={s.image} alt={s.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-[1.2s] ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <span className="absolute left-5 top-5 font-serif text-sm italic text-cream/70">0{i + 1}</span>
                    <span className="absolute right-5 top-5 rounded-full border border-cream/20 bg-ink/60 px-3 py-1 text-sm font-semibold text-saffron backdrop-blur">
                      ₹{s.price}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-serif text-3xl leading-tight">{s.name}</h3>
                      <p className="mt-2 text-sm text-cream/70 transition-all duration-500 md:max-h-0 md:overflow-hidden md:opacity-0 md:group-hover:max-h-24 md:group-hover:opacity-100">
                        {s.note}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Menu ───────── */}
        <section id="menu" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-32">
          <Reveal className="max-w-2xl">
            <SectionLabel n="03">The menu</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl font-light tracking-tight sm:text-6xl">
              Made to <span className="text-gradient italic">share</span>
            </h2>
            <p className="mt-5 text-cream/60">Order a few plates for the table and let the evening unfold.</p>
          </Reveal>
          <Reveal className="mt-14" delay={100}>
            <MenuTabs />
          </Reveal>
        </section>

        {/* ───────── Experiences ───────── */}
        <section id="experiences" className="scroll-mt-24 border-t border-cream/10 py-32">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="grid gap-6 md:grid-cols-2 md:items-end">
              <div>
                <SectionLabel n="04">Experiences</SectionLabel>
                <h2 className="mt-6 font-serif text-4xl font-light tracking-tight sm:text-6xl">
                  More than <span className="italic">dinner</span>
                </h2>
              </div>
              <p className="max-w-sm text-cream/60 md:justify-self-end md:text-right">
                From a nine-course tasting at the counter to a room of your own — evenings shaped around you.
              </p>
            </Reveal>
            <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
              {experiences.map((e, i) => (
                <Reveal key={e.title} delay={i * 120}>
                  <a href="#reserve" className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                      <Image src={e.image} alt={e.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-[1.2s] ease-out group-hover:scale-105" />
                      <div className="absolute inset-0 bg-ink/10 transition group-hover:bg-transparent" />
                      <span className="absolute bottom-5 right-5 grid h-12 w-12 -rotate-45 place-items-center rounded-full bg-cream text-ink opacity-0 transition duration-500 group-hover:rotate-0 group-hover:opacity-100">
                        <Arrow />
                      </span>
                    </div>
                    <p className="mt-6 text-xs uppercase tracking-[0.2em] text-saffron">{e.meta}</p>
                    <h3 className="mt-2 font-serif text-3xl">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/60">{e.desc}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Gallery ───────── */}
        <section className="pb-32">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid auto-rows-[160px] grid-cols-2 gap-4 md:auto-rows-[230px] md:grid-cols-4">
              {gallery.map((g, i) => (
                <Reveal
                  key={g.src}
                  delay={i * 80}
                  className={`relative overflow-hidden rounded-[1.5rem] ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                >
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-[1.2s] ease-out hover:scale-105" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Testimonials ───────── */}
        <section className="relative overflow-hidden border-y border-cream/10 bg-char py-32">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron/10 blur-[120px]" />
          <div className="relative px-5">
            <Reveal className="mb-10 flex justify-center">
              <SectionLabel n="05">Kind words</SectionLabel>
            </Reveal>
            <Testimonials />
          </div>
        </section>

        {/* ───────── Reserve + Visit ───────── */}
        <section id="reserve" className="relative scroll-mt-24 overflow-hidden py-32">
          <Image src={img("1555396273-367ea4eb4db5", 2000)} alt="" fill sizes="100vw" className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />
          <div className="relative mx-auto grid max-w-6xl items-start gap-16 px-5 md:grid-cols-2">
            <Reveal>
              <div id="visit" className="scroll-mt-32">
                <SectionLabel n="06">Visit us</SectionLabel>
                <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">
                  Save us a seat <span className="text-gradient italic">by the fire.</span>
                </h2>
                <p className="mt-6 max-w-md text-cream/65">
                  We hold most tables for reservations and keep a few at the bar for walk-ins.
                </p>

                <div className="mt-12 space-y-8">
                  <div className="flex gap-5">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-saffron" />
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.2em] text-cream/45">Address</h3>
                      <p className="mt-2 max-w-xs text-cream/90">{restaurant.address}</p>
                      <a
                        href="https://maps.google.com/?q=Indiranagar+Bengaluru"
                        target="_blank"
                        rel="noreferrer"
                        className="group mt-2 inline-flex items-center gap-2 text-sm text-saffron"
                      >
                        Get directions <Arrow />
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-saffron" />
                    <div className="w-full">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-cream/45">Hours</h3>
                      <dl className="mt-2 max-w-sm space-y-2">
                        {restaurant.hours.map((h) => (
                          <div key={h.days} className="flex justify-between gap-4 text-sm">
                            <dt className="text-cream/90">{h.days}</dt>
                            <dd className={h.time === "Closed" ? "text-ember" : "text-cream/60"}>{h.time}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-saffron" />
                    <div>
                      <h3 className="text-xs uppercase tracking-[0.2em] text-cream/45">Contact</h3>
                      <p className="mt-2">
                        <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="hover:text-saffron">{restaurant.phone}</a>
                      </p>
                      <p>
                        <a href={`mailto:${restaurant.email}`} className="text-cream/70 hover:text-saffron">{restaurant.email}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <ReservationForm />
            </Reveal>
          </div>
        </section>
      </main>

      {/* ───────── Footer ───────── */}
      <footer className="relative overflow-hidden border-t border-cream/10 pt-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h3 className="font-serif text-3xl font-light">Join the supper club</h3>
            <p className="mt-3 max-w-sm text-sm text-cream/55">
              Monthly notes on new dishes, chef&apos;s table dates and seasonal menus. No spam, ever.
            </p>
            <div className="mt-6">
              <Newsletter />
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/45">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#story", "Our story"],
                ["#menu", "Menu"],
                ["#experiences", "Experiences"],
                ["#reserve", "Reservations"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="text-cream/75 hover:text-saffron">{l}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-cream/45">Follow</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Instagram", "Zomato", "Swiggy"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-cream/75 hover:text-saffron">{s}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-20 select-none whitespace-nowrap text-center font-serif text-[16vw] font-light italic leading-[0.85] tracking-tighter text-cream/[0.05]"
        >
          Saffron Hearth
        </p>

        <div className="border-t border-cream/10">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5 py-6 text-xs text-cream/40">
            <p>© Saffron Hearth. Concept demo — a fictional restaurant.</p>
            <p>Photography via Unsplash</p>
          </div>
        </div>
      </footer>
    </>
  );
}
