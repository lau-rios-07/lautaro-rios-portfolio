"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Fraction of the element that must be visible before it counts as "in view". */
  threshold?: number;
  /** Shrinks/grows the viewport used for the intersection check. */
  rootMargin?: string;
  /** Once true, stop observing — reveal animations only need to fire once. */
  triggerOnce?: boolean;
}

/**
 * One shared observer implementation, reused by FadeIn and AnimatedNumber
 * (and anything added later) rather than each component rolling its own —
 * per the animation philosophy in the UX spec, Section 10.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      // Extremely old browsers: skip the observer, show content immediately.
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) observer.unobserve(node);
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
