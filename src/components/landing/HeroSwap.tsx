"use client";

import React, { useState } from "react";
import Select from "../ui/Select";
import Button from "../ui/Button";
import { dropdownOptions } from "@/assets/mock";
import Link from "next/link";

const HeroSwap = () => {
  const [getToken, setGetToken] = useState(dropdownOptions[1]);
  const [payToken, setPayToken] = useState(dropdownOptions[0]);
  const [getPrice, setGetPrice] = useState<number>(0);

  const handleGetPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetPrice(Number(e.target.value));
  };

  return (
    <article className="rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6 backdrop-blur-[10px] sm:max-w-xs">
      <div className="mb-5 grid grid-cols-2 gap-2 text-[11px]">
        <div className="border-muted flex items-center justify-between rounded-md px-3 py-1 font-medium text-neutral-300">
          <span>Get</span>
          <input
            type="number"
            className="w-fit min-w-0 bg-transparent text-end focus:outline-none"
            placeholder="15.50"
            onChange={handleGetPriceChange}
          />
        </div>
        <Select state={{ value: getToken, setValue: setGetToken }} isDisabled={false} />
        <div className="border-muted flex items-center justify-between rounded-md px-3 py-2 font-medium text-neutral-300">
          <span>Pay</span>
          <input
            type="number"
            className="w-fit min-w-0 bg-transparent text-end focus:outline-none"
            placeholder="3000"
          />
        </div>
        <Select state={{ value: payToken }} isDisabled={true} />
      </div>
      <div className="group relative">
        <Link href={`https://app.uniswap.org/#/swap?chain=base&exactField=input&exactAmount=${getPrice}&inputCurrency=0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913&outputCurrency=0x059933F100A5A28d8C729F6941b3D2bc276d35Dc`} target="_blank">
        <Button fullWidth>
          Buy Now
        </Button>
        </Link>
        {/* <div className="font-small invisible absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 transform rounded-lg bg-gray-900 bg-gradient-to-br from-[#81114257] to-[#863A5C3E] px-3 py-2 text-xs text-white opacity-0 shadow-md shadow-sm transition-opacity duration-300 group-hover:visible group-hover:opacity-100 dark:bg-gray-700">
          Coming Soon
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div> */}
      </div>
    </article>
  );
};

export default HeroSwap;
