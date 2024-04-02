"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";


const Consultation = () => {

  const { tString } = useTranslation(namespaces.common);

  return (
    <section
      className="flex h-screen mt-[-72px] xl-[-50px] items-center justify-center lg:py-16 max-w-screen-2xl relative"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-8 items-center py-8 px-4 lg:gap-16 lg:px-16">
          <div className="text-center justify-center gap-4 mt-4 items-center lg:items-start lg:text-left flex flex-col ">
            <h5 className="font-bold md:text-5xl text-3xl">
            {tString('consultation.header')}
            </h5>
          </div>
          <a href="/#contact" className="text-xl justify-center flex w-48 bg-[#171717] hover:bg-[#2c2c2c] text-white font-semi-bold py-4 px-8 rounded">
          {tString('consultation.button')}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Consultation;