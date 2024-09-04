"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";

const ConsultationMain = () => {

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
                className="lg:mt-[150px]"
            >
                    <h2 className="xl:text-custom-85 text-custom-36 pt-20 sm:pt-0 text-center h-[80px]">
                        {tString('email.header')}
                    </h2>
                <div className="flex flex-col lg:grid lg:grid-cols-2 items-center pt-20 pb-8 lg:gap-y-0 mx-auto mt-10">
                    <div className="flex flex-col lg:grid lg:grid-cols-1 items-center pb-8 pl-4 pr-4 lg:pl-16 text-[#171717]">
                        <div className="justify-center md:text-5xl text-4xl items-stretch gap-4 text-center mt-4 lg:text-left flex flex-col h-full lg:h-[500px]">
                            <ul className=" max-w-[650px] gap-y-4 flex flex-col lg:px-0 text-left sm:px-16 md:text-[24px] text-base lg:text-left">
                                <li className="flex gap-y-4  items-center">
                                    <div className="relative"></div>
                                    <a className="lg:w-[700px] leading-normal">{tString('furniture.info1')}</a>
                                </li>
                                <li className="flex gap-y-4  items-center">
                                    <div className="relative"></div>
                                    <a className="lg:w-[700px] leading-normal">{tString('email.step0')}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-3">
                        </div>
                    </div>
                    <div className="flex flex-col lg:grid lg:grid-cols-1 items-end pb-8 pl-4 pr-4 text-[#171717]">
                        <div className="justify-end md:text-5xl text-4xl items-end gap-4 lg:items-end lg:pr-16 text-center mt-4 lg:text-left flex flex-col h-full">
                            <img className="h-[500px]" src="/images/our.png"></img>
                        </div>
                        <div className="flex flex-col gap-3">
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default ConsultationMain;