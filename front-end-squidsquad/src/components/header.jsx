// login/logout buttons, navigation buttons.
import React from 'react';
import history from '../utils/history';

const Header = () => {

  return (
    <header>
    <div id='header-wrapper'>
        <div id='header-background'>
        {/* <a href='/home'><img id="logo" src={SquidLogo} alt="Logo-home"></img></a> */}
            <nav>
                <ul id='nav-ul'>
                    <li id='nav-li'>
                    <button id='navbtn' color='primary' size='sm' onClick={() => { history.push('/home'); window.location.reload(); }}>
                        home
                    </button>
                    </li>
                    <li id='nav-li'>
                    <button id='navbtn' color='primary' size='sm' onClick={() => {history.push('/about-artist'); window.location.reload(); }}>
                        about-artist
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
                </ul>   
            </nav>
        </div>
    </div>
      
      <style>{`
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
            background-image: url("https://images2.imgbox.com/76/d4/03tsJWwZ_o.jpg");
            border-style: solid;
            border-width: 25px;
}           border-color: #2b143d;
        }

      `}</style>
    </header>
  );
};

export default Header;