import React from 'react'
import CountdownTimer from '../components/countdownTimer';

export default function Home() {
  const LAUNCH_DAY = 1.21e+10;
  const NOW = new Date().getTime();
  const dateTimeLeft = NOW + LAUNCH_DAY;

  return (
    <>
      <div id='landing-wrapper'>

        <div id='landing-main'>
          <h2>Squid Squad!</h2>
          <h3>Official launch in..</h3>
          <img id='countdown-squid' src='https://images2.imgbox.com/d9/db/nwjDzc1m_o.png'></img>
          <CountdownTimer targetDate={dateTimeLeft} />
        </div>

        <div id='landing-about' class="row">
          <div className="column">
            <img id='landing-about-img' src="https://images2.imgbox.com/63/f9/aQx8rL2a_o.jpg" alt="Squid Squad" />
          </div>
          <div className="column">
            <h3 id='landing-desc'>More then art, your squids are companions into the metaverse!</h3>
            <p id='landing-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           
            <p id='landing-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div> 

        <div id='landing-news'>
          <h3>News</h3>
          <p>(Add content section here)</p>
        </div>
      </div>

      <style>{`
        #landing-wrapper {
        
        }
        #landing-main {
          height: 350px;
        }
        #landing-news {
          height: 420px;
        }
        #landing-about {
          padding-top: 12rem;
          height: auto;
        }
        #countdown-squid {
          height: 212px;
          width: 180px;
        }
        .column {
          float: left;
          width: 33.33%;
          padding: 5px;
        }
        .row {
          
        } 

        /* Clear floats after image containers */
        .row::after {
          content: "";
          clear: both;
          display: table;
        }
        @media screen and (max-width: 1100px) {
          .column {
            width: 100%;
          }
        }

        #landing-about-img {
          height: 600px;
          width: 440px;
          
        }

        #landing-desc {
          padding-top: 35px;
          padding-left: 60px;
          margin-top: 20px;
        }

      `}</style>
    </>
  )
}
