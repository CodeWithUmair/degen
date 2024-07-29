"use client";
import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import RotateAnimation from "../animation/RotateAnimation";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import Link from "next/link";
const WalletCTA = () => {
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
              Degen&nbsp;
              <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-transparent">
                Wallet
              </span>
            </motion.h1>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="max-w-[34ch] tracking-wide text-neutral-400 sm:text-xl"
            >
              {
                "Unleash Full-Spectrum Financial Freedom - Navigate the Crypto Seas with Degen Wallet's All-In-One Banking Suite"
              }
            </motion.p>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <Link href="/wallet">
                <Button>Explore Degen Wallet</Button>
              </Link>
            </motion.div>
          </motion.div>
          <div className="relative mx-auto aspect-square max-h-[75vh] w-full">
            <RotateAnimation className="h-full w-full">
              <Image
                alt="Violin"
                fill
                src="/images/landing/wallet-cta.png"
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

export default WalletCTA;
