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
    <header>
    <div id='header-wrapper'>
        <div id='header-background'>
        {/* <a href='/home'><img id="logo" src={SquidLogo} alt="Logo-home"></img></a> */}
        <div id='enterDraw'>
        <p id='enterDrawText'>8 Free NFT's</p>
        <button id='enterDrawBtn'>Enter draw</button>
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
        #nav-li {
          
            
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
          margin-bottom: 25px;
          background-color: black;
          border-color: cyan;
          color: cyan;
        }
        #enterDraw {
          float: right;
          margin-top: 10px;
          margin-right: 35px;
          font-size: 22px;
          background-color : purple;
          border-style: solid;
          border-color: cyan;
          text-align: center;
          width: 100px;
        }
        #enterDrawText {
          font-size: 22px;
          color: yellow

        }
        #logo {

        }
        #header-background {
            height: 200px;
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
        
      `}</style>
    </header>
  );
};

export default Header;

