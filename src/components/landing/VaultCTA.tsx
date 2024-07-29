"use client";
import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import RotateAnimation from "../animation/RotateAnimation";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import Link from "next/link";

const VaultCTA = () => {
  return (
    <section className="relative flex items-center pb-24">
      <div className="absolute bottom-[10%] left-[25%] -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
      <Container>
        <div className="grid gap-5 sm:gap-0 md:grid-cols-2 md:items-center">
          <div className="relative mx-auto aspect-[1.375] w-full">
            <RotateAnimation left className="h-full w-full">
              <Image
                alt="Violin"
                fill
                src="/images/landing/vault-cta.png"
                className="object-contain"
              />
            </RotateAnimation>
            <div className="absolute -left-[55%] top-[3%] -z-10 w-[75%] -rotate-3">
              <div className="relative aspect-square w-[768px]">
                <Image
                  fill
                  className="object-fit"
                  src="/images/landing/cta-curve.svg"
                  alt="design asset line"
                />
              </div>
            </div>
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
            className="flex flex-col items-start gap-4"
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl font-extrabold text-white sm:text-6xl"
            >
              Degen&nbsp;
              <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-transparent">
                Vault
              </span>
            </motion.h2>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="max-w-[34ch] tracking-wide text-neutral-400 sm:text-xl"
            >
              Step Into Unbreachable Security - Your Digital Assets Guarded Like
              Never Before
            </motion.p>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <Link href="vault">
                <Button>Explore Degen Vault</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>
      <div className="absolute -right-[10%] bottom-0 -z-10">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>

      <div className="absolute -right-[10%] bottom-0 -z-10 -rotate-3">
        <div className="relative aspect-[1] w-full">
          <Image
            fill
            className="object-contain"
            src="/images/landing/cta-circle.svg"
            alt="design asset line"
          />
        </div>
      </div>
    </section>
  );
};

export default VaultCTA;
