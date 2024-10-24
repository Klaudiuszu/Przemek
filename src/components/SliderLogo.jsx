import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import slide1 from '../../public/images/logo1.jpg';
import slide2 from '../../public/images/logo2.jpg';
import slide3 from '../../public/images/logo3.jpg';
import slide4 from '../../public/images/logo4.jpg';
import slide5 from '../../public/images/logo5.jpg';
import slide6 from '../../public/images/logo6.jpg';
import leftArrow from '../../public/images/leftArrow.png';
import rightArrow from '../../public/images/rightArrow.png';
import { useTranslation } from "next-translations/hooks";
import { namespaces } from "../../translations.config";
import { useRef } from 'react';
import { useCallback } from 'react';

const SliderLogo = () => {
  const [numVisible, setNumVisible] = useState(1);
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6];
  const [height, setHeight] = useState(0);
  const [, setWidth] = useState(0);
  const refSize = useRef(null);
  const { tString } = useTranslation(namespaces.common);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1536) {
          setNumVisible(5);
        } else if (window.innerWidth <= 1280) {
          setNumVisible(3);
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
      breakpoint: '1900px',
      numVisible: 5,
      numScroll: 1
    },
    {
      breakpoint: '1899px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1600px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1300px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1200px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1000px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '700px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const useImageSize = () => {
    const [imageSize, setImageSize] = useState({
      width: '268px',
      height: '123px',
    });

    const handleResize = useCallback(() => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 450) {
          setImageSize({
            width: '200px',
            height: '100px',
          });
        } else {
          setImageSize({
            width: '268px',
            height: '123px',
          });
        }
      }
    }, []);

    useEffect(() => {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return imageSize;
  };

  const slideTemplate = useCallback((slide) => {
    const imageSize = useImageSize();

    return (
      <div className="flex justify-center items-center" style={{ width: '268px' }}>
        <img
          src={slide.src}
          alt="Slide"
          className="w-full h-full object-center rounded-lg"
          style={{
            width: imageSize.width,
            height: imageSize.height,
          }}
        />
      </div>
    );
  }, []);

  return (
    <div ref={refSize} className='w-full flex flex-col gap:0 xl:gap-[11px] h-[400px] md:h-[757px] justify-center items-center px-[16px] sm:px-[64px]'>
      <section className="w-full flex max-w-screen-2xl flex-col justify-center items-center  3xl:pl-[0]">
        <div className="left-0 w-full">
          <div className="flex flex-col lg:grid md:text-5xl text-4xl gap-8 lg:grid-cols-1 pt-8 lg:gap-16">
            <h2 className="md:text-custom-85 flex justify-center xl:justify-start pl-[0] xl:pl-[120px] 3xl:pl-[0]">{tString('section4.header')}</h2>
          </div>
        </div>
      </section>
      <div className="bg" style={{ height: `${height}px` }}></div>
      <div className='flex justify-center max-w-[1440px] 3xl:max-w-[1680px] 3xl:w-[1680px] w-full 2xl:px-[0]'><div className="3xl:w-[1680px] w-full relative">
        <Carousel
          value={slides}
          itemTemplate={slideTemplate}
          numVisible={numVisible}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          circular
          prevIcon={<img src={leftArrow.src} alt="Previous" className="w-8 h-8 md:p-1 md:w-[55px] md:h-[55px] rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" />}
          nextIcon={<img src={rightArrow.src} alt="Next" className="w-8 h-8 md:p-1 md:w-[55px] md:h-[55px] rounded-full shadow bg-white/80 text-gray-800 hover:bg-white" />}
          className="custom-carousel"
        />
      </div></div>
    </div>
  );
};

export default SliderLogo;
