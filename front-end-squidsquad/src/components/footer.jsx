import React from 'react'
import Socials from '../views/socials_tree'

export default function Footer() {
  return (
    <div>
        <div id='footer'>
           <Socials />
        </div>
        <style>{`
            #footer {
                background-color: #000000;
                height: auto;
                width: 100%;  
                color: #faffff;
                padding-top:20px;
            }

        `}</style>
    </div>
    
  )
}