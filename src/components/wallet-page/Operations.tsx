import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import SectionTitle from "../typography/SectionTitle";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import SectionText from "../typography/SectionText";

const Operations = () => {
  return (
    <section className="sec-p-y group relative flex items-center">
      <Container>
        <TwoGrid>
          <RotateAnimation left className="red-shadow relative aspect-square">
            <Image
              fill
              alt="Violin"
              src="/images/wallet/operations.png"
              className="h-full object-contain"
            />
          </RotateAnimation>
          <SectionText
            title="Lightning-Fast Operations"
            desc="Experience Blockchain Banking Like Never Before. Degen Wallet
            Champions Unmatched Speed and Responsiveness Thanks to our
            Databaseless and Serverless Actor Model Technology, Promising a
            Fluid Experience Irrespective of our User Base Size.
          "
          />
        </TwoGrid>
      </Container>

      <div className="absolute bottom-[25%] right-0 -z-10 translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[200px]"></div>
      </div>
    </section>
  );
};

export default Operations;
