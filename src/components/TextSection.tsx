"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";
import TextArrow from "../smallComponents/TextArrow";

const TextSection = () => {

    const { tString } = useTranslation(namespaces.common);

    return (
        <section className="about-me-section lg:h-lvh lg:py-16 max-w-screen-2xl" id="about">
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
            >
                <div className="py-8 flex flex-col :grid gap-8 lg:grid-cols-1 px-4 lg:gap-16 lg:px-16">
                    <div className="items-center about-me-section-wrapper text-[#171717]">
                        <div className="justify-center md:text-5xl text-4xl items-center lg:items-start text-center gap-4 mt-4  lg:text-left flex flex-col h-full">
                            <h2 className=" max-w-5xl about-me-header md:text-custom-85 mb-4 leading-normal">{tString('section3.header')}</h2>
                        </div>
                    </div>
                    <div className="flex justify-center about-me-section-wrapper text-[#171717]">
                        <h4 className="about-me-info lg:px-0 max-w-4xl sm:px-16 md:text-xl  text-left">
                            {tString('section3.info')}
                        </h4>
                    </div>
                </div>
            </motion.div>
        </section >
    );
};

export default TextSection;