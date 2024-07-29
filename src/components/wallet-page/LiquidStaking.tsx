import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import SectionTitle from "../typography/SectionTitle";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import SectionText from "../typography/SectionText";

const LiquidStaking = () => {
  return (
    <section className="sec-p-y group relative flex items-center">
      {/* left shadow */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-50 blur-[200px]"></div>
      </div>
      {/* right shadow */}
      <div className="pointer-events-none absolute bottom-[25%] right-0 -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
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
          <SectionText
            title="Liquid Staking: The Future of Asset Growth"
            desc="Gone are the Days of Locking up your Assets and Waiting. With our Earn Yield Feature, Stake your Tokens and Watch them Grow, All while Retaining the Liquidity to use them Across the Vast DeFi Landscape. Whether you're a Seasoned Crypto Enthusiast or a Newcomer, our Platform Offers a Simplified Staking Experience, Eliminating the Complexities of Traditional Systems."
          />
          <RotateAnimation className="relative aspect-square">
            <Image
              fill
              alt="Violin"
              src="/images/wallet/liquid-staking.png"
              className="h-full object-contain"
            />
          </RotateAnimation>
        </TwoGrid>
      </Container>
    </section>
  );
};

export default LiquidStaking;
