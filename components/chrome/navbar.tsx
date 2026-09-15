"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SECTIONS } from "@/lib/sections-meta";
import { withBasePath } from "@/lib/base-path";

export function Navbar() {
  const [active, setActive] = useState(SECTIONS[0].index);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    );
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const meta = SECTIONS.find((s) => s.id === visible.target.id);
          if (meta) setActive(meta.index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className="flex w-full max-w-5xl items-center justify-between gap-4 border border-[color:color-mix(in_oklab,var(--paper)_35%,transparent)] bg-[color:color-mix(in_oklab,var(--espresso)_72%,transparent)] px-5 py-3 text-paper backdrop-blur-md"
        aria-label="Presentation navigation"
      >
        <div className="flex items-center gap-2.5 font-mono-rh text-[10px] tracking-[0.24em] uppercase">
          <span className="inline-block h-4 w-6 shrink-0" aria-hidden>
            <Image
              src={withBasePath("/brand/emblem-on-dark.svg")}
              alt=""
              width={24}
              height={16}
            />
          </span>
          <span>Project Rhapsody</span>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-mono-rh text-[10px] tracking-[0.24em] uppercase text-[color:rgba(236,231,218,0.72)] hover:text-paper"
          aria-expanded={open}
        >
          {active} / 19
        </button>

        <div className="hidden font-mono-rh text-[10px] tracking-[0.24em] uppercase text-[color:rgba(236,231,218,0.55)] sm:block">
          Confidential · Sept 2026
        </div>
      </nav>

      {open && (
        <div className="absolute top-[64px] w-full max-w-5xl border border-[color:rgba(236,231,218,0.18)] bg-[color:color-mix(in_oklab,var(--espresso)_92%,transparent)] p-3">
          <ol className="grid grid-cols-4 gap-1 sm:grid-cols-7">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`block px-2 py-1.5 font-mono-rh text-[10px] tracking-[0.1em] uppercase ${
                    s.index === active
                      ? "text-signal"
                      : "text-[color:rgba(236,231,218,0.65)] hover:text-paper"
                  }`}
                >
                  {s.index} {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}
    </header>
  );
}
