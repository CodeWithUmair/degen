import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import SectionTitle from "../typography/SectionTitle";
import TwoGrid from "../ui/TwoGrid";
import SectionText from "../typography/SectionText";
import RotateAnimation from "../animation/RotateAnimation";

const AssetProtection = () => {
  return (
    <section className="group relative flex sec-p-y items-center">
      {/* left shadow */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 -translate-x-1/2 translate-y-1/2">
        <div className="shadow-effect opacity-50 blur-[200px]"></div>
      </div>
      {/* right shadow */}
      <div className="pointer-events-none absolute bottom-[25%] right-0 -z-10 -translate-x-1/2">
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
        <TwoGrid>          <SectionText
            title="Fortified Asset Protection"
            desc="Your Digital Bank's Safety is Paramount. We Deploy
            Cutting-Edge Security Measures across All Platforms, Ensuring your
            Assets Remain Protected from Threats.
          "
          />
     
          <RotateAnimation className="red-shadow relative aspect-square">
            <Image
              fill
              alt="Violin"
              src="/images/wallet/asset-protection.png"
              className="h-full object-contain"
            />
          </RotateAnimation>
        </TwoGrid>
      </Container>
    </section>
  );
};

export default AssetProtection;
