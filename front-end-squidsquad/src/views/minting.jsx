import React, {useState} from 'react'
import Web3 from "web3"
const contractABI = require("../assets/abi/SquidSquad.json");
const web3 = new Web3("https://goerli.infura.io/v3/ed06e8ec99244ce3a637e096d13fdb29")
const { ethers } = require("ethers");

const SquidSquadContract = new web3.eth.Contract(contractABI.abi, "0x14f37c00e5D7f67BD166F40BddCdE7Fd38c7daA6")

//console.log(account)

SquidSquadContract.methods.balanceOf("0xC0B3bb3cE7317782c83C0B79F512f01AFD729666").call(function (err, res) {
  if (err) {
    console.log("An error occured", err)
    return
  }
  console.log("Number of Squids Owned: ", res)
})

web3.eth.getBalance("0x14f37c00e5D7f67BD166F40BddCdE7Fd38c7daA6", function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
  }
})


export default function Minting() {

  // state variables
  const [toggleMint, setToggleMint] = useState(false);


  // test array of random mints
  let randomNFT = [0, 1, 2]

  // base token url
  let baseURL = "ipfs://bafkreidep6hs5hgqtnzc5ounofapozoxtnpdkzbtfvpqngdqu3tbqao5si?filename=" //0.png

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  //   if(randomNFT.length > 1) {
  //     // select random number from array.
  //     let idx = getRandomInt(randomNFT.length-1)
  //     let i = randomNFT[idx]
  //     // use that value in our uri and remove it from the array.

  //     // call_contract_mint_function(`${baseURL}${i}.png`)
  //   } else if(randomNFT.length === 1){
  //     // when the last value in the array is read, disable the mint button
  //   } else {
  //     console.log("nothing to mint, this should be disabled. Error?")
  //   }
  

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
  
  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      let contractAddress = "0x14f37c00e5D7f67BD166F40BddCdE7Fd38c7daA6";
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
      try {
        await contract.claim("test", "yesy", {value: 20000000000000000n});
      } catch (error) {
        console.log(error);
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
