"use client";
import React from "react";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../../translations.config";
import Heading from "../UI/Heading";
import Image from "next/image";
import GridEffect from "../ThirdSection/GridEffect";

const FourSection = () => {
  const { tString } = useTranslation(namespaces.common);

  const pizzas = [
    { src: "/images/pizza1.png", name: tString("fourSection.pizza1.name"), description: tString("fourSection.pizza1.description") },
    { src: "/images/pizza2.png", name: tString("fourSection.pizza2.name"), description: tString("fourSection.pizza2.description") },
    { src: "/images/pizza3.png", name: tString("fourSection.pizza3.name"), description: tString("fourSection.pizza3.description") },
    { src: "/images/pizza4.png", name: tString("fourSection.pizza4.name"), description: tString("fourSection.pizza4.description") },
    { src: "/images/pizza5.png", name: tString("fourSection.pizza5.name"), description: tString("fourSection.pizza5.description") },
    { src: "/images/pizza6.png", name: tString("fourSection.pizza6.name"), description: tString("fourSection.pizza6.description") },
  ];

  return (
    <>
      <section className="w-full h-4/5 bg-white pt-24 pb-24 md:pb-32 flex flex-col items-center justify-center" id="offer">
        <div className="max-w-screen-2xl h-full mx-auto px-4 text-center">
          <Heading>{tString("fourSection.header") || "Nasze Pizze"}</Heading>
          <div className="relative justify-center items-center xl:w-2/3 md:w-[40%] mx-auto mt-12 hidden md:flex">
            <img
              src="/images/fourSection.png"
              alt="Pizza z różnymi rodzajami"
              className="h-auto w-full rounded-lg"
            />
            <div className="absolute w-full h-full flex justify-center items-center">
              {pizzas.map((pizza, index) => (
                <div key={index} className={`absolute bg-white px-3 py-1 rounded-md shadow-md transition-transform transform hover:rotate-3 hover:scale-105 xl:w-[300px] w-[180px] ${index === 0 ? 'xl:top-12 xl:left-[-14rem] md:top-[-1rem] md:left-[-10rem]' : index === 1 ? 'xl:top-[-1rem] xl:right-[-12rem] md:top-[-2.5rem] md:right-[-10rem]' : index === 2 ? 'xl:top-[40%] xl:right-[-14rem] md:top-[50%] md:right-[-12rem] transform -translate-y-1/2' : index === 3 ? 'xl:top-1/2 xl:left-[-14rem] md:top-[60%] md:left-[-12rem] transform -translate-y-1/2' : index === 4 ? 'xl:bottom-[-.5rem] xl:left-[-13rem] md:bottom-[-2rem] md:left-[-10rem]' : 'xl:bottom-0 xl:right-[-12rem] md:bottom-[-1rem] md:right-[-10rem]'}`}>
                  <p className="text-md font-bold text-primary md:text-[12px] xl:text-base">
                    {index + 1}️ {pizza.name}
                  </p>
                  <p className="text-xs md:text-[10px] xl:text-sm">
                    {pizza.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {pizzas.map((pizza, index) => (
              <div key={index} className="flex flex-col items-center gap-2 hover:scale-105 transition-transform">
                <Image src={pizza.src} alt={pizza.name} width={300} height={200} className="rounded-lg" />
                <p className="text-md font-bold text-primary mt-2">{pizza.name}</p>
                <p className="text-xs text-textDark">{pizza.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full relative bg-darkRed">
        <GridEffect />
      </div>
    </>
  );
};

export default FourSection;
