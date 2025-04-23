"use client";
import React from "react";
import { motion } from "framer-motion";
import Heading from "../UI/Heading";
import Image from "next/image";
import GridEffect from "./GridEffect";

const ThirdSection = () => {

  return (
    <div>
      <section
        className="flex justify-center w-full bg-background pb-24 pt-40 overflow-hidden"
        id="whoWeAre"
      >
        <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
          <motion.div
            className="relative w-full h-[400px] flex justify-center"
            whileInView={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[90%] h-[90%] border-4 border-darkRed rounded-lg overflow-hidden shadow-lg relative max-w-full">
              <Image
                src="/images/thirdSection.jpg"
                alt='awdawd'
                layout="fill"
                objectFit="cover"
                className="object-cover"
                style={{
                  objectPosition: 'center 30%'
                }}
              />
            </div>
          </motion.div>
          <motion.div
            className="text-left flex flex-col gap-6"
            whileInView={{ opacity: [0, 1], x: [50, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Heading>wwwad</Heading>
            <p className="text-textDark text-lg">
              qweqwe
            </p>
            <p className="text-textDark text-lg">
              qwdqwd
            </p>
          </motion.div>
        </div>
      </section>
      <div className="w-full relative bg-darkRed">
        <GridEffect />
      </div>
    </div>
  );
};

export default ThirdSection;
