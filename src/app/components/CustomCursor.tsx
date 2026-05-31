"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let mx = -100, my = -100, rx = -100, ry = -100;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const addHover = () => ring.current?.classList.add("hovered");
    const rmHover  = () => ring.current?.classList.remove("hovered");

    const tick = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      dot.current  && (dot.current.style.transform  = `translate(${mx - 3.5}px,${my - 3.5}px)`);
      ring.current && (ring.current.style.transform = `translate(${rx - 15}px,${ry - 15}px)`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    // Expand ring on any interactive element
    const els = document.querySelectorAll("a,button,[role='button'],input,textarea,label");
    els.forEach(el => { el.addEventListener("mouseenter", addHover); el.addEventListener("mouseleave", rmHover); });

    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      els.forEach(el => { el.removeEventListener("mouseenter", addHover); el.removeEventListener("mouseleave", rmHover); });
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
