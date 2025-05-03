"use client";

import React from "react";
import { motion } from "framer-motion";
import { PieChart, BarChart, LineChart } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function InvestmentSection() {
  const { t } = useLanguage();
  
  return (
    <section id="investment" className="py-24 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('investmentTitle')}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t('investmentSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">{t('financialProjections')}</h3>
            
            <div className="space-y-8">
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <LineChart className="w-6 h-6 text-blue-500" />
                  <h4 className="text-xl font-semibold">{t('revenue')}</h4>
                </div>
                <div className="h-60 relative">
                  {/* Simplified revenue chart visualization */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                    <div className="w-1/3 h-[20%] bg-blue-200 dark:bg-blue-900 rounded-t-md mx-1 flex items-center justify-center relative">
                      <div className="absolute -top-6 text-xs font-medium">{t('year1')}</div>
                      <span className="text-xs">$0.8M</span>
                    </div>
                    <div className="w-1/3 h-[40%] bg-blue-400 dark:bg-blue-700 rounded-t-md mx-1 flex items-center justify-center relative">
                      <div className="absolute -top-6 text-xs font-medium">{t('year2')}</div>
                      <span className="text-xs">$3.2M</span>
                    </div>
                    <div className="w-1/3 h-[80%] bg-blue-600 dark:bg-blue-500 rounded-t-md mx-1 flex items-center justify-center relative">
                      <div className="absolute -top-6 text-xs font-medium">{t('year3')}</div>
                      <span className="text-xs text-white">$9.7M</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-6">
                  {t('revenueSources')}
                </p>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart className="w-6 h-6 text-green-500" />
                  <h4 className="text-xl font-semibold">{t('userGrowth')}</h4>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">50K</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">{t('year1')}</div>
                  </div>
                  <div className="text-center p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">200K</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">{t('year2')}</div>
                  </div>
                  <div className="text-center p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">750K</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">{t('year3')}</div>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
                  {t('cacMetrics')}
                </p>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <PieChart className="w-6 h-6 text-purple-500" />
                  <h4 className="text-xl font-semibold">{t('transactionVolume')}</h4>
                </div>
                <div className="flex items-center justify-center py-4">
                  <div className="relative w-64 h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1/5 bg-red-500"></div>
                    <div className="absolute left-[20%] top-0 bottom-0 w-[30%] bg-yellow-500"></div>
                    <div className="absolute left-[50%] top-0 bottom-0 w-[50%] bg-green-500"></div>
                    
                    <div className="absolute left-[20%] top-full mt-2 transform -translate-x-1/2 text-xs">
                      <div className="font-medium">Q4 {t('year1')}</div>
                      <div className="text-xs text-neutral-500">{t('breakEven')}</div>
                    </div>
                    
                    <div className="absolute left-[50%] top-full mt-2 transform -translate-x-1/2 text-xs">
                      <div className="font-medium">Q2 {t('year2')}</div>
                      <div className="text-xs text-neutral-500">{t('profitable')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">{t('investmentTiers')}</h3>
            
            <div className="space-y-8">
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">{t('seed')}</h4>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">{t('seedRound')}</span>
                </div>
                
                <h5 className="font-medium mb-2">{t('fundAllocation')}</h5>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-28 text-sm">{t('techDevelopment')}</div>
                    <div className="flex-1 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-blue-500"></div>
                    </div>
                    <div className="w-12 text-right text-sm">40%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-28 text-sm">{t('bankIntegrations')}</div>
                    <div className="flex-1 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div className="h-full w-[25%] bg-blue-500"></div>
                    </div>
                    <div className="w-12 text-right text-sm">25%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-28 text-sm">{t('marketing')}</div>
                    <div className="flex-1 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div className="h-full w-[20%] bg-blue-500"></div>
                    </div>
                    <div className="w-12 text-right text-sm">20%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-28 text-sm">{t('operations')}</div>
                    <div className="flex-1 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div className="h-full w-[15%] bg-blue-500"></div>
                    </div>
                    <div className="w-12 text-right text-sm">15%</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">{t('seriesA')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">{t('phase1')}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {t('phase1Desc')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">{t('phase2')}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {t('phase2Desc')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">{t('phase3')}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {t('phase3Desc')}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">{t('exitPotential')}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">{t('bankingAcquisition')}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {t('bankingAcquisitionDesc')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">{t('telecomIntegration')}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {t('telecomIntegrationDesc')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">{t('menaExpansion')}</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {t('menaExpansionDesc')}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">{t('joinJourney')}</h3>
            <p className="mb-6 max-w-2xl">
              {t('fullPitchAccess')}
            </p>
            <a 
              href="#" 
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('downloadPitch')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 