import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import a1 from "../assets/image/productBanner/1.jpg";
import a2 from "../assets/image/productBanner/2.jpg";
import a3 from "../assets/image/productBanner/3.jpg";
import a4 from "../assets/image/productBanner/4.jpg";
import a5 from "../assets/image/productBanner/5.jpg";

const Products = () => {
  return (
    <div>
      {/* Hero */}
      <section>
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
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={a1} alt="" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={a2} alt="" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={a3} alt="" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={a4} alt="" className="w-full h-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={a5} alt="" className="w-full h-auto" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Products;
