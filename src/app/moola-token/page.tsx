import React from "react";
import AppActivity from "@/components/moola-token-page/AppActivity";
import AppDownloads from "@/components/moola-token-page/AppDownloads";
import DynamicPieChart from "@/components/moola-token-page/DynamicPieChart";
import MoolaMechanisam from "@/components/moola-token-page/MoolaMechanisam";
import MoolaTokenCharts from "@/components/moola-token-page/MoolaTokenCharts";
import MoolaTokenHero from "@/components/moola-token-page/MoolaTokenHero";
import RoadMap from "@/components/moola-token-page/RoadMap";
import Container from "@/components/ui/Container";
import DAOandRevenue from "@/components/moola-token-page/DAOandRevenue";
import CommunityGrowth from "@/components/moola-token-page/CommunityGrowth";
import PartnershipSlider from "@/components/moola-token-page/PartnershipSlider";
import NFTs from "@/components/moola-token-page/NFTs";

function MoolaToken() {
  return (
    <>
      {/* <Container>
        <MoolaTokenHero />
        <MoolaTokenCharts />
      <DynamicPieChart />
      <MoolaMechanisam />
      <RoadMap /> */}
        {/* <AppDownloads />
      <AppActivity />
      <DAOandRevenue />
      <CommunityGrowth /> */}
      {/* </Container> */}
      <PartnershipSlider />
      {/* <Container>
        <NFTs />
      </Container> */}
    </>
  );
}

export default MoolaToken;
