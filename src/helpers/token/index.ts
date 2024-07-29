import { COINGEKO_APIKEY, COINGEKO_BASEURL } from "@/config";
import axios from "axios";

export async function getTokenPrice(tokenAddress: string, currency: string) {
  const url = `${COINGEKO_BASEURL}api/v3/simple/token_price/ethereum?contract_addresses=${tokenAddress}&vs_currencies=${currency}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-pro-api-key": COINGEKO_APIKEY,
    },
  };

  try {
    const data = await axios(url, options);
    console.log("getTokenPrice", data);
  } catch (error) {
    console.error("error:" + error);
  }
}

export const getStayChart = async (duration: number | string) => {
  if (duration == "1D") {
    duration = 1;
  } else if (duration == "7D") {
    duration = 7;
  } else if (duration == "1M") {
    duration = 30;
  } else if (duration == "1Y") {
    duration = 365;
  } else {
    duration = "ALL";
  }
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-sHoYXJtjXAEQQYBm3WXG9UK7",
    },
  };
  try {
    // const response = await fetch(
    //   `https://api.coingecko.com/api/v3/coins/usd/market_chart?vs_currency=usd&days=${duration}&precision=4`,
    //   options,
    // );
    // const response2 = await fetch(
    //   `https://api.coingecko.com/api/v3/coins/uniswap/market_chart?vs_currency=usd&days=${duration}&precision=4`,
    //   options,
    // );
    // const data = await response.json();
    // const data2 = await response2.json();
    // const formattedData = data.prices.map(([timestamp, value]: any) => ({
    //   x: new Date(timestamp),
    //   y: value,
    // }));
    // const formattedData2 = data2.prices.map(([timestamp, value]: any) => ({
    //   x: new Date(timestamp),
    //   y: value,
    // }));

    // return { formattedData, formattedData2 };
  } catch (error) {
    console.error(error);
  }
};


export function formatUnixTime(timestamp:number, format:string) {
  const date = new Date(timestamp * 1000);
  // const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
  //                     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (format === 'dateAndMonth') {
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    return `${month} ${day}`;
  }

  if (format === 'timeOnly') {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes; // Padding for single digit minutes
    return `${hours}:${minutesStr} ${ampm}`;
  }

  return "no-data"; // Return null if the format is not recognized
}