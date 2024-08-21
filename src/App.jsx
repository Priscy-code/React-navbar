import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Home from './components/home/home'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div className='container'>

      <Navbar theme={theme} setTheme={setTheme}/>
      <Home/>

    </div>
  )
}

export default App
