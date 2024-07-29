"use client";
import { heroStats } from "@/assets/mock";
import { ResponsiveBar } from "@nivo/bar";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroRevenue() {
  return (
    <div className="w-full max-w-[600px] rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6 shadow-md backdrop-blur-[10px]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-md text-white">REVENUE</h2>
        <span className="whitespace-nowrap text-[10px] text-[#18A800]">
          <span className="text-neutral-300">Current Month: </span>
          $327,156,262.00
        </span>
      </div>
      <div className="flex items-end justify-between gap-3">
        <div className="flex flex-col items-start gap-2">
          <span className="text-[#18A800] text-2xl font-bold">+34%</span>
        </div>
        <BarChart className="mt-3 h-[115px] min-h-[100px] w-full" />
      </div>
    </div>
  );
}

const CustomTooltip = ({ value }: { value: number }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`rounded-3xl bg-gradient-to-b from-[#0A0004] to-[#232323] p-6 text-white backdrop-blur-[100px] ${
        show ? "visible" : "invisible"
      }`}
    >
      <h2 className="mb-6 _uppercase_">Stats</h2>
      <div className="space-y-4">
        {heroStats.map(({ label, value, icon }, i) => {
          return (
            <div key={i} className="flex items-center">
              <Image
                src={icon}
                width={25}
                height={25}
                className="mr-3  object-contain text-yellow-300"
                alt="Icon"
              />
              <div>
                <div className="text-[11px] font-medium text-neutral-500">
                  {label}
                </div>
                <div
                  className={`${
                    i == 2 ? "text-redColor" : "text-green"
                  } text-sm font-semibold`}
                >
                  {value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function BarChart(props: any) {
  const customColors = [
    "#C4385680",
    "#C4385680",
    "#C4385680",
    "#C4385680",
    "#C4385680",
    "#C4385680",
    "#C4385680",
    "#C4385680",
  ];

  return (
    <div {...props}>
      <ResponsiveBar
        onClick={(data) => {
          console.log(
            // `all the people that ${data["id"]} for ${data["key"]} = ${data["value"]}`,
            data.data,
            "all the people that",
          );
        }}
        data={[
          {
            name: "Jan",
            data: 10,
          },
          {
            name: "Feb",
            data: 20,
          },
          {
            name: "Mar",
            data: 30,
          },
          {
            name: "Apr",
            data: 40,
          },
          {
            name: "May",
            data: 50,
          },
          {
            name: "Jun",
            data: 60,
          },
          {
            name: "Jul",
            data: 70,
          },
        ]}
        keys={["data"]}
        indexBy="name"
        margin={{ top: 20, right: 20, bottom: 15, left: 0 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={customColors}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        axisTop={null}
        axisLeft={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: 45,
          truncateTickAt: 0,
        }}
        axisRight={{
          tickSize: 0,
          tickPadding: 0,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: 45,
          truncateTickAt: 0,
          tickValues: [10, 20, 30, 40, 50, 60, 70],
        }}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
          axis: {
            ticks: {
              text: {
                fill: "#8E8E8E",
                fontSize: "9px",
              },
            },
          },
        }}
        label={function (d) {
          return "";
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="A bar chart showing data"
        enableGridX={false}
        enableGridY={false}
        tooltip={CustomTooltip}
        onMouseEnter={(_data, event: any) => {
          event.target.style.fill = "#C43856";
        }}
        onMouseLeave={(_data, event: any) => {
          event.target.style.fill = "#C4385680";
        }}
      />
    </div>
  );
}
