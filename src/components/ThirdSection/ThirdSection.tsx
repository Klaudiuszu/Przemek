"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "../UI/Heading";
import Image from "next/image";
import GridEffect from "./GridEffect";

const ThirdSection = () => {
  return (
    <div className="relative">
      <section
        className="flex justify-center w-full bg-background pb-24 pt-32 overflow-hidden"
        id="services"
      >
        <div className="max-w-screen-2xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          <motion.div
            className="relative w-full h-[500px] flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl relative border-4 border-stone-300">
              <Image
                src="/images/firstImage.jpg"
                alt="Badania geologiczne w Grójcu"
                fill
                priority
                className="object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-900/10 to-stone-900/30" />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Heading className="text-primary font-serif text-4xl md:text-5xl">
              Profesjonalne Usługi Geologiczne
            </Heading>
            
            <div className="space-y-6 text-textDark">
              <p className="text-lg leading-relaxed">
                <strong>Arch-Geo</strong> to doświadczona firma geologiczna świadcząca kompleksowe usługi na terenie Grójca i okolic. 
                Specjalizujemy się w badaniach podłoża, dokumentacjach geologiczno-inżynierskich oraz ocenie warunków wodnych.
              </p>
              
              <ul className="space-y-4 list-disc pl-5">
                <li className="text-lg">Badania geologiczne pod inwestycje budowlane</li>
                <li className="text-lg">Wiercenia geologiczne i pobór próbek</li>
                <li className="text-lg">Dokumentacje hydrogeologiczne</li>
                <li className="text-lg">Ekspertyzy środowiskowe</li>
                <li className="text-lg">Monitoring wód podziemnych</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full relative bg-primary">
        <GridEffect />
      </div>
    </div>
  );
};

export default ThirdSection;