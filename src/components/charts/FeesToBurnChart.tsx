import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

type ResponseType = {
  name: string;
  value: number;
  value2: number;
}[];

const FeesToBurnsChart = () => {
  const [data, setData] = useState<ResponseType>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const response = [
        { name: "Sept", value: 0, value2: 0 },
        { name: "Oct", value: 0, value2: 0 },
        { name: "Nov", value: 0, value2: 0 },
        { name: "Dec", value: 0, value2: 0 },
        { name: "Jan", value: 0, value2: 0 },
        { name: "Feb", value: 0, value2: 0 },
        { name: "March", value: 0, value2: 0 },
        { name: "April", value: 0, value2: 0 },
      ];
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mt-5 rounded-3xl bg-gradient-to-br from-[#3D202D] to-[#863A5C3E] p-4 shadow-lg">
        <h2 className="text-center text-lg text-white">
          Fees-to-Burns Correlation
        </h2>

        <div className="flex items-center justify-center space-x-8 p-4">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-sm font-semibold text-white">
              Transaction Fees (USD)
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4]"></span>
            <span className="text-sm font-semibold text-white">
              Tokens Burned (MOOLA)
            </span>
          </div>
        </div>

        <div className="px-6">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#cb4cc4" stopOpacity={1} />
                  <stop offset="70%" stopColor="#e43345" stopOpacity={1} />
                  <stop offset="100%" stopColor="#f8a55f" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ dy: 20, fill: "white", fontSize: "14px" }}
              />
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ dx: -20, fill: "white", fontSize: "12px" }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ dx: 20, fill: "white", fontSize: "12px" }}
              />
              <CartesianGrid vertical={false} opacity={0.2} />

              <Line
                type="monotone"
                dataKey="value"
                stroke="url(#colorValue)"
                strokeWidth={2}
                dot={false}
                yAxisId="left"
              />
              <Line
                type="monotone"
                dataKey="value2"
                stroke="#0f5df3"
                strokeWidth={2}
                dot={false}
                yAxisId="right"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default FeesToBurnsChart;
