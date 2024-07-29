"use client";
import React, { useEffect, useRef } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import { useAnimation, useInView, motion } from "framer-motion";
import Container from "../ui/Container";
import { FaChevronDown } from "react-icons/fa6";
import { staggeredSlide } from "@/assets/mock";

const faqs = [
  {
    summary: "What is the primary aim of Degen Forest?",
    details:
      "Degen Forest is at the forefront of the Web3 revolution, aiming to provide cutting-edge infrastructure and services that make decentralized technologies accessible and beneficial for everyone. Our commitment extends beyond just technology; we're passionate about educating and empowering our community to thrive in the decentralized world.",
  },
  {
    summary: "How does the Degen Wallet ensure a seamless user experience?",
    details:
      "The Degen Wallet is designed to be a comprehensive crypto solution, integrating a wide range of functionalities from DeFi to NFTs. It serves as a one-stop hub for all your crypto needs, eliminating the need for multiple platforms or tools. Whether you're doing yield farming, staking, or selling your NFTs, the Degen Wallet provides a streamlined and efficient experience.",
  },
  {
    summary: "How does the Degen Wallet generate revenue?",
    details:
      "The Degen Wallet offers a range of value-added services such as Swaps, NFT Listings, DeFi Loans, Yield Farming, and other Web3 Bank services. For these services, a nominal fee of 0.69% is charged. A significant portion of the profits from these fees is dedicated to purchasing and subsequently burning MOOLA tokens, enhancing their value and scarcity.",
  },
  {
    summary: "What unique benefits does the NFT offer its holders?",
    details: `<p className="text-white/75 font-semibold mb-2">Holders of our Degen Forest NFT enjoy a plethora of benefits:</p>
    <ul className="list-disc">
       <li>Beta Testing: Gain exclusive early access to test all the innovative functionalities of the Degen Wallet.</li>
       <li>First Access to Features: Be the first to experience and use experimental features within the wallet before they're rolled out to the broader community.</li>
       <li>Transaction Rewards: Earn 5 MOOLA Tokens for every transaction you initiate.</li>
       <li>0.00% Fees: Benefit from 0.00% fees across all the diverse features inside the Degen Wallet.</li>
    </ul>`,
  },
  {
    summary: "What is the Utility of the MOOLA Token?",
    details:
      "The MOOLA Token serves as a versatile utility token within our ecosystem, facilitating a range of transactions and incentives. Beta-testers of our technologies are rewarded with MOOLA tokens on every transaction they make, enhancing yield generation. Additionally, MOOLA Tokens grant exclusive discounts on purchases, from our cutting-edge Degen Vault Hardware wallet to a diverse array of merchandise in our store. As we continue to innovate, our upcoming Degen Explore feature will leverage MOOLA Tokens, enabling projects to secure prominent visibility within our app's exploration interface. Beyond these applications, the MOOLA Token is poised to unlock access to a myriad of future features and services, ensuring that holders are always at the forefront of our platform's evolution and benefits.",
  },
  {
    summary: "How does the burning of MOOLA tokens benefit the community?",
    details:
      "MOOLA Tokens are minted daily and distributed as a token of appreciation to our dedicated community members, especially those actively involved in beta testing the myriad features within our Degen Wallet. By burning MOOLA tokens using a portion of our profits every month, we intentionally reduce their total circulation, introducing an element of scarcity. As the demand for MOOLA tokens either remains steady or rises, this limited availability can potentially drive an uptick in the token's value. This strategic approach is designed to recognize and reward our steadfast community and token holders, amplifying the potential worth of their digital assets.",
  },
];

const FAQ = () => {
  const showRef = useRef(null);
  const isInView = useInView(showRef, { amount: 0.3 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    } else {
      mainControls.start("initial");
    }
  }, [isInView]);

  return (
    <section id="faqs" className="relative pb-20">
      <Container>
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className="relative mb-5 inline-block text-2xl font-bold sm:text-3xl md:text-5xl">
            Frequently Asked Questions
            {/* <div className="absolute -top-1/4 right-0 translate-x-[200%] hidden md:block">
              <Image
                src="/icons/thin-star.svg"
                alt="Star Icon"
                width={35}
                height={35}
              />
            </div> */}
          </h2>
   
          <div
            ref={showRef}
            className="my-10 w-full space-y-2 text-start md:my-20 md:space-y-4 lg:w-[65%]"
          >
            {faqs.map(({ summary, details }, index) => {
              return (
                <motion.div
                  variants={staggeredSlide}
                  initial="initial"
                  animate={mainControls}
                  custom={index}
                  key={index}
                  className="rounded-2xl"
                  style={{ perspective: 300, background: "#FFFFFF88" }}
                >
                  <details className="border-1 group rounded-2xl border border-[#C9C9C933] bg-black bg-gradient-to-b from-[#C9C9C911] to-[#5555550a] px-5 py-3 text-sm text-neutral-400 transition duration-300 open:bg-black open:from-[#552B354D] open:to-[#1616165D] sm:text-lg md:px-8 md:py-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-[0.5rem] from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text duration-200  group-open:bg-gradient-to-br group-open:text-transparent">
                      <h2 className="font-medium group-open:font-bold">
                        {summary}
                      </h2>
                      <FaChevronDown />
                    </summary>

                    <div className="pt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
                      {parse(details)}
                    </div>
                  </details>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
      {/* -----------shapes below-------------- */}
      {/* left shadow */}
      <div className="absolute -top-[10%] left-0 -z-10 -translate-x-1/2 translate-y-2/3">
        <div className="shadow-effect opacity-50 blur-[150px]"></div>
      </div>
      {/* right shadow */}
      <div className="absolute -right-[10%] top-0 -z-10">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
      {/* composite shape */}
      <div className="absolute -right-[20%] -top-[300px] -z-10 -rotate-3 -rotate-6 opacity-50">
        <div className="relative aspect-square w-[1000px]">
          <Image
            fill
            src="/images/landing/cta-curve.svg"
            alt="design asset line"
          />
        </div>
      </div>
      {/* circle */}
      <div className="absolute left-0 top-[10%] -z-10 -translate-x-1/2 rotate-180">
        <div className="relative aspect-[1] w-full">
          <Image
            fill
            className="object-contain"
            src="/images/landing/cta-circle.svg"
            alt="design asset line"
          />
        </div>
      </div>
      {/* -----------shapes above-------------- */}
    </section>
  );
};

export default FAQ;
