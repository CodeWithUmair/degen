import Hero from "@/components/landing/Hero";
import WalletCTA from "@/components/landing/WalletCTA";
import FAQ from "@/components/landing/FAQ";
import VaultCTA from "@/components/landing/VaultCTA";
import DegenCollection from "@/components/landing/DegenCollection";
import Team from "@/components/landing/Team";
import Companies from "@/components/landing/Companies";
import OurMission from "@/components/landing/OurMission";
import Image from "next/image";
import MoolaCTA from "@/components/landing/MoolaCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex w-full items-center gap-8">
        <hr className="pointer-events-none mx-auto h-[2px] w-[75%] border-none bg-gradient-to-r from-[#16161600] to-[#69696988]" />
        <button className="relative w-16 h-16">
          <Image
            src="/images/icons/scroll.svg"
            fill
            className="object-contain"
            alt="scroll icon"
          />
        </button>
        <hr className="pointer-events-none mx-auto h-[2px] w-[75%] border-none bg-gradient-to-r from-[#69696988] to-[#16161600]" />
      </div>    
      <WalletCTA />
      <VaultCTA />
      <MoolaCTA/>
      <Companies />
      <OurMission />
      <DegenCollection />
      <Team />
      <FAQ />
    </main>
  );
}
