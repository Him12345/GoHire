import React from 'react'
import img from "./bannerimg.jpg"
import "./Banner.css"

const Banner = () => {
  return (
    <div className='banner flex items-center justify-around p-12'>
      <div className="headline flex ">
       <h1>Unlock Global Talent</h1>
        <h2>Empowering Companies Worldwide to Hire Top Tech Professionals</h2> 
        <h3>Join Our Recruitment Revolution!</h3>
        <div className="bannerbtn flex ">

       
          <div className=""> <button>Find Job</button> </div>
          <div className="">  <button>Hire Talent</button></div>
       
        </div>
       


      </div>

      <div className="bannerimg">

          <img src={img} alt="" />
      </div>
    </div>
  )
}

export default Banner
