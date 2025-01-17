"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Heading from "../UI/Heading";

const FirstSection: React.FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setIsTextVisible(false);
    }, 3000);
    const subTextTimer = setTimeout(() => {
    }, 9000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(subTextTimer);
    };
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/images/firstSection/firstSection.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isTextVisible ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="text-center"
        >
          <Heading isWhite className="text-4xl md:text-5xl">
            Serdecznie witamy!
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2 }}
          className="flex flex-col items-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white text-4xl text-center font-bold"
          >
            Zapraszamy po więcej szczegółów
          </motion.p>
          <motion.div
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            className="mt-4 text-white text-3xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FirstSection;
