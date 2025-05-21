import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mt-4"
      >
        <SwiperSlide>
          <div className="p-10">
            <img src="https://i.ibb.co/zWHdRDgB/winterizing-7d19aa9c-3578-4f2e-bf88-d16e41d035e6-550x.webp" alt="" className="h-[37.5rem] mx-auto w-6xl"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10">
            <img src="https://i.ibb.co/6RszbS45/types-of-plants-information-set.webp" alt="" className="h-[37.5rem] mx-auto w-6xl"/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10">
            <img src="https://i.ibb.co/vCcwQ6NC/2020-plant-care-basics-mangomini-1.jpg" alt="" className="h-[37.5rem] mx-auto w-6xl"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
