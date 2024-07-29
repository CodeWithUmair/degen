"use client";

import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import poolRecords from "../utils/poolRecords.json";

interface TokenDetails {
  circulatingSupply: number;
  totalSupply: number;
  self_reported_market_cap: number;
  volume24h: number;
  price: number;
  priceVariation: number;
  mcapVariation: number;
  volumeVariation: number;
  lastUpdated: string;
}
interface PoolDetails {
  volume24h: number;
  liquidity: number;
  volumeVariation: number;
  liquidityVariation: number;
}

interface DegenContextType {
  tokenDetails: TokenDetails;
  poolsDetails: PoolDetails;
  truncateAmount: (value: number, decimals: number) => number;
}

// Define default values for the context
const defaultTokenDetails: TokenDetails = {
  circulatingSupply: 0,
  totalSupply: 0,
  self_reported_market_cap: 0,
  volume24h: 0,
  price: 0,
  priceVariation: 0,
  mcapVariation: 0,
  volumeVariation: 0,
  lastUpdated: "",
};
const defaultPoolDetails: PoolDetails = {
  volume24h: 0,
  liquidity: 0,
  liquidityVariation: 0,
  volumeVariation: 0,
};

// const defaultContextValue: DegenContextType = {
//   tokenDetails: defaultTokenDetails,
//   poolDetails: defaultPoolDetails,
//   truncateAmount: (value: number, decimals: number) => value, // Provide a default implementation
// };

const DegenContext = createContext<DegenContextType | undefined>(undefined);

export const DegenProvider = ({ children }: { children: ReactNode }) => {

  const [tokenDetails, setTokenDetails] =
    useState<TokenDetails>(defaultTokenDetails);
  const [poolsDetails, setPoolDetails] =
  useState<PoolDetails>(defaultPoolDetails);
  // console.log("🚀 ~ DegenProvider ~ poolsDetails:", poolsDetails)

  function truncateAmount(value: number, decimals: number) {
    const parts = value.toString().split(".");
    if (parts.length === 2 && parts[1].length > decimals) {
      return Number(`${parts[0]}.${parts[1].substring(0, decimals)}`);
    }
    return Number(value);
  }

  const poolData = async () => {
    const liquidityUrl =
      "https://public-api.dextools.io/trial/v2/pool/base/0xe6ddcb17d62898fa7b878c71bd91c6c454978e11/liquidity";
    const volumeUrl =
      "https://public-api.dextools.io/trial/v2/pool/base/0xe6ddcb17d62898fa7b878c71bd91c6c454978e11/price";
    const apiKey = "cFwky8hHlm9iQbpKTQCxI5QnpFZlzeFi9Ow1SBwO";

    try {
      const [poolsResponse, volumeResponse] = await Promise.all([
        axios.get(liquidityUrl, {
          headers: {
            accept: "application/json",
            "x-api-key": apiKey,
          },
        }),
        axios.get(volumeUrl, {
          headers: {
            accept: "application/json",
            "x-api-key": apiKey,
          },
        }),
      ]);


      // // Current timestamp
      // const now = Date.now();
      // const oneDay = 86400000; // milliseconds in a day
      const liquidityData = truncateAmount(
        poolsResponse.data.data.liquidity,
        3,
      );
      const volumeData = truncateAmount(volumeResponse.data.data.volume24h, 3);

      // if (now - poolRecords.previousLiquidity.lastTimeUpdated >= oneDay) {
      //   // Update the poolRecords using the API route
      //   await axios.post("/api/updatepool", {
      //     body: JSON.stringify({
      //       previousLiquidity: liquidityData,
      //       volume24h: volumeData,
      //       now: now,
      //     }),
      //   });
      // }

      setPoolDetails({
        liquidity: liquidityData,
        volume24h: volumeData,
        liquidityVariation: truncateAmount(
          ((liquidityData - poolRecords.previousLiquidity.value) /
            liquidityData) *
            100,
          2,
        ),
        volumeVariation: truncateAmount(
          ((volumeData - poolRecords.previousVolume.value) / volumeData) * 100,
          2,
        ),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchToken = async () => {
    try {
      const response = await axios.get('/api/token');
      const data = response.data.data['32015'];

      const lastUpdated = new Date(data.quote.USD.last_updated);
      const currentTime = new Date();
      const updatedTimeInSeconds = Math.floor((currentTime.getTime() - lastUpdated.getTime()) / 1000).toLocaleString();


      const newTokenDetails: TokenDetails = {
        circulatingSupply: data.self_reported_circulating_supply,
        totalSupply: data.total_supply,
        self_reported_market_cap: data.self_reported_market_cap,
        volume24h: data.quote.USD.volume_24h,
        price: data.quote.USD.price,
        priceVariation: data.quote.USD.percent_change_24h,
        mcapVariation: data.quote.USD.percent_change_24h,
        volumeVariation: data.quote.USD.volume_change_24h,
        lastUpdated: updatedTimeInSeconds,
      };

      setTokenDetails(newTokenDetails);
    } catch (error) {
      console.error("Error fetching token details:", error);
    }
  };

  useEffect(() => {
    fetchToken();
    poolData();
  }, []);

  return (
    <DegenContext.Provider
      value={{ tokenDetails, truncateAmount, poolsDetails }}
    >
      {children}
    </DegenContext.Provider>
  );
};

export const useDegenContext = (): DegenContextType => {
  const context = useContext(DegenContext);
  if (!context) {
    throw new Error("useDegenContext must be used within a DegenProvider");
  }
  return context;
};
