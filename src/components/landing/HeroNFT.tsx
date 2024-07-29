import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { DEFAULT__NFT_IMAGE_URL, DEGEN_TOKEN_ADDRESS, RESERVOIR_API, RESERVOIR_BASE_URL } from "@/config";
const HeroNFT = () => {
  const [nftData, setNftData] = useState({
    name: "The Degen Forest Collection NFT",
    description:
      "Mattis ultrices aliquet phasellus elit eu. Ac mus odio sodales commodo..",
    image: DEFAULT__NFT_IMAGE_URL, //default image
    redirectURL: "#",
  });
  const [floorPrice, setFloorPrice] = useState(0);

  function findMinKeyValue(obj: Record<string, number>): [string, number] {
    let minKey = "";
    let minValue = Infinity;

    for (const [key, value] of Object.entries(obj)) {
      if (value < minValue) {
        minKey = key;
        minValue = value;
      }
    }

    return [minKey, minValue];
  }

  useEffect(() => {
    // console.log("reservoirApiKey",reservoirApiKey);

    const url =
      `${RESERVOIR_BASE_URL}tokens/floor/v1?collection=${DEGEN_TOKEN_ADDRESS}`;
    const nftBaseUrl = "";
    const headers = {
      accept: "*/*",
      "x-api-key": RESERVOIR_API,
    };

    axios
      .get(url, { headers })
      .then((response): any => {
        // console.log(response?.data);
        let data = response?.data;
        const [lowestTokenID, minValue] = findMinKeyValue(data?.tokens);
        setFloorPrice(minValue);

        axios
          .get(
            `https://gateway.pinata.cloud/ipfs/QmaQRpiqYkBAaPAjk3ZnkiVKQKBtkJcTy7yrETaG58LjPn/${lowestTokenID}.json`,
          )
          .then((response): any => {
            // console.log(response?.data);
            const image2ndPart = response?.data?.image?.split("//");
            // console.log("NFTTTTTTTTTTTTTTTTTTT",`https://gateway.pinata.cloud/ipfs/${image2ndPart[1]}`);
            setNftData({
              name: response?.data?.name,
              description: response?.data?.description,
              image: `https://gateway.pinata.cloud/ipfs/${image2ndPart[1]}`,
              redirectURL: `https://opensea.io/assets/ethereum/${DEGEN_TOKEN_ADDRESS}/${lowestTokenID}`,
            });
          })
          .catch((error): any => {
            console.error(error.message);
          });
      })
      .catch((error): any => {
        console.error(error.message);
      });
  }, []);

  return (
    <article className="mx-auto w-full rounded-3xl bg-gradient-to-br from-[#D83E824A] to-[#FF92AC20] p-6 pb-5 backdrop-blur-[10px] sm:me-0 sm:w-[85%]">
      <Link href={nftData.redirectURL} target="_blank">
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image fill src={nftData.image} alt="nftImage" />
        </div>
        <h3 className="pt-4 text-sm font-bold">{nftData.name}</h3>
        <p className="mt-3 text-xs text-neutral-400/75">
          {nftData.description.split(" ").slice(0, 20).join(" ")} ...
        </p>
        <div className="mt-5 flex items-end gap-3 text-xs">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            
            src={nftData.image}
            alt="avatar"
          />
          <div className="flex-1">
            <span>Floor Price</span>
            <div className="flex items-center gap-1">
              <span className="text-gradient-sm font-black">
                {floorPrice} ETH
              </span>
              <Image
                width={12}
                height={12}
                src="/images/icons/ethereum.png"
                alt="EthIcon"
              />
            </div>
          </div>
          {/* <span>2.6%</span> */}
        </div>
      </Link>
    </article>
  );
};

export default HeroNFT;
