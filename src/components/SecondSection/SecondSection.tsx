import React, { useEffect, useState } from "react";
import Wave from "react-wavify";
import { testimonialsData } from "./testimonialsData";
import { useTranslation } from "next-translations/hooks";
import { motion } from "framer-motion";
import { namespaces } from "../../../translations.config";

const SecondSection: React.FC = () => {
  const { tString } = useTranslation(namespaces.common);

  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const maxTestimonials = windowWidth < 1280 ? 3 : testimonialsData.length;

  useEffect(() => {
    setIsClient(true);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full bottom-32 text-white">
      <div className="absolute top-0 left-0 w-full">
        <Wave
          fill="#EC4613"
          paused={false}
          options={{
            height: 50,
            amplitude: 40,
            speed: 0.2,
            points: 4,
          }}
        />
      </div>
      <div className="relative w-full min-h-[500px] top-32 flex flex-col justify-center items-center z-1 bg-orange pb-16">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-orange-900">{tString("testimonials.header")}</h2>
          <p className="text-lg text-orange-700 max-w-[900px] mx-auto">
            {tString("testimonials.intro")}
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-8 px-4">
        {testimonialsData.slice(0, maxTestimonials).map((testimonial) => (
        <motion.div
          key={testimonial.id}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full sm:w-1/2 lg:w-1/3"
        >
          <div className="bg-orange-200 rounded-lg">
            <p className="text-xl text-orange-900 font-semibold">
              {testimonial.name}
            </p>
            <p className="text-sm text-orange-700">{testimonial.date}</p>
            <p className="text-base text-orange-800 mt-4">
              {tString(testimonial.textKey)}
            </p>
          </div>
        </motion.div>
      ))}
        </div>
      </div>
      <div className="absolute bottom-[-250px] left-0 w-full">
    <Wave
      fill="#EC4613"
      paused={false}
      options={{
        height: 50,
        amplitude: 40,
        speed: 0.2,
        points: 4,
      }}
      style={{ transform: "rotate(180deg)" }} // Odwrócenie fali o 180°
    />
  </div>
    </div>
  );
};

export default SecondSection;
