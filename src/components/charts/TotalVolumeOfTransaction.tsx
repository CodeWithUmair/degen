import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
  Area,
} from "recharts";

type ResponseType = {
  name: string;
  value: number;
}[];

const TotalVolumeOfTransaction = () => {
  const [data, setData] = useState<ResponseType>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const response = [
        { name: "Jan", value: 3 },
        { name: "Feb", value: 5 },
        { name: "Mar", value: 6 },
        { name: "Apr", value: 5 },
        { name: "May", value: 6 },
        { name: "Jun", value: 8 },
        { name: "Jul", value: 10 },
        { name: "Aug", value: 12 },
        { name: "Sep", value: 14 },
        { name: "Oct", value: 16 },
        { name: "Nov", value: 18 },
        { name: "Dec", value: 20 },
      ];
      setData(response);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center">
          <h5 className="mb-4 text-lg text-white">
            Total Volume of Liquid Staking Transactions
          </h5>
        </div>

        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F8A55F" stopOpacity={0.2} />
                  <stop offset="50%" stopColor="#E43345" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="#CB4CC4" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  dy: 15,
                  fill: "white",
                  fontSize: "12px",
                  fontWeight: "300",
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  dx: -10,
                  fill: "white",
                  fontSize: "10px",
                  fontWeight: "300",
                }}
                ticks={[0, 5, 10, 15, 20]}
                domain={[0, 20]}
                tickFormatter={(tick) => `${tick}M`}
              />
              <CartesianGrid vertical={false} opacity={0.1} />
              {/* <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                contentStyle={{
                  backgroundColor: "#1d1d1d",
                  borderColor: "#1d1d1d",
                }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#fff" }}
              /> */}
              <Area
                type="linear"
                dataKey="value"
                stroke="#E1496A"
                strokeWidth={1}
                fillOpacity={1}
                fill="url(#colorUv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default TotalVolumeOfTransaction;
