import React from 'react'
import './FeatureCards.css';
import {AiOutlineWifi} from 'react-icons/ai'


const FeatureCards = () => {
  return (
    <div className='card'>
      <AiOutlineWifi className=' cardicon'/>   
      <h1>5X</h1>
      <p>faster candidate submissions</p>
    </div>
  )
}

export default FeatureCards
