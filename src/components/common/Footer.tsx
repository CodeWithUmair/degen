"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import Button from "../ui/Button";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";

type FooterLinks = {
  title: string;
  links: {
    [key: string]: string;
  }[];
}[];

const footerLinks: FooterLinks = [
  {
    title: "Links",
    links: [
      { title: "Home", href: "/" },
      { title: "Governance", href: "/governance" },
      { title: "FAQs", href: "#faqs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy policy", href: "/privacy-policy", target: "_blank" },
      {
        title: "License Agreement",
        href: "/license-agreement",
        target: "_blank",
      },
    ],
  },
  {
    title: "Products",
    links: [
      { title: "Degen Wallet", href: "/wallet" },
      { title: "Degen Vault", href: "/vault" },
      { title: "MOOLA Token", href: "/moola" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300%] w-full">
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-2/3">
            <div className="shadow-effect opacity-75 blur-[150px]"></div>
          </div>
          <div className="absolute -right-[10%] bottom-0 -z-10">
            <div className="shadow-effect opacity-75 blur-[200px]"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="row-gap-10 mb-8 grid lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-4">
            <div className="flex flex-col gap-4">
              <div className="relative mb-3 aspect-square h-10">
                <Image
                  fill
                  src="logo.svg"
                  alt="Logo"
                  className="object-contain object-left"
                />
              </div>
              <Link
                href="mailto:degen@degenweb3.com"
                className="flex items-center gap-3 text-sm text-neutral-300"
              >
                <Image
                  width={20}
                  height={20}
                  src="/images/icons/mail.svg"
                  alt="Mail Icon"
                />
                degen@degenweb3.com
              </Link>
              <Link
                href="https://degenweb3.com/"
                className="flex items-center gap-3 text-sm text-neutral-300"
                target="_blank"
              >
                <Image
                  width={20}
                  height={20}
                  src="/images/icons/wallet-icon.png"
                  alt="Website Link"
                />
                https://degenweb3.com/
              </Link>
            </div>
            {footerLinks.map(({ title, links }, index) => {
              return (
                <div key={index}>
                  <p className="_capitalize_ mb-3 text-xl font-medium tracking-wide">
                    {title}
                  </p>
                  <ul className="mt-2 space-y-2">
                    {links.map(({ title, href, target = "_self" }, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={href}
                            target={target}
                            className="_capitalize_ text-sm text-neutral-300"
                          >
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="row-start-1 mb-10 md:max-w-md lg:col-span-2 lg:row-start-auto lg:mb-0">
            <span className="tracking-wid text-xl font-medium">
              Download App
            </span>
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
                {/* <Link target="_blank" href={""}> */}
                <div className="relative aspect-[3.2] w-32 duration-200 hover:scale-[1.05]">
                  <Image
                    src={"/images/app-store-badge.png"}
                    className="object-contain"
                    fill
                    alt="google play badge"
                  />
                </div>
                {/* </Link> */}
                <div className="font-small invisible absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded-lg bg-gray-900 bg-gradient-to-br from-[#81114257] to-[#863A5C3E] px-3 py-2 text-xs text-white opacity-0 shadow-md shadow-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100 dark:bg-gray-700">
                  Coming Soon
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <hr className="mx-auto h-[2px] w-[75%] border-none bg-gradient-to-r from-[#16161600] via-[#69696988] to-[#16161600]" />
        <div className="flex justify-center pb-10 pt-5">
          <p className="text-sm">Copyright 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
