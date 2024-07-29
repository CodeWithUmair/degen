"use client";

import { formatUnixTime } from "@/helpers/token";
import React, { useEffect, useState } from "react";
import MoolaTrend from "./MoolaHeroTrend";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

type PriceDataType = {
  timestamp: number;
  value: number;
};

const getFormattedDate = (unixTime: number) => {
  const date = new Date(unixTime * 1000); // Convert Unix timestamp to milliseconds
  const options: any = { year: "numeric", month: "numeric", day: "numeric" };
  return date.toLocaleDateString("en-US", options); // Adjust the locale as needed
};

async function fetchData(duration: string) {
  let response;
  if (duration === "ALL") {
    response = await fetch(`/api/all`);
  } else if (duration === "1D") {
    response = await fetch(`/api/1D`);
  } else if (duration === "7D") {
    response = await fetch(`/api/7D`);
  } else if (duration === "1M") {
    response = await fetch(`/api/1M`);
  } else if (duration === "1Y") {
    response = await fetch(`/api/1Y`);
  } else {
    response = await fetch(`/api/all`);
  }
  const result = await response.json();
  console.log(result);

  // Assuming `result.moola.prices` contains the data you need to transform
  const transformedData0 = result.moola.prices.map((item: any) => ({
    timestamp: item[0],
    value: item[1],
  }));
  // const transformedData1 = result.usdc.prices2.map((item: any) => ({
  //   timestamp: item[0],
  //   value1: item[1],
  // }));

  return transformedData0;
}

const CustomActiveDot = (props: any) => {
  const { cx, cy, stroke, payload, value } = props;

  if (!cx || !cy) {
    return null;
  }

  return (
    <svg>
      <Image
        src="/images/icons/bg_chart_dot_2.png"
        width={60}
        height={60}
        style={{ zIndex: 1 }}
        alt="image"
        className="bg-cover bg-center bg-no-repeat"
      />
      <Image
        src="/images/icons/bg_chart_dot.png"
        width={20}
        height={20}
        style={{ zIndex: 2 }}
        alt="image"
        className="bg-cover bg-center bg-no-repeat"
      />
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill="url(#dotGradient)"
        stroke="white"
        strokeWidth={2}
        style={{
          filter: "drop-shadow(0 0 4px rgba(203, 76, 196, 0.5))",
          zIndex: 2,
        }}
      />
      <circle
        cx={cx}
        cy={cy}
        r={2}
        fill="white"
        stroke="none"
        style={{ zIndex: 3 }}
      />
    </svg>
  );
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: any;
  payload: any;
  label: any;
}) => {
  // console.log("PAYLOAD:", payload);
  // console.log("label", label);
  if (active && payload && payload.length) {
    return (
      <div className="min-w-[220px] rounded-lg bg-gradient-to-br from-[#422739] to-[#4D2537] p-4 text-white shadow-lg">
        <div className="mb-3 flex w-full items-center justify-between">
          <p className="label text-xs">{`${getFormattedDate(label)}`}</p>
          <p className="label text-sm">{`${new Date(label).toLocaleTimeString()}`}</p>
        </div>
        <div className="flex items-center">
          <span className="mr-2 h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500"></span>
          <p className="text-gray-400">
            Moola:{" "}
            <span className="text-sm text-white">
              {" "}
              {`$${payload[0]?.value?.toFixed(4)}`}
            </span>
          </p>
        </div>
        {/* <div className="flex items-center">
          <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
          <p className="text-gray-400">
            USD:{" "}
            <span className="text-sm text-white">
              {" "}
              {`$${payload[1]?.value?.toFixed(4)}`}
            </span>
          </p>
        </div> */}
      </div>
    );
  }

  return null;
};

