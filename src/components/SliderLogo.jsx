import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import slide1 from '../../public/images/slide1.jpg';
import slide2 from '../../public/images/slide2.jpg';
import slide3 from '../../public/images/slide3.jpg';
import slide4 from '../../public/images/slide4.jpg';
import leftArrow from '../../public/images/leftArrow.png';
import rightArrow from '../../public/images/rightArrow.png';
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";
import { useRef } from 'react';

const SliderLogo = () => {
  const [numVisible, setNumVisible] = useState(1);
  const slides = [slide1, slide2, slide3, slide4, slide4, slide4, slide4, slide4, slide4, slide4];
  const [height, setHeight] = useState(0);
  const [, setWidth] = useState(0);
  const refSize = useRef(null);
  const { tString } = useTranslation(namespaces.common);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1536) {
          setNumVisible(4);
        } else if (window.innerWidth >= 768) {
          setNumVisible(2);
        } else {
          setNumVisible(1);
        }
      }
    };

    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    setWidth(refSize.current.clientWidth)
    setHeight(refSize.current.clientHeight)
  }, [])

  const responsiveOptions = [
    {
      breakpoint: '1536px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '912px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const slideTemplate = (slide) => {
    return (
      <div className="flex justify-center items-center" style={{ width: '268px' }}>
        <img src={slide.src} alt="Slide" className="w-full h-full object-cover object-center rounded-lg" style={{ width: '268px', height: '123px' }} />
      </div>
    );
  };

  return (
    <section ref={refSize} className="w-full h-[757px] flex max-w-screen-2xl flex-col justify-center items-center">
      <div className="bg" style={{ height: `${height}px` }}></div>      
      <div className="left-0 w-full">
        <div className="flex flex-col lg:grid md:text-5xl text-4xl gap-8 lg:grid-cols-1 py-8 px-4 lg:gap-16 lg:px-16">
          <h2 className="about-me-header md:text-custom-85 mb-4">{tString('section4.header')}</h2>
        </div>
      </div>
      <div className="w-full relative">
        <Carousel
          value={slides}
          itemTemplate={slideTemplate}
          numVisible={numVisible}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          circular
          prevIcon={<img src={leftArrow.src} alt="Previous" className="w-6 h-6 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" />}
          nextIcon={<img src={rightArrow.src} alt="Next" className="w-6 h-6  rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" />}
          className="custom-carousel"
        />
      </div>
    </section>
  );
};

export default SliderLogo;
