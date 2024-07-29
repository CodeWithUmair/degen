"use client";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";

const WalletDownload = () => {
  return (
    <section className="sec-p-y">
      <Container>
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
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="text-5xl font-black"
          >
            Download the
            <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
              &nbsp;Wallet&nbsp;
            </span>
            App
          </motion.h2>

          <motion.p
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="sm:text-md mb-3 max-w-[47ch] text-lg tracking-wide text-neutral-400"
          >
            {"It's FREE"}
          </motion.p>
          <motion.div
            className="flex items-center gap-4"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <Link
              target="_blank"
              href={
                "https://play.google.com/store/apps/details?id=degen.wallet&pcampaignid=web_share"
              }
            >
              <div className="relative aspect-[3.2] w-44">
                <Image
                  src={"/images/google-play-badge.png"}
                  className="object-contain"
                  fill
                  alt="google play badge"
                />
              </div>
            </Link>
            <div className="group relative">
              <Link href={"/vault"}>
                <div className="relative aspect-[3.2] w-44">
                  <Image
                    src={"/images/app-store-badge.png"}
                    className="object-contain"
                    fill
                    alt="google play badge"
                  />
                </div>
              </Link>
              <div className="font-small invisible absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded-lg  bg-gradient-to-br from-[#81114257] to-[#863A5C3E] px-3 py-2 text-xs text-white opacity-0 shadow-md shadow-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100 dark:bg-gray-700">
                Coming Soon
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WalletDownload;
