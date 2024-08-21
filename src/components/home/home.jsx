import React from 'react'
import './home.css'
import keybody from '../../assets/keybody.jpg'
import people from '../../assets/people.jpg'

const Home = () => {
  return (
    <div className='box'>
        <div className='home-text'>
            <h1>Welcome to our website</h1>
            <h2>we help in solving small bsusiness problem</h2>
            <p>our open,positive, and proactive approach helps us find ways to align your work environmrnt with the culture </p>
            <button>Books us</button>
        </div>
        <img src={people} alt="" className='home-img'/>
    </div>
  )
}

export default Home