import React from 'react'

export default function Home() {
  return (
    <>
      <div id='landing-wrapper'>

        <div id='landing-main'>
          <h3>Squid Squad!</h3>
          insert countdown clock here
          <p>till new collections released!</p>
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
          height: 420px;
        }
        #landing-timeline {
          height: 420px;
        }

      `}</style>
    </>
  )
}
