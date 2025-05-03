"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedStats } from "../ui/animated-stats";
import LibyaMap from "../ui/LibyaMap";
import { useLanguage } from "@/lib/LanguageContext";

export default function MarketOpportunitySection() {
  const { t } = useLanguage();
  
  const marketStats = [
    {
      value: 6.8,
      label: t('mobileUsers'),
      decimal: true,
    },
    {
      value: 15,
      label: t('digitalPaymentPenetration'),
      prefix: "<",
      suffix: "%",
    },
    {
      value: 2.1,
      label: t('ecommercePotential'),
      prefix: "$",
      suffix: "B",
      decimal: true,
    },
  ];

  return (
    <section className="py-24 px-4 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('marketOpportunityTitle')}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t('marketOpportunitySubtitle')}
          </p>
        </motion.div>

        <AnimatedStats stats={marketStats} className="mb-20" />

        {/* Map Section with LibyaMap Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">{t('waadPayAvailability')}</h3>
          <div className="bg-white dark:bg-black rounded-xl shadow-lg p-4 overflow-hidden">
            <LibyaMap />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-black p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t('marketPenetrationStrategy')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                </span>
                <p>{t('initialFocus')}</p>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                </span>
                <p>{t('partnershipsBanks')}</p>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                </span>
                <p>{t('expandingBanks')}</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-black p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{t('growthProjections')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                <p>{t('year1Projection')}</p>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                <p>{t('year2Projection')}</p>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </span>
                <p>{t('year3Projection')}</p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 