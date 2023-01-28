import React from 'react'

import {About, Footer, Skills, Header, Testmonials, Work} from './containers';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testmonials/>
        <Footer/>
    </div>
  )
}

export default App