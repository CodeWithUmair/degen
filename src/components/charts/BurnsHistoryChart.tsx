import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ResponseType = {
  name: string;
  value: number;
}[];

type CustomTooltipType = {
  active: any;
  payload: any;
  label: any;
  coordinate: any;
};

const BurnsHistoryChart = () => {
  const [data, setData] = useState<ResponseType>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const response = [
        { name: "Jan", value: 0 },
        { name: "Feb", value: 0 },
        { name: "Mar", value: 0 },
        { name: "Apr", value: 0 },
        { name: "May", value: 0 },
        { name: "Jun", value: 0 },
        { name: "Jul", value: 0 },
        { name: "Aug", value: 0 },
        { name: "Sep", value: 0 },
      ];
      setData(response);
    };

    fetchData();
  }, []);

  const CustomTooltip = ({
    active,
    payload,
    label,
    coordinate,
  }: CustomTooltipType) => {
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
            <p className="label text-xs text-gray-400">{`${label} Burns`}</p>
            <div className="flex w-full items-center justify-between gap-5">
              <p className="intro bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-2xl font-bold text-transparent">{`${payload[0].value}`}</p>
              <div className="flex">
                <div
                  className={
                    true
                      ? "text-[20px] text-xs font-bold text-green"
                      : "text-[20px] text-xs font-bold text-redColor"
                  }
                >
                  {"0%"}
                </div>
                <div className="mx-2 flex items-center">
                  {true ? (
                    <Image
                      width={15}
                      height={25}
                      src={"/images/icons/green-arrow-up.svg"}
                      alt="green arrow up"
                      className="aspect-square"
                    />
                  ) : (
                    <Image
                      width={20}
                      height={25}
                      src={"/images/icons/red-arrow-down.svg"}
                      alt="red arrow down"
                      className="aspect-square"
                    />
                  )}
                </div>
              </div>
            </div>
            <p className="desc text-xs text-gray-400">MOOLA</p>
            <p className="desc mt-2 text-sm text-white">$0</p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <div className="relative mt-5 rounded-3xl bg-gradient-to-tr from-[#81114257] to-[#863A5C3E] p-8 shadow-lg">
        <div className="flex items-center justify-between gap-4">
          <h2 className="mb-4 text-3xl font-normal text-white">
            Burns History
          </h2>
          <div className="mb-2 text-right text-gray-400">
            <span className="text-xs font-thin text-gray-400">
              Current Month
            </span>
            <span className="mx-2 bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-2xl font-bold text-transparent">
              0
            </span>
            <span className="text-sm font-thin text-white">~$0</span>
          </div>
        </div>

        <div className="mt-24">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#E43345" stopOpacity={1} />
                  <stop offset="100%" stopColor="#CB4CC4" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ dy: 20, fill: "white", fontSize: "12px" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ dx: -20, fill: "white", fontSize: "12px" }}
                ticks={[0, 2, 4, 6, 8, 10]}
                domain={[0, 10]}
                tickFormatter={(tick) => `${tick}%`}
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
                dataKey="value"
                fill="#7D283E"
                barSize={40}
                radius={[5, 5, 5, 5]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default BurnsHistoryChart;
