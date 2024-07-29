"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDegenContext } from "@/context/DegenContext";
import approx from "approximate-number";
interface Pool {
  id: number;
  name: string;
  tvl: string;
  tvlChange: string;
  volume: string;
  volumeChange: string;
  icon: string;
}

const LiquidityPoolsTable: React.FC = () => {
  const { poolsDetails } = useDegenContext();
  const [pools, setPools] = useState<Pool[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const fetchPools = () => {
    // Simulate an API call with mock data
    return [
      {
        id: 1,
        name: "MOOLA/USDC",
        tvl: `$${approx(poolsDetails.liquidity || 0, {
          capital: true,
          min10k: true,
          precision: 3,
        })}`,
        tvlChange: `${poolsDetails.liquidityVariation}%`,
        volume: `$${approx(poolsDetails.volume24h || 0, {
          capital: true,
          min10k: true,
          precision: 3,
        })}`,
        volumeChange: `${poolsDetails.volumeVariation}%`,
        icon: "/images/icons/pool6.png",
      },
    ];
  };

  useEffect(() => {
    const getPools = async () => {
      const poolData = fetchPools();
      setPools(poolData);
      setLoading(false);
    };

    getPools();
  }, [poolsDetails]);

  const totalPages = Math.ceil(pools.length / itemsPerPage);
  const currentPools = pools.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="mx-auto min-h-[455px] rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] pt-12 shadow-md backdrop-blur-[10px] md:px-8 lg:mr-5 lg:px-8">
      <h2 className="mb-4 text-center text-xl font-semibold text-white">
        Liquidity Pools
      </h2>
      <table className="min-w-full bg-transparent">
        <thead className="rounded-3xl bg-[#160710]">
          <tr className="rounded-full">
            <th className="rounded-l-full p-2 text-center font-normal">#</th>
            <th className="px-4 py-2 text-left font-normal pl-20">Pool</th>
            <th className="px-4 py-2 text-left font-normal">Liquidity</th>
            <th className="rounded-r-full px-4 py-2 text-left font-normal">
              Volume 24H
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPools.map((pool) => (
            <tr key={pool.id} className="border-b border-hidden">
              <td className="p-2 text-center">{pool.id}</td>
              <td className="flex items-center px-4 py-2 ">
                <Image
                  src="/images/icons/uniswap_logo.png"
                  width={30}
                  height={30}
                  alt="uniswap"
                  className="mr-2 "
                />

                <Image
                  src={pool.icon}
                  width={35}
                  height={10}
                  alt={pool.name}
                  className="mr-2 ml-5"
                />
                {pool.name}
              </td>
              <td className="px-4 py-2  ">
                {pool.tvl}{" "}
                <span
                  className={
                    pool.tvlChange.startsWith("-")
                      ? "rounded-md bg-[#3A1E1E]  px-1 text-xs text-redColor"
                      : "rounded-md bg-[#25351C] px-1 text-xs text-green"
                  }
                >
                  {pool.tvlChange}
                </span>
              </td>
              <td className="px-4 py-2  ">
                {pool.volume}{" "}
                <span
                  className={
                    pool.volumeChange.startsWith("-")
                      ? "rounded-md bg-[#3A1E1E]  px-1 text-xs text-redColor"
                      : "rounded-md bg-[#25351C] px-1 text-xs text-green"
                  }
                >
                  {pool.volumeChange}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="mt-4 flex items-center justify-end text-gray-400">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={`mx-1 rounded px-2 py-1 ${currentPage === 1 ? "text-gray-600" : "text-gray-400"}`}
          disabled={currentPage === 1}
        >
          <Image
            src="/images/icons/left_nav.svg"
            alt="left"
            width={6}
            height={4}
          />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-1 rounded px-2 py-1 text-xs ${currentPage === index + 1 ? "text-redColor" : "text-gray-400"}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className={`mx-1 rounded px-2 py-1 text-xs ${currentPage === totalPages ? "text-gray-600" : "text-gray-400"}`}
          disabled={currentPage === totalPages}
        >
          <Image
            src="/images/icons/right_nav.svg"
            alt="left"
            width={6}
            height={4}
          />{" "}
        </button>
      </div> */}
    </div>
  );
};

export default LiquidityPoolsTable;
