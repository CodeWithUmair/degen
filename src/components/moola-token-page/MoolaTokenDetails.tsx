"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useDegenContext } from "@/context/DegenContext";

const MoolaTokenDetails = () => {
  const mainControls = useAnimation();
  const { tokenDetails } = useDegenContext();

  const moolaChartDetails = [
    {
      id: 1,
      title: "Total Supply ",
      price: `${tokenDetails.totalSupply?.toLocaleString()}`,
      tokenName: "MOOLA",
      updatedTime: `Updated at ${tokenDetails.lastUpdated} seconds ago`,
    },
    {
      id: 2,
      title: "Circulating Supply",
      price: `${tokenDetails.circulatingSupply?.toLocaleString()}`,
      tokenName: "MOOLA",
      updatedTime: `Updated at ${tokenDetails.lastUpdated} seconds ago`,
    },
    {
      id: 3,
      title: "Market Cap",
      price: `$${tokenDetails.self_reported_market_cap?.toLocaleString()}`,
      percentage: `${Math.abs(tokenDetails.mcapVariation).toFixed(2)}%`,
      Upmarket: tokenDetails.mcapVariation >= 0 ? true : false,
    },
    {
      id: 4,
      title: "Transaction Volume (24h)",
      price: `$${tokenDetails.volume24h?.toLocaleString()}`,
      percentage: `${Math.abs(tokenDetails.volumeVariation).toFixed(2)}%`,
      Upmarket: tokenDetails.volumeVariation >= 0 ? true : false,
    },
  ];

  return (
    <section className="grid justify-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
      {moolaChartDetails.map((item) => (
        <div
          key={item.id}
          className="h-fit rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6 shadow-md backdrop-blur-[10px]"
        >
          <motion.div
            initial="initial"
            animate={mainControls}
            className="flex h-[170px] flex-col justify-between"
          >
            <div className="text-[18px] font-light text-white">
              {item.title}
            </div>
            <div>
              <div className="text-[24px] font-semibold leading-8 tracking-wide">
                {item.price}
              </div>
              <div className="text-[16px] font-thin text-white">
                {item.tokenName}
              </div>
            </div>
            {item.updatedTime ? (
              <div className="text-[12px] font-thin text-gray-400">
                {item.updatedTime}
              </div>
            ) : (
              <div className="flex">
                <div
                  className={
                    item.Upmarket
                      ? "text-[20px] font-bold text-green"
                      : "text-[20px] font-bold text-redColor"
                  }
                >
                  {item.percentage}
                </div>
                <div className="mx-3 flex items-end">
                  {item.Upmarket ? (
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
            )}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default MoolaTokenDetails;
