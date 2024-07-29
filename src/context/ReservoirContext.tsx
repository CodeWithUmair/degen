"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { reservoirChains } from "@reservoir0x/reservoir-sdk";
import { ReservoirKitProvider, darkTheme } from "@reservoir0x/reservoir-kit-ui";
import { WagmiProvider } from "wagmi";
import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

interface ReservoirContextType {}

const ReservoirContext = createContext<ReservoirContextType | undefined>(
  undefined,
);

export const ReservoirContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const ALCHEMY_API_KEY = "GtV6Mq5x8UTi3UvxtL6VPfBAhJYPfuf8";
  const RESERVOIR_API_KEY = "4b2b187f-c991-5cc9-818a-b42ccedb54dd";

  const config = createConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(
        `https://ethereum.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      ),
      [sepolia.id]: http(`https://sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`),
    },
  });
  const queryClient = new QueryClient();
  // reservoir

  const theme = darkTheme({
    headlineFont: "Sans Serif",
    font: "Serif",
    primaryColor: "#323aa8",
    primaryHoverColor: "#252ea5",
  });

  return (
    <ReservoirContext.Provider value={{}}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ReservoirKitProvider
            options={{
              apiKey: RESERVOIR_API_KEY,
              chains: [
                {
                  ...reservoirChains.mainnet,
                  active: true,
                },
              ],
              source: "degendao.io",
            }}
            theme={theme}
          >
            {children}
          </ReservoirKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ReservoirContext.Provider>
  );
};

export const useReservoirContext = (): ReservoirContextType => {
  const context = useContext(ReservoirContext);
  if (!context) {
    throw new Error("useReservoirContext must be used within a DegenProvider");
  }
  return context;
};
