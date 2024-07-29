"use client";
import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import SectionText from "../typography/SectionText";
const CryptoSecurity = () => {
  return (
    <section className="relative flex items-center py-24">
      {/* left shadow */}
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/2">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
      <div className="absolute bottom-0 right-0 -z-10 w-[75%] -rotate-12 -scale-x-1">
        <div className="relative aspect-[1.8] w-full">
          <Image
            fill
            src="/images/vault/vault-hero-line.svg"
            alt="design asset line"
          />
        </div>
      </div>

      <Container shrink>
        <TwoGrid>
          <RotateAnimation left className="relative flex aspect-square w-full">
            <Image
              fill
              alt="Violin"
              src="/images/vault/vault-crypto-security.png"
              className="mx-auto h-full object-contain"
            />
          </RotateAnimation>
          <SectionText
            title="A New Era of Crypto Security"
            desc="Our Degen Vault's 3-factor authentication system makes sure
              your private keys are accessible to only you. Our unique blend of
              cold storage capabilities, NFC technology, and advanced
              authentication methods brings the future of crypto security to
              your pocket.
            "
          />
        </TwoGrid>
      </Container>
      {/* right shadow */}
      <div className="absolute right-0 top-[50%] -z-10 -translate-y-1/2 translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[300px]"></div>
      </div>
    </section>
  );
};

export default CryptoSecurity;
