import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import SectionTitle from "../typography/SectionTitle";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import SectionText from "../typography/SectionText";

const Multiverse = () => {
  return (
    <section className="sec-p-y group relative flex items-center">
      {/* left shadow */}
      <div className="absolute left-0 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[175px]"></div>
      </div>
      {/* right shadow */}
      <div className="absolute bottom-0 right-0 -z-10 -translate-y-1/2 translate-x-1/2">
        <div className="shadow-effect opacity-50 blur-[175px]"></div>
      </div>
      <Container>
        <TwoGrid>
          <RotateAnimation left className="relative aspect-square">
            <Image
              fill
              alt="Violin"
              src="/images/wallet/multiverse.png"
              className="h-full object-contain"
            />
          </RotateAnimation>
          <SectionText
            title="Multiverse Banking"
            desc="Why Confine Yourself to a Single Blockchain Universe? Degen
            Wallet's Cross-Chain Functionality Lets you Consolidate and
            Manage Assets from Diverse Blockchains, All under One Digital
            Banking Roof.
          "
          />
        </TwoGrid>
      </Container>
    </section>
  );
};

export default Multiverse;
