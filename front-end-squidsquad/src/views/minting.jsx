import React, {useState, useEffect} from 'react';
import BuyCrypto from '../components/buyCrypto';
const { ethers } = require("ethers");
const deployed_contract = require("../assets/abi/SquidSquad.json");



export default function Minting() {

  // state variables
  const [toggleMint, setToggleMint] = useState(true);
  const [buyCrypto, setBuyCrypto] = useState(true);
  const [connected, setConnected] = useState(false);
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
      const account_address = await window.ethereum.request({ method: "eth_accounts" });
      if(account_address.length >= 1){
        setConnected(true)
        setToggleMint(false)
      } else {
        setConnected(false)
        setToggleMint(true)
      }
      
      console.log(account_address);
    } else {
      window.alert( "Please install MetaMask")  
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
            setTknId(tokenUri.data[0])
            await contract.claim(tokenUri.data[1], {value: 20000000000000000n})
              .then( () => postData('http://localhost:8000/ipfs/handleMintResult', {value: 'success', id: tokenUri.data[0]}))
              .catch( error => {
                postData('http://localhost:8000/ipfs/handleMintResult', {value: 'failure', id: tokenUri.data[0]});
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

  const toggleBuyCrypto = () => {
    if(buyCrypto == true){
      setBuyCrypto(false)
    } else {
      setBuyCrypto(true)
    }
  }

  // experimental 
  useEffect( () => { 
    setTimeout(() => {
      console.log(`tknId = ${tknId}`)
      setUpdate(update + 1)
    }, 500);
  });  

  return (
    <> 
      <div id='buyWrapper'>
        <p id='mint-flow-headers'>Buy crypto here.</p>
        
        {buyCrypto === false &&
          <button className='btn-animate btn-buy btn' onClick={toggleBuyCrypto}>Close</button>
        }
        {buyCrypto === true &&
          <button className='btn-animate btn-buy btn' onClick={toggleBuyCrypto}>Buy Crypto</button>
        }

        <div id='buy-container' hidden={buyCrypto}>
          <BuyCrypto  />
        </div>
      </div>
      {connected === false &&
      <div id='connectButton'>
        <p id='mint-flow-headers'>Connect your wallet.</p>
        <button className='btn-animate btn-connect btn' id='connectedButton' onClick={connect}>Connect</button>
      </div>
      }
      {connected === true &&
      <div id='connectButton'>
        <p id='mint-flow-headers'>Connect your wallet.</p>
        <button className='btn-animate btn-connect btn' id='connectedButton' onClick={connect}>Connected</button>
      </div>
      }
      <div id='executeButton' >
        <p id='mint-flow-headers'>Mint a random squid!!!</p>
        <button className='btn-animate btn-mint btn' disabled={toggleMint} onClick={execute}>Mint</button>
      </div>


     
      <style>{`
        #buyWrapper {
          margin-top: 3%;
        }
        #buy-container {
          margin: 15px;
        }
        #mint-flow-headers {
          font-family: "Times New Roman", Times, serif;
          font-size: 21px;
          
        }
        #executeButton {
          padding-bottom: 120px;
        }
        #connectButton {
          margin: 55px;
        }
        .btn {
          background-color: black;
          color: white;
          font-size: 17px;
          padding: 4px;
          width: 120px;
        }
        .btn-buy {
          text-decoration: none;
          border: 1px solid rgb(0, 64, 255);
          position: relative;
          overflow: hidden;
        }

        .btn-connect {
          text-decoration: none;
          border: 1px solid rgb(255, 0, 64);
          position: relative;
          overflow: hidden;
        }

        .btn-mint {
          text-decoration: none;
          border: 1px solid rgb(0, 255, 191);
          position: relative;
          overflow: hidden;
        }

        .btn-animate:hover {
          box-shadow: 1px 1px 25px 10px rgba(146, 148, 248, 0.4);
        }

        .btn-animate:before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(146, 148, 248, 0.4),
            transparent
          );
          transition: all 650ms;
        }

        .btn-animate:hover:before {
          left: 100%;
        }


        
      `}</style>
    </>
  )
}
