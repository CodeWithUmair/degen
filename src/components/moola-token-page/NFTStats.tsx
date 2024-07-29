"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import VolumeAndActivity from "./VolumeAndActivity";
import CoreStats from "./CoreStats";
import { useCollections } from "@reservoir0x/reservoir-kit-ui";

type NFTStatsProps = {
  collection: NonNullable<ReturnType<typeof useCollections>['data']>['0'] | null
};

function NFTStats({ collection }: NFTStatsProps) {
  const showRef = useRef(null);
  const isInView = useInView(showRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

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

  const volumeData = {
    allTime: collection?.volume?.["allTime"] ? `${collection?.volume?.["allTime"]} ETH` : "--",
    _1dayVolume: collection?.volume?.["1day"] ? `${collection?.volume?.["1day"]} ETH` : "--",
    _7dayVolume: collection?.volume?.["7day"] ? `${collection?.volume?.["7day"]} ETH` : "--",
    _30dayVolume: collection?.volume?.["30day"] ? `${collection?.volume?.["30day"]} ETH` : "--",
  };

  const CoreStatsData = {
    floorPrice: collection?.floorAsk?.price?.amount?.native ? `${collection?.floorAsk?.price?.amount?.native} ETH` : "--",
    topBid: collection?.topBid?.price?.amount?.native ? `${collection?.topBid?.price?.amount?.native} ETH` : "--",
    owners: collection?.ownerCount ? `${collection?.ownerCount} ` : "--",
    totalSupply: collection?.tokenCount ? `${collection?.tokenCount} ` : "--",
    totalListed: collection?.onSaleCount ? `${collection?.onSaleCount} ` : "--",
  };

  return (
    <>
      <div className="flex flex-col xl:flex-row gap-4 justify-between items-end relative">
        <div className="hidden xl:block absolute -bottom-[40%] left-[20%] -z-10 -translate-y-[50%] translate-x-3/4 bg-[rgba(133, 0, 0, 1)]">
          <div className="shadow-effect opacity-70 blur-[175px]"></div>
        </div>
        <div className="block xl:hidden absolute top-[40%] left-[10%] -z-10 -translate-y-[50%] translate-x-3/4 bg-[rgba(133, 0, 0, 1)]">
          <div className="shadow-effect opacity-70 blur-[175px]"></div>
        </div>
        <div className="xl:hidden w-full xl:w-[54%] flex justify-center mt-10 md:mt-0 items-end xl:order-2 bg-[url('/images/moola-token/nft_image_bg.png')] bg-top bg-no-repeat lg:bg-contain">
          <Image src="/images/moola-token/nft_image.png" width={360} height={360} alt="NFT Image" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 w-full">
        <div className="w-full lg:w-[50%] xl:w-[28%] order-2 xl:order-1">
          <VolumeAndActivity volumeData={volumeData} />
        </div>
        <div className="hidden w-full xl:w-[54%] xl:flex justify-center items-end order-1 xl:order-2 bg-[url('/images/moola-token/nft_image_bg.png')] bg-top bg-no-repeat lg:bg-contain">
          <Image src="/images/moola-token/nft_image.png" width={360} height={360} alt="NFT Image" />
        </div>
        <div className="w-full lg:w-[50%] xl:w-[28%] order-3">
          <CoreStats CoreStatsData={CoreStatsData} />
        </div>
        </div>
      </div>
    </>
  );
}

export default NFTStats;
