// a link tree for discord, instragram, github, etc.

import React from 'react'

export default function Socials() {
  return (
    <>
      <div id='containz'>

        <div class="rowz">
          <div className="columnz">
            <img id='follow-me' src='https://ipfs.io/ipfs/bafybeickrakdu7q6h2madsrqmuyrtphjhfpkvxzpizekxywyzr2yefv4ou/3.png?filename=3.png'></img>
          </div>
          <div id='soc-col' className="columnz">
            <ul className='socials-ul' id='social-media'>  
              <li>Socials</li> 
              <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/356/356060.png" /> <p>Discord</p></a></li><br/><br/>
              <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" /><p>Instagram</p></a></li><br/><br/>
              <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/356/356025.png" /><p>Twitter</p></a></li><br/><br/>
              <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/1177/1177566.png" /><p>Facebook</p></a></li><br/><br/>  
            </ul>
          </div>

          <div id='email-col' className="columnz">
            <ul className='socials-ul' id='social-email'> 
              <li className="social-li">Email</li>     
              <li className="social-li"><a href='mailto:thesquidsquadnfts@gmail.com?subject = Question&body = Message'><img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" /> <p>General</p></a></li><br/><br/>
              <li className="social-li"><a href='mailto:bill@maasdao.io?subject = Question&body = Message'><img src="https://cdn-icons-png.flaticon.com/512/2920/2920252.png" /><p>Technical</p></a></li><br/><br/>
              <li className="social-li"><a href='mailto:courtneytrembecki@gmail.com?subject = Question&body = Message'><img src="https://cdn-icons-png.flaticon.com/512/4335/4335667.png" /><p>Artist</p></a></li><br/><br/>
            </ul>
          </div>

        </div> 
      </div>
      <div id='space'></div>
      <style>{`

        #containz {
          height: auto;
          width: auto%; 
          display: flex;
          justify-content: center;   
        }
        img {
          height: 35px;
          width: 35px;
        }
        #p {
         
        }
        #space {
          height: 500px;
        }

        #follow-me {
          height: 220px;
          width: 220px;
          padding-right: 120px;
        }
        .columnz {
          float: left;
          width:40.33%;
          
        }
        .rowz {
          
        } 

        /* Clear floats after image containers */
        .rowz::after {
          content: "";
          clear: both;
          display: table;
        }
        @media screen and (max-width: 800px) {
          .columnz {
            width: 100%;
          }
          #follow-me {
          height: 220px;
          width: 220px;
          padding-left: 120px;
          }

        }
        .socials-ul {
          display: flex;
          list-style: none;
          width: 100px;
 
        }
        .social-li {
          padding: 5px;
            
        }

      `}</style>
    </>
      
  )
}

// https://discord.gg/jJWqVC67WE   