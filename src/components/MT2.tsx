import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

function MT2() {
  const swiperRef = useRef<SwiperType | null>(null);
  
  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const slides = [
    {
      src: "/images/MT2/MT2RenderFrame.png",
      alt: "MT2Render"
    },
    {
      src: "/images/MT2/MT2SitePlanFrame.png",
      alt: "MT2Site"
    },
    {
      src: "/images/MT2/MT2FrontFrame.png",
      alt: "MT2Front"
    },
    {
      src: "/images/MT2/MT2EntryFrame.png",
      alt: "MT2Entry"
    },
    
  ];

  return(
    <div className='MT2'>
      <div className='text-white underline text-center text-lg md:text-2xl lg:text-5xl mb-5 lg:mb-14'>
        MOFFET TOWERS ll
      </div>
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
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="flex justify-evenly items-center mb-4 lg:mb-6 relative">
              <img
                src={slide.src}
                alt={slide.alt}
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
          ))}
        </Swiper>

        <div>
          <div className="text-xs text-white text-center mx-3 md:text-xl md:mx-8 lg:mt-4 lg:mx-16 lg:text-2xl lg:leading-relaxed">
          Five 8-story buildings, three garages, and a single amenities reside on this site. For this project, I coordinated the garages and a hotel that was unfortunately put on permanent hold at 95% CD. This was prior to BIM 360, so we used plug-ins to clean our models and coordinate and using Box as our folder structure to coordinate with our consultants.
          </div>
        </div>
      </div>
    </div>
  )
}

export default MT2;