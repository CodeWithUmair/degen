import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import SectionTitle from "../typography/SectionTitle";
import TwoGrid from "../ui/TwoGrid";
import SectionText from "../typography/SectionText";
import RotateAnimation from "../animation/RotateAnimation";

const Web3 = () => {
  return (
    <section className="sec-p-y group relative flex items-center">
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
        <TwoGrid>
          <SectionText
            title="Your Bridge to Web3"
            desc="More than Just a Digital Bank, Degen Wallet Opens the Doors to the
            Expansive Web3 Universe. Our Immaculate Interface, Crafted for
            Both Novices and Veterans, Streamlines your Journey Through the
            Decentralized Web.
          "
          />

          <RotateAnimation className="relative aspect-square">
            <Image
              fill
              alt="Violin"
              src="/images/wallet/web3.png"
              className="h-full object-contain"
            />
          </RotateAnimation>
        </TwoGrid>
      </Container>
    </section>
  );
};

export default Web3;
