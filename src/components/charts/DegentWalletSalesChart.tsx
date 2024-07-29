import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
  Tooltip,
} from "recharts";

type CustomTooltipType = {
  active: any;
  payload: any;
  label: any;
  coordinate: any;
};

const data = [
  { name: "Jan", totalDownloads: 15000, mau: 5000, conversionRate: 33.3 },
  { name: "Feb", totalDownloads: 18000, mau: 6500, conversionRate: 32.1 },
  { name: "Mar", totalDownloads: 25000, mau: 6000, conversionRate: 30.0 },
  { name: "Apr", totalDownloads: 30000, mau: 7500, conversionRate: 32.1 },
  { name: "May", totalDownloads: 32000, mau: 8000, conversionRate: 33.8 },
  { name: "Jun", totalDownloads: 34000, mau: 9500, conversionRate: 34.0 },
  { name: "Jul", totalDownloads: 38500, mau: 9500, conversionRate: 35.0 },
  { name: "Aug", totalDownloads: 41000, mau: 9500, conversionRate: 36.0 },
  { name: "Sep", totalDownloads: 43000, mau: 9500, conversionRate: 37.0 },
  { name: "Oct", totalDownloads: 45500, mau: 9500, conversionRate: 38.0 },
];

const CustomBarShape = (props: any) => {
  const { x, y, width, height, fill } = props;

  return (
    <Rectangle
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      radius={[10, 10, 0, 0]} // Top left and top right corners rounded
    />
  );
};

const DegentWalletSalesChart = () => {
  const CustomTooltip = ({
    active,
    payload,
    label,
    coordinate,
  }: CustomTooltipType) => {
    console.log("🚀 ~ DegentWalletSalesChart ~ payload:", payload);
    if (active && payload && payload.length) {
      const style: React.CSSProperties = {
        position: "absolute",
        top: `${coordinate.y - 70}px`,
        left: `${coordinate.x}px`,
        pointerEvents: "none",
        transform: "translateX(-50%) translateY(-100%)",
        zIndex: 1000,
      };

      return (
        <div style={style}>
          <div className="custom-tooltip barChartBorder">
            <p className="label text-white">{`${label}`}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="h-2 w-2 rounded-full bg-[#F48D59]"></span>
              <span className="text-sm font-thin text-white">
                {`${payload[1].value}`} Sold
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="h-2 w-2 rounded-full bg-[#E34768]"></span>
              <span className="text-sm font-thin text-white">
                ${`${payload[0].value}`} Revenue
              </span>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="col-span-2 rounded-lg p-4">
      {/* <h2 className="text-xl font-bold mb-4 text-white">Downloads Vs Active Users</h2> */}
      <ResponsiveContainer width="100%" height={310}>
        <BarChart
          barGap={-60}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid vertical={false} opacity={0.2} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ dy: 20, fill: "white", fontSize: "14px" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ dx: -15, fill: "white", fontSize: "14px" }}
            ticks={[0, 10000, 20000, 30000, 40000, 50000]}
            domain={[0, 50000]}
            tickFormatter={(tick) => `$${tick.toLocaleString()}`}
          />
          <Tooltip
            content={
              <CustomTooltip
                active={undefined}
                payload={undefined}
                label={undefined}
                coordinate={undefined}
              />
            }
            cursor={{ fill: "transparent" }}
          />
          <Bar
            dataKey="totalDownloads"
            barSize={60}
            fill="#E34768"
            isAnimationActive={false}
            label={{ fill: "white", fontSize: 14 }}
            shape={<CustomBarShape />}
          />
          <Bar
            dataKey="mau"
            barSize={60}
            fill="#E34768"
            isAnimationActive={false}
            label={{ fill: "#FFB87D", fontSize: 14 }}
            shape={<CustomBarShape />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DegentWalletSalesChart;
