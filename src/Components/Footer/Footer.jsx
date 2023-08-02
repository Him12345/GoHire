import React from 'react'
import './Footer.css'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'



const Footer = () => {
  return (
      <>
           <div className='footer'>

<div className="foot">
<span className='GO'>Go</span><span className='HIRE'>Hire</span>
</div>

<div className="foot1  ">
    <h2>Product</h2>
    <h6>Product demo</h6>
    <h6>Virtual product tour</h6>
    <h6>Pricing</h6>

</div>
<div className="foot1">
<h2>Use-cases</h2>
<h6>NES Fircroft</h6>
    <h6>
TriStarr</h6>
    <h6>Convent Technologies
</h6>

</div>
<div className="foot1">
<h2>Resources</h2>
<h6>Customer reviews</h6>
    <h6>Bullhorn Marketplace
</h6>
    <h6>What’s next user conference</h6>

</div>
<div className="foot1">
<h2>Legal</h2>
<h6>Terms of use</h6>
    <h6>Cookie Preferences</h6>
    <h6>
Remove my data</h6>

</div>
<div className="foot1">
<h2>Company</h2>
<h6>About us</h6>
    <h6>Partners</h6>
    <h6>We are hiring!</h6>

</div>
<hr/>


</div>
<hr />

 <div className="lowerfooter">
 <div className="copyright">

<AiOutlineCopyrightCircle/> <p>2023, GoHire, Inc. All Rights Reserved.</p>

</div>


<div className="socialmediaicon">
    <AiFillLinkedin className='socialicon'/>
    <BsTwitter className='socialicon'/>
    <AiFillInstagram className='socialicon'/>
    <AiFillYoutube className='socialicon'/>
</div>

 </div>




      </>
   
  )
}

export default Footer
