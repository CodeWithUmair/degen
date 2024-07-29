import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../ui/Button";
import Link from "next/link";
import { getNftMetadata } from "@/helpers/collection";
import { DEFAULT__NFT_IMAGE_URL, DEGEN_TOKEN_ADDRESS } from "@/config";

type PropTypes = {
  data: any;
};

const NFTCardSale = ({
  data: {
    token: { tokenId, image },
    market: {
      floorAsk: { source, price },
    },
  },
}: PropTypes) => {
  // if (!tokenId) return null;
  // const [nftMetaData, setNftMetaData] = useState<any>(null);
  // useEffect(() => {
  //   getNftMetadata(tokenId, setNftMetaData, setLoading);
  // }, []);
  const [loading, setLoading] = useState<boolean>(false);
  const url = `https://opensea.io/assets/ethereum/${DEGEN_TOKEN_ADDRESS}/${tokenId}`;
  return (
    <article className="flex flex-col gap-4 rounded-xl border border-[#FFFFFF4D]/10 bg-gradient-to-br from-[#D83E824A] to-[#FF92AC20] p-5 pb-6 backdrop-blur-[10px] ">
      <div className="relative aspect-[1.5] h-full overflow-hidden rounded-xl">
        {loading ? (
          <div className="h-full w-full animate-pulse rounded-xl bg-gray-300"></div>
        ) : (
          <Image
            fill
            className="object-cover"
            src={image ?? DEFAULT__NFT_IMAGE_URL}
            alt="nftImage"
          />
        )}
      </div>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          {loading ? (
            <div className="h-6 w-24 animate-pulse rounded-md bg-gray-300 sm:h-8"></div>
          ) : (
            <span className="font-medium sm:text-2xl">{`Degen Ape #${tokenId}`}</span>
          )}
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <Image
              width={12}
              height={12}
              src="/images/icons/ethereum.png"
              alt="EthIcon"
            />
            <span className="text-gradient-sm font-black md:text-xl">
              {price ? `${price.amount.native} ETH` : "Not Listed"}
            </span>
          </div>
          <span className="text-sm text-gray-500 md:text-base">
            {price ? `$ ${Number(price.amount.usd).toFixed(2)}` : <br/>}
          </span>
        </div>
      </div>

      <Link href={url} target="_blank">
        <Button fullWidth iconUrl="/images/icons/opensea.svg">
         <b> {price ? "Collect Now" : "Make Offer"}</b>
        </Button>
      </Link>
    </article>
  );
};

export default NFTCardSale;
