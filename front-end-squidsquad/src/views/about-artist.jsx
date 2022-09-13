import React from 'react'

export default function AboutArtist() {
  return (
    <>
    <div id='contain'>
      <div class="row">
        <div id='artist-img' className="column">
          
        </div>
        <div id='spacer' className="column">
          
        </div>
        <div id='artist-text' className="column">
          <div className='title'></div>
          
          <p id='artist-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div> 
    </div>
    
      <style>{`
      #contain {
        width: auto;
        height: auto;
        padding-left: 100px;
      }
 
      #artist-img {
        height:500px;
        width: 370px;
        background-repeat: no-repeat;           
        background-image: url("https://images2.imgbox.com/91/dd/2IrXhhdD_o.jpg");
        background-size: cover; 
        margin-left: 25px;
      }
      #artist-title {
        height: 300px;
        width: auto;
        
       
       
      }
      .title {
        height:300px;
        width: 100%;
        background-repeat: no-repeat;           
        background-image: url("https://images2.imgbox.com/87/da/jcxb34U7_o.png");
        background-size: 99%; 
      }
      .column {
      float: right;
      width: 40.33%;
      padding-right: 10%;
      }
      .row {
        margin-right: 12%;
      }

    /* Clear floats after image containers */
    .row::after {
      content: "";
      clear: both;
      display: table; 
    }
    @media screen and (max-width: 1000px) {
      .column {
        width: 100%;
      
      }
      #artist-img {
        height:auto%;
        width: 400px;
        background-repeat: no-repeat;           
        background-image: url("https://images2.imgbox.com/15/10/c3OMo4Rw_o.jpg");
        background-size: cover; 
        margin-right: 15%;
       
      }
      #artist-text {
        height:auto;
        width: 420px;
        
       
      }
      .title {
        height: 225px;
        width: 380px;
        background-repeat: no-repeat;           
        background-image: url("https://images2.imgbox.com/4c/76/1o54E9VD_o.png");
        background-size: 90%; 
        margin-left: 40px;
      }
      #artist-title {
        height: auto;
        width: 300px;
        padding-left: 64px;
       
      }
      #contain {
        width: auto;
        height: auto;
        display: flex;
          justify-content: center; 
      }

    }
    `}</style>
    </>
  )
}
