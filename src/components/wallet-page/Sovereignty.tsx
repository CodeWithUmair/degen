import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import SectionText from "../typography/SectionText";

const Sovereignty = () => {
  
  return (
    <section className="sec-p-y group relative flex items-center">
      {/* right shadow */}
      <div className="absolute bottom-0 right-0 -z-10 -translate-y-1/2 translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[175px]"></div>
      </div>
      {/* left shadow */}
      <div className="absolute left-0 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2">
        <div className="shadow-effect opacity-75 blur-[175px]"></div>
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
          <RotateAnimation left className="relative aspect-square w-full">
            <Image
              fill
              alt="Violin"
              src="/images/wallet/sovereignty.png"
              className="h-full object-contain"
            />
          </RotateAnimation>
          <SectionText
            title="Embrace Digital Sovereignty"
            desc="With Degen Wallet, you're Not Just Holding Crypto, you're Managing a Fully-Fledged Personal Digital Bank. You Retain Full Control Over your Keys, Assets, and Data. All Seamlessly Integrated and Secured Within your Personal Banking Interface, your Keys and your Crypto."
          />
        </TwoGrid>
      </Container>
    </section>
  );
};

export default Sovereignty;
