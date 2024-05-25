import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


import Image from 'next/image';
import testimonial1 from "../../public/images/Testimonials/Testimonial (4).png";
import testimonial2 from "../../public/images/Testimonials/Testimonial (1).png";
import testimonial3 from "../../public/images/Testimonials/Testimonial (2).png";
import testimonial4 from "../../public/images/Testimonials/Testimonial (3).png";

export default function App() {
  return (
    <>
    <style jsx global>{`
        #app {
          height: 100%;
        }
        html,
        body {
          position: relative;
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #000;
          background: #eee;
        }
        .swiper {
          width: 100%;
          height: 100%;
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .swiper-slide img {
          display: block;
          width: 60%;
          height: 60%;
          object-fit: cover;
        }
      `}</style>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
        <Image src={testimonial1} alt="Slide 1" /> 
        </SwiperSlide>
        <SwiperSlide>
        <Image src={testimonial2} alt="Slide 2" /> 
        </SwiperSlide>
        <SwiperSlide>
        <Image src={testimonial3} alt="Slide 3" /> 
        </SwiperSlide>
        <SwiperSlide>
        <Image src={testimonial4} alt="Slide 4" /> 
        </SwiperSlide>
      </Swiper>
    </>
  );
}
