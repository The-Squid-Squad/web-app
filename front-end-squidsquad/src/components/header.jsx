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
        {!isConnected && (
            <div id='auth' className="wallet-buttons">
                {/* <img src={MetamaskLogo} alt="meta mask logo" /> */}
                <button className="app-buttons__login" onClick={onConnect}>
                    Connect metamask
                </button>
            </div>
        )}
        {isConnected && (
            <div className="wallet-buttons">
            <h3>✅ You are connected with metamask.</h3>
            <button className="app-buttons__logout" onClick={onDisconnect}>
                Disconnect
            </button>
            </div> 
        )}
            <nav>
                <ul id='nav-ul'>
                    <li id='nav-li'>
                    <button id='navbtn' color='primary' size='sm' onClick={() => { history.push('/home'); window.location.reload(); }}>
                        home
                    </button>
                    </li>
                    <li id='nav-li'>
                    <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/minting'); window.location.reload(); }}>
                        mint NFT
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
            {isConnected && (     
              <div className="app-details">
                  <div className="app-account">
                  <span>Account number:</span>
                  {userInfo.account}
                  </div>
                  <div className="app-balance">
                  <span>Balance:</span>
                  {userInfo.balance}
                  </div>
                  <div className="app-connectionid">
                  <span>Connection ID:</span>
                  {userInfo.connectionid}
                  </div>
              </div>  
            )}
    </div>
      
      <style>{`
        .wallet-buttons {
            padding-right: 21px;
            float: right;
            text-shadow: -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff;
        }
        .app-buttons__login {
            font-size: 21px;
            float: right;  
            background-color: #ed9624;   
            color: white;  
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        .app-buttons__logout {
            font-size: 21px;
            float: right; 
            color: white;
            background-color: #211212;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        .app-details {
            text-align: center;
        }
        nav {
            margin-top: 300px;
        }
        #nav-ul {
            display: flex;
            list-style: none;
        }
        #nav-li {
            margin-right: 0.15%;
            margin-left: 0.15%;
        }
        #navbtn {
            background-color: #86fce5;
            font-size: 21px;
            border-color: #00ffd5;
            border-radius: 8px;
            opacity: 0.8;
        }
        #navbtn:hover {opacity: 1}
        #logo {
            padding-left: 75px;
            height: 212px;
            width: 300x;
        }
        #header-background {
            height: 350px;
            max-wdith: 3200px;
            background-image: url("https://images2.imgbox.com/76/d4/03tsJWwZ_o.jpg");
            border-style: solid;
            border-width: 25px;
           border-color: #14021c;
        }
}
      `}</style>
    </header>
  );
};

export default Header;

