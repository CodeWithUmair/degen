"use client";
import React from "react";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import { motion } from "framer-motion";
import MoolaTokenTimer from "../landing/MoolaTokenTimer";
import BurnsHistoryChart from "../charts/BurnsHistoryChart";
import BurnsCorelation from "../landing/BurnsCorelation";

const RoadMap = () => {
  return (
    <section className="relative my-10 mb-20">
      <div className="absolute -left-[30%] top-[30%] -z-10">
        <div className="shadow-effect opacity-[30] blur-[300px]"></div>
      </div>
      <div className="absolute -bottom-[20%] -right-[30%] -z-10">
        <div className="shadow-effect blur-[250px]"></div>
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
          className="relatvie flex flex-col items-center gap-3"
        >
          <motion.h1
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="main-title _capitalize_ max-w-full text-center text-3xl font-black tracking-tight text-white sm:text-6xl"
          >
            <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-transparent">
              &nbsp;Token Burns&nbsp;
            </span>
            Roadmap
          </motion.h1>
        </motion.div>
      </div>
      <div>
        <MoolaTokenTimer />
      </div>
      <div className="mt-5 lg:mt-10 grid max-w-screen-2xl gap-4 px-4 sm:px-6 md:grid-cols-1 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <BurnsHistoryChart />
        </div>
        <div className="order-1 lg:order-2">
          <BurnsCorelation />
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
