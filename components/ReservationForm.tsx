"use client";

import { useState } from "react";

type Booking = { name: string; guests: string; date: string; time: string };

const times = ["12:30", "13:30", "14:30", "19:00", "20:00", "21:00", "22:00"];

const field =
  "w-full rounded-xl border border-cream/10 bg-ink/50 px-4 py-3 text-cream placeholder:text-cream/30 outline-none transition focus:border-saffron focus:bg-ink/80";

export default function ReservationForm() {
  const [booking, setBooking] = useState<Booking | null>(null);
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const date = String(data.get("date"));

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const picked = new Date(`${date}T00:00:00`);
    if (picked < today) return setError("Please pick today or a later date.");
    if (picked.getDay() === 1) return setError("We're closed on Mondays — please pick another day.");

    setError("");
    setBooking({
      name: String(data.get("name")),
      guests: String(data.get("guests")),
      date: picked.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" }),
      time: String(data.get("time")),
    });
  }

  if (booking) {
    return (
      <div className="rise rounded-[2rem] border border-saffron/30 bg-char/80 p-10 text-center shadow-2xl shadow-black/50 backdrop-blur-xl">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-saffron/15 text-2xl text-saffron">✓</span>
        <p className="mt-5 text-xs uppercase tracking-[0.3em] text-saffron">Table held</p>
        <h3 className="mt-3 font-serif text-3xl">See you soon, {booking.name.split(" ")[0]}.</h3>
        <p className="mt-4 text-cream/70">
          A table for {booking.guests} on {booking.date} at {booking.time}. We&apos;ll send a
          confirmation on WhatsApp shortly.
        </p>
        <p className="mt-2 text-xs text-cream/40">(Demo site — no booking was actually made.)</p>
        <button
          onClick={() => setBooking(null)}
          className="mt-6 rounded-full border border-cream/30 px-5 py-2 text-sm hover:border-saffron hover:text-saffron"
        >
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-4 rounded-[2rem] border border-cream/10 bg-char/80 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl sm:grid-cols-2 sm:p-8"
    >
      <div className="sm:col-span-2">
        <h3 className="font-serif text-2xl">Reserve a table</h3>
        <p className="mt-1 text-sm text-cream/50">Instant confirmation on WhatsApp.</p>
      </div>
      <label className="sm:col-span-2">
        <span className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Name</span>
        <input name="name" required placeholder="Your full name" className={field} />
      </label>
      <label>
        <span className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Phone</span>
        <input name="phone" type="tel" required pattern="[0-9+ ]{10,15}" placeholder="98450 00000" className={field} />
      </label>
      <label>
        <span className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Guests</span>
        <select name="guests" defaultValue="2" className={field}>
          {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
            <option key={n} value={n}>
              {n} {n === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Date</span>
        <input name="date" type="date" required className={`${field} [color-scheme:dark]`} />
      </label>
      <label>
        <span className="mb-1.5 block text-xs uppercase tracking-wider text-cream/50">Time</span>
        <select name="time" defaultValue="20:00" className={field}>
          {times.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      {error && <p className="text-sm text-ember sm:col-span-2" role="alert">{error}</p>}
      <button
        type="submit"
        className="mt-2 rounded-full bg-gradient-to-r from-saffron to-ember px-6 py-4 font-semibold text-ink shadow-lg shadow-ember/20 transition hover:brightness-110 sm:col-span-2"
      >
        Request table
      </button>
      <p className="text-center text-xs text-cream/40 sm:col-span-2">
        Parties of 9+ or private dining? Call us directly.
      </p>
    </form>
  );
}
