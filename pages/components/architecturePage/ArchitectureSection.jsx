"use client";
import React from "react";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";


const EmailSection = () => {
  const intl = useIntl();

  return (
    <section
      id="architecture"
      className="flex justify-center align-center lg:py-16 max-w-screen-2xl relative"
    >
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:grid gap-8 lg:grid-cols-2 items-center py-8 px-4 lg:gap-16 lg:px-16">
          <div className="text-center justify-center gap-4 mt-4 items-center lg:items-start lg:text-left flex flex-col ">
            <h5 className="font-bold md:text-5xl text-3xl">
              {intl.formatMessage({ id: "architecture.s1.header" })}
            </h5>
            <p className="text-sm md:text-xl">{intl.formatMessage({ id: "architecture.s1.info" })}
            </p>
            <p className="text-sm md:text-xl">{intl.formatMessage({ id: "architecture.s1.info2" })}
            </p>
          </div>
          <div className="flex justify-end relative">
            <img alt="emailImage" src="/images/aboutMe03.png" className="w-313 h-450" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;