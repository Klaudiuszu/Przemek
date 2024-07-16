"use client";
import Image from "next/image";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";


const WhyUsSection = () => {
  const intl = useIntl();

  return (
    <section className="flex justify-center align-center lg:h-lvh lg:py-16 max-w-screen-2xl relative" id="offer">
      <div className="bg"></div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="flex flex-col lg:grid gap-8 lg:grid-cols-2 items-center py-8 px-4 lg:gap-16 lg:px-16 offer-me-section-wrapper">
          <div className="justify-center text-3xl md:text-5xl items-center lg:items-start text-center gap-4 mt-4  lg:text-left flex flex-col h-full">
            <h2 className="font-bold why-us-header mb-4">{intl.formatMessage({ id: "whyUs.header" })}</h2>
            <p className="why-us-info text-sm lg:px-0 sm:px-16 md:text-[28px]">
              {intl.formatMessage({ id: "whyUs.info" })}
            </p>
          </div>
          <div className="flex justify-end">
              <img alt="whyUs" src="/images/aboutMe03.png" className="w-413 h-650" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyUsSection;