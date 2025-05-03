"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card3D } from "../ui/3d-card";
import { staticPlaceholder } from "@/lib/utils/placeholders";
import { HeroParallax } from "../ui/hero-parallax";
import { demoProducts } from "@/lib/utils/placeholders";
import { useLanguage } from "@/lib/LanguageContext";

export default function HeroSection() {
  const { t, language } = useLanguage();
  
  // Translate demo products titles - normalize keys properly
  const translatedProducts = demoProducts.map(product => {
    // Remove spaces and special characters, convert to lowercase
    const key = product.title.toLowerCase()
      .replace(/[^\w\s]/gi, '')  // Remove special chars
      .replace(/\s+/g, '');       // Remove spaces
    
    return {
      ...product,
      title: t(key) || product.title
    };
  });

  return (
    <div className={`relative overflow-hidden ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Initial hero part */}
      <section className="relative min-h-screen w-full bg-gradient-to-b from-white to-neutral-100 dark:from-black dark:to-neutral-900 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.03] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                {t('welcomeTitle')}
              </motion.h1>
              
              <motion.p 
                className="text-xl mb-8 text-neutral-700 dark:text-neutral-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {t('heroParagraph')}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <a 
                  href="#investment" 
                  className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
                >
                  {t('pitchDeck')}
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3 border border-black dark:border-white rounded-full font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  {t('contactForInvestment')}
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <Card3D
                imageUrl={staticPlaceholder('800x600', '3b82f6')}
                className="w-full aspect-[4/3] md:aspect-[16/9]"
              >
                <div className="text-white text-center p-4">
                  <h3 className="text-2xl font-bold mb-2">{t('experienceWaadPay')}</h3>
                  <p className="opacity-80">{t('tapToExplore')}</p>
                </div>
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Showcase features with parallax */}
      <HeroParallax products={translatedProducts} />
    </div>
  );
} 