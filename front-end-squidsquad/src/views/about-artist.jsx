import React from 'react'

export default function AboutArtist() {
  return (
    <>
    <div id='contain'>
      <div class="row">
        <div className="column">
          <img id='artist-img' src="https://images2.imgbox.com/91/dd/2IrXhhdD_o.jpg" alt="Squid Maid" />
        </div>
        <div id='spacer' className="column">
          
        </div>
        <div id='artist-text' className="column">
          <img id='artist-title' src="https://images2.imgbox.com/87/da/jcxb34U7_o.png" alt="titles" />
          <p id='artist-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div> 
    </div>
    
      <style>{`
      #contain {
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
      }
      #spacer {
       width: 90px;

        
      }
      #artist-img {
        height: 475px;
        width: 475px;
        border-radius: 25px;
        padding-left: 50px;

      }
      #artist-title {
        height: 300px;
        width: 400px;
        display: flex;
        margin-left: 45px;
        padding-left: 20px;
      }
      #artist-text {
      
      }
      .column {
      float: right;
      width: 36.33%;
      padding: 5px;
      }
      .row {
        margin-right: 22%;
      }

    /* Clear floats after image containers */
    .row::after {
      content: "";
      clear: both;
      display: table; 
    }
    @media screen and (max-width: 1200px) {
      .column {
        width: 90%;
      }
    }
    `}</style>
    </>
  )
}
