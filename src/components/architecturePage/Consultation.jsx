"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";
import { useLanguage } from "../../hooks/useLanguage";


const Consultation = () => {

  const { tString } = useTranslation(namespaces.common);
  const { language } = useLanguage();

  return (
    <section
      id="consultation"
      className="my-1 flex h-screen md:h-[636px] xl-[-50px] items-center justify-center lg:py-16 max-w-screen-2xl relative"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-4 items-center py-8 px-4 lg:gap-8">
          <div className="text-center justify-center gap-4 mt-4 items-center lg:items-start lg:text-left flex flex-col ">
            <h2 className="xl:text-custom-85 text-custom-36 text-center">
              {tString('consultation.header')}
            </h2>
          </div>
          <h4 className="text-center text-xl">
            {tString('consultation.info')}
          </h4>
          <div style={{fontFamily: "PPHatton-Light"}} className="gap-2 uppercase relative cursor-pointer text-xl justify-center flex w-48 bg-[#171717] hover:bg-[#2c2c2c] text-white font-semi-bold py-2 px-4">
          <a href={`/${language}/#contact`} className="relative" style={{top: '2px'}}>
            {tString('consultation.button')}
          </a>
          <span className="material-symbols-outlined font-black relative" style={{top: '2px'}}>
            arrow_right_alt
          </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Consultation;