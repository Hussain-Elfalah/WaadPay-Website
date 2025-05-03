"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { motion } from "framer-motion";
import { 
  AlertTriangle, 
  CheckCircle, 
  CreditCard, 
  Lock, 
  Wifi, 
  WifiOff 
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProblemSolutionSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('problemSolutionTitle')}</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t('problemSolutionSubtitle')}
          </p>
        </motion.div>

        <BentoGrid className="md:grid-cols-2 gap-6">
          {/* Problem Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-1 space-y-6"
          >
            <div className="bg-red-50 dark:bg-red-950/30 p-6 rounded-xl">
              <h3 className="flex items-center gap-2 text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">
                <AlertTriangle className="h-6 w-6" />
                {t('problem1')}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                {t('problemDescription')}
              </p>
            </div>
            
            <BentoGridItem
              title={t('problem1')}
              description={t('problem1Description')}
              icon={<CreditCard className="h-5 w-5" />}
              color="red"
            />
            
            <BentoGridItem
              title={t('problem2')}
              description={t('problem2Description')}
              icon={<Lock className="h-5 w-5" />}
              color="red"
            />
            
            <BentoGridItem
              title={t('problem3')}
              description={t('problem3Description')}
              icon={<WifiOff className="h-5 w-5" />}
              color="red"
            />
          </motion.div>
          
          {/* Solution Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 space-y-6"
          >
            <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-xl">
              <h3 className="flex items-center gap-2 text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
                <CheckCircle className="h-6 w-6" />
                {t('waadPaySolutions')}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                {t('solutionsDescription')}
              </p>
            </div>
            
            <BentoGridItem
              title={t('solution1')}
              description={t('solution1Description')}
              icon={<CreditCard className="h-5 w-5" />}
              color="green"
            />
            
            <BentoGridItem
              title={t('solution2')}
              description={t('solution2Description')}
              icon={<Lock className="h-5 w-5" />}
              color="green"
            />
            
            <BentoGridItem
              title={t('solution3')}
              description={t('solution3Description')}
              icon={<Wifi className="h-5 w-5" />}
              color="green"
            />
          </motion.div>
        </BentoGrid>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">{t('realWorldImpact')}</h3>
          <p className="text-lg">
            {t('pilotResults')} <span className="font-semibold text-blue-600 dark:text-blue-400">78% {t('increase')}</span> {t('inDigitalPayment')} <span className="font-semibold text-blue-600 dark:text-blue-400">92% {t('reduction')}</span> {t('inPaymentDisputes')}
          </p>
        </motion.div>
      </div>
    </section>
  );
} 