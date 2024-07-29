import Image from "next/image";
import React from "react";

const DegentWalletSales = () => {
  return (
    <>
      <div className="gradient-border-og-2 mx-auto max-w-full rounded-3xl to-black px-12 py-10 text-center shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Degen Vault Hardware Wallet Sales
        </h2>
        <div className="text mb-5 rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4 shadow-md">
          <div className="flex justify-center">
            <p className="">Total Units Sold</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="">
              <h2 className="inline-block bg-gradient-to-r from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-4xl font-extrabold text-transparent">
                2,500
              </h2>
              {/* <span className="ml-2 text-xl font-thin text-white">USD</span> */}
            </div>

            <div className="flex items-center">
              <div
                className={
                  true ? "text-[20px] text-green" : "text-[20px] text-redColor"
                }
              >
                2.3%
              </div>
              <div className="mx-3 flex items-center">
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
        </div>
        <div className="text rounded-3xl bg-gradient-to-br from-[#81114257] to-[#863A5C3E] p-4 shadow-md">
          <div className="flex justify-center">
            <p className="">Revenue Generated</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <div className="">
              <h2 className="inline-block bg-gradient-to-r from-[#F8A55F] via-[#E43345] to-[#CB4CC4] bg-clip-text text-4xl font-extrabold text-transparent">
                $250,000
              </h2>
              <span className="ml-2 text-xl font-thin text-white">USD</span>
            </div>

            <div className="flex justify-center">
              <p className="text-xs font-thin">Price Point $100</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DegentWalletSales;
