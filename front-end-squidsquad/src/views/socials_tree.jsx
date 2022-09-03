// a link tree for discord, instragram, github, etc.

import React from 'react'

export default function Socials() {
  return (
    <>
      <div id='main-content'>
      <img id='follow-me' src='https://images2.imgbox.com/58/6a/IE0W942r_o.png'></img>
        <ul id='social-media'>
          <p>Social media</p>
          <li>
            <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/356/356060.png" /> <p>Discord</p></a></li><br/><br/>
            <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" /><p>Instagram</p></a></li><br/><br/>
            <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/356/356025.png" /><p>Twitter</p></a></li><br/><br/>
            <li><a href=' https://discord.gg/jJWqVC67WE'><img src="https://cdn-icons-png.flaticon.com/512/1177/1177566.png" /><p>Facebook</p></a></li><br/><br/>
          </li>
        </ul>
        <ul id='social-email'>
          <p>Email</p>
          <li>
            <li><a href='mailto:thesquidsquadnfts@gmail.com?subject = Question&body = Message'><img src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png" /> <p>General</p></a></li><br/><br/>
            <li><a href='mailto:bill@maasdao.io?subject = Question&body = Message'><img src="https://cdn-icons-png.flaticon.com/512/2920/2920252.png" /><p>Technical</p></a></li><br/><br/>
            <li><a href='mailto:courtneytrembecki@gmail.com?subject = Question&body = Message'><img src="https://cdn-icons-png.flaticon.com/512/4335/4335667.png" /><p>Artist</p></a></li><br/><br/>
          </li>
        </ul>
      </div>
      <style>{`
        #main-content {
          height: 700px;
          display: flex;
          justify-content: center;   
        }
        img {
          height: 35px;
          width: 35px;
        }
        li {
          list-style: none;
          text-align: center;
        }
        #social-media {
          padding-right: 5%;
        }
        #social-email {
          padding-left: 5%;
        }
        #follow-me {
          height: 320px;
          width: 520px;
          margin-left: 50px;
        }

      `}</style>
    </>
      
  )
}

// https://discord.gg/jJWqVC67WE   