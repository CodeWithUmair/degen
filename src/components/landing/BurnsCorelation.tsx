import React from "react";
import FeesToBurnsChart from "../charts/FeesToBurnChart";

const BurnsCorelation = () => {
  return (
    <div>
      <div className="mt-5 h-[3rem] rounded-2xl bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] p-2 flex items-center justify-center text-sm sm:text-xl">
        33% of Wallet App Transaction Fees are Burned
      </div>
      <FeesToBurnsChart />
    </div>
  );
};

export default BurnsCorelation;
