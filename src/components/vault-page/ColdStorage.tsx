"use client";
import Image from "next/image";
import Container from "../ui/Container";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import SectionText from "../typography/SectionText";

const ColdStorage = () => {
  return (
    <section className="relative flex items-center py-24">
      <div className="absolute top-[25%] -z-10 -translate-x-1/2">
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
        <TwoGrid reverse>
          <SectionText
            title="Power of Cold Storage"
            desc="Imagine a private safe deposit box, solely under your control.
              That's what our Degen Vault offers. It stores your digital
              assets offline, shielding them from potential threats like
              exchange hacks, system failures, and more. Truly own your
              cryptocurrency with our vault-like protection.
            "
          />

          <RotateAnimation className="relative mx-auto flex aspect-square w-full">
            <Image
              alt="Violin"
              fill
              src="/images/vault/vault-cold-storage.png"
              className="mx-auto h-full object-contain sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
          </RotateAnimation>
        </TwoGrid>
      </Container>

      <div className="absolute bottom-[25%] right-[3%] -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-25 blur-[100px]"></div>
      </div>
    </section>
  );
};

export default ColdStorage;
