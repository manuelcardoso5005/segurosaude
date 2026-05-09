'use client';

import {motion} from 'motion/react';
import {useState, useEffect, type ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export function BackgroundParallax({children}: Props) {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      <motion.div
        className="absolute inset-0"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{type: 'spring', stiffness: 50, damping: 20}}
      >
        <video
          src="https://cdn.pixabay.com/video/2020/09/13/49808-458438856_large.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-30"
        />
      </motion.div>
      {/* Overlay gradiente dinâmico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      {/* Elementos decorativos animados */}
      <motion.div
        className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute right-[15%] bottom-[25%] h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      {children}
    </main>
  );
}
