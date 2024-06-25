"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";
import TextArrow from "../smallComponents/TextArrow";
import ImageWithBorder from "../smallComponents/ImageWithBorder";

const AboutSection = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const refHeight = useRef(null);
  const refWidth = useRef(null);

  console.log({ width })

  const { tString } = useTranslation(namespaces.common);

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
        className="flex justify-center"
      >
        <div ref={refHeight} className="flex flex-col	 lg:grid gap-8 lg:grid-cols-2 items-center py-8 px-4 lg:gap-16 lg:px-16 about-me-section-wrapper text-[#171717]">
          <div className="justify-center md:text-5xl text-4xl items-center lg:items-start text-center gap-4 mt-4  lg:text-left flex flex-col h-full">
            <h2 className="about-me-header md:text-custom-85 mb-4 leading-normal">{tString('about.header')}</h2>
            <h4 className="about-me-info lg:px-0 sm:px-16 md:text-xl text-base text-left">
              {tString('about.info')}
            </h4>
            <TextArrow 
            buttonText={tString('about.button')}
            iconName={'arrow_right_alt'}
            />
          </div>
          <ImageWithBorder />
        </div>
      </motion.div>
    </section >
  );
};

export default AboutSection;