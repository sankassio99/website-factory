"use client";

import { useEffect, useRef } from "react";

export default function MotionEffects() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (reduced || !("IntersectionObserver" in window)) {
      revealItems.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    revealItems.forEach((el) => observer.observe(el));

    const layers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      layers.forEach((el) => {
        const host = el.parentElement;
        if (!host) return;
        const rect = host.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewport + 200) return;
        const speed = parseFloat(el.dataset.parallax || "0.15");
        const offset = (rect.top + rect.height / 2 - viewport / 2) * speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      if (bar.current) {
        const max = document.documentElement.scrollHeight - viewport;
        bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={bar} className="scroll-progress" aria-hidden="true" />;
}
