import React, { useState, useEffect } from 'react';
import slide1 from '../../public/images/slide1.jpg';
import slide2 from '../../public/images/slide2.jpg';
import slide3 from '../../public/images/slide3.jpg';
import slide4 from '../../public/images/slide4.jpg';
import leftArrow from '../../public/images/leftArrow.png';
import rightArrow from '../../public/images/rightArrow.png';
import slideDot from '../../public/images/slideDot.png';
import slideDotActive from '../../public/images/slideDotActive.png';

const SliderSection = () => {
  const [curr, setCurr] = useState(0);
  const slides = [slide1, slide2, slide3, slide4];

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  const autoSlide = false;
  const autoSlideInterval = 3000;

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(next, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="overflow-hidden relative w-full h-screen">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}vw)`, width: `${slides.length * 100}vw` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0" style={{ width: '100vw', height: '100vh' }}>
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <img src={leftArrow.src} alt="Previous" className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <img src={rightArrow.src} alt="Next" className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <img
              key={i}
              src={curr === i ? slideDotActive.src : slideDot.src}
              alt={`Dot ${i + 1}`}
              className="w-6 h-6"
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default SliderSection;
