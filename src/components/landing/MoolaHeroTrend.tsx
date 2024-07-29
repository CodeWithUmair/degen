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

export default function MoolaTrend() {
  const [data, setData] = useState<PriceDataType[]>([]);
  const { tokenDetails, truncateAmount } = useDegenContext();

  useEffect(() => {
    (async () => {
      const dataMergedAndSorted = await fetchData("ALL");

      setData(dataMergedAndSorted);
    })();
  }, []);

  return (
    <div className="w-full rounded-2xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] px-4 py-2 shadow-md backdrop-blur-[10px] sm:w-[220px] flex items-center justify-center">
      <div className="mt-1 flex flex-col items-start gap-3 w-[60%]">
        <h2 className="_uppercase_ text-md font-medium text-neutral-300">
          Moola
        </h2>
        <div className="flex items-end gap-2 text-xs leading-4">
          <span className="text-sm">
            ${truncateAmount(tokenDetails.price, 3)}
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
      <div className="h-[50px] w-[40%]">
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
    </div>
  );
}
