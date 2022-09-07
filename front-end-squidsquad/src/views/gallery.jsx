import React, {useState} from 'react'
import { Network, Alchemy} from  "alchemy-sdk";

const settings = {
  apiKey: "gMtmGgLCUM1kaR-ff4Qy3bVh2Rh3Z9AP",
  network: Network.ETH_GOERLI,
}

const alchemy = new Alchemy(settings)

const ownerAddr = "0xC0B3bb3cE7317782c83C0B79F512f01AFD729666"; // I should dynamically set this for users or set contract address for queries.


// Print total NFT count returned in the response:
// const nftsForOwner = await alchemy.nft.getNftsForOwner(ownerAddr);
// console.log("number of NFTs found:", nftsForOwner.totalCount);

// Print contract address and tokenId for each NFT:
// for (const nft of nftsForOwner.ownedNfts) {
//   console.log("===");
//   console.log("contract address:", nft.contract.address);
//   console.log("token ID:", nft.tokenId);
// }


// console.log(nft.token.Uri.gateway)
// console.log(nft.desciption) 
// console.log(SquidSquadNFTs.nfts)


export default function Gallery() {
  const [allnfts, setAllfts ] = useState([]);

  const getNFTs = async () => {
    let SquidSquadNFTs = await alchemy.nft.getNftsForContract("0x0AEF62758BB6Cc86198EC4E891d4A6e3F7bc7ceb")  
    let nft
    for(let i =0; i < SquidSquadNFTs.nfts.length; i++){
      let id = SquidSquadNFTs.nfts[i].tokenId
      nft = alchemy.nft.getNftMetadata(
        "0x0AEF62758BB6Cc86198EC4E891d4A6e3F7bc7ceb",
        `${id}`
      )//.then();
      console.log(nft)
    
    }
    return nft
  }

  let NFTS = getNFTs();

  console.log(NFTS)

  return (
    <>
      <div>
        {/* {nft.map(nft => {
        console.log(nft.title)
        console.log(nft.token.Uri.gateway)
        console.log(nft.desciption)
       
          return (
          <div>
            <h2>name: {nft.title}</h2>
            <img src={nft.token.Uri.gateway} alt='missing'></img>
            <p>country: {nft.desciption}</p>

            <hr />
          </div>
          );
   
      })} */}
      </div>
    </>
  )
}
