"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Container from "../ui/Container";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import NFTStats from "./NFTStats";
import Image from "next/image";
import NftCollection from "./NftCollection";
import LocofyTest from "./LocofyText";
import { useCollections } from "@reservoir0x/reservoir-kit-ui";
import { DEGEN_TOKEN_ADDRESS } from "@/config";

const NFTs = () => {
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

  const { data: collection } = useCollections({
    id: DEGEN_TOKEN_ADDRESS,
  });

  const degenCollectionData = collection.length > 0 ? collection[0] : null;
  // console.log("degenCollectionData", { degenCollectionData });

  return (
    <section className="relative my-12 max-w-screen-2xl pt-1">
      <div className="absolute right-0 top-[50%] -z-10 -translate-y-[50%] translate-x-3/4">
        <div className="shadow-effect opacity-70 blur-[175px]"></div>
      </div>
      <div className="absolute -bottom-[10%] -left-[10%] -z-10">
        <div className="shadow-effect opacity-60 blur-[200px]"></div>
      </div>

      <Container>
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
            className="relatvie mb-5 flex flex-col items-center"
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="main-title _capitalize_ max-w-full text-center text-3xl font-black tracking-tight text-white sm:text-6xl"
            >
              {/* <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-transparent">
              &nbsp;Crypto Wallet App&nbsp;
            </span> */}
              NFTs
            </motion.h2>
          </motion.div>
        </div>
        <div>
          <Image
            src="/images/moola-token/Non-Fungible-Token.png"
            width={1200}
            height={140}
            alt="Non Fungible Token"
          />
        </div>

        <motion.div
          className="mx-auto -mt-14 max-w-screen-2xl"
          variants={container}
          initial="hidden"
          animate="visible"
          ref={showRef}
        >
          <NFTStats collection={degenCollectionData} />
        </motion.div>

        <div className="mx-auto mt-8 max-w-screen-2xl">
          <NftCollection collection={degenCollectionData} />
        </div>
      </Container>
    </section>
  );
};

export default NFTs;
