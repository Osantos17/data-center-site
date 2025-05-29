import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

function HarborView() {
  const swiperRef = useRef<SwiperType | null>(null);
  
  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const slides = [
    {
      src: "/images/HarborView/HVInfoFrame.png",
      alt: "HVInfo"
    },
    {
      src: "/images/HarborView/HVSiteFrame.png",
      alt: "HVSite"
    },
    {
      src: "/images/HarborView/HVAmenFrame.png",
      alt: "HVAmen"
    },
    {
      src: "/images/HarborView/HVB1Frame.png",
      alt: "HVBq"
    },
    
  ];

  return(
    <div className='HarborView'>
      <div className='text-white underline text-center text-lg lg:text-5xl mb-5 lg:mb-14'>
        HARBOR VIEW
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
          This site contains three 6-7 story buildings, a garage, and an amenities building. I took on the usual BIM tasks of setting up the site coordinates and coordinating that with consultants, BIM 360 set up, and selecting teams for each structure. The design of these buildings had a lot of curvature compared to typical buildings, so a lot of my time for this campus was spent ensuring accuracy and assisting the teams. A highlight of mine is creating an accurate 3D exterior pattern which consisted of 4 patterns, 3 colors on a curved surface; I managed to achieve this with a railing.
          </div>
        </div>
      </div>
    </div>
  )
}

export default HarborView;