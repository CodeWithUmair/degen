"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import NFTCardSale from "./NFTCardSale";
import Container from "../ui/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FADE_UP_ANIMATION_VARIANTS, collectionData } from "@/assets/mock";

import { motion } from "framer-motion";
import axios from "axios";
import { DEGEN_TOKEN_ADDRESS, RESERVOIR_BASE_URL } from "@/config";
import { fetchNFTDataOnSale } from "@/helpers/collection";

const DegenCollection = () => {
  const [nftDataOnSale, setData] = useState<any[] | []>([]);
  useEffect(() => {
    fetchNFTDataOnSale(setData, 20);
  }, []);

  return (
    <section className="relative mx-auto flex max-w-screen-2xl items-center py-24">
      <div className="absolute -left-[10%] top-[25%] -z-10">
        <div className="shadow-effect blur-[250px]"></div>
      </div>
      <div className="absolute -left-[75px] top-[20%] -z-10 w-[75%] -rotate-180">
        <div className="relative aspect-[1.8] w-full">
          <Image
            fill
            src="/images/landing/hero-line.svg"
            alt="design asset line"
          />
        </div>
      </div>
      <Container>
        <div className="flex flex-col justify-between pb-14 md:flex-row md:items-end">
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
            className="flex flex-col gap-4 "
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl font-black tracking-tight text-white lg:text-4xl"
            >
              Our
              <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
                &nbsp;Degen Forest
              </span>{" "}
              Collection
            </motion.h2>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="_capitalize_ mb-3 max-w-[45ch] tracking-wide text-neutral-400 sm:text-xl"
            >
              Here at Degen Forest, we see NFTs as more than just kick-ass art.
              We believe in their potential to create real value and
              opportunities for everyone involved.
            </motion.p>
          </motion.div>
          <div className="flex gap-3">
            <button className="collection-prev bg-primary-gradient rounded-full p-3 text-black duration-300 disabled:bg-[#24284D] disabled:bg-gradient-to-b disabled:from-[#25252566] disabled:to-[#0000005F] disabled:text-white ">
              <span>
                <GrFormPrevious />
              </span>
            </button>
            <button className="collection-next bg-primary-gradient rounded-full p-3 text-black duration-300 disabled:bg-[#24284D] disabled:bg-gradient-to-b disabled:from-[#25252566] disabled:to-[#0000005F] disabled:text-white ">
              <span>
                <GrFormNext />
              </span>
            </button>
          </div>
        </div>
        <div className="sm:w-[125%]">
          <Swiper
            speed={1000}
            spaceBetween={15}
            slidesPerView={1}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".collection-next",
              prevEl: ".collection-prev",
            }}
            pagination={{ clickable: true }}

            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
          >
            <div>
              {!!nftDataOnSale && (
                <>
                  {(nftDataOnSale as any).map((nftData: any, i: number) => {
                    return (
                      <SwiperSlide key={i}>
                        <NFTCardSale data={nftData} />
                      </SwiperSlide>
                    );
                  })}
                </>
              )}
            </div>
          </Swiper>
        </div>
      </Container>
      <div className="absolute -right-[10%] -top-[25%] -z-10">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
    </section>
  );
};

export default DegenCollection;
