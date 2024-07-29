"use client";
import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";

const OurMission = () => {
  return (
    <motion.section
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
      className="relative flex flex-col items-center justify-center gap-10 py-24 min-h-[576px] text-center "
    >
      <div className="absolute right-[28%] top-[20%] -z-10 -rotate-3">
        <div className="relative aspect-[1] w-[225px]">
          <Image
            fill
            className="object-contain"
            src="/images/landing/cta-circle.svg"
            alt="design asset line"
          />
        </div>
      </div>
      <motion.h1
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-3xl font-extrabold text-white sm:text-6xl"
      >
        Our&nbsp;
        <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-transparent">
          Mission
        </span>
      </motion.h1>
      <motion.p
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="sm:text-xl mb-3 max-w-[47ch] tracking-wide text-neutral-400"
      >
        Our mission is to bring Decentralized Autonomous Technology to the
        masses, creating a world where everyone can thrive in a safe and secure
        digital environment.
      </motion.p>
    </motion.section>
  );
};

export default OurMission;
