import React from 'react'
import CountdownTimer from '../components/countdownTimer';

export default function Home(props) {

  return (
    <>
      <div id='landing-main'>
          <h3>Official launch in..</h3>
          
          <img id='countdown-squid' src='https://images2.imgbox.com/ae/4f/hqvffcu7_o.png'></img>
          <CountdownTimer  />
      </div>
      <div id='landing-wrapper'>
        <div id='landing-about' class="row">
          <div id='about-img' className="column">
            {/* <img id='landing-about-img' src="https://images2.imgbox.com/63/f9/aQx8rL2a_o.jpg" alt="Squid Squad" /> */}
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
          <h3>News</h3>
          <p>Squid Squad goes Meta</p>
          <p>Genesis Squids launch</p>
      </div>

      <div id='landing-timeline'>
          <h3>Dev roadmap</h3>
          <p>Genesis launch</p>
          <p>Squid Profile</p>
          <p>Rental market</p>
          <p>SquidVerse (metaverse portal)</p>
      </div>

      <style>{`
        #landing-wrapper {
          width: auto;
          height: auto;
          display: flex;
          justify-content: center; 
          margin-left: 13%;
          padding-left: 50px;
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
        
        #about-img {
          height: 900px;
          width: 450px;
          background-repeat: no-repeat;           
          background-image: url("https://images2.imgbox.com/d1/af/9tBrSbzY_o.jpg");
          background-size: cover; 
          margin-right: 245px;
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
          width: 25.33%;
          padding-left: 2%;
          padding-right: 2%;
        }
        
        .row {
          padding-right:140px;
        } 

        /* Clear floats after image containers */
        .row::after {
          content: "";
          clear: both;
          display: table;
        }
        
        #landing-desc {
          float: right;
          width: 330px;
          margin-right: 30px;
        }
        
        .desc-text{
          padding-bottom: 15px;
          margin-right: 120px;
        }
        
        @supports (background-clip: text) {
          h3, span {
            font-size: 32px;
            background-image: linear-gradient(180deg, #2bc9cf, #9e2979);
            background-clip: text;
            color: transparent;
          }


        @media screen and (max-width: 1420px) {
          .column {
            width: 22%;
          }
          #about-img {
            height:600px;
            width: 386px;
            background-repeat: no-repeat;           
            background-image: url("https://images2.imgbox.com/d1/af/9tBrSbzY_o.jpg");
            background-size: auto%; 
          }
        }

        @media screen and (max-width: 1245px) {
          .column {
            width: 100%;
          
          }
          #about-img {
            height:600px;
            width: 346px;
            background-repeat: no-repeat;           
            background-image: url("https://images2.imgbox.com/d1/af/9tBrSbzY_o.jpg");
            background-size: auto%; 
            margin-right: 0px;
          }
          .row {
          padding-right:46%;
          padding-left:25%;
          
          } 
          .desc-text{
          padding-bottom: 15px;
          margin-right: 0px;
          }
        }
        
        @media screen and (max-width: 600px) {
          .row {
          padding-right:0%;
          margin-right:30%;
          padding-left:0%;
          
          } 

        }




        

      `}</style>
    </>
  )
}
