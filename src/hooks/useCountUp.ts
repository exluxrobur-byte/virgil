import { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export function useCountUp(target: number, duration: number = 1400) {
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const isInView = useInView({ current: ref }, { once: true, margin: "-15%" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percent = Math.min(progress / duration, 1);
      
      const current = Math.floor(target * easeOutExpo(percent));
      setCount(current);

      if (percent < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [isInView, target, duration]);

  return { count, setRef };
}
