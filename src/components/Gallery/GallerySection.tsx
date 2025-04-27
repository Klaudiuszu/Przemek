"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "../UI/Heading";
import Image from "next/image";

const GallerySection = () => {
  const photo = "/images/g1.jpg";

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

          <motion.div
            className="relative mx-auto rounded-xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition-all duration-300 aspect-[3/2] max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={photo}
              alt="Profesjonalny sprzęt geologiczny"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              priority
            />
          </motion.div>
        </div>
      </section>

      <div className="w-full h-24 bg-primary"></div>
    </div>
  );
};

export default GallerySection;