import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import './WoodWorking.css';
import { useRef } from 'react';

function WoodWorking() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleNextClick = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrevClick = () => {
    swiperRef.current?.slidePrev();
  };

  return (
    <div className="woodWorking flex flex-row w-full px-2 py-6 lg:py-20">
      <div className="w-1/2 text-xs pr-4 text-white text-left md:text-lg lg:text-2xl lg:leading-relaxed">
        Woodworking for me is about creating pieces that are both beautiful and functional. Every detail matters, once the first cut is made, there's no turning back. I still very much enjoy designing and have plenty of outlets for it in my personal time.
      </div>
      <div className="woodImages w-1/2 ml-auto mt-1 lg:w-2/5 relative">
        <Swiper
          scrollbar={{ hide: false }}
          grabCursor={true}
          modules={[Scrollbar]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="/images/Crib.png"
                alt="Crib"
                className="woodworking-image"
              />
              <div 
                className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handlePrevClick}
              />
              <div 
                className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="/images/Coop.png"
                alt="Coop"
                className="woodworking-image"
              />
              <div 
                className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handlePrevClick}
              />
              <div 
                className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="/images/FirePit.png"
                alt="FirePit"
                className="woodworking-image"
              />
              <div 
                className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handlePrevClick}
              />
              <div 
                className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="/images/Table.png"
                alt="Table"
                className="woodworking-image"
              />
              <div 
                className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handlePrevClick}
              />
              <div 
                className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="/images/Tower.png"
                alt="Tower"
                className="woodworking-image"
              />
              <div 
                className="absolute left-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handlePrevClick}
              />
              <div 
                className="absolute right-0 top-0 w-1/2 h-full cursor-pointer"
                onClick={handleNextClick}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default WoodWorking;