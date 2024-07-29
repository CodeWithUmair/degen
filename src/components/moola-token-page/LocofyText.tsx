import { useMemo, useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  useAttributes,
  useCollections,
  useDynamicTokens,
  useTokens,
} from "@reservoir0x/reservoir-kit-ui";

import { NftDataTable } from "./NftDataTable";
import { DEGEN_TOKEN_ADDRESS } from "@/config";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "../ui/Button";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Checkbox } from "../ui/Checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/RadioGroup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordian";
import {
  addParam,
  clearAllAttributes,
  hasParam,
  removeParam,
} from "../../../utils/router";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useDebounceValue, useIntersectionObserver } from "usehooks-ts";
import SelectedAttributes from "./SelectedAttributes";
import NFTFilter from "./NftFilter";

export type LocofyTestType = {
  className?: string;
  collection:
    | NonNullable<ReturnType<typeof useCollections>["data"]>["0"]
    | null;
};

const LocofyTest: NextPage<LocofyTestType> = ({
  className = "",
  collection,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  // const { saveScrollPosition, restoreScrollPosition } = useScrollPosition();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const totalSupply = collection?.tokenCount
    ? Number(collection?.tokenCount)
    : 0;
  const onePercent = Math.round(totalSupply * 0.01);
  const tenPercent = Math.round(totalSupply * 0.1);
  const twentyFivePercent = Math.round(totalSupply * 0.25);

  const [topRaritySelected, setTopRaritySelected] = useState<
    1 | 10 | 25 | null
  >(null);
  const defaultLimitCount = 100;
  const [limitCount, setLimitCount] = useState(defaultLimitCount);
  const [sortBySelected, setSortBySelected] = useState<
    | "floorAskPrice"
    | "tokenId"
    | "rarity"
    | "updatedAt"
    | "listedAt"
    | undefined
  >("floorAskPrice");

  // const nftFilterContainer = useRef(null);

  // const [openDropdown, setOpenDropdown] = useState(null);

  // // Scroll to bottom when the dropdown opens
  // useEffect(() => {
  //   if (nftFilterContainer.current && openDropdown !== null) {
  //     nftFilterContainer.current.scrollTop = nftFilterContainer.current.scrollHeight;
  //   }
  // }, [openDropdown]);

  useEffect(() => {
    if (topRaritySelected !== null) {
      setSortBySelected("rarity");
      if (topRaritySelected === 1) {
        setLimitCount(onePercent);
      } else if (topRaritySelected === 10) {
        setLimitCount(tenPercent);
      } else if (topRaritySelected === 25) {
        setLimitCount(twentyFivePercent);
      }
    } else {
      setSortBySelected("floorAskPrice");
      setLimitCount(defaultLimitCount);
    }
  }, [topRaritySelected]);

  const [minFloorPrice, setMinFloorPrice] = useState<number | undefined>(
    undefined,
  );
  const [maxFloorPrice, setMaxFloorPrice] = useState<number | undefined>(
    undefined,
  );

  const [minFloorPriceDeb] = useDebounceValue(minFloorPrice, 500);
  const [maxFloorPriceDeb] = useDebounceValue(maxFloorPrice, 500);

  const [minRarity, setMinRarity] = useState<number | undefined>(undefined);
  const [maxRarity, setMaxRarity] = useState<number | undefined>(undefined);

  const [minRarityDeb] = useDebounceValue(minRarity, 500);
  const [maxRarityDeb] = useDebounceValue(maxRarity, 500);

  const attributesData = useAttributes(DEGEN_TOKEN_ADDRESS);
  const attributes = useMemo(() => {
    if (!attributesData.data) {
      return [];
    }
    return attributesData.data
      ?.filter(
        (attribute) =>
          attribute.kind !== "number" && attribute.kind !== "range",
      )
      .sort((a, b) => a.key.localeCompare(b.key));
  }, [attributesData.data]);

  const handleMinRarityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value < 0 || value > 449) {
      alert("The value must be between 0 and 449");
    } else {
      setMinRarity(value);
    }
  };

  const handleMaxRarityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value <= 0 || value > 450) {
      alert("The value must be greater than 0 and less than or equal to 450");
    } else {
      setMaxRarity(value);
    }
  };

  //========================== TOKEN DATA ========================
  let tokenQuery: Parameters<typeof useDynamicTokens>["0"] = {
    limit: defaultLimitCount,
    collection: DEGEN_TOKEN_ADDRESS,
    sortBy: sortBySelected,
    sortDirection: "asc",
    includeTopBid: true,
    includeQuantity: true,
    includeLastSale: true,
    // includeAttributes: true,
    minFloorAskPrice:
      minFloorPriceDeb && maxFloorPriceDeb ? minFloorPriceDeb : undefined,
    maxFloorAskPrice:
      minFloorPriceDeb && maxFloorPriceDeb ? maxFloorPriceDeb : undefined,
    minRarityRank: minRarityDeb && maxRarityDeb ? minRarityDeb : undefined,
    maxRarityRank: minRarityDeb && maxRarityDeb ? maxRarityDeb : undefined,
  };
  // console.log("🚀 ~ tokenQuery:", tokenQuery);

  searchParams.forEach((value, key) => {
    // console.log("sampleData",value, key);
    if (key.startsWith("attributes[") && key.endsWith("]") && value !== "") {
      // @ts-ignore
      tokenQuery[key] = value;
    }
  });

  const {
    data: tokens,
    mutate,
    fetchNextPage,
    setSize,
    resetCache,
    isFetchingInitialData,
    isFetchingPage,
    hasNextPage,
  } = useTokens(tokenQuery);
  const { isIntersecting, ref: loadMoreRef } = useIntersectionObserver({
    threshold: 0.5,
  });
  // useEffect(() => {
  // const isVisible = !!isIntersecting;
  // if (isVisible) {
  //   fetchNextPage();
  // }
  // }, [isIntersecting]);
  useEffect(() => {
    if (!isFetchingPage && hasNextPage) {
      if (topRaritySelected !== null) {
        if (tokens.length < limitCount) {
          fetchNextPage();
          return;
        }
        return;
      }
      fetchNextPage();
    }
  }, [isFetchingPage, hasNextPage, tokens, limitCount, topRaritySelected]);

  if (!isMounted) {
    return null;
  }
  if (!isMounted) {
    return null;
  }

  const handleAddParam = (name: string, value: string) => {
    addParam(
      router,
      pathname,
      searchParams,
      name,
      value,
      // saveScrollPosition,
      // restoreScrollPosition,
    );
  };

  const handleRemoveParam = (name: string, value: string) => {
    removeParam(
      router,
      pathname,
      searchParams,
      name,
      value,
      // saveScrollPosition,
      // restoreScrollPosition,
    );
  };

  const handleClearAllAttributes = () => {
    clearAllAttributes(
      router,
      pathname,
      // saveScrollPosition,
      // restoreScrollPosition,
    );
  };

  // const scrollY = useScrollPosition();

  return (
    <div
      className={`box-border flex max-w-screen-2xl flex-row items-start justify-center self-stretch pb-10 pt-0 text-center text-white lg:box-border ${className}`}
    >
      {/* <useScrollPosition /> */}

      <div className="flex w-full max-w-full flex-col items-start justify-start gap-[20px] self-stretch text-left text-lg xl:flex-row">
        <div className="flex w-full flex-col items-start justify-start gap-[8px] xl:w-[25%]">
          <div className="flex flex-col items-start justify-start gap-[7px] self-stretch">
            <div className="flex flex-row items-start justify-start">
              <b className="relative inline-block min-w-[50px] capitalize">
                Rarity
              </b>
            </div>

            <RadioGroup defaultValue="option-one" className="w-full">
              <div className="flex flex-row items-start justify-center gap-[9px] self-stretch text-sm">
                <div className="flex flex-1 flex-row items-start justify-center whitespace-nowrap rounded-[5.47px] p-2 text-center [background:linear-gradient(209.05deg,_rgba(129,_17,_67,_0.34),_rgba(45,_1,_20,_0.34)),_linear-gradient(211.44deg,_rgba(35,_35,_35,_0.46),_rgba(158,_158,_158,_0.2))]">
                  <RadioGroupItem
                    checked={topRaritySelected === 1}
                    value="top-1"
                    id="option-one"
                    onClick={() =>
                      setTopRaritySelected(topRaritySelected === 1 ? null : 1)
                    }
                  />
                  <Label htmlFor="option-one" className="cursor-pointer pl-2">
                    Top 1%
                  </Label>
                </div>
                <div className="flex flex-1 flex-row items-start justify-center whitespace-nowrap rounded-[5.47px] p-2 text-center [background:linear-gradient(209.05deg,_rgba(129,_17,_67,_0.34),_rgba(45,_1,_20,_0.34)),_linear-gradient(211.44deg,_rgba(35,_35,_35,_0.46),_rgba(158,_158,_158,_0.2))]">
                  <RadioGroupItem
                    checked={topRaritySelected === 10}
                    value="top-10"
                    id="option-two"
                    onClick={() =>
                      setTopRaritySelected(topRaritySelected === 10 ? null : 10)
                    }
                  />
                  <Label htmlFor="option-two" className="cursor-pointer pl-2">
                    Top 10%
                  </Label>
                </div>
                <div className="flex flex-1 flex-row items-start justify-center whitespace-nowrap rounded-[5.47px] p-2 text-center [background:linear-gradient(209.05deg,_rgba(129,_17,_67,_0.34),_rgba(45,_1,_20,_0.34)),_linear-gradient(211.44deg,_rgba(35,_35,_35,_0.46),_rgba(158,_158,_158,_0.2))]">
                  <RadioGroupItem
                    checked={topRaritySelected === 25}
                    value="top-25"
                    id="option-three"
                    onClick={() =>
                      setTopRaritySelected(topRaritySelected === 25 ? null : 25)
                    }
                  />
                  <Label htmlFor="option-three" className="cursor-pointer pl-2">
                    Top 25%
                  </Label>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="text-sm-7 flex flex-row items-start justify-start self-stretch px-0 pb-1 pt-0">
            <div className="flex flex-1 flex-row items-center justify-start gap-[19px] rounded-[6.93px] px-[19px] py-4 [background:linear-gradient(209.05deg,_rgba(129,_17,_67,_0.34),_rgba(45,_1,_20,_0.34)),_linear-gradient(211.44deg,_rgba(35,_35,_35,_0.46),_rgba(158,_158,_158,_0.2))]">
              <div className="relative hidden h-14 w-[293px] rounded-[6.93px] [background:linear-gradient(209.05deg,_rgba(129,_17,_67,_0.34),_rgba(45,_1,_20,_0.34)),_linear-gradient(211.44deg,_rgba(35,_35,_35,_0.46),_rgba(158,_158,_158,_0.2))]" />
              <div className="flex flex-1 flex-row items-center justify-start gap-[5px]">
                <div className="flex flex-col items-center justify-start px-0 pb-0">
                  <div className="relative z-[1] inline-block min-w-[27px] text-sm">
                    Min.
                  </div>
                </div>
                <div className="text-2xs-9 text-dimgray-300 z-[1] flex flex-1 flex-row items-center justify-start rounded-[6.84px] bg-[#1D1116]">
                  <Input
                    type="number"
                    placeholder="0"
                    value={minRarity}
                    onChange={handleMinRarityChange}
                    min={0}
                    max={449}
                    className="border-none"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-row items-center justify-start gap-[5px]">
                <div className="flex flex-col items-center justify-start px-0 pb-0">
                  <div className="relative z-[1] inline-block min-w-[27px] text-sm">
                    Max.
                  </div>
                </div>
                <div className="text-2xs-9 text-dimgray-300 z-[1] flex flex-1 flex-row items-center justify-start rounded-[6.84px] bg-[#1D1116]">
                  <Input
                    type="number"
                    placeholder="450"
                    value={maxRarity}
                    onChange={handleMaxRarityChange}
                    min={0}
                    max={450}
                    className="border-none"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[9px] self-stretch px-0 pb-3 pt-0">
            <div className="flex flex-row items-start justify-start px-px py-0">
              <b className="relative inline-block min-w-[43px] capitalize">
                Price
              </b>
            </div>

            <div className="text-sm-7 flex flex-row items-start justify-start self-stretch px-0 pb-1 pt-0">
              <div className="flex flex-1 flex-row items-center justify-start gap-[19px] rounded-[6.93px] px-[19px] py-4 [background:linear-gradient(209.05deg,_rgba(129,_17,_67,_0.34),_rgba(45,_1,_20,_0.34)),_linear-gradient(211.44deg,_rgba(35,_35,_35,_0.46),_rgba(158,_158,_158,_0.2))]">
                <div className="relative hidden h-14 w-[293px] rounded-[6.93px] [background:linear-gradient(209.05deg,_rgba(129,_17,_67,_0.34),_rgba(45,_1,_20,_0.34)),_linear-gradient(211.44deg,_rgba(35,_35,_35,_0.46),_rgba(158,_158,_158,_0.2))]" />
                <div className="flex flex-1 flex-row items-center justify-start gap-[5px]">
                  <div className="flex flex-col items-center justify-start px-0 pb-0">
                    <div className="relative z-[1] inline-block min-w-[27px] text-sm">
                      Min.
                    </div>
                  </div>
                  <div className="text-2xs-9 text-dimgray-300 z-[1] flex flex-1 flex-row items-center justify-start rounded-[6.84px] bg-[#1D1116]">
                    <Input
                      type="number"
                      placeholder="0"
                      value={minFloorPrice}
                      onChange={(e: any) => setMinFloorPrice(e.target.value)}
                      min={0}
                      max={1000}
                      className="border-none"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-row items-center justify-start gap-[5px]">
                  <div className="flex flex-col items-center justify-start px-0 pb-0">
                    <div className="relative z-[1] inline-block min-w-[27px] text-sm">
                      Max.
                    </div>
                  </div>
                  <div className="text-2xs-9 text-dimgray-300 z-[1] flex flex-1 flex-row items-center justify-start rounded-[6.84px] bg-[#1D1116]">
                    <Input
                      type="number"
                      placeholder="0000"
                      value={maxFloorPrice}
                      onChange={(e: any) => setMaxFloorPrice(e.target.value)}
                      min={0}
                      max={1000}
                      className="border-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start justify-start self-stretch rounded-3xl py-0 pl-px pr-0.5">
            <div className="flex flex-1 flex-col items-start justify-start gap-[14.4px] rounded-xl py-4 pl-5 pr-4 [backdrop-filter:blur(17.59px)] [background:linear-gradient(211.44deg,_rgba(216,_62,_130,_0.29),_rgba(255,_146,_172,_0.13))]">
              <div className="relative hidden h-[265px] w-[292px] [backdrop-filter:blur(17.59px)] [background:linear-gradient(211.44deg,_rgba(216,_62,_130,_0.29),_rgba(255,_146,_172,_0.13))]" />
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <div className="flex flex-col items-center justify-start px-0 pb-0 pt-1.5">
                  <Image
                    className="relative z-[1]"
                    alt=""
                    src="/images/icons/traits.png"
                    width={20}
                    height={20}
                  />
                </div>
                <b className="relative z-[1] inline-block min-w-[47px] text-xl leading-[128.76%] tracking-[0.01em]">
                  Traits
                </b>
              </div>

              {/* <Button onClick={handleClearAllAttributes} className="">
                Remove Filters
              </Button> */}

              {/* <div className="nft-filter-scrollbar max-h-[265px] w-full overflow-y-auto pr-1" ref={nftFilterContainer}>
                <Accordion
                  type="multiple"
                  className="inline-block w-full max-w-full leading-[128.76%] tracking-[0.01em]"
                >
                  {attributes.length > 0 &&
                    attributes.map((attr, ind) => {
                      return (
                        <AccordionItem
                          key={attr.key}
                          value={attr.key}
                          className="border-none"
                        >
                          <AccordionTrigger className="py-2 text-lg">
                            {attr.key}
                          </AccordionTrigger>
                          <AccordionContent className="py-2 pb-0">
                            <div className="flex flex-col gap-3 pl-2">
                              {attr.values &&
                                attr.values.length > 0 &&
                                attr.values
                                  .sort((a, b) => {
                                    if (!a.count || !b.count) {
                                      return 0;
                                    } else {
                                      return b.count - a.count;
                                    }
                                  })
                                  .map((singleTrait, indLower) => {
                                    return (
                                      <div
                                        key={`attr-key-${indLower}`}
                                        className="items-top flex space-x-2"
                                        onClick={() => {
                                          if (
                                            hasParam(
                                              searchParams,
                                              `attributes[${attr.key}]`,
                                              singleTrait.value,
                                            )
                                          ) {
                                            handleRemoveParam(
                                              `attributes[${attr.key}]`,
                                              singleTrait.value,
                                            );
                                          } else {
                                            handleAddParam(
                                              `attributes[${attr.key}]`,
                                              singleTrait.value,
                                            );
                                          }
                                        }}
                                      >
                                        <Checkbox
                                          id={singleTrait.value}
                                          checked={hasParam(
                                            searchParams,
                                            `attributes[${attr.key}]`,
                                            singleTrait.value,
                                          )}
                                          onCheckedChange={(checked) => {
                                            if (checked) {
                                              handleAddParam(
                                                `attributes[${attr.key}]`,
                                                singleTrait.value,
                                              );
                                            } else {
                                              handleRemoveParam(
                                                `attributes[${attr.key}]`,
                                                singleTrait.value,
                                              );
                                            }
                                          }}
                                        />
                                        <div className="grid gap-1.5 leading-none">
                                          <label
                                            htmlFor={singleTrait.value}
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                          >
                                            {singleTrait.value}
                                            <span className="ml-3">
                                              ( {singleTrait?.count ?? "--"} )
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                    );
                                  })}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                </Accordion>
              </div> */}

              <NFTFilter attributes={attributes} />
            </div>
          </div>
        </div>

        <div className="z-[2] box-border flex w-full flex-1 flex-col items-start justify-start gap-4 rounded-3xl px-[19px] pb-[33px] pt-3.5 text-xs [backdrop-filter:blur(32.9px)] [background:linear-gradient(211.44deg,_rgba(216,_62,_130,_0.29),_rgba(255,_146,_172,_0.13))]">
          <div className="relative hidden w-full max-w-full [backdrop-filter:blur(32.9px)] [background:linear-gradient(211.44deg,_rgba(216,_62,_130,_0.29),_rgba(255,_146,_172,_0.13))]" />
          <div className="flex max-w-full flex-col items-start justify-start gap-[7.2px] self-stretch">
            <div className="flex flex-col items-start justify-start gap-[7.5px] self-stretch text-base">
              <div className="flex flex-row items-start justify-start py-0">
                <div className="z-[3] flex flex-row items-center justify-start gap-[6px] rounded-lg bg-[#241218] px-4 py-2">
                  <Image
                    className="relative"
                    alt=""
                    src="/images/icons/items.png"
                    width={20}
                    height={20}
                  />
                  <div className="relative inline-block min-w-[39px] leading-[101%] tracking-[0.01em]">
                    Items (
                    {
                      (topRaritySelected == null
                        ? tokens
                        : tokens.slice(0, limitCount)
                      ).length
                    }
                    )
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SelectedAttributes />

          <NftDataTable
            tokens={
              topRaritySelected == null ? tokens : tokens.slice(0, limitCount)
            }
            loadMoreRef={loadMoreRef}
            isFetchingPage={isFetchingPage}
            hasNextPage={hasNextPage}
          />

          {collection?.floorAsk?.price?.amount?.native ? (
            <Button
              variant="tableButton"
              className="px-0"
              iconUrl="/images/icons/eth-icon.png"
              onClick={() => {
                window.open(
                  `https://opensea.io/assets/ethereum/${DEGEN_TOKEN_ADDRESS}/${collection?.floorAsk?.token?.tokenId}`,
                  "_blank",
                );
              }}
            >
              {`Buy Floor ${collection.floorAsk.price.amount.native}`}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LocofyTest;
