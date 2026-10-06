"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>("[data-header]");
    const onScroll = () => header?.toggleAttribute("data-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let observer: IntersectionObserver | undefined;
    if (!reduce) {
      root.classList.add("reveal-ready");
      observer = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              observer?.unobserve(e.target);
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
      );
      document
        .querySelectorAll("main section p, main section h2, main section a.rounded-full, footer > div > p")
        .forEach((el) => {
          if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "up");
        });
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("reveal-armed");
        observer?.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
