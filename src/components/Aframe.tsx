import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './AFrame.css';
import { useRef } from 'react';

function AFrame() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  return(
    <div className='aFrame'>
      <div>
        <Swiper
          scrollbar={{ hide: false }}
          grabCursor={true}     
          resistance={true}     
          resistanceRatio={0.5} 
          threshold={1}         
          speed={500}           
          modules={[Scrollbar]}
          className="mySwiper bottom-3"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}

        >
          <SwiperSlide className="flex justify-evenly items-center mb-4 lg:mb-6 relative">
            <img
              src="/images/IphonePlusAFrame.png"
              alt="AFrame"
              className="max-h-auto max-w-auto lg:max-h-170 lg:max-w-170"
            />
            <div 
              className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
              onClick={handlePrevClick}
            />
            <div 
              className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
              onClick={handleNextClick}
            />
          </SwiperSlide>

          <SwiperSlide className="flex justify-evenly items-center mb-4 lg:mb-6 relative">
            <img
              src="/images/MapAndLocal.png"
              alt="AFrame"
              className="max-h-auto max-w-auto lg:max-h-170 lg:max-w-170"
            />
            <div 
              className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
              onClick={handlePrevClick}
            />
            <div 
              className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
              onClick={handleNextClick}
            />
          </SwiperSlide>
        </Swiper>

        <div>
          <div className="text-xs text-white text-center mx-3 md:text-xl md:mx-8 lg:mt-4 lg:mx-16 lg:text-2xl lg:leading-relaxed">
            A-Frame was inspired by my passion for surfing and the need for a simpler, more intuitive forecast tool. To make complex data easier to understand at a glance, I designed a Dynamic Forecast Card that uses thoughtful typography alignment to prioritize key details as well. This layout transforms dense marine data into a clean, readable format. The app continues to evolve through real-world testing and user feedback, leading to features like Favorites and expanded wind/swell support.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AFrame;