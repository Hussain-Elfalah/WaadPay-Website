"use client";

import React from "react";
import { motion } from "framer-motion";
import { PieChart, BarChart, LineChart } from "lucide-react";

export default function InvestmentSection() {
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
            Investment Opportunity
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Join us in revolutionizing Libya&apos;s payment landscape with a compelling growth strategy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">3-Year Financial Projections</h3>
            
            <div className="space-y-8">
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <LineChart className="w-6 h-6 text-blue-500" />
                  <h4 className="text-xl font-semibold">Revenue Growth</h4>
                </div>
                <div className="h-60 relative">
                  {/* Simplified revenue chart visualization */}
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                    <div className="w-1/3 h-[20%] bg-blue-200 dark:bg-blue-900 rounded-t-md mx-1 flex items-center justify-center relative">
                      <div className="absolute -top-6 text-xs font-medium">Year 1</div>
                      <span className="text-xs">$0.8M</span>
                    </div>
                    <div className="w-1/3 h-[40%] bg-blue-400 dark:bg-blue-700 rounded-t-md mx-1 flex items-center justify-center relative">
                      <div className="absolute -top-6 text-xs font-medium">Year 2</div>
                      <span className="text-xs">$3.2M</span>
                    </div>
                    <div className="w-1/3 h-[80%] bg-blue-600 dark:bg-blue-500 rounded-t-md mx-1 flex items-center justify-center relative">
                      <div className="absolute -top-6 text-xs font-medium">Year 3</div>
                      <span className="text-xs text-white">$9.7M</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-6">
                  Revenue sources: Transaction fees (0.8%), Escrow service fees (1.5%), Premium features subscription
                </p>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart className="w-6 h-6 text-green-500" />
                  <h4 className="text-xl font-semibold">User Acquisition</h4>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">50K</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Year 1</div>
                  </div>
                  <div className="text-center p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">200K</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Year 2</div>
                  </div>
                  <div className="text-center p-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">750K</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Year 3</div>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
                  CAC: $2.10 (Year 1), $1.80 (Year 2), $1.40 (Year 3)
                </p>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <PieChart className="w-6 h-6 text-purple-500" />
                  <h4 className="text-xl font-semibold">Profitability Timeline</h4>
                </div>
                <div className="flex items-center justify-center py-4">
                  <div className="relative w-64 h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1/5 bg-red-500"></div>
                    <div className="absolute left-[20%] top-0 bottom-0 w-[30%] bg-yellow-500"></div>
                    <div className="absolute left-[50%] top-0 bottom-0 w-[50%] bg-green-500"></div>
                    
                    <div className="absolute left-[20%] top-full mt-2 transform -translate-x-1/2 text-xs">
                      <div className="font-medium">Q4 Y1</div>
                      <div className="text-xs text-neutral-500">Break-even</div>
                    </div>
                    
                    <div className="absolute left-[50%] top-full mt-2 transform -translate-x-1/2 text-xs">
                      <div className="font-medium">Q2 Y2</div>
                      <div className="text-xs text-neutral-500">Profitable</div>
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
            <h3 className="text-2xl font-bold mb-6">Funding & Strategy</h3>
            
            <div className="space-y-8">
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Funding Ask</h4>
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">$2.4M Seed Round</span>
                </div>
                
                <h5 className="font-medium mb-2">Fund Allocation</h5>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-28 text-sm">Tech Development</div>
                    <div className="flex-1 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-blue-500"></div>
                    </div>
                    <div className="w-12 text-right text-sm">40%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-28 text-sm">Bank Integrations</div>
                    <div className="flex-1 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div className="h-full w-[25%] bg-blue-500"></div>
                    </div>
                    <div className="w-12 text-right text-sm">25%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-28 text-sm">Marketing</div>
                    <div className="flex-1 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div className="h-full w-[20%] bg-blue-500"></div>
                    </div>
                    <div className="w-12 text-right text-sm">20%</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-28 text-sm">Operations</div>
                    <div className="flex-1 h-4 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div className="h-full w-[15%] bg-blue-500"></div>
                    </div>
                    <div className="w-12 text-right text-sm">15%</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Growth Strategy</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">Phase 1: Tripoli Domination</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Focus on capturing 40% of merchants in Libya's capital and largest city
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">Phase 2: Major City Expansion</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Extend to Benghazi, Misrata, and Sebha (covering 65% of population)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-green-100 dark:bg-green-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">Phase 3: National Coverage</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Roll out to all 22 districts, including rural areas with offline support
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Exit Potential</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">Banking Acquisition</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Prime acquisition target for Libyan banks seeking digital transformation
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">Telecom Integration</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Natural extension for Libyan telecom firms expanding to fintech
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center p-1 bg-blue-100 dark:bg-blue-900 rounded-full mr-3 mt-1">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    </span>
                    <div>
                      <p className="font-medium">MENA Expansion</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        Platform for expansion to similar markets (Tunisia, Egypt, Algeria)
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
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Journey?</h3>
            <p className="mb-6 max-w-2xl">
              WaadPay is positioned to become Libya&apos;s dominant payment platform in a rapidly evolving market. 
              Connect with our team to discuss investment opportunities.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors"
            >
              Contact for Investment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 