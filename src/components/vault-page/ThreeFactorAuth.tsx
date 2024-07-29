import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";

const ThreeFactorAuth = () => {
  return (
    <section className="relative flex items-center py-24">
      <div className="absolute top-[25%] -z-10 -translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
      <div className="absolute -right-[10px] top-0 -z-10 w-[75%] -rotate-12 -scale-x-1">
        <div className="relative aspect-[1.8] w-full">
          <Image
            fill
            src="/images/vault/vault-hero-line.svg"
            alt="design asset line"
          />
        </div>
      </div>

      <Container>
        <TwoGrid>
          <div className="relative mx-auto flex aspect-square w-[50%]">
            <RotateAnimation left className="h-full w-full">
              <Image
                fill
                alt="Violin"
                src="/images/vault/three-factor.png"
                className="mx-auto h-full object-contain"
              />
            </RotateAnimation>
            <div className="pointer-events-none absolute left-[50%] top-[50%] -z-10 w-[260%] -translate-x-1/2 -translate-y-1/2 rotate-[250deg]">
              <div className="relative aspect-square w-full">
                <Image
                  fill
                  src="/images/landing/cta-curve.svg"
                  alt="design asset line"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h2 className="max-w-[17ch] text-3xl font-black tracking-tight text-white lg:text-4xl">
              Understanding{" "}
              <span className="text-gradient-sm whitespace-nowrap">
                3 Factor&nbsp;
              </span>
              Authentication
            </h2>

            <p className="sm:text-md max-w-[42ch] _capitalize_ tracking-wide text-neutral-400">
              By relying on three distinct categories of authentication –
              inherence (biometrics), knowledge (PIN), and possession (Degen Key
              Card), we exponentially enhance the safety of your assets, setting
              the gold standard in crypto security
            </p>
          </div>
        </TwoGrid>
      </Container>
      {/* right shadow */}
      <div className="absolute bottom-0 right-0 -z-10 translate-x-1/2 translate-y-1/2">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
    </section>
  );
};

export default ThreeFactorAuth;
