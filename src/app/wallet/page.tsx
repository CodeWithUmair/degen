import Container from "@/components/ui/Container";
import AssetExchanges from "@/components/wallet-page/AssetExchanges";
import AssetProtection from "@/components/wallet-page/AssetProtection";
import DefiLoans from "@/components/wallet-page/DefiLoans";
import LiquidStaking from "@/components/wallet-page/LiquidStaking";
import Multiverse from "@/components/wallet-page/Multiverse";
import NFTEcosystem from "@/components/wallet-page/NFTEcosystem";
import Operations from "@/components/wallet-page/Operations";
import Sanctuary from "@/components/wallet-page/Sanctuary";
import Sovereignty from "@/components/wallet-page/Sovereignty";
import WalletDownload from "@/components/wallet-page/WalletDownload";
import WalletHero from "@/components/wallet-page/WalletHero";
import Web3 from "@/components/wallet-page/Web3";

export default function WalletPage() {
  return (
    <>
      <WalletHero/>
      <Container>
        <Sovereignty />
        <NFTEcosystem />
        <AssetExchanges />
        <LiquidStaking />
        <DefiLoans />
        <Web3 />
        <Multiverse />
        <AssetProtection />
        <Operations />
        <Sanctuary />
        <WalletDownload />
      </Container>
    </>
  );
}
