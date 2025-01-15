import React from 'react';
import { testimonialsData } from './testimonialsData';

const Testimonials: React.FC = () => {
  return (
    <div className="absolute bottom-56 left-0 w-full flex justify-center items-center flex-col overflow-hidden">
        <h1 className="font-bold text-white text-center text-4xl mb-6">
          Mówicie o nas!
        </h1>
      <div className="backdrop-blur-lg bg-white/30 py-8 shadow-xl w-full">
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll gap-8 items-center">
            {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white h-auto rounded-2xl shadow-xl w-full max-w-xs md:max-w-md"
              >
                <div className="flex flex-col gap-4">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 w-[300px] h-[200px]">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-700">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
                    </div>
                    <p className="text-gray-600 text-sm">{testimonial.text}</p>
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
