import React from "react";
import { testimonialsData } from "./testimonialsData";
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "@constants/namespaces";
import { useLanguage } from "../../hooks/useLanguage";
import Heading from "../UI/Heading";

const Testimonials: React.FC = () => {
  const { tString } = useTranslation(namespaces.common);
  const { language } = useLanguage();

  return (
    <div className="absolute bottom-56 left-0 w-full flex justify-center items-center flex-col overflow-hidden">

      {/* Nagłówek sekcji */}
      <Heading className="text-center" isWhite={true}>{tString("testimonials.header")}</Heading>

      <div className="py-8 shadow-xl w-full">
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll gap-8 items-center">
            {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="h-auto rounded-2xl w-full max-w-xs md:max-w-md"
              >
                <div className="flex flex-col gap-4">
                  <div className="p-6 w-[300px] h-[200px]">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-white text-xs">{testimonial.date}</p>
                    </div>
                    <p className="text-white text-sm">{tString(testimonial.textKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonials;
