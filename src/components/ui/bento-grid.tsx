"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  className?: string;
  children: ReactNode;
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title: string;
  description: string;
  header?: ReactNode;
  icon?: ReactNode;
  color?: string;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  color = "blue",
}: BentoGridItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-neutral-200 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header && <div className="w-full">{header}</div>}
      <div className="flex items-center gap-2">
        {icon && (
          <div
            className={`p-2 w-10 h-10 rounded-full flex items-center justify-center ${
              color === "red"
                ? "bg-red-500/20 text-red-500"
                : color === "green"
                ? "bg-green-500/20 text-green-500"
                : "bg-blue-500/20 text-blue-500"
            }`}
          >
            {icon}
          </div>
        )}
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <p className="text-sm dark:text-neutral-300">{description}</p>
    </motion.div>
  );
}; 