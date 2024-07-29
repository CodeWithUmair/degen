"use client";
import Image from "next/image";
import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import Container from "../ui/Container";

type ResponseType = {
  name: string;
  value: number;
}[];

const COLORS = ["#E84064", "#7D283E", "#DC1843", "#FF8383", "#F85F5F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: any;
  cy: any;
  midAngle: any;
  innerRadius: any;
  outerRadius: any;
  percent: any;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DynamicPieChart: React.FC = () => {
  const response: ResponseType = [
    { name: "Investors", value: 10 },
    { name: "Dao Treasury", value: 10 },
    { name: "Marketing", value: 10 },
    { name: "Liquidity", value: 10 },
    { name: "Community Airdrop", value: 60 },
  ];

  return (
    <section className="relative my-10">
      <Container>
        <div className="relative mx-auto my-8 flex h-full w-full max-w-3xl flex-col items-center justify-center gap-0 md:flex-row md:gap-5">
          <div className="absolute -bottom-[50%] -left-[105%] -z-[10] w-[100%] rotate-[26deg] 2xl:-left-[122%]">
            <div className="relative aspect-square w-[700px]">
              <Image
                fill
                className="object-fit"
                src="/images/landing/cta-curve.svg"
                alt="design asset line"
              />
            </div>
          </div>
          <div className="absolute -bottom-[10%] -right-[90%] -z-[10] w-[100%] rotate-[12deg] 2xl:-right-[120%]">
            <div className="relative aspect-square w-[500px]">
              <Image
                fill
                className="object-fit"
                src="/images/landing/right_circle.svg"
                alt="design asset line"
              />
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="chart-container-DOOM mt-2 md:mt-4 h-full max-h-full w-full max-w-full hidden md:flex">
              <ResponsiveContainer width="100%" height={450}>
                <PieChart width={450} height={450}>
                  <Pie
                    data={response}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={160}
                    innerRadius={90}
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {response.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        stroke="none"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-container-DOOM mt-2 md:mt-4 h-full max-h-full w-full max-w-full flex md:hidden">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart width={300} height={300}>
                  <Pie
                    data={response}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    innerRadius={70}
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {response.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        stroke="none"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>

          <div className="ml-10 flex justify-center w-full md:w-[50%]">
            <div className="text-white">
              <h2 className="mb-8 w-[50px] text-3xl font-bold">
                Token Distribution
              </h2>
              <ul>
                {response.map((entry, index) => (
                  <li
                    key={`legend-${index}`}
                    className="mb-2 flex items-center"
                  >
                    <div
                      className="mr-6 h-4 w-4"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span style={{ fontSize: "22px" }}>{entry.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DynamicPieChart;
