"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Card3D = ({
  children,
  className,
  imageUrl,
}: {
  children: React.ReactNode;
  className?: string;
  imageUrl: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const centerX = rect.left + width / 2;
    const centerY = rect.top + height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / height) * -20;
    const rotateY = (mouseX / width) * 20;
    
    setPosition({ x: rotateY, y: rotateX });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setOpacity(0);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative md:h-[30rem] w-full rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-neutral-50 dark:bg-neutral-900",
        className
      )}
      style={{
        perspective: "1000px",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <motion.div
        className="relative h-full w-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${position.y}deg) rotateY(${position.x}deg)`,
        }}
      >
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt="WaadPay App UI"
            fill
            className="object-cover object-center"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          {children}
        </div>
        
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at ${
              (position.x / 20) * 50 + 50
            }% ${(position.y / 20) * 50 + 50}%, 
            rgba(255,255,255,0.1) 0%, 
            rgba(255,255,255,0) 60%)`,
            opacity,
            mixBlendMode: "soft-light",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </motion.div>
  );
}; 