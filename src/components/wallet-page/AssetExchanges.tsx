"use client";
import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import SectionTitle from "../typography/SectionTitle";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import SectionText from "../typography/SectionText";

const AssetExchanges = () => {
  return (
    <section className="sec-p-y group relative flex items-center">
      {/* right shadow */}
      <div className="absolute bottom-0 right-0 -z-10 -translate-y-1/2 translate-x-1/2">
        <div className="shadow-effect opacity-50 blur-[200px]"></div>
      </div>
      {/* left shadow */}
      <div className="absolute left-0 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[175px]"></div>
      </div>
      <div className="absolute -right-[10px] top-0 -z-10 w-[75%] -rotate-12 -scale-x-1">
        <div className="relative aspect-[1.8] w-full">
          <Image
            fill
            src="/images/vault/vault-hero-line.svg"
            alt="design asset line"
          />
        </div>
      </div>

      <Container>
        <TwoGrid>
          <RotateAnimation left className="relative flex aspect-square">
            <Image
              fill
              alt="Violin"
              src="/images/wallet/asset-exchanges.png"
              className="h-full object-contain"
            />
          </RotateAnimation>
          <SectionText
            title="Seamless Asset Exchanges"
            desc="Your Personal Bank Boasts a State-of-the-Art Swap Function.
            Effortlessly Exchange Tokens by Harnessing Liquidity from Premier
            Decentralized Exchanges, Ensuring you Always Get Optimal Swap
            Rates.
          "
          />
        </TwoGrid>
      </Container>
    </section>
  );
};

export default AssetExchanges;
