import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import SectionTitle from "../typography/SectionTitle";
import TwoGrid from "../ui/TwoGrid";
import RotateAnimation from "../animation/RotateAnimation";
import SectionText from "../typography/SectionText";

const DefiLoans = () => {
  return (
    <section className="sec-p-y group relative flex items-center">
      <div className="absolute left-0 top-[25%] -z-10 translate-x-1/2">
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
          <RotateAnimation left className="relative aspect-square">
            <Image
              fill
              alt="Violin"
              src="/images/wallet/defi-loans.png"
              className="h-full object-contain"
            />
          </RotateAnimation>
          <SectionText
            title="Empower your Finances with DeFi Loans"
            desc="Unlock the Potential of Decentralized Finance Right Within your
            Degen Wallet. Seamlessly Integrated with AAVE, our DeFi Loans
            Section Offers a Comprehensive Suite of Financial Tools, from
            Deposits and Withdrawals to Borrowings and Repayments. Whether
            you're Looking to Leverage your Assets or Seeking Liquidity,
            our Platform Provides a Streamlined, User-Centric Experience. Dive
            Deep into DeFi's Potential, where Lending and Borrowing Meet
            Transparency, Autonomy, and Efficiency.
          "
          />
        </TwoGrid>
      </Container>

      <div className="pointer-events none absolute bottom-[25%] right-0 -z-10 translate-x-1/2">
        <div className="shadow-effect opacity-25 blur-[100px]"></div>
      </div>
    </section>
  );
};

export default DefiLoans;
