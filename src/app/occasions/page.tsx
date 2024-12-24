"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { occasionsData } from "@/components/occasions/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function OccasionsPage() {

  return (
    <main className="w-full min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[200px] w-full">
        <Image
          src="/occasions/01.jpg"
          alt="Mathiveri Island Occasions Hero"
          layout="fill"
          objectFit="cover"
          priority
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-4xl font-bold uppercase font-serif">
            Celebrate in Mathiveri
          </h1>
        </div>
      </section>

      {/* OCCASIONS SECTIONS */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {occasionsData.map((occasion, index) => {
          const imageOnLeft = index % 2 === 0;
          return (
            <motion.div
              key={occasion.id}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                imageOnLeft ? "" : "md:flex-row-reverse"
              }`}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* IMAGE */}
              <div className="w-full md:w-1/2 relative h-64 md:h-96">
                <Image
                  src={occasion.image}
                  alt={occasion.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </div>

              {/* TEXT */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  {occasion.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {occasion.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </section>
    </main>
  );
}
