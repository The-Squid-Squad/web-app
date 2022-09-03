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
        max-wdith: 3200px;
        background-color: #14021c;
      }
    `}</style>
  </>
);

export default Layout;