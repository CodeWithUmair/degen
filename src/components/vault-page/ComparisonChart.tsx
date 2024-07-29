import React from "react";
import Container from "../ui/Container";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import { comparisonData } from "@/assets/mock";

const ComparisonChart = () => {
  return (
    <section className="relative py-24">
      {/* left shadow */}
      <div className="absolute left-0 top-[50%] -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-50 blur-[200px]"></div>
      </div>
      {/* right shadow */}
      <div className="absolute right-0 top-0 -z-10 translate-x-1/2 translate-y-full">
        <div className="shadow-effect opacity-50 blur-[200px]"></div>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 -z-10 w-[300px] -translate-x-2/3 rotate-180">
        <div className="relative aspect-[1] w-full">
          <Image
            fill
            className="object-contain"
            src="/images/landing/cta-circle.svg"
            alt="design asset line"
          />
        </div>
      </div>
      <Container>
        <h2 className="text-3xl lg:text-[2.75rem] font-black tracking-tight text-white pb-14 text-center">
          A Comparison{" "}
          <span className="bg-gradient-to-br from-[#F8A55F] via-[#E43345]  to-[#CB4CC4] bg-clip-text text-transparent">
            Chart
          </span>{" "}
          Similar To This
        </h2>
        <div className="grid items-end text-sm md:grid-cols-4 gap-12 md:gap-0">
          <div className=" [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-10 [&>div:last-child]:rounded-b-2xl [&>div:last-child]:pb-10">
            <div
              className="flex flex-col justify-end  px-6  max-md:hidden"
              aria-hidden="true"
            >
              {comparisonData.map((item, i) => {
                return (
                  <div key={i} className="flex h-14 items-center py-2">
                    {item.feature}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-[#FFFFFF2B] bg-gradient-to-br from-[#ffffff08] to-[#FFFFFF11] text-center [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-10 [&>div:last-child]:rounded-b-2xl [&>div:last-child]:pb-10">
            <div className="relative flex flex-col justify-end  px-4  lg:px-6">
              <div className="mb-5 grow">
                <div className="relative mx-auto aspect-[1.25] max-w-sm">
                  <Image
                    fill
                    src="/images/vault/chart-1.png"
                    className="max-h-[60%] object-contain"
                    alt="Degen Vault"
                  />
                </div>
                <h5 className="mb-0.5 text-lg font-semibold text-slate-900 dark:text-slate-200">
                  Degen Vault
                </h5>
                <div className="text-sm text-slate-500">card</div>
              </div>
            </div>

            <div className="flex flex-col justify-end  px-6   lg:px-8">
              {comparisonData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex h-14 items-center justify-between border-b border-neutral-800 py-2 last:border-none md:justify-center"
                  >
                    <span className="md:hidden">
                      {comparisonData[i].feature}
                    </span>
                    <span
                      className={`inline-block aspect-square rounded-full p-1 text-black ${
                        item.values[0] ? "bg-[#96CC21]" : "bg-[#E43345]"
                      }`}
                    >
                      <FaCheck />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-10 [&>div:last-child]:rounded-b-2xl [&>div:last-child]:pb-10">
            <div className="relative flex flex-col justify-end  px-4  lg:px-6">
              <div className="mb-5 grow">
                <div className="relative mx-auto aspect-[1.25] max-w-sm">
                  <Image
                    fill
                    src="/images/vault/chart-2.png"
                    className="max-h-[60%] object-contain"
                    alt="Degen Vault"
                  />
                </div>
                <h5 className="mb-0.5 text-lg font-semibold text-slate-900 dark:text-slate-200">
                  Other Cold Storage
                </h5>
                <div className="text-sm text-slate-500">Fob with Display</div>
              </div>
            </div>

            <div className="flex flex-col justify-end  px-6   lg:px-8">
              {comparisonData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex h-14 items-center justify-between border-b border-neutral-800 py-2 last:border-none md:justify-center"
                  >
                    <span className="md:hidden">
                      {comparisonData[i].feature}
                    </span>

                    <span
                      className={`inline-block aspect-square rounded-full p-1 text-black ${
                        item.values[1] ? "bg-[#96CC21]" : "bg-[#E43345]"
                      }`}
                    >
                      <FaCheck />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center [&>div:first-child]:rounded-t-2xl [&>div:first-child]:pt-10 [&>div:last-child]:rounded-b-2xl [&>div:last-child]:pb-10">
            <div className="relative flex flex-col justify-end  px-4  lg:px-6">
              <div className="mb-5 grow">
                <div className="relative mx-auto aspect-[1.25] max-w-sm">
                  <Image
                    fill
                    src="/images/vault/chart-3.png"
                    className="max-h-[60%] object-contain"
                    alt="Degen Vault"
                  />
                </div>
                <h5 className="mb-0.5 text-lg font-semibold">
                  Hot wallets
                </h5>
                <div className="text-sm text-slate-500">None</div>
              </div>
            </div>

            <div className="flex flex-col justify-end px-6 lg:px-8">
              {comparisonData.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex h-14 items-center justify-between md:justify-center border-b border-neutral-800 py-2 last:border-none"
                  >
                    <span className="md:hidden">
                      {comparisonData[i].feature}
                    </span>

                    <span
                      className={`inline-block aspect-square rounded-full p-1 text-black ${
                        item.values[2] ? "bg-[#96CC21]" : "bg-[#E43345]"
                      }`}
                    >
                      <FaCheck />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComparisonChart;
