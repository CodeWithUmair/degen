// components/DynamicChart.tsx
"use client";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ResponseType = {
  name: string;
  value: number;
}[];

const HoldersChart = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [data, setData] = useState<ResponseType>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const response = [
        { name: "Sept", value: 400 },
        { name: "Oct", value: 700 },
        { name: "Nov", value: 900 },
        { name: "Dec", value: 600 },
        { name: "Jan", value: 700 },
        { name: "Feb", value: 1200 },
        { name: "March", value: 1700 },
        { name: "April", value: 2500 },
      ];
      setData(response);
    };

    fetchData();
  }, []);

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };

  return (
    <div className="h-full w-full">
      <div className=" mb-4 flex flex-col items-center justify-around gap-3 md:flex-row">
        <div className="gap-4 rounded-2xl border-hidden p-2 font-bold md:text-xs 2xl:text-[16px]">
          Holders Growth Over Time
        </div>
        <div className="text gap-4 rounded-full border-hidden bg-[#FF658925] p-2 px-4 font-thin md:text-xs 2xl:text-[16px] ">
          Avg Holding Period: 2 Years
        </div>
        <select
          value={selectedYear}
          onChange={(e) => handleYearChange(e.target.value)}
          className="fo h-fit rounded-3xl border border-[#FF658925] bg-transparent p-2 px-4 focus-visible:outline-none md:text-xs 2xl:text-[16px]"
        >
          <option className="bg-[#FF658925] text-black" value="2023">
            2022-23
          </option>
          <option className="text-black" value="2024">
            2023-24
          </option>
        </select>
      </div>

      <div className="mt-4 h-[300px] max-h-full w-full max-w-full xl:h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
          >
            <CartesianGrid vertical={false} opacity={0.2} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ dy: 20, fill: "#978C90", fontSize: "14px" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ dx: -20, fill: "#978C90", fontSize: "14px" }}
            />
            {/* <Tooltip /> */}
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
};

export default HoldersChart;
