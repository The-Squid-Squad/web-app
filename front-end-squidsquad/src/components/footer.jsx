import React from 'react'

export default function Footer() {
  return (
    <div>
        <div id='footer'>
            <ul>
                <li>Affiliates
                    <></>
                    <li>maasdao</li>
                </li>
                <li>socials
                    <></>
                    <li>github</li>
                    <li>email</li>
                    <li>twitter</li>
                </li>
            </ul>
        </div>
        <style>{`
            #footer {
                background-color: #000000;
                height: 300px;
                max-height: 200px;
                width: 100%;  
                color: #faffff;
                padding-top:20px;
            }
            ul {
                display: flex;
                list-style: none;
                padding-top: 21px;
            }
            li {
                line-height: 12px;
                margin-right: 11%;
                margin-left: 11%;
            }
        `}</style>
    </div>
    
  )
}