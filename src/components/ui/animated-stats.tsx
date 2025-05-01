"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  decimal?: boolean;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}

export const AnimatedCounter = ({
  end,
  decimal = false,
  suffix = "",
  prefix = "",
  className,
  duration = 1.5,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = end / (duration * 60); // 60fps
      
      const counter = setInterval(() => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(counter);
          return;
        }
        setCount(start);
      }, 1000 / 60);
      
      return () => clearInterval(counter);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={cn("font-semibold", className)}>
      {prefix}
      {decimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

interface AnimatedStatsProps {
  className?: string;
  stats: {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
    decimal?: boolean;
  }[];
}

export const AnimatedStats = ({ stats, className }: AnimatedStatsProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-8 p-4 max-w-7xl mx-auto",
        className
      )}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex flex-col items-center justify-center bg-white dark:bg-black/50 p-8 rounded-xl shadow-lg dark:shadow-neutral-800/30"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-2">
            <AnimatedCounter
              end={stat.value}
              decimal={stat.decimal}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </h3>
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 text-center">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}; 