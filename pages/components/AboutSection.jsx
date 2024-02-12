"use client";
import React, {useRef, useState, useEffect} from "react";
import Image from "next/image";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";


const AboutSection = () => {
  const intl = useIntl();

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const refHeight = useRef(null);
    const refWidth = useRef(null);

    useEffect(() => {
      setWidth(refWidth.current.clientWidth)
      setHeight(refHeight.current.clientHeight)
    },[])
console.log({width, height})
  return (
    <section ref={refWidth} className="about-me-section lg:h-lvh lg:py-16 max-w-screen-xxl" id="about">
      <div className="bg" style={{height:`${width <= '1025' ? height + 'px' : '100vh'}`}}></div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div ref={refHeight} className="flex flex-col	 lg:grid gap-8 lg:grid-cols-2 items-center py-8 px-4 lg:gap-16 lg:px-16 about-me-section-wrapper">
          <div className="justify-center text-3xl md:text-5xl items-center lg:items-start text-center gap-4 mt-4  lg:text-left flex flex-col h-full">
            <h2 className="about-me-header mb-4">{intl.formatMessage({ id: "aboutMe.header" })}</h2>
            <p className="about-me-info text-sm lg:px-0 sm:px-16 md:text-xl">
              {intl.formatMessage({ id: "aboutMe.info" })}
            </p>
          </div>
          <div className="image-section">
            <div className="image-section-left">
              <Image src="/images/aboutMe03.png" width={336} height={536} />
            </div>
            <div className="image-section-right">
              <Image src="/images/aboutMe02.png" width={336} height={271} />
              <Image src="/images/aboutMe01.png" width={336} height={382} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;