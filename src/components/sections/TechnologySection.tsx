"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function TechnologySection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const techStack = [
    { name: "Flutter", logo: "/tech/flutter-svgrepo-com.svg", description: t('flutterDesc') },
    { name: "Node.js", logo: "/tech/node-js-svgrepo-com.svg", description: t('nodeDesc') },
    { name: "PostgreSQL", logo: "/tech/postgresql-svgrepo-com.svg", description: t('postgresDesc') },
    { name: "Redis", logo: "/tech/redis-opened-svgrepo-com.svg", description: t('redisDesc') },
    { name: "AWS", logo: "/tech/aws-svgrepo-com.svg", description: t('awsDesc') },
    { name: "Firebase", logo: "/tech/Logomark_Full Color.svg", description: t('firebaseDesc') },
  ];

  return (
    <section className="py-24 px-4 bg-white dark:bg-black overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('technologyTitle')}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t('technologySubtitle')}
          </p>
        </motion.div>

        <motion.div 
          style={{ opacity, scale }}
          className="relative w-full h-[300px] md:h-[500px] mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl">
              <video 
                src="/system-architecture.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
                aria-label="WaadPay System Architecture Animation"
              ></video>
            </div>
            
            {/* Animated flow lines */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                  d="M30,30 Q50,0 70,30 T90,60"
                  stroke="url(#gradient1)"
                  strokeWidth="0.5"
                  fill="none"
                  animate={{ 
                    pathLength: [0, 1],
                    pathOffset: [0, 1] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.path
                  d="M20,40 Q40,20 60,40 T80,70"
                  stroke="url(#gradient2)"
                  strokeWidth="0.5"
                  fill="none"
                  animate={{ 
                    pathLength: [0, 1],
                    pathOffset: [0, 1] 
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.2
                  }}
                />
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">{t('secureArchitecture')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                </span>
                <div>
                  <p className="font-semibold">{t('simBinding')}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('simBindingDesc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                </span>
                <div>
                  <p className="font-semibold">{t('offlineArchitecture')}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('offlineArchitectureDesc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                </span>
                <div>
                  <p className="font-semibold">{t('apiIntegration')}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('apiIntegrationDesc')}</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">{t('builtForLibya')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                <div>
                  <p className="font-semibold">{t('lowBandwidth')}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('lowBandwidthDesc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                <div>
                  <p className="font-semibold">{t('distributedInfrastructure')}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('distributedInfrastructureDesc')}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                <div>
                  <p className="font-semibold">{t('bilingualSupport')}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{t('bilingualSupportDesc')}</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-bold mb-8">{t('blockchainTechnology')}</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-3 bg-white dark:bg-neutral-800 rounded-full p-3 shadow-md flex items-center justify-center">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="font-medium">{tech.name}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 