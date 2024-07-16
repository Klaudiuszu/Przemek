"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";

const InteriorSection = () => {

  const { tString } = useTranslation(namespaces.common);

  return (
    <section
      id="interior"
      className="flex justify-center align-center lg:pt-16 max-w-screen-2xl relative"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:grid gap-8 lg:grid-cols-2 items-center py-8 px-4 lg:gap-16 lg:px-16">
          <div className="text-center justify-center gap-4 lg:gap-12 mt-4 items-center lg:items-start lg:text-left flex flex-col ">
            <h2 className="xl:text-custom-85 md:text-5xl text-2xl">
              {tString('interior.header')}
            </h2>
            <h6 className="text-sm leading-normal md:text-[24px]">{tString('interior.info')}
            </h6>
            <a href="https://www.instagram.com/jofi_studio" className="flex items-center justify-center py-2 text-black rounded-md text-[22px] font-thin underline underline-offset-8">
                <img src="/images/inst.png" alt="Instagram" className="w-8 mr-2" />
                {tString('button.instagram')}
              </a>
          </div>
          <div className="flex justify-end relative">
            <img alt="emailImage" src="/images/interiorImage.png" className="w-313 h-450" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InteriorSection;