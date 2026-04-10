"use client";

import { useEffect, useRef, useState } from "react";

const LERP = 0.1;

function getInteractiveEl(el: EventTarget | null): HTMLElement | null {
  if (!(el instanceof Element)) return null;
  return el.closest(
    'a, button, [role="button"], input[type="submit"], input[type="button"], .hero-cta, label[for]',
  ) as HTMLElement | null;
}

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);

  const target = useRef({ x: 0, y: 0, has: false });
  const current = useRef({ x: 0, y: 0 });
  const hovering = useRef(false);
  const initialized = useRef(false);
  const enabledRef = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!finePointer || reducedMotion) return;

    const dot = dotRef.current;
    if (!dot) return;

    const tick = () => {
      if (target.current.has) {
        current.current.x +=
          (target.current.x - current.current.x) * LERP;
        current.current.y +=
          (target.current.y - current.current.y) * LERP;

        const scale = hovering.current ? 1.7 : 1;
        dot.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const ensureLoop = () => {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      target.current.has = true;

      if (!initialized.current) {
        current.current.x = e.clientX;
        current.current.y = e.clientY;
        initialized.current = true;
      }

      if (!enabledRef.current) {
        enabledRef.current = true;
        setEnabled(true);
      }

      ensureLoop();
    };

    const onPointerOver = (e: PointerEvent) => {
      const interactive = getInteractiveEl(e.target);
      if (!interactive) return;
      hovering.current = true;
    };

    const onPointerOut = (e: PointerEvent) => {
      const from = getInteractiveEl(e.target);
      if (!from) return;

      const to = getInteractiveEl(e.relatedTarget);
      hovering.current = Boolean(to);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className={[
        "pointer-events-none fixed left-0 top-0 z-[9999] rounded-full",
        "h-2 w-2 sm:h-2.5 sm:w-2.5",
        "bg-gradient-to-br from-purple-300 via-violet-400 to-purple-600",
        "shadow-[0_0_12px_rgba(168,85,247,0.6),0_0_28px_rgba(139,92,246,0.25)]",
        "will-change-transform",
        "transition-opacity duration-300 ease-out",
        enabled ? "opacity-100" : "opacity-0",
      ].join(" ")}
    />
  );
}
