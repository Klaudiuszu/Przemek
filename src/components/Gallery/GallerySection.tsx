"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "../UI/Heading";
import Image from "next/image";

const GallerySection = () => {
  const photos = Array.from({ length: 6 }, (_, i) => `/images/g${i + 1}.jpg`);

  const aspectRatios = [
    "aspect-[3/2]",
    "aspect-[4/3]",
    "aspect-square",
    "aspect-[4/5]",
    "aspect-[3/2]",
    "aspect-[4/3]"
  ];

  return (
    <div className="relative">
      <section className="w-full bg-primary pb-24 pt-32" id="gallery">
        <div className="max-w-screen-2xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading className="text-white font-serif text-4xl md:text-5xl">
              Nasze Wyposażenie
            </Heading>
            <p className="text-white text-lg mt-6 max-w-2xl mx-auto">
              Profesjonalny sprzęt do badań geologicznych i wiertniczych
            </p>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className={`relative break-inside-avoid rounded-xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 ${aspectRatios[index]}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={photo}
                  alt={`Sprzęt geologiczny ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-24 bg-primary"></div>
    </div>
  );
};

export default GallerySection;