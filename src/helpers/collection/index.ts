import { DEGEN_TOKEN_ADDRESS, RESERVOIR_API, RESERVOIR_BASE_URL } from "@/config";
import axios from "axios";

export const fetchNFTDataOnSale = async (setData:React.Dispatch<React.SetStateAction<any[] | []>>,limit=20) => {
    //https://api.reservoir.tools/tokens/v7?contract=0xcd0C2A8801eBFF4b9B62a19255523F256E70b88A&sortBy=floorAskPrice&limit=20
    const url = `${RESERVOIR_BASE_URL}tokens/v7?contract=${DEGEN_TOKEN_ADDRESS}&sortBy=floorAskPrice&limit${limit}`;
    const headers = {
      accept: "*/*",
      "x-api-key": RESERVOIR_API,
    };
  
    try {
      const response = await axios.get(url, { headers });
      const data = response?.data;
      setData(data?.tokens);
    } catch (error:any) {
    setData([])
     console.error("Error fetching NFT data:", error.message);
    }
  };

//   export const fetchNFTData = async (setData:React.Dispatch<React.SetStateAction<any[] | []>>,limit=15) => {

//     const url = `${RESERVOIR_BASE_URL}tokens/v7?collection=${DEGEN_TOKEN_ADDRESS}&sortBy=updatedAt&sortDirection=desc&limit=${limit}`;
//     const headers = {
//       accept: "*/*",
//       "x-api-key": RESERVOIR_API,
//     };
  
//     try {
//       const response = await axios.get(url, { headers });
//       const data = response?.data;
//       setData(data?.tokens);
//       console.log("fetchNFTData simple", data?.tokens);
//     } catch (error:any) {
//     setData([])
//      console.error("Error fetching NFT data:", error.message);
//     }
//   };

  export const getNftMetadata = async (tokenId:string,setData:React.Dispatch<any>,setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {

    const url = `https://gateway.pinata.cloud/ipfs/QmaQRpiqYkBAaPAjk3ZnkiVKQKBtkJcTy7yrETaG58LjPn/${tokenId}.json`;

  
    try {
        setLoading(true)
      const response = await axios.get(url, { });
      const data = response?.data;
      setData({
        image: addGatewayToIpfsUrl(response?.data?.image),
      });
    } catch (error:any) {
    setData(null)
     console.error("Error fetching NFT data:", error.message);
    }finally{
        setLoading(false)

    }
  };

  const addGatewayToIpfsUrl = (ipfsUrl:string, gateway = "https://gateway.pinata.cloud") => {
  if (ipfsUrl.startsWith("ipfs://")) {
    return ipfsUrl.replace("ipfs://", `${gateway}/ipfs/`);
  }
  return ipfsUrl;
};