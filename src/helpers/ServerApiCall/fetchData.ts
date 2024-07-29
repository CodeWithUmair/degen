import axios from 'axios';

export const fetchData = async (range: string) => {
  const apiUrlMOOLA = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=fabc23b2-3ec2-4fce-849f-609989cb843f&id=32015&range=${range}`;
  const apiUrlUSDC = `https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?CMC_PRO_API_KEY=fabc23b2-3ec2-4fce-849f-609989cb843f&id=3408&range=${range}`;

  try {
    const response = await fetch(apiUrlMOOLA);
    const response2 = await fetch(apiUrlUSDC);
    if (!response.ok || !response2.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    const data2 = await response2.json();

    const points = data.data.points;
    const prices = Object.entries(points).map(([timestamp, point]: any) => {
      return [Number(timestamp), point.v[0]];
    });
    const points2 = data2.data.points;
    const prices2 = Object.entries(points2).map(([timestamp, point]: any) => {
      return [Number(timestamp), point.v[0]];
    });

    const convertedData = { prices };
    const convertedData2 = { prices2 };

    return { moola: convertedData, usdc: convertedData2 };
  } catch (error) {
    console.error("Fetch error: ", error);
    throw new Error("Failed to fetch data");
  }
};



// interface FetchTokenDataParams {
  //   id: string;
  //   start?: string;
  //   end?: string;
  // }
  
  const API_URL = 'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?CMC_PRO_API_KEY=fabc23b2-3ec2-4fce-849f-609989cb843f&id=32015';
  export const fetchTokenData = async () => {
    try {
    // const params: any = { id, CMC_PRO_API_KEY: 'fabc23b2-3ec2-4fce-849f-609989cb843f' };
    // if (start) params.time_start = start;
    // if (end) params.time_end = end;

    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching token data:', error);
    throw error;
  }
};
