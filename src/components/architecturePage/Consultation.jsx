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
        <div className="flex flex-col items-center py-8 3xl:pt-0 px-4 3xl:h-[396px]">
          <div className="text-center justify-center gap-4 mt-4 items-center lg:items-start lg:text-left flex flex-col ">
            <h2 className="xl:text-custom-85 text-custom-36 text-center tracking-[-1.7px] leading-normal xl:leading-[90px]">
              {tString('consultation.header')}
            </h2>
          </div>
          <h4 className="text-center text-[28px] mb-[70px] pt-[28px] uppercase mundial-font 3xl:w-[1100px]">
            {tString('consultation.info')}
          </h4>
          <div className="gap-2 uppercase mundial-font relative cursor-pointer text-[22px] justify-center flex bg-[#171717] hover:bg-[#2c2c2c] text-white font-semi-bold py-[10px] px-[29px]">
          <a href={`/${language}/consultation/#contact`} className="relative" style={{top: '2px'}}>
            {tString('consultation.button')}
          </a>
          <span className="material-symbols-outlined font-black relative" style={{top: '5px'}}>
            arrow_right_alt
          </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Consultation;