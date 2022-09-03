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
       
        <div id='landing-news'>
          <h3>News</h3>
        </div>

        <div id='landing-timeline'>
          <h3>Timeline & Release dates.</h3>
        </div>
        
      </div>
      <style>{`
        #landing-wrapper {
          color: white;
        }
        #landing-main {
          height: 350px;
        }
        #landing-news {
          padding-top: 8rem;
          height: 420px;
        }
        #landing-timeline {
          height: 420px;
        }
        #countdown-squid {
          height: 212px;
          width: 180px;
        }

      `}</style>
    </>
  )
}
