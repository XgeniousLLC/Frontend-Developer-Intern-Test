import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import products from "../products.json";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import a1 from "../assets/image/productBanner/1.jpg";
import a2 from "../assets/image/productBanner/2.jpg";
import a3 from "../assets/image/productBanner/3.jpg";
import a4 from "../assets/image/productBanner/4.jpg";
import a5 from "../assets/image/productBanner/5.jpg";
import { MdArrowForwardIos } from "react-icons/md";
import ProductCard from "../components/ProductCard";
import FooterTailwind from "../components/FooterTailwind";
import Awards from "../components/Awards";

const Products = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative ">
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
          <h1 className=" md:text-4xl font-bold mb-4">Offer For You</h1>
          <button
            type="button"
            className="bg-blue-600 text-white md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            See Details
          </button>
        </div>

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
      {/* popular product */}
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <h3>Popular Products</h3>
          <button
            className="border-0 bg-transparent text-success flex justify-center items-center gap-2"
            type="button"
          >
            See All{" "}
            <span className="">
              <MdArrowForwardIos className="" />
            </span>
          </button>
        </div>
        <hr className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {products.map((product) => (
            <div key={product.id} className="mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <Awards />
      </div>
      .
      <FooterTailwind />
    </div>
  );
};

export default Products;
