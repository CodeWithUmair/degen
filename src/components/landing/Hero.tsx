"use client";
import React, { useState } from "react";
import WalletCTA from "./WalletCTA";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import HeroRevenue from "./HeroRevenue";
import HeroStats from "./HeroStats";
import HeroNFT from "./HeroNFT";
import HeroSwap from "./HeroSwap";
import HeroTrend from "./HeroTrend";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import Link from "next/link";
import Modal from "react-modal";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0, scale: 0.5 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const customStyles = {
  content: {
    width: '800px',
    height: '500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    padding: '0',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

// Modal.setAppElement('#__next');

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="relative flex items-center py-10">
      <div className="absolute left-0 top-0 -z-10 -translate-x-1/3 -translate-y-1/2">
        <div className="shadow-effect blur-[175px]"></div>
      </div>
      <div className="absolute -right-[75px] top-0 -z-10 w-[75%] -rotate-3">
        <div className="relative aspect-[1.8] w-full">
          <Image
            fill
            src="/images/landing/hero-line.svg"
            alt="design asset line"
          />
        </div>
      </div>
      <div className="absolute left-[2.5%] top-[2.5%] -z-10">
        <div className="relative aspect-square w-6">
          <Image fill src="/images/icons/star.svg" alt="design asset line" />
        </div>
      </div>
      <Container>
        <div className="lg:grid lg:grid-cols-2">
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
              <motion.span
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="whitespace-nowrap rounded-full bg-neutral-950/50 px-4 py-2 text-sm text-white"
              >
                Over{" "}
                <span className="text-gradient-sm font-black">150,000+</span>{" "}
                Users
              </motion.span>
              <motion.h1
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="main-title max-w-[13ch] text-3xl font-black tracking-tight text-white sm:text-6xl"
              >
                Discover Your Path To The Web3
                <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
                  &nbsp;Forest
                </span>
              </motion.h1>

              <motion.p
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="max-w-[34ch] tracking-wide text-neutral-400 sm:text-xl"
              >
                Step into the new era of Digital banking with the Degen forest.
                Where Freedom meets the Future of Finance
              </motion.p>
              <motion.div
                variants={FADE_UP_ANIMATION_VARIANTS}
                className="flex flex-col gap-5 sm:flex-row sm:items-center"
              >
                <Link href="/wallet">
                  <Button>Get Started</Button>
                </Link>
                <button className="group relative flex items-center gap-3" onClick={openModal}>
                  <Image
                    width={40}
                    height={40}
                    src="/images/play-button.png"
                    alt="playIcon"
                  />
                  <span>How It Works</span>
                  {/* <div className="font-small invisible absolute bottom-full left-1/2 mb-2 w-max  -translate-x-1/2 transform rounded-lg bg-gray-900 bg-gradient-to-br from-[#81114257] to-[#863A5C3E] px-3 py-2 text-xs text-white opacity-0 shadow-md shadow-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100 dark:bg-gray-700">
                    Coming Soon
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div> */}
                </button>
              </motion.div>
              <div className="flex w-full justify-end pr-12 pt-12">
                <div className="relative aspect-square w-32">
                  <Image
                    fill
                    src="/images/landing/hero-arrow.svg"
                    alt="design asset line"
                  />
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid gap-6 sm:grid-cols-2"
          >
            <div className="flex flex-col gap-6">
              <motion.div variants={item}>
                <HeroNFT />
              </motion.div>
              <motion.div variants={item}>
                <HeroTrend />
              </motion.div>
            </div>
            <div className="flex flex-col gap-6 sm:mt-[15%]">
              <motion.div variants={item}>
                <HeroSwap />
              </motion.div>
              <motion.div variants={item}>
                <HeroRevenue />
              </motion.div>
              <motion.div
                variants={item}
                className="mx-auto w-full rounded-3xl bg-gradient-to-br from-[#D83E824A] to-[#FF92AC20] p-4 pb-5 backdrop-blur-[10px] sm:me-0"
              >
                <div className="row-start-1 md:max-w-md lg:col-span-2 lg:row-start-auto lg:mb-0">
                  <div className="mb-4 flex items-center gap-2">
                    <Image
                      src="/images/icons/wallet-icon.png"
                      alt="wallet icon"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="_uppercase_ text-sm tracking-wide">
                      App Downloads
                    </span>
                  </div>
                  <div className="grid grid-cols-2">
                    <div>
                      <div className="text-xs">Total Downloads:</div>
                      <div className="mb-2 text-base">
                        {(100876).toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs">Monthly Active Users:</div>
                      <div className="text-base text-green">
                        {(76987).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className=" relative my-4 overflow-hidden  rounded-lg text-white">
          <div className=" w-full whitespace-nowrap ">
            <div className="flex items-center justify-end">
              <svg
                className="mr-1 h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m0-4h.01M12 19c-.48 0-.92-.36-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1zM12 4a2 2 0 100 4 2 2 0 000-4z"
                ></path>
              </svg>
              <span className="text-lg font-medium">Note:</span>
              <span className="ml-2 mt-1 text-sm">
                Current data is only for demo purposes until MOOLA gets listed.
              </span>
            </div>
          </div>
        </div>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="How It Works Video"
      >
        <div className="relative w-full h-full">
          <button onClick={closeModal} className="absolute top-2 right-2 text-white">
            &times;
          </button>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/41wUkfX4iUs?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default Hero;
