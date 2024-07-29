"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { motion, useAnimation, useInView } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS, staggeredPop } from "@/assets/mock";

const tripleData = [
  {
    icon: "/images/icons/triple-1.png",
    title: "Biometric Protection",
    desc: "Your unique biometric credentials, ensure that only you can access the Degen Vault App on your mobile device.",
  },
  {
    icon: "/images/icons/triple-2.png",
    title: "Personal PIN",
    desc: "A 6-digit PIN known only to you, providing an added layer of security during the authentication process.",
  },
  {
    icon: "/images/icons/triple-3.png",
    title: "Degen Vault Card",
    desc: "Use the NFC technology by simply tapping the card to the back of your phone, completing the 3-factor authentication, and giving you full control over your digital assets.",
  },
];

const TripleLockedSecurity = () => {
  const showRef = useRef(null);
  const isInView = useInView(showRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("animate");
    } else {
      mainControls.start("initial");
    }
  }, [isInView]);

  return (
    <section className="relative flex items-center py-24">
      {/* <div className="absolute -left-[10%] top-[25%] -z-10">
        <div className="shadow-effect blur-[250px]"></div>
      </div> */}
      <Container>
        <div className="flex items-end justify-between pb-12">
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
            className="flex w-full flex-col items-center gap-4 text-center"
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl font-black tracking-tight text-white lg:text-4xl"
            >
              Triple Locked
              <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
                &nbsp;Security
              </span>{" "}
            </motion.h2>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="sm:text-md _capitalize_ mb-3 max-w-[45ch] tracking-wide text-neutral-400"
            >
              Empower Your Crypto Journey with Triple-Locked Peace of Mind
            </motion.p>
          </motion.div>
        </div>
        <div
          ref={showRef}
          className="grid w-full items-start gap-12 overflow-hidden lg:grid-cols-3"
        >
          {tripleData.map(({ icon, title, desc }, i) => {
            return (
              <article
                key={i}
                className="borderGrid-item flex flex-col gap-3 pr-12"
              >
                <motion.div
                  variants={staggeredPop}
                  initial="initial"
                  animate={mainControls}
                  custom={i}
                  className="h-full w-full"
                >
                  <div className="h-full w-full">
                    <Image src={icon} alt="Icon" width={50} height={50} />
                    <h3 className="_capitalize_ mt-2 text-2xl font-semibold leading-loose">
                      {title}
                    </h3>
                    <p className="mb-3 max-w-[30ch] text-base font-light tracking-wide">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              </article>
            );
          })}
        </div>
      </Container>
      {/* right shadow */}
      <div className="absolute -right-[10%] top-[25%] -z-10">
        <div className="shadow-effect opacity-75 blur-[220px]"></div>
      </div>
    </section>
  );
};

export default TripleLockedSecurity;
