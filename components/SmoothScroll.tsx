"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import type { ReactNode } from "react";

import "lenis/dist/lenis.css";

const lenisOptions: LenisOptions = {
  lerp: 0.055,
  smoothWheel: true,
  wheelMultiplier: 0.88,
  touchMultiplier: 1.05,
  syncTouch: true,
  syncTouchLerp: 0.075,
  autoRaf: true,
  anchors: true,
};

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
