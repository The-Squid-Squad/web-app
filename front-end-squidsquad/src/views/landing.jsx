import React from 'react'
import CountdownTimer from '../components/countdownTimer';

export default function Home(props) {

  return (
    <>
      <div id='landing-main'>
          <h2>Squid Squad!</h2>
          <h3>Official launch in..</h3>
          <img id='countdown-squid' src='https://images2.imgbox.com/d9/db/nwjDzc1m_o.png'></img>
          <CountdownTimer  />
      </div>
      <div id='landing-wrapper'>
        <div id='landing-about' class="row">
          <div className="column">
            <img id='landing-about-img' src="https://images2.imgbox.com/63/f9/aQx8rL2a_o.jpg" alt="Squid Squad" />
          </div>
          <div className="column">
            <h3 id='landing-desc'>Beauty</h3>
            <p id='landing-desc' className='desc-text'>These beautiful profesionally created 3-d models mixed with randomness will leave you breatheless.
             A truly unique experience as you can engage with your artwork like never before.. </p>
            <br></br>
            <h3 id='landing-desc'>More then art.</h3>
            <p id='landing-desc' className='desc-text'>Your squids are companions into the metaverse! Watch your squid grow as you interact with the world. Gaining experience from every interaction. 
            Experience your NFT’s with friends, fellow squid enthusiast and watch as their value increases over time. </p>
            <br></br>
            <h3 id='landing-desc'>Utility</h3>
            <p id='landing-desc' className='desc-text'>You can use your squid to get into exclusive areas. Such as games, web pages, events, etc. 
            Check the road map and see what we have in the works.</p>
            <p id='landing-desc' className='desc-text'>Maybe you just want to join an event or access some service which requires 
            owning a squid, but you don’t want to buy a squid, or you want a more powerful squid temporarily. Just rent one from the rental market ;)</p>
          </div>
        </div> 
      </div>

      <div id='landing-news'>
          <h1>News</h1>
          <h2>- Squid Gang go’s meta</h2>
          <h2>- Genesis Squids launch</h2>
      </div>

      <div id='landing-timeline'>
          <h1>Dev roadmap</h1>
          <h2>-	Genesis launch</h2>
          <h2>-	Holder owner pages (Squid profiles, ?)</h2>
          <h2>-	Rental market</h2>
          <h2>-	SquidVerse (metaverse portal)</h2>
      </div>

      <style>{`
        #landing-wrapper {
          width: auto;
          height: auto;
          display: flex;
          justify-content: center; 
          padding-right: 5%;
        }
        #landing-main {
          height: 350px;
        }
        #landing-news {
          height: 250px;
          padding-top: 100px;
        }
        #landing-about {
          padding-top: 12rem;
          padding-bottom: 30px;
          height: auto;
        }
        #landing-about-img {
          margin-left: 30px;
          height: 600px;
          width: 440px;
        }
        #landing-timeline {
          padding-bottom: 50px;
        }
        #countdown-squid {
          height: 212px;
          width: 180px;
        }
        .column {
          float: left;
          width: 40.33%;
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

        #landing-desc {
          padding-left: 70px;
          padding-right: 70px;
        }
        .desc-text{
          padding-bottom: 15px;
        }

      `}</style>
    </>
  )
}
