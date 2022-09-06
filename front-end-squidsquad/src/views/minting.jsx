import React, {useState} from 'react'
import Web3 from "web3"
const deployed_contract = require("../assets/abi/SquidSquad.json");
const { ethers } = require("ethers");

const web3 = new Web3("https://goerli.infura.io/v3/ed06e8ec99244ce3a637e096d13fdb29")

export default function Minting() {

  // state variables
  const [toggleMint, setToggleMint] = useState(false);
  const [randomNFT, setRandomNFT] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])


  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
      } catch (error) {
        console.log(error);
      }
      document.getElementById("connectButton").innerHTML = "Connected";
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      console.log(accounts);
    } else {
      document.getElementById("connectButton").innerHTML =
        "Please install MetaMask";
    }
  }
  
  // test array of random mints
  
  // base token url
  let baseURL = "ipfs://bafybeiea3ayymbf3kzcontpcveswkf6ed7u7swo4ombylcesddpkekjfzy/" 

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      let contractAddress = "0xcfC64FcEa7507F9E31a74A49884741BCD5E0A25A";
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, deployed_contract.abi, signer);
      if(randomNFT.length > 1) {
        // select random number from array.
        let idx = getRandomInt(randomNFT.length)
        let i = randomNFT[idx]
        try {
          console.log("i = " + i)
          console.log("random NFT = " + randomNFT)
          console.log(`${baseURL}${i}.json?filename=${i}.json`)
          await contract.claim(`${baseURL}${i}.json?filename=${i}.json`, {value: 20000000000000000n});
          randomNFT[idx] = randomNFT[randomNFT.length-1];
          randomNFT.pop();
          setRandomNFT(randomNFT)
          console.log("random NFT after mint = " + randomNFT)
        } catch (error) {
          console.log(error);
        }
        // call_contract_mint_function(`${baseURL}${i}`)
      } else if(randomNFT.length === 1){
        // when the last value in the array is read, disable the mint button
        let i = randomNFT[0]
        try {
          console.log("i is " + i)
          await contract.claim(`${baseURL}${1}.json`, {value: 20000000000000000n});
          setToggleMint(true)
        } catch (error) {
          console.log(error);
        }
         
      } else {
        console.log("nothing to mint, this should be disabled. Error?")
      }
    } else {
      document.getElementById("executeButton").innerHTML =
        "Please install MetaMask";
    }
  }

  
  
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
