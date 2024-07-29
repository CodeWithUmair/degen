import React from "react";

const MoolaRewards = () => {
  return (
    <>
      <div className="gradient-border-og mx-auto max-w-full rounded-3xl to-black p-6 px-12 text-center shadow-lg">
        <h2 className="mb-4 text-xl font-semibold text-white">
          Beta Testers MOOLA Rewards Program
        </h2>
        <div className="from- mb-4 rounded-xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4">
          <p className="text-sm text-gray-300">
            <span className="text-md block text-white">
              Rewards Last 24 Hours
            </span>
          </p>
          <p className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4]  bg-clip-text text-2xl font-bold text-transparent">
            0%
          </p>
        </div>
        <div className="mb-4 rounded-xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4">
          <p className="text-sm text-white">Total Rewards Distributed</p>
          <p className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-3xl font-bold text-transparent">
            $0
          </p>
          <p className="text-sm text-white">
            0<span className="ml-1 text-xs text-gray-500">MOOLA</span>
          </p>
        </div>
        <div className="from- mb-4 rounded-xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4">
          <p className="text-sm text-gray-300">
            <span className="text-md block text-white">
              Rewards Distribution Timeline
            </span>
          </p>
          <p className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-lg  font-bold text-transparent">
            Daily
          </p>
        </div>
      </div>
    </>
  );
};

export default MoolaRewards;
