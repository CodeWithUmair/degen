"use client";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import HeroNFT from "../landing/HeroNFT";
import HeroTrend from "../landing/HeroTrend";
import HeroSwap from "../landing/HeroSwap";
import HeroRevenue from "../landing/HeroRevenue";
import HeroStats from "../landing/HeroStats";
import Link from "next/link";
import { motion } from "framer-motion";
import RotateAnimation from "../animation/RotateAnimation";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";

const VaultHero = () => {
  return (
    <section className="relative mt-12 flex pt-12">
      <div className="absolute left-0 top-0 -z-10 -translate-x-1/3 -translate-y-1/2">
        <div className="shadow-effect blur-[175px]"></div>
      </div>
      <div className="absolute -left-[75px] -top-[16%] -z-10 w-[75%]">
        <div className="relative aspect-[1.8] w-full">
          <Image
            fill
            src="/images/vault/vault-hero-line.svg"
            alt="design asset line"
          />
        </div>
      </div>
      <div className="absolute  left-[2.5%] top-[2.5%] -z-10">
        <div className="relative aspect-square w-6">
          <Image fill src="/images/icons/star.svg" alt="design asset line" />
        </div>
      </div>
      <Container>
        <div className="flex grid-cols-2 flex-col-reverse lg:grid">
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
              className="relatvie flex flex-col items-start gap-3"
            >
              <motion.h1
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="main-title _capitalize_ _capitalize_ max-w-[13ch] text-3xl font-black tracking-tight text-white sm:text-6xl"
              >
                Introducing the
                <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
                  &nbsp;Degen&nbsp;
                </span>
                Vault
              </motion.h1>

              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="mb-3 max-w-[45ch] tracking-wide text-neutral-400 sm:text-xl"
              >
                {
                  "Step into the nexus of personal finance. With the robustness of bank vaults and the finesse of advanced tech, Degen Vault stands as an impenetrable guardian for your digital assets. Here, your crypto doesn't just stay secure—it prospers with unmatched peace of mind. Dive into the new benchmark of crypto safety: Welcome to the Degen Vault, where digital banking meets unparalleled security."
                }
              </motion.p>
              <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="inline-block"
              >
                <div className="group relative">
                  <Link
                    href="/vault/#orderNow"
                    className="text-gradient-sm text-lg font-bold"
                  >
                    Order Now
                  </Link>
                  <div className="font-small invisible absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded-lg bg-gray-900 bg-gradient-to-br from-[#81114257] to-[#863A5C3E] px-3 py-2 text-xs text-white opacity-0 shadow-md shadow-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100 dark:bg-gray-700">
                    Coming Soon
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <hr className="h-[1px] w-full border-none bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4]" />
              </motion.div>
            </motion.div>
          </div>
          <div className="relative mx-auto aspect-square w-[75%]">
            <Link href={"#orderNow"}>
              <RotateAnimation className="h-full w-full">
                <Image
                  fill
                  alt="Violin"
                  src="/images/vault/vault-hero.png"
                  className="mx-auto object-contain sm:self-end sm:rounded-ss-[30px]  md:rounded-ss-[60px]"
                />
              </RotateAnimation>
            </Link>
            <div className="absolute -right-[15%] -top-[25%] -z-10 w-[75%] rotate-12">
              <div className="relative aspect-square w-[576px]">
                <Image
                  fill
                  src="/images/landing/cta-curve.svg"
                  alt="design asset line"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VaultHero;
