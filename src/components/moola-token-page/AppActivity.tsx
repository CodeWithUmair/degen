"use client";
import React from "react";
import { FADE_UP_ANIMATION_VARIANTS } from "@/assets/mock";
import { motion } from "framer-motion";
import StatsCards from "../landing/StatsCards";
import DownloadChart from "../charts/DownloadChart";
import Image from "next/image";
import FeesToBurnsChart from "../charts/FeesToBurnChart";
import TotalValueInAllWallets from "../charts/TotalValueInAllWallets";
import TotalVolumeSwaps from "../charts/TotalVolumeSwaps";
import TotalVolumeOfTransaction from "../charts/TotalVolumeOfTransaction";
import TotalAmountOfDefiLoans from "../charts/TotalAmountOfDefiLoans";

const AppActivity = () => {
  return (
    <section className="relative my-20">
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
              &nbsp;App Activity&nbsp;
            </span>
            Insights
          </motion.h1>
        </motion.div>
      </div>

      <div className="mx-auto my-8 max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-6 grid-rows-2 gap-4 text-center align-middle">
          <div className="col-span-3 flex flex-col gap-4 self-center">
            <div className=" rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6 shadow-md">
              <div className="mb-8 flex">
                <p>Total Value Secured Across All Wallets</p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="">
                  <h2 className="inline-block bg-gradient-to-r from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-4xl font-extrabold text-transparent">
                    $150,000
                  </h2>
                  <span className="ml-2 text-xl font-thin text-white">USD</span>
                </div>

                <div className="flex items-center">
                  <div
                    className={
                      true
                        ? "text-[20px] text-green"
                        : "text-[20px] text-redColor"
                    }
                  >
                    28.5%
                  </div>
                  <div className="mx-3 flex items-center">
                    {true ? (
                      <Image
                        width={15}
                        height={25}
                        src={"/images/icons/green-arrow-up.svg"}
                        alt="green arrow up"
                        className="aspect-square"
                      />
                    ) : (
                      <Image
                        width={20}
                        height={25}
                        src={"/images/icons/red-arrow-down.svg"}
                        alt="red arrow down"
                        className="aspect-square"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className=" rounded-3xl bg-gradient-to-r from-[#201118] to-[#2b111c] p-6 shadow-md">
              <TotalValueInAllWallets />
            </div>
          </div>

          <div className="col-span-3 col-start-4 row-start-1 flex flex-col gap-4 self-center">
            <div className=" rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6 shadow-md">
              <div className="mb-8 flex">
                <p>Total Volume of Swaps</p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="">
                  <h2 className="inline-block bg-gradient-to-r from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-4xl font-extrabold text-transparent">
                    $100,000,000
                  </h2>
                  <span className="ml-2 text-xl font-thin text-white">USD</span>
                </div>

                <div className="flex items-center">
                  <div
                    className={
                      true
                        ? "text-[20px] text-green"
                        : "text-[20px] text-redColor"
                    }
                  >
                    3.2%
                  </div>
                  <div className="mx-3 flex items-center">
                    {true ? (
                      <Image
                        width={15}
                        height={25}
                        src={"/images/icons/green-arrow-up.svg"}
                        alt="green arrow up"
                        className="aspect-square"
                      />
                    ) : (
                      <Image
                        width={20}
                        height={25}
                        src={"/images/icons/red-arrow-down.svg"}
                        alt="red arrow down"
                        className="aspect-square"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-r from-[#201118] to-[#2b111c] p-6 shadow-md">
              <TotalVolumeSwaps />
            </div>
          </div>

          <div className="col-span-3 row-start-2 flex flex-col gap-4 self-center">
            <div className=" rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6 shadow-md">
              <div className="mb-8 flex">
                <p>Total Volume of Liquid Staking Transactions</p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="">
                  <h2 className="inline-block bg-gradient-to-r from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-4xl font-extrabold text-transparent">
                    $50,000,000
                  </h2>
                  <span className="ml-2 text-xl font-thin text-white">USD</span>
                </div>

                <div className="flex items-center">
                  <div
                    className={
                      false
                        ? "text-[20px] text-green"
                        : "text-[20px] text-redColor"
                    }
                  >
                    1.5%
                  </div>
                  <div className="mx-3 flex items-center">
                    {false ? (
                      <Image
                        width={15}
                        height={25}
                        src={"/images/icons/green-arrow-up.svg"}
                        alt="green arrow up"
                        className="aspect-square"
                      />
                    ) : (
                      <Image
                        width={20}
                        height={25}
                        src={"/images/icons/red-arrow-down.svg"}
                        alt="red arrow down"
                        className="aspect-square"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-[#201118] to-[#2b111c] p-6 shadow-md">
              <TotalVolumeOfTransaction />
            </div>
          </div>

          <div className="col-span-3 col-start-4 row-start-2 flex flex-col gap-4 self-center">
            <div className="rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6 shadow-md">
              <div className="mb-8 flex">
                <p>Total Amount of DeFi Loans</p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="">
                  <h2 className="inline-block bg-gradient-to-r from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-4xl font-extrabold text-transparent">
                    $20,000,000
                  </h2>
                  <span className="ml-2 text-xl font-thin text-white">USD</span>
                </div>

                <div className="flex items-center">
                  <div
                    className={
                      true
                        ? "text-[20px] text-green"
                        : "text-[20px] text-redColor"
                    }
                  >
                    3.6%
                  </div>
                  <div className="mx-3 flex items-center">
                    {true ? (
                      <Image
                        width={15}
                        height={25}
                        src={"/images/icons/green-arrow-up.svg"}
                        alt="green arrow up"
                        className="aspect-square"
                      />
                    ) : (
                      <Image
                        width={20}
                        height={25}
                        src={"/images/icons/red-arrow-down.svg"}
                        alt="red arrow down"
                        className="aspect-square"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-[#201118] to-[#2b111c] p-6 shadow-md">
              <TotalAmountOfDefiLoans />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppActivity;
