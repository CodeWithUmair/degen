import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import SectionText from "../typography/SectionText";
const NFTEcosystem = () => {
  return (
    <section className="sec-p-y group relative flex items-center">
      <div className="absolute top-0 -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-25 blur-[100px]"></div>
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
            title="Dive into the NFT Ecosystem"
            desc="Discover the Bustling World Of NFTs Right from your Pocket Bank. Our Intuitive NFT Management System Offers an Immersive Experience, Letting you Curate, Showcase, and Transact with your Digital Treasures Without External Dependencies."
          />
          <RotateAnimation className="relative aspect-square w-full">
            <Image
              fill
              alt="Violin"
              src="/images/wallet/wallet-ecosystem.png"
              className="h-full object-contain"
            />
          </RotateAnimation>
        </TwoGrid>
      </Container>
    </section>
  );
};

export default NFTEcosystem;
