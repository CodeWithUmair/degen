import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {

// const searchParams = req.nextUrl.searchParams
// const RANGE = searchParams.get('activerange')

try {

  // const apiUrlMOOLA = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&id=1&range=${RANGE}`; //bitcoin
  // const apiUrlUSDC = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&id=1027&range=${RANGE}`; //eth


  // const apiUrlMOOLA = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&id=7083&range=1D`; //uni
  // const apiUrlUSDC = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&id=825&range=1D`; //usdt

  
  const apiUrlMOOLA = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&id=32015&range=ALL`; //moola
  const apiUrlUSDC = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&id=3408&range=ALL`; //usdc

  
  // const apiUrlMOOLA = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&id=7083&range=${RANGE}`; //uni
  // const apiUrlUSDC = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&id=1975&range=${RANGE}`; //link

  
  // const apiUrlMOOLA = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&id=74&range=1Y`; //doge
  // const apiUrlUSDC = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=${process.env.CMC_API_KEY}&id=1027&range=1Y`; //usdc

    const response = await fetch(apiUrlMOOLA);
    const response2 = await fetch(apiUrlUSDC);
    if (!response.ok || !response2.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    const data2 = await response2.json();

    const points = data.data.points;
    const prices = Object.entries(points).map(([timestamp, point]:any) => {
      return [Number(timestamp), point.v[0]];
    });
    const points2 = data2.data.points;
    const prices2 = Object.entries(points2).map(([timestamp, point]:any) => {
      return [Number(timestamp), point.v[0]];
    });

    const convertedData = { prices };
    const convertedData2 = { prices2 };

    return NextResponse.json(
      { moola : convertedData, usdc :convertedData2 },
      { status: 200 },
    );
  } catch (error) {
    console.error('Fetch error: ', error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}

// export const dynamic = "force-dynamic";