import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import './App.css'
import Mainpage from './Component/Mainpage/Mainpage'
import About from './Component/About/About'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Mainpage/>
      <About/>
    </div>
  )
}

export default App