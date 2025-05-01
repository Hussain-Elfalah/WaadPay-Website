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

export default function ProblemSolutionSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Libya&apos;s Payment Challenges & Our Solutions</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Addressing the unique payment ecosystem of Libya with innovative, reliable solutions
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
                Current Challenges
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                Libya&apos;s fragmented payment landscape creates significant barriers for businesses and consumers
              </p>
            </div>
            
            <BentoGridItem
              title="Fragmented Banking"
              description="Libya's 19 banks operate in silos with limited interoperability, forcing consumers to maintain multiple accounts."
              icon={<CreditCard className="h-5 w-5" />}
              color="red"
            />
            
            <BentoGridItem
              title="E-commerce Distrust"
              description="Cash-on-delivery dominates with 85% of transactions due to low trust in online payments and insufficient escrow options."
              icon={<Lock className="h-5 w-5" />}
              color="red"
            />
            
            <BentoGridItem
              title="Connectivity Issues"
              description="Frequent internet and power outages in Libyan cities disrupt payment systems and banking services."
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
                WaadPay Solutions
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                Our comprehensive approach addresses Libya&apos;s unique payment challenges
              </p>
            </div>
            
            <BentoGridItem
              title="Unified Payments"
              description="Connect to all major Libyan banks through a single integration, making transfers seamless across the entire banking system."
              icon={<CreditCard className="h-5 w-5" />}
              color="green"
            />
            
            <BentoGridItem
              title="Promise Escrow"
              description="Our 'Waad' (Promise) escrow system builds trust by holding funds until delivery is confirmed, protecting both buyers and sellers."
              icon={<Lock className="h-5 w-5" />}
              color="green"
            />
            
            <BentoGridItem
              title="Offline Functionality"
              description="Continue processing transactions during connectivity issues with our offline mode that syncs when connection is restored."
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
          <h3 className="text-2xl font-bold mb-4">Real-World Impact</h3>
          <p className="text-lg">
            Our pilot in Tripoli showed a <span className="font-semibold text-blue-600 dark:text-blue-400">78% increase</span> in digital payment adoption for participating merchants and a <span className="font-semibold text-blue-600 dark:text-blue-400">92% reduction</span> in payment disputes.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 