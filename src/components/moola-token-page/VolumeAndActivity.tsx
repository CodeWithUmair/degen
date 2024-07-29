"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useCollections } from "@reservoir0x/reservoir-kit-ui";

type VolumeAndActivityProps = {
  volumeData: {
    allTime: string;
    _1dayVolume: string;
    _7dayVolume: string;
    _30dayVolume: string;
  };
};
function VolumeAndActivity({
  volumeData: { _1dayVolume, _7dayVolume, _30dayVolume, allTime },
}: VolumeAndActivityProps) {
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
  return (
    <>
      <div className="rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6 text-white">
        <h3 className="mb-3 xl:mb-4 text-2xl font-bold">Volume</h3>

        <div className="mb-3 xl:mb-4 flex flex-col">
          <span className="text-sm">All Time Volume</span>
          <div className="flex items-center gap-1">
            <h2 className="inline-block bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-xl font-extrabold text-transparent">
              {allTime}
            </h2>
            <Image
                src="/images/icons/eth-icon.png"
                width={24}
                height={16}
                alt="eth-icon"
                className="flex h-[20px] w-[19px] items-center"
              />
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <div className="mb-1 flex flex-col">
            <span className="text-sm">24 Hour Volume</span>
            <div className="flex items-center gap-1">
              <h2 className="inline-block bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-xl font-extrabold text-transparent">
                {_1dayVolume}
              </h2>
              <Image
                src="/images/icons/eth-icon.png"
                width={24}
                height={16}
                alt="eth-icon"
                className="flex h-[20px] w-[19px] items-center"
              />
            </div>
          </div>
          <div className="mb-1 ml-2 flex flex-col">
            <span className="text-sm">7 Day Volume</span>
            <div className="flex items-center gap-1">
              <h2 className="inline-block bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-xl font-extrabold text-transparent">
                {_7dayVolume}
              </h2>
              {/* <Image
                src="/images/icons/eth-icon.png"
                width={28}
                height={20}
                alt="eth-icon"
                className="flex h-[25px] w-[25px] items-center"
              /> */}
            </div>
          </div>
          <div className="mb-1 flex flex-col col-span-2">
            <span className="text-sm">30 Day Volume</span>
            <div className="flex items-center gap-1">
              <h2 className="inline-block bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-xl font-extrabold text-transparent">
                {_30dayVolume}
              </h2>
              <Image
                src="/images/icons/eth-icon.png"
                width={24}
                height={16}
                alt="eth-icon"
                className="flex h-[20px] w-[19px] items-center"
              />
            </div>
          </div>
        </div>

















        {/* <div className="grid grid-cols-2 grid-rows-3 gap-2">
          <div className="mb-1 flex flex-col col-span-2">
            <span className="text-sm">All Time Volume</span>
            <div className="flex items-center gap-1">
              <h2 className="inline-block bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-xl font-extrabold text-transparent">
                {allTime}
              </h2>
              {
                allTime !== "--" &&
              <Image
                src="/images/icons/eth-icon.png"
                width={24}
                height={16}
                alt="eth-icon"
                className="flex h-[20px] w-[19px] items-center"
              />
              }
            </div>
          </div>
          <div className="mb-1 flex flex-col">
            <span className="text-sm">24 Hour Volume</span>
            <div className="flex items-center gap-1">
              <h2 className="inline-block bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-xl font-extrabold text-transparent">
                {_1dayVolume}
              </h2>
            </div>
          </div>
          <div className="mb-1 flex flex-col ml-2">
            <span className="text-sm">7 Day Volume</span>
            <div className="flex items-center gap-1">
              <h2 className="inline-block bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-xl font-extrabold text-transparent">
                {_7dayVolume}
              </h2>
              {
                _7dayVolume !== "--" &&
              <Image
                src="/images/icons/eth-icon.png"
                width={24}
                height={16}
                alt="eth-icon"
                className="flex h-[20px] w-[19px] items-center"
              />
              }
            </div>
          </div>
          <div className="mb-1 flex flex-col">
            <span className="text-sm">30 Day Volume</span>
            <div className="flex items-center gap-1">
              <h2 className="inline-block bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-xl font-extrabold text-transparent">
                {_30dayVolume}
              </h2>
            </div>
          </div>
        </div> */}



      </div>
    </>
  );
}

export default VolumeAndActivity;
