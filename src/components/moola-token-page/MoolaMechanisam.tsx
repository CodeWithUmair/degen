"use client";
import React from "react";
import { motion } from "framer-motion";
// import RotateAnimation from "../animation/RotateAnimation";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import MoolaRewards from "../landing/MoolaRewards";
import LiquidityPoolsTable from "../landing/LiquidityPoolsTable";
const MoolaMechanisam = () => {
  return (
    <section className="relative mb-20">
      <div className="absolute -bottom-[20%] -right-[30%] -z-10">
        <div className="shadow-effect blur-[200px]"></div>
      </div>
      <div className="absolute -left-[30%] top-[30%] -z-10">
        <div className="shadow-effect opacity-[30] blur-[300px]"></div>
      </div>
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
          Exchange Listings and
          <br />
          <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
            &nbsp;Liquidity Pools&nbsp;
          </span>
        </motion.h1>
      </motion.div>

      <div className="mt-10 flex w-full max-w-screen-2xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="w-full lg:w-[45%]">
          <MoolaRewards />
        </div>

        <div className="mx-auto w-full hidden sm:block">
          <LiquidityPoolsTable />
        </div>
      </div>
    </section>
  );
};

export default MoolaMechanisam;
