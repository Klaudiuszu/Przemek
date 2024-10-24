"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";

const InteriorOffer = () => {

  const { tString } = useTranslation(namespaces.common);

  return (
    <section
      id="imterior"
      className="flex justify-center align-center lg:pt-16 max-w-screen-2xl relative"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col justify-center lg:grid-cols-1 items-center py-8 lg:gap-72 mx-auto">
          <h5 className="font-bold text-4xl h-[80px] xl:text-[39px] mb-4">{tString('interiorOffer.header1')}</h5>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:gap-72 mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-1 items-center pl-4 pr-4 lg:pl-16 text-[#171717]">
            <div className="justify-start md:text-5xl text-4xl items-center gap-4 lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[280px]">
              <ul className=" max-w-[650px] gap-4 flex flex-col lg:px-0 text-left sm:px-16 md:text-[24px] text-base lg:text-left">
                <li className="flex gap-4 items-start">
                  <div className="relative bottom-1 min-w-2 Rectangle-1469 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot1a')}</a>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="relative leading-normal min-w-2 Rectangle-1469 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot1b')}</a>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="relative Rectangle-1469 min-w-2 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot1c')}</a>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="relative Rectangle-1469 min-w-2 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot1d')}</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-1 items-center pl-4 pr-4 lg:pl-16 text-[#171717]">
            <div className="justify-start md:text-5xl text-4xl items-center gap-4 lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[280px]">
              <ul className=" max-w-[650px] gap-4 flex flex-col lg:px-0 text-left sm:px-16 md:text-[24px] text-base lg:text-left">
                <li className="flex gap-4 items-start">
                  <div className="relative bottom-1 Rectangle-1469 min-w-2 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot1e')}</a>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="relative Rectangle-1469 min-w-2 top-[5px]"></div>
                  <a>
                    {tString('interiorOffer.dot1f')}
                    <span className="text-transparent">Invisible Text Here asd asd asd asd asd asd asdsa dasd </span>
                  </a>

                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
            </div>
          </div>
        </div>
        <div className="flex ppHatt flex-col text-[24px] justify-center px-16 lg:grid-cols-1 items-center pb-8 lg:gap-72 mx-auto">
          <h4>{tString('interiorOffer.info1')}</h4>
        </div>
        <div className="flex flex-col justify-center lg:grid-cols-1 items-center lg:gap-72 mx-auto">
          <h5 className="font-bold text-4xl h-[80px] xl:text-[39px] mb-4">{tString('interiorOffer.header2')}</h5>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:gap-72 mx-auto 3xl:pb-[100px]">
          <div className="flex flex-col lg:grid lg:grid-cols-1 items-center pl-4 pr-4 lg:pl-16 text-[#171717]">
            <div className="justify-start md:text-5xl text-4xl items-center gap-4 lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[280px]">
              <ul className=" max-w-[650px] gap-4 flex flex-col lg:px-0 text-left sm:px-16 md:text-[24px] text-base lg:text-left">
                <li className="flex gap-4 items-start">
                  <div className="relative bottom-1 min-w-2 Rectangle-1469 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot2a')}</a>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="relative leading-normal min-w-2 Rectangle-1469 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot2b')}</a>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="relative Rectangle-1469 min-w-2 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot2c')}</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-1 items-center pl-4 pr-4 lg:pl-16 text-[#171717] pb-8">
            <div className="justify-start md:text-5xl text-4xl items-center gap-4 lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[280px]">
              <ul className=" max-w-[650px] gap-4 flex flex-col lg:px-0 text-left sm:px-16 md:text-[24px] text-base lg:text-left">
                <li className="flex gap-4 items-start">
                  <div className="relative bottom-1 Rectangle-1469 min-w-2 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot1d')}</a>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="relative Rectangle-1469 min-w-2 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot1e')}</a>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="relative Rectangle-1469 min-w-2 top-[5px]"></div>
                  <a>{tString('interiorOffer.dot1f')}</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InteriorOffer