const MoolaLineChart = () => {
  const [active, setActive] = useState("ALL");
  const [data, setData] = useState<PriceDataType[]>([]);

  useEffect(() => {
    (async () => {
      const dataMergedAndSorted = await fetchData(active);

      setData(dataMergedAndSorted);
    })();
  }, [active]);

  const TimeButtons = ["1D", "7D", "1M", "1Y", "ALL"];
  return (
    <>
      <div className="h-fit w-full rounded-3xl border-[0.1px] border-[#662044] bg-gradient-to-br from-[#81114257] to-[#863A5C3E] shadow-md backdrop-blur-[10px] p-4 2xl:p-6">
        <div className=" items-center justify-between flex flex-col sm:flex-row gap-2">
          <div className="mx-auto w-full">
            <MoolaTrend />
          </div>
          <div className="hidden w-full items-center justify-center space-x-8 p-4 sm:flex">
            {/* <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              <span className="text-sm font-semibold text-white">USD</span>
            </div> */}
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500"></span>
              <span className="text-sm font-semibold text-white">MOOLA</span>
            </div>
          </div>

          <div className="mt-2 flex flex-col items-center justify-between gap-3">
            <div className="flex flex-col items-start gap-2">
              <div className="flex w-fit gap-2 rounded-md bg-gradient-to-r from-[#81114257] to-[#863A5C3E] p-1">
                {TimeButtons.map((label, ind) => (
                  <button
                    key={ind}
                    disabled={active === label}
                    onClick={() => setActive(label)}
                    className={`cursor-pointer rounded-md p-2 text-sm font-light ${active === label && "bg-[#ffffff1f]"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div></div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8 p-4 sm:hidden">
            {/* <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              <span className="text-sm font-semibold text-white">USD</span>
            </div> */}
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500"></span>
              <span className="text-sm font-semibold text-white">MOOLA</span>
            </div>
          </div>
        </div>

        <div className="bg:contain mt-4 h-full max-h-full w-full max-w-full bg-[url('/Grid.png')] bg-top bg-no-repeat hidden md:flex">
          <ResponsiveContainer width="100%" height={328}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f8a55f" stopOpacity={1} />
                  <stop offset="70%" stopColor="#e43345" stopOpacity={1} />
                  <stop offset="100%" stopColor="#cb4cc4" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="timestamp"
                // type="number"
                domain={["dataMin", "dataMax"]}
                axisLine={false}
                tickLine={false}
                tick={{ dy: 20, fill: "#978C90", fontSize: "10px" }}
                tickFormatter={(tick) =>
                  active === "1D"
                    ? formatUnixTime(tick, "timeOnly")
                    : formatUnixTime(tick, "dateAndMonth")
                }
                // tickCount={6}
              />
              <YAxis
                dataKey="value"
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ dx: -10, fill: "#978C90", fontSize: "12px" }}
                tickFormatter={(tick) => `$${tick.toLocaleString()}`}
                // allowDataOverflow
                tickCount={8}
                domain={["auto", "auto"]}
              />
              <Tooltip
                content={
                  <CustomTooltip
                    active={undefined}
                    payload={undefined}
                    label={undefined}
                  />
                }
              />
              <Line
                type="linear"
                dataKey="value"
                stroke="url(#colorValue)"
                strokeWidth={2}
                dot={false}
                activeDot={<CustomActiveDot />}
              />
              {/* <Line
                type="monotone"
                dataKey="value1"
                // data={data1}
                stroke="#0F5DF3"
                strokeWidth={2}
                dot={false}
                activeDot={false}
                // onMouseEnter={() => alert('Hello')}
              /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg:contain mt-4 h-full max-h-full w-full max-w-full bg-[url('/Grid.png')] bg-top bg-no-repeat md:hidden flex">
          <ResponsiveContainer width="100%" height={270}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f8a55f" stopOpacity={1} />
                  <stop offset="70%" stopColor="#e43345" stopOpacity={1} />
                  <stop offset="100%" stopColor="#cb4cc4" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="timestamp"
                // type="number"
                domain={["dataMin", "dataMax"]}
                axisLine={false}
                tickLine={false}
                tick={{ dy: 20, fill: "#978C90", fontSize: "10px" }}
                tickFormatter={(tick) =>
                  active === "1D"
                    ? formatUnixTime(tick, "timeOnly")
                    : formatUnixTime(tick, "dateAndMonth")
                }
                // tickCount={6}
              />
              <YAxis
                dataKey="value"
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ dx: -10, fill: "#978C90", fontSize: "12px" }}
                tickFormatter={(tick) => `$${tick.toLocaleString()}`}
                // allowDataOverflow
                tickCount={5}
                domain={["auto", "auto"]}
              />
              <Tooltip
                content={
                  <CustomTooltip
                    active={undefined}
                    payload={undefined}
                    label={undefined}
                  />
                }
              />
              <Line
                type="linear"
                dataKey="value"
                stroke="url(#colorValue)"
                strokeWidth={2}
                dot={false}
                activeDot={<CustomActiveDot />}
              />
              {/* <Line
                type="monotone"
                dataKey="value1"
                // data={data1}
                stroke="#0F5DF3"
                strokeWidth={2}
                dot={false}
                activeDot={false}
                // onMouseEnter={() => alert('Hello')}
              /> */}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default MoolaLineChart;
