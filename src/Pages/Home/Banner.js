import React from "react";
import slide1 from "../../images/wed1.jpg";
import slide2 from "../../images/wed2.jpg";
import slide3 from "../../images/ian.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Banner = () => {
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
      >
        <SwiperSlide>
          <div class="">
            <img
              className="object-cover bg-top md:h-[400px]  lg:h-[500px]  w-full"
              src={slide1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="">
            <img
              className="object-cover bg-top md:h-[400px]  lg:h-[500px]  w-full"
              src={slide2}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="">
            <img
              className="object-cover bg-top md:h-[400px]  lg:h-[500px]  w-full"
              src={slide3}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
