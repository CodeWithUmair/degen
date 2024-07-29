"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Container from "../ui/Container";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import SliderCard from "../SliderCard";

// import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

const PartnershipSlider = () => {
  const showRef = useRef(null);
  const isInView = useInView(showRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative my-12 pt-1">
      <div className="absolute right-0 top-[50%] -z-10 -translate-y-[50%] translate-x-3/4">
        <div className="shadow-effect opacity-70 blur-[175px]"></div>
      </div>
      <div className="absolute -bottom-[10%] -left-[10%] -z-10">
        <div className="shadow-effect opacity-60 blur-[200px]"></div>
      </div>

      <div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className="relatvie mb-5 flex flex-col items-center"
        >
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="main-title _capitalize_ max-w-full text-center text-3xl font-black tracking-tight text-white sm:text-6xl"
          >
            <span className="bg-gradient-to-r from-[#F8A55F] to-[#E43345] bg-clip-text text-transparent">
              &nbsp;Partnerships&nbsp;
            </span>
            And Collaborations
          </motion.h2>
        </motion.div>
      </div>

      <div className="my-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
                 <SliderCard/>

          </SwiperSlide>
          <SwiperSlide>
                 <SliderCard/>

          </SwiperSlide>
          <SwiperSlide>
                 <SliderCard/>

          </SwiperSlide>
          <SwiperSlide>
                 <SliderCard/>

          </SwiperSlide>
          <SwiperSlide>
                 <SliderCard/>

          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PartnershipSlider;
