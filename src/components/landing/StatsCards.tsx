import Image from "next/image";
import React from "react";

const StatsCards: React.FC = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-white">
      <div className=" rounded-lg p-6 shadow-lg">
        <div className="mb-4 rounded-lg  bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6  text-center shadow-lg">
          <h2 className="mb-2 text-base font-thin">Total Downloads</h2>
          <p
            className="bg-gradient-to-br from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text  text-3xl font-bold -capitalize 
          text-transparent"
          >
            150,000
          </p>
        </div>

        <div className="mb-4 rounded-lg  bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6  text-center shadow-lg">
          <h2 className="mb-2 text-base font-thin">
            Monthly Active Users (MAU)
          </h2>
          <p className="text-3xl font-bold -capitalize text-white">65,000</p>
        </div>
        <div className="mb-4 rounded-lg  bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6  text-center shadow-lg">
          <h2 className="mb-2 text-base font-thin">Monthly Conversion Rate</h2>
          <p className="flex justify-center text-3xl font-bold -capitalize text-white">
            25%{" "}
            <Image
              width={35}
              height={10}
              src={"/images/icons/green-arrow-up.svg"}
              alt="green arrow up"
              className="mx-2 aspect-square "
            />
          </p>
        </div>
        <div className="mb-4 rounded-lg  bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-6  text-center shadow-lg">
          <h2 className="mb-2 text-base font-thin ">
            New Users Growth Rate (Last month)
          </h2>
          <p className="flex justify-center text-3xl font-bold -capitalize text-white">
            18.75
            <Image
              width={35}
              height={10}
              src={"/images/icons/green-arrow-up.svg"}
              alt="green arrow up"
              className="mx-2 aspect-square "
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
