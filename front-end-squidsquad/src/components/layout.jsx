import React from 'react';
import Header from './header';
import Footer from './footer';
const Layout = (props) => (
  <>
    <main>
      <Header />
        <div className='container'>{props.children}</div>
      <Footer />
    </main>
    
    <style>{`
      * {
        font-family: sans-serif !important;
        outline: none;
      }
      .container {
        max-wdith: auto;
        max-height: auto;
        background-color: #14021c;   
        color: white;  
        
        padding-top: 55px;                                 
      }
      
    `}</style>
  </>
);

export default Layout;