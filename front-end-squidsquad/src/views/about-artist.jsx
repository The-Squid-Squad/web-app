import React from 'react'

export default function AboutArtist() {
  return (
    <>
    <div class="row">
      <div className="column">
        <img id='artist-img' src="https://scontent.fcxh3-1.fna.fbcdn.net/v/t39.30808-6/274923720_10218520854807433_8960867018370807852_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GRjKByTDQcIAX_3asAl&_nc_ht=scontent.fcxh3-1.fna&oh=00_AT-OLsSOA24BGBGOGyT23w0574px31_UzUUfuQk9XSmJ_g&oe=63179690" alt="Squid Maid" />
      </div>
      <div className="column">
        <img id='artist-title' src="https://images2.imgbox.com/87/da/jcxb34U7_o.png" alt="titles" />
        <p id='artist-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='column'>
        
      </div>
    </div> 
      <style>{`
      #artist-img {
        height: 500px;
        width: 500px;
        display: flex;
        justify-content: center; 
      }
      #artist-title {
        height: 300px;
        width: 400px;
        display: flex;
        margin-left: auto;
        margin-right: 100px;
      }
      .column {
      float: right;
      width: 33.33%;
      padding: 5px;
    }

    /* Clear floats after image containers */
    .row::after {
      content: "";
      clear: both;
      display: table;
    }
    @media screen and (max-width: 900px) {
      .column {
        width: 100%;
      }
    }
    `}</style>
    </>
  )
}
