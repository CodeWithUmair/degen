"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import MoolaLineChart from "../landing/MoolaLineChart";
import Container from "../ui/Container";
import HoldersChart from "../charts/HoldersChart";
import MoolaTokenDetails from "./MoolaTokenDetails";
import { FADE_UP_ANIMATION_VARIANTS, staggeredPop } from "@/assets/mock";
import Image from "next/image";

const MoolaTokenCharts = () => {
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
    <section className="relative pt-1">
      <div className="absolute right-0 top-[50%] -z-10 -translate-y-[50%] translate-x-3/4">
        <div className="shadow-effect opacity-70 blur-[175px]"></div>
      </div>
      <div className="absolute -bottom-[10%] -left-[10%] -z-10">
        <div className="shadow-effect opacity-60 blur-[200px]"></div>
      </div>

      <Container>
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
            className="font-weight-900 mx-10 h-14 bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-6xl font-extrabold !leading-[5rem] text-transparent xl:h-16 xl:text-8xl"
          >
            Price Chart
          </motion.h2>
        </motion.div> */}

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
        > */}
        <div>
          <h2 className="font-weight-900 mx-10 h-14 bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-center text-6xl font-extrabold !leading-[5rem] text-transparent xl:h-16 xl:text-start xl:text-8xl">
            Price Chart
          </h2>
        </div>
        {/* </motion.div> */}

        <motion.div
          className="relative mb-4 flex h-full flex-col gap-4 xl:flex-row"
          variants={container}
          initial="hidden"
          animate="visible"
          ref={showRef}
        >
          <motion.div
            className="top-right-shadow w-full xl:w-[55%]"
            variants={staggeredPop}
          >
            <MoolaLineChart />
          </motion.div>

          <motion.div className="w-full xl:w-[45%]" variants={staggeredPop}>
            <MoolaTokenDetails />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative flex flex-col gap-4 xl:flex-row"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex w-full flex-col justify-between gap-20 rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-7 shadow-md backdrop-blur-[10px] xl:w-[55%]"
            variants={staggeredPop}
          >
            <div className="flex justify-between">
              <div>
                <div className="text-xs text-gray-400 lg:text-sm xl:text-lg">
                  Daily Minted Token
                </div>
                <div className="mt-4 text-xl font-bold lg:text-3xl 2xl:text-4xl">
                  ~0
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-400 lg:text-sm xl:text-lg">
                  Avg. Minting Ratio
                </div>
                <div className="mt-4 text-end text-xl font-bold lg:text-3xl 2xl:text-4xl">
                  0%
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-xs text-gray-400 lg:text-sm xl:text-lg">
                  Monthly Token Burns
                </div>
                <div className="mt-4 text-xl font-bold lg:text-3xl 2xl:text-4xl">
                  ~0
                  <span className="ml-2 mt-4 text-xs font-thin text-gray-400 lg:ml-4 lg:text-sm 2xl:text-lg">
                    MOOLA
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-end text-xs text-gray-400 lg:text-sm xl:text-lg">
                  Burn Rate
                </div>
                <div className="mt-4 text-xl font-bold xl:text-3xl 2xl:text-4xl">
                  ~0
                  <span className="ml-2 text-xs font-thin text-gray-400 lg:ml-4 lg:text-sm 2xl:text-lg">
                    MOOLA/min
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full rounded-3xl border-[0.5px] border-[#662044] bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-5 shadow-md backdrop-blur-[10px] xl:w-[45%]"
            variants={staggeredPop}
          >
            <HoldersChart />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default MoolaTokenCharts;
