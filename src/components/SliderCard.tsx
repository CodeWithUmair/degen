import Image from "next/image";
import React from "react";

function SliderCard() {
  return (
    <div className="flex h-[325px] w-[580px] flex-col relative items-start justify-between rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-8">
      <div className="text-lg font-bold">Partnership Announcement</div>
      <div className="flex flex-col">
        <span className="pb-1 text-lg font-thin">We’ve Partnered with</span>
        <span className="text-6xl font-bold text-white">Trust Wallet</span>
      </div>
      <div className="flex items-center justify-start gap-5">
        <Image
          src={"/images/moola-token/slider-badge-1.png"}
          alt="slider-badge-1"
          width={80}
          height={80}
        />
        <Image
          src={"/images/moola-token/slider-badge-2.png"}
          alt="slider-badge-2"
          width={50}
          height={50}
        />
        <Image
          src={"/images/moola-token/slider-badge-3.png"}
          alt="slider-badge-3"
          width={80}
          height={80}
        />
      </div>

      <div className="absolute top-0 right-0">
      <Image
          src={"/images/moola-token/bg-chain.png"}
          alt="slider-badge-3"
          width={235}
          height={325}
        />
      </div>
      {/* <div className="absolute top-0 right-0">
        <div className="shadow-effect opacity-[30] bg-[#ffccee] blur-[150px]"></div>
      </div> */}
    </div>
  );
}

export default SliderCard;
