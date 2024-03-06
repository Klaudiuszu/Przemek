"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";


const ProcesSection = () => {
  const intl = useIntl();

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const refHeight = useRef(null);
  const refWidth = useRef(null);

  useEffect(() => {
    setWidth(refWidth.current.clientWidth)
    setHeight(refHeight.current.clientHeight)
  }, [])

  return (
    <section ref={refWidth} className="about-me-section lg:h-lvh lg:py-16 max-w-screen-2xl" id="about">
      <div className="bg" style={{ height: `${width <= '1025' ? height + 'px' : '100vh'}` }}></div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div ref={refHeight} className="flex flex-col	 lg:grid gap-8 lg:grid-cols-2 items-center py-8 px-4 lg:gap-16 lg:px-16 about-me-section-wrapper">
          <div className="justify-center text-3xl md:text-5xl items-center lg:items-start text-center gap-4 mt-4  lg:text-left flex flex-col h-full">
            <h2 className="about-me-header mb-4">{intl.formatMessage({ id: "process.header" })}</h2>
            <p className="about-me-info text-sm lg:px-0 sm:px-16 md:text-xl">
              {intl.formatMessage({ id: "process.info" })}
            </p>
            <div className="h-4"></div>
            <div className="flex gap-2 justify-center flex-col items-center lg:flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 min-w-6	h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <p className="about-me-info text-sm lg:px-0 sm:px-16 md:text-xl">
                {intl.formatMessage({ id: "process.check1" })}
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center flex-col lg:flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 min-w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <p className="about-me-info text-sm lg:px-0 sm:px-16 md:text-xl">
                {intl.formatMessage({ id: "process.check2" })}
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center flex-col lg:flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 min-w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <p className="about-me-info text-sm lg:px-0 sm:px-16 md:text-xl">
                {intl.formatMessage({ id: "process.check3" })}
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center flex-col lg:flex-row">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 min-w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <p className="about-me-info text-sm lg:px-0 sm:px-16 md:text-xl">
                {intl.formatMessage({ id: "process.check4" })}
              </p>
            </div>
            <a href="https://www.instagram.com/jofi_studio/" target="_blank" class="text-xl bg-[#171717] mt-10 hover:bg-[#2c2c2c] text-white font-semi-bold py-4 px-8 rounded">
              {intl.formatMessage({ id: "button.instagram" })}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <Image className="w-full" src="/images/process01.png" width={500} height={536} />
            <div className="flex gap-3" width={500}>
              <Image className="w-2/4" src="/images/process02.png" width={50} height={271} />
              <Image className="w-2/4" src="/images/process03.png" width={240} height={382} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProcesSection;