"use client";
import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";
import SectionTitle from "../typography/SectionTitle";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import Button from "../ui/Button";

const Sanctuary = () => {
  return (
    <section className="sec-p-y group relative flex">
      <div className="absolute left-0 top-0 -z-10 -translate-x-1/2 translate-y-1/2">
        <div className="shadow-effect opacity-50 blur-[175px]"></div>
      </div>
      <div className="absolute left-0 top-[50%] -z-10 w-[75%]">
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
              <motion.h2
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="text-5xl font-black"
              >
                The Degen
                <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
                  &nbsp;Vault
                </span>
                : A Sanctuary For Your Assets (Optional)
              </motion.h2>

              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="sm:text-md mb-3 max-w-[47ch] text-lg tracking-wide text-neutral-400"
              >
                {
                  "Delve into the Epitome of Crypto Security with the Degen Vault. This NFC-Based Hardware Wallet is More than Just a Safety Measure; it's a Testament to our Commitment to your Digital Asset Protection. Paired with 3-Factor Authentication and Fortified by State-of-the-Art Tech, the Degen Vault Assures that your Crypto Assets Remain Impenetrable. No Cables, No Complications, Just a Sleek Card, and its Accompanying App. your Private Keys, are Always in your Control, Always Shielded."
                }{" "}
                <br />
                <br /> Degen Wallet Heralds a Paradigm Shift for Both Blockchain
                Aficionados and Newcomers. Harness Potent Features, Unrivaled
                Speeds, and an Intuitive Interface as you Immerse Yourself in
                the Decentralized Finance, NFT, and Web3 Realms. <br />
                <br /> Be at the Forefront of the Web3 Banking Revolution.
                Download Degen Wallet on Google Play Now and Redefine your
                Blockchain Journey!
              </motion.p>
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
                <Link href={"/vault"}>
                  <Button>Degen Vault</Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <div className="relative flex aspect-square w-full">
            <div className="h-full w-full">
              <Image
                fill
                alt="Violin"
                src="/images/wallet/sanctuary.png"
                className="mx-auto h-full w-[75%] object-contain sm:self-end sm:rounded-ss-[30px]  md:rounded-ss-[60px]"
              />
            </div>
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
        </TwoGrid>
      </Container>
    </section>
  );
};

export default Sanctuary;
