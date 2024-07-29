"use client";
import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import RotateAnimation from "../animation/RotateAnimation";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import Link from "next/link";
const MoolaCTA = () => {
  return (
    <section className="relative flex min-h-[700px] items-center pb-24">
      <div className="absolute top-[25%] -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>

      <Container>
        <div className="flex flex-col-reverse sm:items-center md:grid md:grid-cols-2">
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
            className="flex flex-col items-start gap-4"
          >
            <motion.h1
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl font-extrabold text-white sm:text-6xl"
            >
              Moola&nbsp;
              <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-transparent">
                Token
              </span>
            </motion.h1>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="max-w-[34ch] tracking-wide text-neutral-400 sm:text-xl"
            >
              {
                "MOOLA Token - An ERC20 utility token used to incentivize users to join our beta test program to help us battle-test our technology. 33% of all the fees collected inside the wallet would be used to buy MOOLA Tokens and burn them on the open market."
              }
            </motion.p>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-8">
              <Link href="/moola-token">
                <Button>Explore Moola Token</Button>
              </Link>
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex items-center gap-5" >

              <Link href="https://coinmarketcap.com/currencies/degenforest/" target="_blank">
                <Image 
                className="object-contain rounded-[50px] p-1"
                src="/images/moola-token/coinmarketcap.png" alt="Coin Market Cap Image" width={40} height={40} />
              </Link>

              <Link href="https://dexscreener.com/base/0xe6ddcb17d62898fa7b878c71bd91c6c454978e11" target="_blank">
                <Image 
                className="object-contain rounded-[50px] p-1"
                src="/images/moola-token/dexscreener.png"alt="Dex Screener Image" width={40} height={40} />
              </Link>

                </motion.div>
            </motion.div>

          </motion.div>
          <div className="relative mx-auto aspect-square max-h-[75vh] w-full">
            <RotateAnimation className="h-full w-full">
              <Image
                alt="Violin"
                fill
                src="/images/moola-token/moola-hero-circle-1.png"
                className="object-contain"
              />
            </RotateAnimation>
            <div className="absolute -right-[15%] -top-[25%] -z-10 w-[75%] -rotate-3">
              <div className="relative aspect-square w-[576px]">
                <Image
                  fill
                  src="/images/landing/cta-curve.svg"
                  alt="design asset line"
                />
              </div>
            </div>
            <div className="absolute -left-[7%] top-[40%] -z-10 w-[75%] max-w-[400px] -rotate-3">
              <div className="relative aspect-[1] w-full">
                <Image
                  fill
                  className="object-contain"
                  src="/images/landing/cta-circle.svg"
                  alt="design asset line"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-[25%] right-0 -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
    </section>
  );
};

export default MoolaCTA;
