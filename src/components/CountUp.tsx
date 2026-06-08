"use client";
import { useCountUp } from "@/hooks/useCountUp";

export default function CountUp({ to, duration = 1400 }: { to: number, duration?: number }) {
  const { count, setRef } = useCountUp(to, duration);

  return <span ref={setRef}>{count}</span>;
}
