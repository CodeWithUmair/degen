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
  Cell,
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

const colors = ["#E1496A", "#FB6D8B", "#C43856", "#F85F5F"];

const TotalAmountOfDefiLoans = () => {
  const [data, setData] = useState<ResponseType>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const response = [
        { name: "Jan", value: 50 },
        { name: "Feb", value: 100 },
        { name: "Mar", value: 55 },
        { name: "Apr", value: 200 },
        { name: "May", value: 130 },
        { name: "Jun", value: 240 },
        { name: "Jul", value: 200 },
        { name: "Aug", value: 50 },
        { name: "Sep", value: 70 },
        { name: "Oct", value: 150 },
        { name: "Nov", value: 180 },
        { name: "Dec", value: 250 },
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
            Total Amount of DeFi Loans
          </h5>
        </div>

        <div className="h-full w-full">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
            >
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  dy: 10,
                  fill: "white",
                  fontSize: "12px",
                  fontWeight: "300",
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  dx: -0,
                  fill: "white",
                  fontSize: "10px",
                  fontWeight: "300",
                }}
                ticks={[0, 50, 100, 150, 200, 250]}
                domain={[0, 250]}
                tickFormatter={(tick) => `${tick}M`}
              />
              <CartesianGrid vertical={false} opacity={0.1} />
              {/* <Tooltip
                content={
                  <CustomTooltip
                    active={undefined}
                    payload={undefined}
                    label={undefined}
                    coordinate={undefined}
                  />
                }
                cursor={{ fill: "transparent" }}
              /> */}
              <Bar dataKey="value" barSize={20} radius={[5, 5, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 4]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default TotalAmountOfDefiLoans;
