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
      <div className='text-white underline text-center text-lg md:text-2xl lg:text-5xl mb-5 lg:mb-14'>
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
          This campus includes three 6–7 story buildings, a garage, and amenities. I established site coordinates and the BIM 360 environment while working closely with consultants and internal teams. To address the complex curved exterior geometries, I developed a 3D multi-pattern façade solution using Revit railings to match architectural intent. I helped maintain design accuracy and facilitated cross-team collaboration by assigning specialized teams to each building and managing data integrity through multiple design iterations.
          </div>
        </div>
      </div>
    </div>
  )
}

export default HarborView;