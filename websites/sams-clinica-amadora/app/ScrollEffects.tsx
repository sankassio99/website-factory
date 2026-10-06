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

      document.querySelectorAll("[data-reveal-group]").forEach((group) => {
        group.querySelectorAll("[data-reveal]").forEach((el, index) => {
          el.setAttribute("style", `--i:${index}`);
        });
      });

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
      );

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
