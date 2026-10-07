"use client";

import { useState } from "react";

export default function Newsletter() {
  const [done, setDone] = useState(false);

  if (done) {
    return <p className="text-sm text-saffron">You&apos;re on the list — see you at the next supper club.</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex max-w-md items-center gap-2 rounded-full border border-cream/15 bg-char p-1.5 focus-within:border-saffron"
    >
      <input
        type="email"
        required
        aria-label="Email address"
        placeholder="you@email.com"
        className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-cream/30"
      />
      <button className="rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-cream">
        Subscribe
      </button>
    </form>
  );
}
