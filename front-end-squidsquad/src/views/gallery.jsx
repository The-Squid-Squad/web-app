import React, {useState, useEffect} from 'react'
import { Network, Alchemy} from  "alchemy-sdk";

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
    let SquidSquadNFTs = await alchemy.nft.getNftsForContract("0xE10D77A5811347cBF73B7E8DacEE6Bc819311c01") 

    let nfts = []
    let owners = []
    for(let i = 0; i < 14; i++){ // SquidSquadNFTs.nfts.length-1
      let id = SquidSquadNFTs.nfts[i].tokenId
      alchemy.nft.getNftMetadata(
        "0xE10D77A5811347cBF73B7E8DacEE6Bc819311c01",
        `${id}`
      )
      .then( async res => {
        nfts.push(res)
        setAllfts(nfts)
        console.log(nfts)
        // try {
        //   await alchemy.nft.getOwnersForNft("0xE10D77A5811347cBF73B7E8DacEE6Bc819311c01", `${res.tokenId}`)
        //   .then(res => {
        //     console.log(res)
        //     owners.push(res)
        //   });  
        // } catch (error) {
        //   console.log(error)
        // }
        
      })
    }

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
      <button id='btn-attributes' onClick={showAttrCard}>Show Attributes</button>
      {/* <p>search coming soon</p>
      <button onClick={getNFTs} disabled={true}>Search NFTs</button> */}
      <div id='gallery-container'>
        <div class="row">
          {allnfts.map(nft => {

            return (
              <>             
                <div id='nft-card' className="column" >
                  <div id='align-card'>
                    <h2 className='gradient-text'>{nft.title?nft.title:"no title"}</h2>
                    {nft.media.length > 0 &&
                    
                    <img id='nft-img' src={nft.media[0].gateway ?nft.media[0].gateway :"https://image.shutterstock.com/image-vector/picture-vector-icon-no-image-260nw-1732584296.jpg"} alt='missing'></img> }
                    <p id='card-details'>{nft.description}</p>
                    <p id='card-details'>owned by: </p> 
            
                    <div id='attributes-wrapper'>
               
                      <div hidden={showAttr}>
                        <h3>Attributes</h3>
                        <p>{nft.rawMetadata && nft.rawMetadata.attributes[0]?"Homeland: "+nft.rawMetadata.attributes[0].value : "no home"}</p>
                        <p>{nft.rawMetadata && nft.rawMetadata.attributes[1]?"Zodiac: "+nft.rawMetadata.attributes[1].value : "no home"}</p>
                        <p>{nft.rawMetadata && nft.rawMetadata.attributes[2]?"Beauty: "+nft.rawMetadata.attributes[2].value : "no home"}</p>
                        <p>{nft.rawMetadata && nft.rawMetadata.attributes[3]?"Charm: "+nft.rawMetadata.attributes[3].value : "no home"}</p>
                        <p>{nft.rawMetadata && nft.rawMetadata.attributes[4]?"Intellect: "+nft.rawMetadata.attributes[4].value : "no home"}</p>
                        <p>{nft.rawMetadata && nft.rawMetadata.attributes[5]?"Wisdom: "+nft.rawMetadata.attributes[5].value : "no home"}</p>
                        <p>{nft.rawMetadata && nft.rawMetadata.attributes[6]?"Strength: "+nft.rawMetadata.attributes[6].value : "no home"}</p>
                      </div>
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
        }
        #btn-attributes {
          font-size: 16px;
        }
        #nft-card {
          height: auto;
          width: 350px;
          border-style: solid;
          border-color: cyan;
          border-width: 1px;
          border-radius: 25px;
          margin: 10px;
          background-image: linear-gradient(cyan, purple);
        }
        #card-details {
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        .gradient-text {
          color: red;
        }
        /* gradient text for modern browsers */
        @supports (background-clip: text) {
          .gradient-text {
            font-size: 32px;
            background-image: linear-gradient(180deg, #000000, #9e2979);
            background-clip: text;
            color: transparent;
          }
        }
        #attributes-wrapper {
          color: black;
        }
        h2 {

        }
        #nft-img {
          width: 300px;
          height: 300px;
          background-color: white;
          border-radius: 12px;
         
        } 
        .column {
            float: left;
            width: 350px;
            padding: 5px;
        }
        .row {
          display: grid;
          justify-content: center;
          justify-items: center;
          grid-template-columns: 545px 545px 545px;
          grid-template-rows: auto;
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
