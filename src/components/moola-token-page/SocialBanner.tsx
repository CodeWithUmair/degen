"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

function SocialBanner() {
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

  const item = {
    hidden: { y: 20, opacity: 0, scale: 0.5 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <div className="relative mx-auto flex h-[300px] w-full items-center justify-evenly">
        <motion.div variants={item} className="absolute -left-[9%] -top-[1%]">
          <div className="blur-[1px] filter">
            <div className="aspect-square w-[80px] sm:w-[300px]">
              <Image
                fill
                src="/images/moola-token/left_coin.png"
                alt="design asset line"
                className="h-auto w-full object-contain saturate-200 filter"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="-z-2 leading-0 absolute -bottom-[36%]"
        >
          <div className="">
            <div className="aspect-square w-[80px] sm:w-[430px]">
              <Image
                fill
                src="/images/moola-token/ellipse.png"
                alt="design asset line"
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={item}
          className="absolute bottom-[10%] right-[2%]"
        >
          <div className="mt-2 h-fit w-fit rounded-full blur-[1px] filter">
            <div className="aspect-square w-[80px] rounded-full">
              <Image
                fill
                src="/images/moola-token/moola-hero-circle-1.png"
                alt="design asset line"
                className="h-auto w-full rotate-[30deg] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
        <div className="z-10">
          <Image
            src="/images/moola-token/youtube.png"
            alt="Mobile Retention"
            width={180}
            height={235}
          />
        </div>
        <div className="z-10">
          <Image
            src="/images/moola-token/discord.png"
            alt="Mobile Retention"
            width={180}
            height={235}
          />
        </div>
        <div className="z-10">
          <Image
            src="/images/moola-token/twitter.png"
            alt="Mobile Retention"
            width={180}
            height={235}
          />
        </div>
      </div>
    </>
  );
}

export default SocialBanner;
