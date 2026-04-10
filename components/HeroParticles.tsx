"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  r: number;
  phase: number;
  drift: number;
};

type HeroParticlesProps = {
  /** Lower particle count for calmer sections (e.g. footer CTA). */
  density?: "default" | "sparse";
};

export default function HeroParticles({
  density = "default",
}: HeroParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;
    let visible = true;
    let lastTime = performance.now();

    const rand = (min: number, max: number) =>
      min + Math.random() * (max - min);

    const createParticle = (): Particle => {
      // Spawn randomly across the current viewport.
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = rand(0.5, 2);
      const opacity = rand(0.2, 0.6);

      // Very small velocities to keep motion calm.
      const vx = rand(-0.02, 0.02); // px/ms
      const vy = rand(-0.02, 0.02); // px/ms

      return {
        x,
        y,
        vx,
        vy,
        opacity,
        r,
        phase: rand(0, Math.PI * 2),
        drift: rand(0.6, 1.6),
      };
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const base = Math.floor((w * h) / 14500);
      const mult = density === "sparse" ? 0.42 : 1;
      const count = isMobile
        ? Math.max(16, Math.min(40, Math.floor(base * 0.62 * mult)))
        : Math.max(36, Math.min(86, Math.floor(base * 1.38 * mult)));

      particles = Array.from({ length: count }, createParticle);
    };

    const updateParticle = (p: Particle, dt: number, time: number) => {
      // Organic slow drift (subtle noise) + tiny constant velocity.
      const n1 = Math.sin(time * 0.00035 + p.phase) * 0.02 * p.drift;
      const n2 = Math.cos(time * 0.00028 + p.phase) * 0.02 * p.drift;

      p.x += (p.vx + n1) * dt;
      p.y += (p.vy + n2) * dt;

      const margin = 20;
      if (p.x < -margin || p.x > w + margin || p.y < -margin || p.y > h + margin) {
        // Respawn randomly across the viewport.
        const np = createParticle();
        p.x = np.x;
        p.y = np.y;
        p.vx = np.vx;
        p.vy = np.vy;
        p.opacity = np.opacity;
        p.r = np.r;
        p.phase = np.phase;
        p.drift = np.drift;
      }
    };

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
      if (visible) {
        lastTime = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    const frame = (time: number) => {
      if (!visible) return;

      const dt = Math.min(50, time - lastTime);
      lastTime = time;

      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        updateParticle(p, dt, time);

        // Calm, minimal look: small white dot with slight alpha wobble.
        const alpha = Math.max(
          0,
          Math.min(1, p.opacity * (0.75 + 0.25 * Math.sin(time * 0.0007 + p.phase)))
        );

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    raf = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      cancelAnimationFrame(raf);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full pointer-events-none opacity-95"
    />
  );
}
