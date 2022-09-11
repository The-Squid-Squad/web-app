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
            padding-bottom: 75px;
        }
        nav {
            margin-top: 185px;
            margin-left: 5px;
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
            border-radius: 12px;
            opacity: 0.8;
        }
        #navbtn:hover {opacity: 1}
        #logo {

        }
        #header-background {
            height: 200px;
            background-repeat: no-repeat;           
            background-image: url("https://images2.imgbox.com/ba/02/th4QPsFy_o.jpg");
            border-style: solid;
            border-width: 25px;
            border-color: #14021c;
        }
   
        
      `}</style>
    </header>
  );
};

export default Header;

