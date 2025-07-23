import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

function Southline() {
  const swiperRef = useRef<SwiperType | null>(null);
  
  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  const slides = [
    {
      src: "/images/Southline/SL-CoverFrame.png",
      alt: "SLCover"
    },
    {
      src: "/images/Southline/SL-Site-PlanFrame.png",
      alt: "SLSite"
    },
    {
      src: "/images/Southline/SL-B1Frame.png",
      alt: "SLB1"
    },
    {
      src: "/images/Southline/SL-B1-2Frame.png",
      alt: "SLB2"
    },
    
  ];

  return(
    <div className='SouthLine'>
      <div className='text-white underline text-center text-lg md:text-2xl lg:text-5xl mb-5 lg:mb-14'>
        SOUTHLINE
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
          Southline is a multi-phase development consisting of six 6–7 story office and life science buildings, three garages, and an amenities building. The initial phase focused on two buildings alongside the amenities and parking structures. I led the setup of project and site coordinates, modeling standards, and Revit family management across all phases to ensure consistency and efficiency. I also coordinated BIM 360 workflows, managing file uploads, folder structures, and user permissions to streamline collaboration between design and consulting teams. While supporting the immediate needs of Phase 1, I proactively planned scalable and adaptable BIM processes to support future phases.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Southline;