"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { useIntl } from "react-intl";


const AboutSection = () => {

  const intl = useIntl();

  return (
    <section className="about-me-section lg:py-16 max-w-screen-lg" id="about">
      <div className="bg"></div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="about-me-header mb-4">{intl.formatMessage({ id: "aboutMe.header" })}</h2>
          <p className="about-me-info">
          {intl.formatMessage({ id: "aboutMe.info" })}
          </p>
        </div>
        <Image src="/images/aboutMe02.png" width={336} height={536} />
        <Image src="/images/aboutMe02.png" width={336} height={536} />
        <Image src="/images/aboutMe03.png" width={336} height={536} />
      </div>
    </section>
  );
};

export default AboutSection;