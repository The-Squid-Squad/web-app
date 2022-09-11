import React, {useState, useEffect} from 'react'
import { Network, Alchemy} from  "alchemy-sdk";
const { ethers } = require("ethers");
const deployed_contract = require("../assets/abi/SquidSquad.json");

const settings = {
  apiKey: "gMtmGgLCUM1kaR-ff4Qy3bVh2Rh3Z9AP",
  network: Network.ETH_GOERLI,
}

const alchemy = new Alchemy(settings)

export default function Gallery() {
  const [allnfts, setAllfts ] = useState([]);
  const [showAttr, setShowAttrs ] = useState(false);
  const [update, setUpdate ] = useState(1);

  const getNFTs = async () => {
    let SquidSquadNFTs = await alchemy.nft.getNftsForContract("0xcfC64FcEa7507F9E31a74A49884741BCD5E0A25A") 

    let nfts = []
    let owners = []
    for(let i = 0; i < 14; i++){ // SquidSquadNFTs.nfts.length-1
      let id = SquidSquadNFTs.nfts[i].tokenId
      alchemy.nft.getNftMetadata(
        "0xcfC64FcEa7507F9E31a74A49884741BCD5E0A25A",
        `${id}`
      )
      .then( async res => {
        try {
          await alchemy.nft.getOwnersForNft("0xcfC64FcEa7507F9E31a74A49884741BCD5E0A25A", `${res.tokenId}`)
          .then(res => {
            console.log(res)
            owners.push(res)
          });  
        } catch (error) {
          console.log(error)
        }
        nfts.push(res)
      })
    }
    setAllfts(nfts)
    console.log(nfts)
    console.log(owners)
    return [nfts, owners]
  }
    useEffect( () => { 
      getNFTs()
    },[]); 
    useEffect( () => { 
      setTimeout(() => {
        console.log("updated")
        setUpdate(update + 1)
      }, 1000);
    });  

 const showAttrCard = () => {
  if(showAttr === true);
    setShowAttrs(false);

  if(showAttr === false)
    setShowAttrs(true);
 }
    
  return ( 
    <>
      <p>search coming soon</p>
      <button onClick={getNFTs} disabled={true}>Search NFTs</button>
      <div id='gallery-container'>
        <div class="row">
          {allnfts.map(nft => {

            return (
              <>             
                <div id='nft-card' className="column" >
                  <div id='align-card'>
                    <h2>{nft.title?nft.title:"no title"}</h2>
                    {nft.media.length > 0 &&
                    <img id='nft-img' src={nft.media[0].gateway?nft.media[0].gateway:"https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584296.jpg"} alt='missing'></img> }
                    <p>{nft.description}</p>
                    <p>owned by: </p> 
                    <h4 onClick={showAttrCard} >Attributes</h4>
                    <div hidden={showAttr}>
                      <p>{nft.rawMetadata && nft.rawMetadata.attributes[0]?"Homeland: "+nft.rawMetadata.attributes[0].value : "no home"}</p>
                    </div>
                    <hr />
                  </div>
                </div>  


              </>  
            ); 
          })} 
        </div>
      </div>

      <style>{`
        #gallery-container {
          padding-bottom: 300px;
          padding-top: 35px;
          padding-left: 75px;
        }

        #nft-card {
          height: auto;
          width: 300px;
          border-style: solid;
          border-color: cyan;
          border-width: 1px;
          margin: 10px;
        }
        h2 {
          
        }
        #nft-img {
          width: 300px;
          height: 300px;
         
        } 
        .column {
          float: left;
          width: 300px;
          padding: 5px;
        }
        .row {

        
        }

        /* Clear floats after image containers */
        .row::after {
          content: "";
          clear: both;
          display: table; 
        }
        @media screen and (max-width: 900px) {
          .column {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}
