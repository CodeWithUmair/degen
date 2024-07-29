"use client";
import { companies } from "@/assets/data";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const duration = 20;

const Companies = () => {
  const marqueeVariants = {
    animate: {
      x: "-100%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="mx-auto mt-12 flex min-h-[360px] w-full items-center">
      <div className="w-full">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="px-8 pb-12 text-center text-3xl font-black tracking-tight text-white lg:text-4xl"
        >
          Trusted by over{" "}
          <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
            100
          </span>{" "}
          Web3 Companies
        </motion.h2>
        <div
          className="bg-neutralcolor py-6
       md:py-8"
        >
          <div className="relative w-full gap-20 overflow-hidden whitespace-nowrap">
            {Array.from({ length: 2 }).map((item, i) => {
              return (
                <motion.div
                  key={i}
                  variants={marqueeVariants}
                  animate="animate"
                  className="inline-flex min-w-full items-center justify-around gap-20 pr-20"
                >
                  {companies.map(({ logo }, idx) => {
                    return (
                      <div key={idx} className="relative h-20 w-40">
                        <Image
                          fill
                          src={logo}
                          className="object-contain"
                          alt="google icon"
                        />
                      </div>
                    );
                  })}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
