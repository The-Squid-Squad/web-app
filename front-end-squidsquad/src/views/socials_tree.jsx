// a link tree for discord, instragram, github, etc.

import React from 'react'

export default function Socials() {
  return (
    <>
      <div id='containz'>
        <div class="rowz">
          <div className="columnz">
            <img id='follow-me' src='https://images2.imgbox.com/58/6a/IE0W942r_o.png'></img>
          </div>
          <div className="columnz">
            <ul id='social-media'>
              <p id='p'>Social media</p>
              <li>
                <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/356/356060.png" /> <p>Discord</p></a></li><br/><br/>
                <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" /><p>Instagram</p></a></li><br/><br/>
                <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/356/356025.png" /><p>Twitter</p></a></li><br/><br/>
                <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/1177/1177566.png" /><p>Facebook</p></a></li><br/><br/>
              </li>
            </ul>
          </div>
          <div className="columnz">
            <ul id='social-email'>
              <p id='p'>Email</p><div id='text-spacer'></div>
              <li>
                <li><a href='mailto:thesquidsquadnfts@gmail.com?subject = Question&body = Message'><img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" /> <p>General</p></a></li><br/><br/>
                <li><a href='mailto:bill@maasdao.io?subject = Question&body = Message'><img src="https://cdn-icons-png.flaticon.com/512/2920/2920252.png" /><p>Technical</p></a></li><br/><br/>
                <li><a href='mailto:courtneytrembecki@gmail.com?subject = Question&body = Message'><img src="https://cdn-icons-png.flaticon.com/512/4335/4335667.png" /><p>Artist</p></a></li><br/><br/>
              </li>
            </ul>
          </div>
        </div> 
      </div>
      <div id='space'></div>
      <style>{`
        #containz {
          height: auto;
          width: 100%; 
          display: flex;
          justify-content: center;   
        }
        img {
          height: 35px;
          width: 35px;
        }
        #p {
          list-style: none; 
          padding-left: 7%;
        }
        #space {
          height: 500px;
        }
        #text-spacer {
          width: 50px;
        }
        #follow-me {
          height: 220px;
          width: 320px;
          padding-left: 5%;
          padding-right: 500%
        }
        .columnz {
          float: left;
          width: 7.33%;
          padding-right: 150px;
          padding-left: 150px;
        }
        .rowz {
          
        } 

        /* Clear floats after image containers */
        .rowz::after {
          content: "";
          clear: both;
          display: table;
        }
        @media screen and (max-width: 700px) {
          .columnz {
            width: 100%;
          }
        }

      `}</style>
    </>
      
  )
}

// https://discord.gg/jJWqVC67WE   