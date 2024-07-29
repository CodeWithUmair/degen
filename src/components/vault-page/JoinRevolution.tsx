"use client";
import Container from "../ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import Link from "next/link";

const JoinRevolution = () => {
  return (
    <section className="py-24">
      <Container>
        <article className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#2B2B2B99] via-[#1A1A1A66] to-[#1A1A1A33] px-8 py-24 md:px-16">
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
              className="pb-8 text-center text-3xl font-black tracking-tight text-white lg:text-5xl"
            >
              Join the{" "}
              <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
                Crypto Safety
              </span>{" "}
              Revolution
            </motion.h2>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="max-w-[49ch] _capitalize_ tracking-wide text-neutral-400 sm:text-lg"
            >
              Developed by <Link href="https://www.composecure.com/" className="border-b">CompoSecure</Link>, our Degen Vault is a revolutionary
              digital security platform that delivers best-in-class
              authentication and digital asset protection for businesses and
              individuals alike. 
            </motion.p>
          </motion.div>
          {/* shapes below */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 w-[200px] -rotate-45 rotate-180">
            <div className="relative aspect-[1] w-full">
              <Image
                fill
                className="object-contain"
                src="/images/landing/circle-vertical.svg"
                alt="design asset line"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 -z-10 w-[200px] rotate-180">
            <div className="relative aspect-[1] w-full">
              <Image
                fill
                className="object-contain"
                src="/images/landing/circle-vertical.svg"
                alt="design asset line"
              />
            </div>
          </div>

          <div className="absolute -right-[75px] top-0 -z-10 w-[75%] -rotate-3">
            <div className="relative h-32 w-full md:h-72 lg:h-96">
              <Image
                fill
                src="/images/vault/revolution-line.svg"
                alt="design asset line"
              />
            </div>
          </div>

          {/* shapes above */}
        </article>
      </Container>
    </section>
  );
};

export default JoinRevolution;
