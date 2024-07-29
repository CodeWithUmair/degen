import React from "react";
import {
  BarChart,
  Bar,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Rectangle,
} from "recharts";

const data = [
  { name: "Jan", totalDownloads: 15000, mau: 5000, conversionRate: 33.3 },
  { name: "Feb", totalDownloads: 18000, mau: 6500, conversionRate: 36.1 },
  { name: "March", totalDownloads: 32000, mau: 6000, conversionRate: 30.0 },
  { name: "April", totalDownloads: 38000, mau: 7500, conversionRate: 34.1 },
  { name: "May", totalDownloads: 23000, mau: 8000, conversionRate: 34.8 },
  { name: "June", totalDownloads: 25000, mau: 9500, conversionRate: 38.0 },
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

const DownloadChart = () => {                  
  return (
    <div className="col-span-2 rounded-lg p-4">
      {/* <h2 className="text-xl font-bold mb-4 text-white">Downloads Vs Active Users</h2> */}
      <ResponsiveContainer width="100%" height={300}>
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
            tick={{ dx: -20, fill: "white", fontSize: "14px" }}
            ticks={[0, 10000, 20000, 30000, 40000]}
            domain={[0, 40000]}
            tickFormatter={(tick) => `${tick.toLocaleString()}`}
          />
          <Bar
            dataKey="totalDownloads"
            barSize={60}
            fill="#BD1843"
            isAnimationActive={false}
            label={{ fill: "white", fontSize: 14 }}
            shape={<CustomBarShape />}
          />
          <Bar
            dataKey="mau"
            barSize={60}
            fill="#E34768"
            isAnimationActive={false}
            label={{ fill: "white", fontSize: 14 }}
            shape={<CustomBarShape />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DownloadChart;
