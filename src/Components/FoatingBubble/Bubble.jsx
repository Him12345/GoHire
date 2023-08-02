import React from 'react'
import './Bubble.css'
import img1 from './apple.png'
import img2 from './facebook.png'
import img3 from './amazon.webp'
import img4 from './google.png'
import img5 from './netflix.png'
import img6 from './adobe.png'
import img7 from './zomato.png'
import img8 from './airbnb.jpeg'
import img9 from './tata.png'
import img10 from './uber.png'
import img11 from './blink.png'



const Bubble = () => {
  return (
      <>
<div className="headlineCon">

<h1>LEADING COMPANIES BUILD TEAMS ON TOPHIRE</h1>
</div>
<div class="container">
<span class="bub a "><img src={img1} alt="" /></span>
<span class="bub b "><img src={img2} alt="" /></span>
<span class="bub c "><img src={img3} alt="" /></span>
<span class="bub d"><img src={img4} alt="" /></span>
<span class="bub e"><img src={img5} alt="" /></span>
<span class="bub f"><img src={img6} alt="" /></span>
<span class="bub g"><img src={img7} alt="" /></span>
<span class="bub h"><img src={img8} alt="" /></span>
<span class="bub i"><img src={img9} alt="" /></span>
<span class="bub j "><img src={img10} alt="" /></span>
<span class="bub k"><img src={img11} alt="" /></span>
</div>
</>
   
  )
}

export default Bubble
