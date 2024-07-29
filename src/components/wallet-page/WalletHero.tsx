"use client";
import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
//@ts-ignore
import ReactTypingEffect from "react-typing-effect";

const WalletHero = () => {
  return (
    <section className="relative mt-8 flex py-10">
      {/* left shadow */}
      <div className="absolute left-0 top-0 -z-10 -translate-x-1/3 -translate-y-1/2">
        <div className="shadow-effect blur-[175px]"></div>
      </div>
      {/* right shadow */}
      <div className="absolute right-0 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
        <div className="shadow-effect opacity-75 blur-[175px]"></div>
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
        <TwoGrid reverse itemsStart>
          <div className="row-start-2 pt-10 lg:row-start-1">
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
                className="_capitalize_ _capitalize_ max-w-[12ch] text-4xl font-black tracking-tight text-white"
              >
                Degen&nbsp;
                <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
                  Wallet
                </span>
              </motion.h2>
              <div className="h-[1.3em] text-3xl sm:text-7xl">
                <ReactTypingEffect
                  speed={100}
                  eraseSpeed={35}
                  typingDelay={500}
                  eraseDelay={1500}
                  text={["Your Bank.", "Your Crypto.", "Your Freedom."]}
                  cursorRenderer={(cursor: string) => (
                    <h1 className="text-3xl font-thin sm:text-7xl">{cursor}</h1>
                  )}
                  displayTextRenderer={(text: string, i: number) => {
                    return (
                      <h1 className="main-title max-w-[12ch] text-3xl font-black tracking-tight text-white sm:text-7xl">
                        {text.split("").map((char, i) => {
                          const key = `${i}`;
                          return <span key={key}>{char}</span>;
                        })}
                      </h1>
                    );
                  }}
                />
              </div>
              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="_capitalize_ mb-3 max-w-[40ch] tracking-wide text-neutral-400 sm:text-xl"
              >
                {
                  " Degen Wallet Transcends the Traditional Crypto Wallet, Introducing a Dynamic Web3 Banking Experience that's Set to Revolutionize your Digital Asset Interactions."
                }
              </motion.p>
            </motion.div>
            <motion.div
              className="mt-6 flex items-center gap-2"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              <Link
                target="_blank"
                href={
                  "https://play.google.com/store/apps/details?id=degen.wallet&pcampaignid=web_share"
                }
              >
                <div className="relative aspect-[3.2] w-32 duration-200 hover:scale-[1.05]">
                  <Image
                    src={"/images/google-play-badge.png"}
                    className="object-contain"
                    fill
                    alt="google play badge"
                  />
                </div>
              </Link>
              <div className="group relative">
                {/* <Link target="_blank" href={"/vault"}> */}
                <div className="relative aspect-[3.2] w-32 duration-200 hover:scale-[1.05]">
                  <Image
                    src={"/images/app-store-badge.png"}
                    className="object-contain"
                    fill
                    alt="google play badge"
                  />
                </div>
                {/* </Link> */}
                <div className="font-small invisible absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded-lg  bg-gradient-to-br from-[#81114257] to-[#863A5C3E] px-3 py-2 text-xs text-white opacity-0 shadow-md shadow-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100 dark:bg-gray-700">
                  Coming Soon
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="relative row-start-1 aspect-square lg:row-start-1">
            <RotateAnimation className="h-full w-full">
              <Image
                fill
                alt="Violin"
                src="/images/wallet/wallet-hero.png"
                className="object-contain object-top"
              />
            </RotateAnimation>
            <div className="absolute -left-[7.5%] -top-[37.5%] -z-10 w-[850px] rotate-[35deg]">
              <div className="relative aspect-square w-full">
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

export default WalletHero;
