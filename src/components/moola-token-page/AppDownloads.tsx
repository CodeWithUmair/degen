"use client";
import React from "react";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import { motion } from "framer-motion";
import StatsCards from "../landing/StatsCards";
import DownloadChart from "../charts/DownloadChart";
import Image from "next/image";
import UserFeedback from "./UserFeedback";

const AppDownloads = () => {
  return (
    <section className="relative mt-10">
      <div className="absolute -left-[30%] top-[30%] -z-10">
        <div className="shadow-effect opacity-[30] blur-[300px]"></div>
      </div>
      <div className="absolute -right-[30%] bottom-[30%] -z-10">
        <div className="shadow-effect blur-[300px]"></div>
      </div>
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
          className="relatvie flex flex-col items-center gap-3"
        >
          <motion.h1
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="main-title _capitalize_ max-w-full text-center text-3xl font-black tracking-tight text-white sm:text-6xl"
          >
            <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-transparent">
              &nbsp;Crypto Wallet App&nbsp;
            </span>
            <br />
            Downloads and User Metrics
          </motion.h1>
        </motion.div>
      </div>

      <div className="mx-auto my-10 w-fit">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className="relatvie flex flex-col items-center gap-3"
        >
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="gradient-border-2 w-fit cursor-pointer rounded-full px-8 py-1 text-center text-2xl hover:bg-gradient-to-br"
          >
            User Acquisition & Activity
          </motion.h2>
        </motion.div>
      </div>

      <div className="mx-auto my-8 max-w-5xl">
        <div className="grid grid-cols-7 grid-rows-4 gap-4 text-center align-middle">
          <div className="col-span-2 self-center rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4 py-6 shadow-md">
            <p className="mb-3 text-sm font-thin">Total Downloads</p>
            <h2 className="inline-block bg-gradient-to-r from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-4xl font-extrabold text-transparent">
              150,000
            </h2>
          </div>
          <div className="col-span-3 col-start-3 self-center rounded-3xl bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] p-4 py-6 shadow-md">
            <p className="mb-3 text-sm font-thin">
              Transaction Volume Through App
            </p>
            <h2 className="inline-block text-4xl font-extrabold">$500,000</h2>
            <span className="ml-2 text-2xl">USD</span>
          </div>
          <div className="col-span-2 col-start-6 self-center rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4 py-6 shadow-md">
            <p className="mb-3 text-sm font-thin">Average Transaction Value</p>
            <h2 className="inline-block bg-gradient-to-r from-[#F8A55F] to-[#E43345] bg-clip-text text-4xl font-extrabold text-transparent">
              125
            </h2>
            <span className="ml-2 text-2xl">USD</span>
          </div>
          <div className="col-span-2 row-start-2 self-center rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4 py-8 shadow-md">
            <p className="mb-3 text-sm font-thin">Monthly Active Users (MAU)</p>
            <h2 className="text-4xl font-extrabold">65,000</h2>
          </div>

          <div className="col-span-2 col-start-1 row-start-3 self-center rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4 py-8 shadow-md">
            <p className="mb-3 text-sm font-thin">Monthly Conversion Rate</p>
            <div className="flex items-center justify-center">
              <h2 className="text-4xl font-extrabold">25%</h2>
              <div className="mx-2 flex items-center">
                {true ? (
                  <Image
                    width={30}
                    height={20}
                    src={"/images/icons/green-arrow-up.svg"}
                    alt="green arrow up"
                    className="aspect-square"
                  />
                ) : (
                  <Image
                    width={30}
                    height={20}
                    src={"/images/icons/red-arrow-down.svg"}
                    alt="red arrow down"
                    className="aspect-square"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-span-2 col-start-1 row-start-4 self-center rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4 py-8 shadow-md">
            <p className="mb-3 text-sm font-thin">
              New Users Growth Rate (Last month)
            </p>
            <div className="flex items-center justify-center">
              <h2 className="text-4xl font-extrabold">18.75</h2>
              <div className="mx-2 flex items-center">
                {true ? (
                  <Image
                    width={30}
                    height={20}
                    src={"/images/icons/green-arrow-up.svg"}
                    alt="green arrow up"
                    className="aspect-square"
                  />
                ) : (
                  <Image
                    width={30}
                    height={20}
                    src={"/images/icons/red-arrow-down.svg"}
                    alt="red arrow down"
                    className="aspect-square"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-span-5 col-start-3 row-span-3 row-start-2 self-center rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4 py-6 shadow-md">
            <p className="text-lg">Downloads Vs Active Users</p>
            <div className="flex items-center justify-center space-x-6 rounded-3xl p-4">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-[#F48D59]"></span>
                <span className="text-sm font-thin text-white">
                  Conversion Rate
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-[#BD1843]"></span>
                <span className="text-sm font-thin text-white">
                  Monthly Active Users (MAU)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-[#E34768]"></span>
                <span className="text-sm font-thin text-white">
                  Total Downloads
                </span>
              </div>
            </div>

            <div className="h-auto">
              <DownloadChart />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto my-12 w-fit">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className="relatvie flex flex-col items-center gap-3"
        >
          <motion.h2
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="gradient-border-2 w-fit cursor-pointer rounded-full px-8 py-1 text-center text-2xl"
          >
            User Registration & Feedback
          </motion.h2>
        </motion.div>
      </div>

      <UserFeedback />
    </section>
  );
};

export default AppDownloads;
