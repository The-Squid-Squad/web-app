import React, {useState, useEffect} from 'react';
const { ethers } = require("ethers");
const deployed_contract = require("../assets/abi/SquidSquad.json");


export default function Minting() {

  // state variables
  const [toggleMint, setToggleMint] = useState(false);
  const [tknId, setTknId] = useState(0)
  const [update, setUpdate ] = useState(1);

  const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'   
      },

      body: JSON.stringify(data) 
    });
    console.log(response.json())
    return response.json(); 
  }
  
  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.log(error);
      }
      document.getElementById("connectButton").innerHTML = "Connected";
      const account_address = await window.ethereum.request({ method: "eth_accounts" });
      console.log(account_address);
    } else {
      document.getElementById("connectButton").innerHTML =
        "Please install MetaMask";
    }
  }

  const execute = async () => {
    if (typeof window.ethereum !== "undefined") {
      let contractAddress = "0xE10D77A5811347cBF73B7E8DacEE6Bc819311c01";
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, deployed_contract.abi, signer);
      try {
        await fetch(process.env.REACT_APP_TOKEN_URI_ROUTE)
          .then( res => { return res.json() })
          .then( async tokenUri => {
            console.log(tokenUri.data)
            setTknId(tokenUri.data.internal_tknId)
            await contract.claim(tokenUri.data.metadata.url, {value: 20000000000000000n})
              .catch( error => {
                postData('http://localhost:8000/ipfs/fallback', {value: tokenUri.data.internal_tknId});
                console.log("error in client returning tokenID: "+error)
              })
          })
      
        //setToggleMint(true)
      } catch (error) {
        console.log("2nd catch" + error);
      }
    } else {
      document.getElementById("executeButton").innerHTML =
        "Please install MetaMask";
    }
  }

  useEffect( () => { 
    setTimeout(() => {
      console.log(`tknId = ${tknId}`)
      setUpdate(update + 1)
    }, 500);
  });  

  return (
    <> 
      <p>Connect your wallet</p>
      <button id='connectButton' disabled={toggleMint} onClick={connect}>Connect</button>
      <p>Mint a random Squid!!!</p>
      <button id='executeButton' disabled={toggleMint} onClick={execute}>Mint</button>

      <style>{`
        #executeButton {
          margin-bottom: 120px;
        }
      `}</style>
    </>
  )
}
