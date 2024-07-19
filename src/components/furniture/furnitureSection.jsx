"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";

const FurnitureSection = () => {

  const [height, setHeight] = useState(0);
  const refSize = useRef(null);

  const { tString } = useTranslation(namespaces.common);
  useEffect(() => {
    setHeight(refSize.current.clientHeight)
  }, [])
  return (
    <section ref={refSize} className="w-full flex max-w-screen-2xl flex-col justify-center items-center">

    <div className="bg" style={{ height: `${height}px` }}></div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:mt-[80px] lg:grid lg:grid-cols-2 items-center py-8 lg:gap-72 lg:gap-y-0 mx-auto mt-10">
        <div className="flex flex-col lg:grid lg:grid-cols-1 items-center py-8 pl-4 pr-4 lg:pl-16 text-[#171717]">
          <div className="justify-center md:text-5xl text-4xl items-center gap-4 lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[500px]">
            <h2 className="xl:text-custom-85 text-custom-36 text-center h-[80px]">
              {tString('furniture.header1')}
            </h2>
            <ul className=" max-w-[650px] gap-y-4 flex flex-col lg:px-0 text-left sm:px-16 md:text-[24px] text-base lg:text-left">
              <li className="flex gap-y-4  items-center">
                <div className="relative"></div>
                <a className="lg:w-[700px]">{tString('furniture.info1')}</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
          </div>
        </div>
        <div className="lg:h-0 flex flex-col lg:grid lg:grid-cols-1 items-center py-8 pl-4 pr-4 text-[#171717]">
          <div className="justify-center md:text-5xl text-4xl items-center gap-4 lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[500px]">
            <img src="/images/furniture.png"></img>
          </div>
          <div className="flex flex-col gap-3">
          </div>
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-1 items-center py-8 pl-4 pr-4 lg:pl-16 text-[#171717]">
          <div className="justify-start md:text-5xl text-4xl items-center gap-4 lg:items-start text-center mt-4 lg:text-left flex flex-col h-full lg:h-[600px]">
            <h5 className="font-bold lg:w-[600px] text-4xl h-[80px] xl:text-[39px] mb-4">{tString('furniture.header2')}</h5>
            <ul className=" lg:w-[600px] max-w-[650px] gap-4 flex flex-col lg:px-0 text-left sm:px-16 md:text-[24px] text-base lg:text-left">
              <li className="flex gap-4 items-start">
                <div className="relative top-2 bottom-1 min-w-2 Rectangle-1469"></div>
                <a>{tString('furniture.dot2a')}</a>
              </li>
              <li className="flex gap-4 items-start">
                <div className="relative top-2 min-w-2 Rectangle-1469"></div>
                <a>{tString('furniture.dot2b')}</a>
              </li>
              <li className="flex gap-4 items-start">
                <div className="relative top-2 Rectangle-1469 min-w-2"></div>
                <a>{tString('furniture.dot2c')}</a>
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

export default FurnitureSection;