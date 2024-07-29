"use client";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { motion } from "framer-motion";
// import RotateAnimation from "../animation/RotateAnimation";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import { useDegenContext } from "@/context/DegenContext";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const MoolaTokenHero = () => {
  const { tokenDetails, truncateAmount } = useDegenContext();
  const [getPrice, setGetPrice] = useState<number>(0);

  const handleGetPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetPrice(Number(e.target.value));
  };

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

  const images = useMemo(
    () => (
      <>
        <motion.div variants={item}>
          <div className="mt-2 h-fit w-fit rounded-full blur-[1px] filter">
            <div className="relative aspect-square w-[80px] rounded-full sm:w-[130px]">
              <Image
                fill
                src="/images/moola-token/moola-hero-circle-1.png"
                alt="design asset line"
                className="h-auto w-full rotate-[330deg] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
        <motion.div variants={item}>
          <div className="relative aspect-square w-[130px] rounded-full sm:w-[230px]">
            <Image
              fill
              src="/images/moola-token/moola-hero-circle-1.png"
              alt="design asset line"
              className="h-auto w-full object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div variants={item}>
          <div className="h-fitright-[0%] w-fit rotate-[40deg] rounded-full blur-[3px] filter">
            <div className="relative aspect-square w-[70px] rounded-full sm:w-[90px]">
              <Image
                fill
                src="/images/moola-token/moola-hero-circle-1.png"
                alt="design asset line"
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </>
    ),
    [],
  );

  return (
    <section className="relative mb-20 mt-0 flex justify-center items-center min-h-[70vh] pt-1 xl:min-h-[80vh]">
      <div className="absolute -left-[10%] -top-[15%] -z-10 -translate-x-1/3 -translate-y-1/2">
        <div className="shadow-effect blur-[175px]"></div>
      </div>
      <div className="absolute right-[20%] top-[20%] -z-10">
        <div className="shadow-effect blur-[200px]"></div>
      </div>
      <div className="absolute -right-[78%] top-[40%] -z-[10] w-[100%] rotate-45 2xl:-right-[91%]">
        <div className="relative aspect-square w-[400px]">
          <Image
            fill
            className="object-fit"
            src="/images/landing/cta-curve.svg"
            alt="design asset line"
          />
        </div>
      </div>
      <div className="absolute -left-[3%] top-[20%] -z-10 w-[100%] -rotate-0 2xl:-left-[16%]">
        <div className="relative aspect-square w-[768px]">
          <Image
            width={300}
            height={200}
            className="object-fit"
            src="/images/moola-curve.svg"
            alt="design asset line"
          />
        </div>
      </div>
      <div className="absolute -left-[75px] top-[-50px] -z-10 w-full min-w-[450px] sm:top-[-165px] sm:min-w-[950px] md:top-[-157px] md:min-w-[977px] lg:top-[-210px] lg:min-w-[1190px] xl:top-[-279px] xl:min-w-[1410px]">
        <div className="relative aspect-[2/1] w-full">
          <Image
            fill
            src="/images/vault/vault-hero-line.svg"
            alt="design asset line"
          />
        </div>
      </div>
      <div className="absolute right-[66%] top-[87px] -z-10 w-fit sm:right-[66%] sm:top-[160px] md:right-[66%] md:top-[160px] lg:right-[63%] lg:top-[160px] xl:top-[176px]">
        <div className="relative aspect-square w-6">
          <Image fill src="/images/icons/star.svg" alt="design star" />
        </div>
      </div>
      <div className="absolute right-[27%] top-[2%] -z-10 sm:right-[27%] sm:top-[3%] md:right-[29%] md:top-[4%] lg:right-[32%] lg:top-[5%] xl:right-[37%] xl:top-[48px]">
        <div className="relative aspect-square w-6">
          <Image
            fill
            src="/images/icons/start-gradient.svg"
            alt="design star"
          />
        </div>
      </div>
      <Container>
        <div className="relative mx-auto aspect-[2/1] w-full max-w-[1000px]">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="relative flex w-full justify-evenly pb-0 lg:px-10 lg:pb-5"
          >
            {images}
          </motion.div>

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
              className="main-title max-w-full text-2xl font-black tracking-tight text-white sm:text-7xl"
            >
              <span className="text-gradient">&nbsp;MOOLA&nbsp;</span>
              Token Metrics
            </motion.h1>
          </motion.div>

          <div className="gradient-border-og relative mx-auto mb-10 mt-5 flex w-full max-w-[400px] flex-col items-center rounded-[20px] p-7">
            <div className="flex h-auto w-full flex-col items-center">
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
                  className="main-title _capitalize_ max-w-full text-center text-2xl font-black tracking-tight text-white sm:text-4xl"
                >
                  ${tokenDetails.self_reported_market_cap.toLocaleString()}
                </motion.h1>
                <motion.p
                  variants={FADE_UP_ANIMATION_VARIANTS}
                  className="main-title _capitalize_ flex max-w-full gap-2 text-center text-sm tracking-tight text-white sm:text-[1.2rem]"
                >
                  <span className="text-[#8C8C8C]">Price</span>
                  <span className="">
                    ${truncateAmount(tokenDetails.price, 5)}
                  </span>
                  <span
                    className={`relative flex justify-center gap-1 ${
                      tokenDetails.priceVariation > 0
                        ? "text-[#18A800]"
                        : "text-red-500"
                    }`}
                  >
                    {truncateAmount(Math.abs(tokenDetails.priceVariation), 2)}%
                    <Image
                      width={20}
                      height={20}
                      src={`/images/icons/${tokenDetails.priceVariation > 0 ? "green-arrow-up.svg" : "red-arrow-down.svg"}`}
                      alt="green arrow up"
                      className="aspect-square w-[10px] object-contain"
                    />
                  </span>
                </motion.p>
              </motion.div>
            </div>
            <Link
              href={`https://app.uniswap.org/#/swap?chain=base&exactField=input&exactAmount=${getPrice}&inputCurrency=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&outputCurrency=0x059933F100A5A28d8C729F6941b3D2bc276d35Dc`}
              target="_blank"
            >
              <Button customVariant="mt-[20px] mb-[-50px] w-full max-w-[280px] text-white block rounded-full bg-gradient-to-br from-[#F8A55F] via-[#E43345] via-[#E43345] to-[#CB4CC4] px-6 py-2 text-center text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 disabled:cursor-not-allowed sm:px-12 sm:py-3.5">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MoolaTokenHero;
