"use client";
import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 280;

// Logo palette — crimson red (#D42020), cobalt navy (#1E3080), silver-white
const COLORS: [number, number, number][] = [
  [0.83, 0.13, 0.13], // crimson red
  [0.12, 0.19, 0.50], // cobalt navy
  [0.75, 0.80, 0.90], // silver-white
];

function Field() {
  const ref = useRef<THREE.Points>(null!);
  const mouse = useRef<[number, number]>([0, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = [
        (e.clientX / window.innerWidth  - 0.5) * 2,
        -(e.clientY / window.innerHeight - 0.5) * 2,
      ];
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4;

      // Weight: 55% red, 30% navy, 15% silver
      const roll = Math.random();
      const [r, g, b] =
        roll < 0.55 ? COLORS[0] :
        roll < 0.85 ? COLORS[1] :
                      COLORS[2];

      col[i * 3]     = r + (Math.random() - 0.5) * 0.1;
      col[i * 3 + 1] = g + (Math.random() - 0.5) * 0.1;
      col[i * 3 + 2] = b + (Math.random() - 0.5) * 0.1;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color",    new THREE.BufferAttribute(col, 3));
    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime;
    ref.current.rotation.y = t * 0.012 + mouse.current[0] * 0.12;
    ref.current.rotation.x = t * 0.006 + mouse.current[1] * 0.07;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.058}
        vertexColors
        transparent
        opacity={0.50}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleCanvas() {
  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 68 }}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Field />
      </Canvas>
    </div>
  );
}
