"use client";

import { useEffect } from "react";

/**
 * The hero is a single screen tall, so if the browser restores a scroll
 * position that is still inside it (e.g. after a dev reload), start at the
 * top so the portrait is never hidden behind the fixed header.
 */
export default function ScrollToTop() {
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (hero && window.scrollY < hero.offsetHeight) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return null;
}
