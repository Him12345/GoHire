import React from 'react'
import './FaciCards.css'
import img from './team2.png'

const FaciCards = () => {
  return (
    <div className='Cards'>

    <h1>No client login required</h1>
    <p>Through a simple link your clients can access candidate submissions right away. No signup or password required.</p>
    <img src={img} alt="" />

    </div>
  )
}

export default FaciCards
