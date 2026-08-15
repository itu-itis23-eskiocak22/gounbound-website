"use client";

import { useEffect, useRef, useCallback } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    []
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: "0px 0px -50px 0px",
    });

    // Observe the container and all .reveal children
    const revealElements = element.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    if (element.classList.contains("reveal")) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold, handleIntersection]);

  return ref;
}
