"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Container from "../ui/Container";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import SocialBanner from "./SocialBanner";
import DegentWalletSales from "../landing/DegentWalletSales";
import DegentWalletSalesChart from "../charts/DegentWalletSalesChart";
import Image from "next/image";

const CommunityGrowth = () => {
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
    <section className="relative max-w-screen-2xl pt-1 my-12">
      <div className="absolute right-0 top-[50%] -z-10 -translate-y-[50%] translate-x-3/4">
        <div className="shadow-effect opacity-70 blur-[175px]"></div>
      </div>
      <div className="absolute -bottom-[10%] -left-[10%] -z-10">
        <div className="shadow-effect opacity-60 blur-[200px]"></div>
      </div>

      <Container>
      <motion.div
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className=""
        >
          {/* <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="font-weight-900 mx-10 h-24 self-center bg-gradient-to-b from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-center text-6xl font-extrabold !leading-[6rem] text-transparent xl:h-32 xl:text-[7rem]"
          >
            Non-Fungible Tokens
          </motion.h2> */}
          <motion.div
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="flex justify-center"
          >
            <Image
              src="/images/moola-token/Community_Growth.png"
              width={1000}
              height={140}
              alt="Non Fungible Token"
            />
          </motion.div>
        </motion.div>

        {/* <motion.div
          initial="hidden"
          animate={mainControls}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className=""
        >
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="font-weight-900 mx-10 h-14 bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-center text-6xl font-extrabold !leading-[5rem] text-transparent xl:h-16 xl:text-8xl"
          >
            Community Growth
          </motion.h2>
        </motion.div> */}

        <motion.div
          className="mx-auto max-w-screen-2xl gap-5 rounded-3xl bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] p-4 pb-0 -mt-10"
          variants={container}
          initial="hidden"
          animate="visible"
          ref={showRef}
        >
          <SocialBanner />
        </motion.div>

        <div className="mx-auto mt-10 flex w-full max-w-screen-2xl flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-[45%]">
            <DegentWalletSales />
          </div>

          <div className="mx-auto w-full">
            <div className="col-span-5 col-start-3 row-span-3 row-start-2 self-center rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4 py-6 shadow-md">
              <div className="flex items-center justify-center space-x-6 rounded-3xl p-4">
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-[#F48D59]"></span>
                  <span className="text-sm font-thin text-white">
                    Units Sold
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-[#E34768]"></span>
                  <span className="text-sm font-thin text-white">
                    Revenue (USD)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-[#4286F5]"></span>
                  <span className="text-sm font-thin text-white">
                    Trend Line for Revenue (USD)
                  </span>
                </div>
              </div>

              <div className="h-auto">
                <DegentWalletSalesChart />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityGrowth;
