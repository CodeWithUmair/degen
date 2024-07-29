import RotateAnimation from "@/components/animation/RotateAnimation";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import TwoGrid from "@/components/ui/TwoGrid";
import ColdStorage from "@/components/vault-page/ColdStorage";
import ComparisonChart from "@/components/vault-page/ComparisonChart";
import CryptoSecurity from "@/components/vault-page/CryptoSecurity";
import JoinRevolution from "@/components/vault-page/JoinRevolution";
import OrderNow from "@/components/vault-page/OrderNow";
import SeamlessCompatibility from "@/components/vault-page/SeamlessCompatibility";
import ThreeFactorAuth from "@/components/vault-page/ThreeFactorAuth";
import TripleLockedSecurity from "@/components/vault-page/TripleLockedSecurity";
import VaultHero from "@/components/vault-page/VaultHero";
import VaultWhy from "@/components/vault-page/VaultWhy";
import Image from "next/image";
import { FaPaypal } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { SiMastercard } from "react-icons/si";
import { SiAmericanexpress } from "react-icons/si";

export default function VaultPage() {
  return (
    <>
      <Container>
        <VaultHero />
        <CryptoSecurity />
        <TripleLockedSecurity />
        <ColdStorage />
        <VaultWhy />
        <SeamlessCompatibility />
        <ThreeFactorAuth />
        <JoinRevolution />
        <ComparisonChart />
        <OrderNow />
      </Container>
    </>
  );
}
