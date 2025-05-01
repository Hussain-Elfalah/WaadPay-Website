"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  const teamMembers: TeamMember[] = [
    {
      name: "Hussain Elfallah",
      title: "Founder",
      bio: "",
      image: "/team/profile-1341-svgrepo-com.svg",
    },
    {
      name: "Nadia",
      title: "CTO",
      bio: "",
      image: "/team/profile-1341-svgrepo-com.svg",
    },
    {
      name: "Mohammed",
      title: "COO",
      bio: "",
      image: "/team/profile-1341-svgrepo-com.svg",
    },
    {
      name: "Leila",
      title: "Head of Banking Relations",
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
            Our Team & Partners
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Leaders with deep experience in Libya&apos;s financial and technology landscape
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
              <h3 className="text-2xl font-bold mb-4">Pilot Results</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <p><span className="font-bold">97%</span> escrow transaction success rate in beta</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <p><span className="font-bold">24</span> merchants in Tripoli pilot program</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <p><span className="font-bold">$120,000</span> in pilot transaction volume</p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center p-1 bg-white/20 rounded-full mr-3 mt-1">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </span>
                  <p><span className="font-bold">4.8/5</span> average merchant satisfaction</p>
                </li>
              </ul>
            </div>
            
            <div className="p-8 col-span-1 lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">User Testimonials</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg">
                  <p className="text-sm italic mb-3">"WaadPay made it possible for my online store to accept payments from customers across different Libyan banks. Sales increased by 40%."</p>
                  <p className="text-sm font-semibold">Ahmed Mustafa, Tripoli Electronics</p>
                </div>
                
                <div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg">
                  <p className="text-sm italic mb-3">"The escrow feature solved our biggest problem - customer trust. Now 80% of our customers prepay rather than using cash on delivery."</p>
                  <p className="text-sm font-semibold">Fatima Al-Barasi, Benghazi Fashion</p>
                </div>
                
                <div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg">
                  <p className="text-sm italic mb-3">"Even during internet outages, we could process transactions. This reliability is unheard of in Libya's payment landscape."</p>
                  <p className="text-sm font-semibold">Karim Zintani, Cafe Owner</p>
                </div>
                
                <div className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-lg">
                  <p className="text-sm italic mb-3">"As a customer, I appreciate being able to pay digitally while having the security of funds only releasing after I confirm delivery."</p>
                  <p className="text-sm font-semibold">Layla Mahmoud, Shopper</p>
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
          <h3 className="text-2xl font-bold mb-8">Our Partners</h3>
          
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
            *Partner logos shown represent current discussions and pilots. Some relationships pending final agreements.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 