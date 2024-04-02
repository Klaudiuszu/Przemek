"use client";
import React, {useRef, useState, useEffect} from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";

const AboutSection = () => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const refHeight = useRef(null);
    const refWidth = useRef(null);

    const { tString } = useTranslation(namespaces.common);

    useEffect(() => {
      setWidth(refWidth.current.clientWidth)
      setHeight(refHeight.current.clientHeight)
    },[])

  return (
    <section ref={refWidth} className="about-me-section lg:h-lvh lg:py-16 max-w-screen-2xl" id="about">
      <div className="bg" style={{height:`${width <= '1025' ? height + 'px' : '100vh'}`}}></div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div ref={refHeight} className="flex flex-col	 lg:grid gap-8 lg:grid-cols-2 items-center py-8 px-4 lg:gap-16 lg:px-16 about-me-section-wrapper">
          <div className="justify-center text-3xl md:text-5xl items-center lg:items-start text-center gap-4 mt-4  lg:text-left flex flex-col h-full">
            <h2 className="about-me-header text-[#171717] mb-4">{tString('about.header')}</h2>
            <p className="about-me-info text-[#171717] text-sm lg:px-0 sm:px-16 md:text-xl">
            {tString('about.info')}
            </p>
          </div>
          <div className="image-section">
            <div className="image-section-left">
              <img src="/images/aboutMe03.png" className=" w-336 h-536" />
            </div>
            <div className="image-section-right">
              <img src="/images/aboutMe02.png" className=" w-336 h-271" />
              <img src="/images/aboutMe01.png" className=" w-336 h-382" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;