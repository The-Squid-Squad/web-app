// login/logout buttons, navigation buttons.
import React, { useState, useEffect} from 'react';
import history from '../utils/history';
import Web3 from 'web3';


const Header = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [userInfo, setUserInfo] = useState({});
  
    useEffect(() => {
      function checkConnectedWallet() {
        const userData = JSON.parse(localStorage.getItem('userAccount'));
        if (userData != null) {
          setUserInfo(userData);
          setIsConnected(true);
        }
      }
      checkConnectedWallet();
    }, []);
  
    const detectCurrentProvider = () => {
      let provider;
      if (window.ethereum) {
        provider = window.ethereum;
      } else if (window.web3) {
        // eslint-disable-next-line
        provider = window.web3.currentProvider;
      } else {
        console.log(
          'Non-Ethereum browser detected. You should consider trying MetaMask!'
        );
      }
      return provider;
    };
  
    const onConnect = async () => {
      try {
        const currentProvider = detectCurrentProvider();
        if (currentProvider) {
          if (currentProvider !== window.ethereum) {
            console.log(
              'Non-Ethereum browser detected. You should consider trying MetaMask!'
            );
          }
          await currentProvider.request({ method: 'eth_requestAccounts' });
          const web3 = new Web3(currentProvider);
          const userAccount = await web3.eth.getAccounts();
          const chainId = await web3.eth.getChainId();
          const account = userAccount[0];
          let ethBalance = await web3.eth.getBalance(account); // Get wallet balance
          ethBalance = web3.utils.fromWei(ethBalance, 'ether'); //Convert balance to wei
          saveUserInfo(ethBalance, account, chainId);
          if (userAccount.length === 0) {
            console.log('Please connect to meta mask');
          }
        }
      } catch (err) {
        console.log(
          'There was an error fetching your accounts. Make sure your Ethereum client is configured correctly.'
        );
      }
    };
  
    const onDisconnect = () => {
      window.localStorage.removeItem('userAccount');
      setUserInfo({});
      setIsConnected(false);
    };
  
    const saveUserInfo = (ethBalance, account, chainId) => {
      const userAccount = {
        account: account,
        balance: ethBalance,
        connectionid: chainId,
      };
      window.localStorage.setItem('userAccount', JSON.stringify(userAccount)); //user persisted data
      const userData = JSON.parse(localStorage.getItem('userAccount'));
      setUserInfo(userData);
      setIsConnected(true);
    };

  return (
    <>
    {/* <video autoplay muted loop id="myVideo">
      <source src="rain.mp4" type="video/mp4" />
    </video> */}
    <header>
    <div id='header-wrapper'>
        <div class="content" id='header-background'>
        {/* <div className='pauseVideo'></div> */}
        {/* https://imgbox.com/FO1lMt2e  pauseplay image */}
        <div id='enterDraw' className='pulse-grow-on-hover link button-85'>
        <p id='enterDrawText'>Win 1 of 8 NFTs</p>
        <p id='enterDrawTextSmall'>free entry every 2nd mint!</p>
        <button id='enterDrawBtn' className='button-85'>Enter draw</button>
        </div>
        
        <div id="wrapper">
          <nav>
                <ul id='nav-ul'>
                    <li id='nav-li'>
                    <button id='navbtn' color='primary' size='sm' onClick={() => { history.push('/home'); window.location.reload(); }}>
                        home
                    </button>
                    </li>
                    <li id='nav-li'>
                    <button id='navbtn' color='primary' size='sm' onClick={() => { history.push('/artist'); window.location.reload(); }}>
                        artist
                    </button>
                    </li>
                    <li id='nav-li'>
                    <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/minting'); window.location.reload(); }}>
                        mint
                    </button>
                    </li>
                    <li id='nav-li'>
                    <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/gallery'); window.location.reload(); }}>
                        gallery
                    </button>
                    </li>
                    <li id='nav-li'>
                    <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/socials'); window.location.reload(); }}>
                        socials
                    </button>
                    </li> 
                </ul>              
            </nav>  
          </div> 
        </div>      
    </div>
  
      <style>{`
        #wrapper {
            width: 100%;
            float: left;
            padding-left: 100px;
            padding-right: 30px;
            margin-bottom: 35px;
        }
        .pauseButton {
          
        }
        nav {       
            margin-left: 40px;
            width: 3%;
        }
        #nav-ul {
            display: flex;
            list-style: none;
            justify-content: center;  
            padding left: 50px;
        }
        #navbtn {
            background-color: #86fce5;
            font-size: 19px;
            border-color: #03fce8;     
            opacity: 0.8;
        }
        #navbtn:hover {opacity: 1}

        #enterDrawBtn {
          font-size: 16px;
          margin-bottom: 3px;
          background-color: purple;
          border-color: cyan;
          color: cyan;
        }
        #enterDraw {
          float: right;
          margin-top: 35px;
        
          margin-right: 35px;
          font-size: 22px;
          background-color : purple;
          border-style: solid;
          border-color: cyan;
          text-align: center;
          height: 165px;
          width: 100px;
          opacity: 80%;
        }
        .link:hover{
          text-decoration: none;
          color: #000;
        }

      /*===================*/
      /* PULSE GROW
      /*===================*/
      @-webkit-keyframes pulse-grow-on-hover {
        to {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
      }
      @keyframes pulse-grow-on-hover {
        to {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
      }
      .pulse-grow-on-hover {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      }
      .pulse-grow-on-hover:hover, .pulse-grow-on-hover:focus, .pulse-grow-on-hover:active {
        -webkit-animation-name: pulse-grow-on-hover;
        animation-name: pulse-grow-on-hover;
        -webkit-animation-duration: 0.3s;
        animation-duration: 0.3s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-direction: alternate;
        animation-direction: alternate;
      }
        #enterDrawText {
          font-size: 20px;
          color: yellow
        }
        #enterDrawTextSmall {
          font-size: 13px;
          color: #6bfc51;
        }
        #logo {

        }
        #header-background {
            height: 220px;
            width: 100%;
            background-repeat: no-repeat;           
            background-image: url("https://images2.imgbox.com/53/fd/IF1rgJuJ_o.jpg");
            background-size: cover;     
        }
        @media screen and (max-width: 990px) {
          #header-background {
            height: 200px;
            width: 100%;
            background-repeat: no-repeat;           
            background-image: url("https://images2.imgbox.com/da/c9/uJWmyAH4_o.jpg");
            background-size: cover;     
          }
          #wrapper {
            margin-bottom: 0px;
          }
          #enterDraw {
            width: 90px;
            margin-right: 2px;
          }
      }

        .button-85 {
        
          border: none;
          outline: none;
          color: rgb(255, 255, 255);
          background: #111;
          cursor: pointer;
          position: relative;
          z-index: 0;
          border-radius: 10px;
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
        }

        .button-85:before {
          content: "";
          background: linear-gradient(
            45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000
          );
          position: absolute;
          top: -2px;
          left: -2px;
          background-size: 400%;
          z-index: -1;
          filter: blur(5px);
          -webkit-filter: blur(5px);
          width: calc(100% + 4px);
          height: calc(100% + 4px);
          animation: glowing-button-85 20s linear infinite;
          transition: opacity 0.3s ease-in-out;
          border-radius: 10px;
        }

        @keyframes glowing-button-85 {
          0% {
            background-position: 0 0;
          }
          50% {
            background-position: 400% 0;
          }
          100% {
            background-position: 0 0;
          }
        }

        .button-85:after {
          z-index: -1;
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #222;
          left: 0;
          top: 0;
          border-radius: 10px;
        } 
      `}</style>
    </header>
    </>
  );
};

export default Header;

