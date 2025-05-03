"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

interface Partner {
  name: string;
  logo: string;
  category: "bank" | "telecom" | "government";
}

export default function TeamSection() {
  const { t } = useLanguage();
  
  const teamMembers: TeamMember[] = [
    {
      name: "Hussain Elfallah",
      title: t('founder'),
      bio: "",
      image: "/team/profile-1341-svgrepo-com.svg",
    },
    {
      name: "Nadia",
      title: t('cto'),
      bio: "",
      image: "/team/profile-1341-svgrepo-com.svg",
    },
    {
      name: "Mohammed",
      title: t('coo'),
      bio: "",
      image: "/team/profile-1341-svgrepo-com.svg",
    },
    {
      name: "Leila",
      title: t('headOfBanking'),
      bio: "",
      image: "/team/profile-1341-svgrepo-com.svg",
    },
  ];

  const partners: Partner[] = [
    { name: "Al-Jumhouria Bank", logo: "/partners/placeholder-svgrepo-com.svg", category: "bank" },
    { name: "Wahda Bank", logo: "/partners/placeholder-svgrepo-com.svg", category: "bank" },
    { name: "Libyana", logo: "/partners/placeholder-svgrepo-com.svg", category: "telecom" },
    { name: "Al-Madar", logo: "/partners/placeholder-svgrepo-com.svg", category: "telecom" },
    { name: "Libya Central Bank", logo: "/partners/placeholder-svgrepo-com.svg", category: "government" },
    { name: "Ministry of Finance", logo: "/partners/placeholder-svgrepo-com.svg", category: "government" },
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
            {t('teamTitle')}
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            {t('teamSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg"
            >
              <div className="h-64 relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain p-6 dark:invert-[0.85] opacity-90"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.title}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-xl bg-white dark:bg-black shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-4">{t('pilotResultsTitle')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <p>{t('escrowSuccess')}</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <p>{t('merchantCount')}</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <p>{t('pilotVolume')}</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <p>{t('merchantSatisfaction')}</p>
                </li>
              </ul>
            </div>
            
            <div className="p-8 col-span-1 lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">{t('userTestimonials')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg">
                  <p className="text-sm italic mb-3">{t('testimonial1')}</p>
                  <p className="text-sm font-semibold">{t('testimonial1Author')}</p>
                </div>
                
                <div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg">
                  <p className="text-sm italic mb-3">{t('testimonial2')}</p>
                  <p className="text-sm font-semibold">{t('testimonial2Author')}</p>
                </div>
                
                <div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg">
                  <p className="text-sm italic mb-3">{t('testimonial3')}</p>
                  <p className="text-sm font-semibold">{t('testimonial3Author')}</p>
                </div>
                
                <div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg">
                  <p className="text-sm italic mb-3">{t('testimonial4')}</p>
                  <p className="text-sm font-semibold">{t('testimonial4Author')}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">{t('partnersTitle')}</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white dark:bg-neutral-800 p-4 rounded-lg flex items-center justify-center h-24"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity h-12"
                />
              </motion.div>
            ))}
          </div>
          
          <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400">
            {t('partnersSubtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  );
} 