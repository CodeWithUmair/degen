import { useDegenContext } from "@/context/DegenContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";

type PriceDataType = {
  timestamp: number;
  value: number;
};

async function fetchData(duration: string) {
  let response = await fetch(`/api/all`);
  const result = await response.json();
  console.log(result);

  // Assuming `result.moola.prices` contains the data you need to transform
  const transformedData0 = result.moola.prices.map((item: any) => ({
    timestamp: item[0],
    value: item[1],
  }));

  return transformedData0;
}

export default function HeroTrend() {
  const [data, setData] = useState<PriceDataType[]>([]);
  const { tokenDetails, truncateAmount } = useDegenContext();

  useEffect(() => {
    (async () => {
      const dataMergedAndSorted = await fetchData("ALL");

      setData(dataMergedAndSorted);
    })();
  }, []);

  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6 shadow-md backdrop-blur-[10px]">
      <div className="mb-3 flex items-center gap-2">
        <Image
          width={30}
          height={30}
          src="/images/icons/moola.svg"
          alt="moolaIcon"
        />
        <h2 className="text-md _uppercase_ font-medium text-neutral-300">
          Moola Token
        </h2>
      </div>
      <div className="group flex items-end justify-between gap-3">
        <div className="flex flex-col items-start gap-2">
          <span className="cursor-pointer font-bold ">
            ${tokenDetails.self_reported_market_cap.toLocaleString()}
          </span>
          <div className="flex cursor-pointer items-end gap-3 leading-5 ">
            <span className="text-xs">
              ${truncateAmount(tokenDetails.price, 5)} USD
            </span>
            <span
              className={`relative flex justify-center gap-1 ${
                tokenDetails.priceVariation > 0
                  ? "text-xs text-[#18A800]"
                  : "text-xs text-red-500"
              }`}
            >
              {truncateAmount(Math.abs(tokenDetails.priceVariation), 2)}%
              <Image
                width={20}
                height={20}
                src={`/images/icons/${tokenDetails.priceVariation > 0 ? "green-arrow-up.svg" : "red-arrow-down.svg"}`}
                alt="green arrow up"
                className="aspect-square w-[10px] object-contain"
              />
            </span>
          </div>
        </div>
        {/* <LineChart className="mt-3 h-[50px] min-h-[50px] w-[40%]" /> */}
        <div className="mt-1 h-[50px] min-h-[50px] w-[40%]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <Line
                type="monotone"
                dataKey="value"
                stroke="#E43345"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="invisible absolute left-1/2 z-10 -translate-x-1/2 -translate-y-9 transform rounded-lg bg-gray-900 bg-gradient-to-br from-[#81114257] to-[#863A5C3E] px-5 py-2 text-sm font-medium text-white opacity-0 shadow-md transition-opacity duration-300 group-hover:visible group-hover:opacity-100 dark:bg-gray-700">
          Market Cap
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
}
