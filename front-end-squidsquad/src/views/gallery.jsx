import React from 'react'
import { Network, Alchemy} from  "alchemy-sdk";

const settings = {
  apiKey: "gMtmGgLCUM1kaR-ff4Qy3bVh2Rh3Z9AP",
  network: Network.ETH_GOERLI,
}

const alchemy = new Alchemy(settings)

const ownerAddr = "0xC0B3bb3cE7317782c83C0B79F512f01AFD729666"; // I should dynamically set this for users or set contract address for queries.

// Print total NFT count returned in the response:
const nftsForOwner = await alchemy.nft.getNftsForOwner(ownerAddr);
console.log("number of NFTs found:", nftsForOwner.totalCount);

// Print contract address and tokenId for each NFT:
for (const nft of nftsForOwner.ownedNfts) {
  console.log("===");
  console.log("contract address:", nft.contract.address);
  console.log("token ID:", nft.tokenId);
}

export default function Gallery() {
  return (
    <div>Coming Soon!</div>
  )
}
