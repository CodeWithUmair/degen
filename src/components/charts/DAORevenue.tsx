import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Swaps", value: 35, color: "#FF8042" },
  { name: "DeFi Loans", value: 25, color: "#FFBB28" },
  { name: "LIDO Staking", value: 20, color: "#00C49F" },
  { name: "Hardware Wallet", value: 20, color: "#0088FE" },
];

const marginData = [
  { name: "50% Margin", value: 20, color: "#FF8042" },
  { name: "0.69% Fee", value: 80, color: "#FFBB28" },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DAORevenue: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3>Total Revenue: $1,000,000 USD</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default DAORevenue;
