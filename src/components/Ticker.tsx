"use client";

import { useRef, useEffect, useState } from "react";

interface TickerProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function Ticker({ text, speed = 30, className = "" }: TickerProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current.offsetWidth;
      setDuration(width / speed);
    }
  }, [text, speed]);

  const separator = " · ";
  const repeatedText = `${text}${separator}`;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="inline-flex"
        style={{
          animation: `ticker-scroll ${duration}s linear infinite`,
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            ref={i === 0 ? spanRef : undefined}
            className="font-mono text-[10px] tracking-[0.15em] uppercase"
          >
            {repeatedText}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
