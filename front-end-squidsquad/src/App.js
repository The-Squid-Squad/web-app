import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout';
import Auth from './views/auth';
import Home from './views/landing';
import AboutArtist from './views/about-artist';
import Gallery from './views/gallery';
import Minting from './views/minting';
import Socials from './views/socials_tree';


function App() {


  return (
    <>
      <Layout>
        <div className="App">
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/home' element={<Home />} />
          <Route path='/artist' element={<AboutArtist />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/minting' element={<Minting />} />  
          <Route path='/socials' element={<Socials />} />     
        </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;
