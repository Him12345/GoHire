import React, { useState } from 'react'
import './Header.css'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (

    <>

<div className="main flex h-[4vw]  items-center justify-between p-5">

<div className="logo  ">
  <span className='GO'>Go</span><span className='HIRE'>Hire</span>
</div>


<div className="menu ">
<h6 >Resourse</h6>
    <h6>Hiring Feature</h6>
    <h6>For Employers</h6>
    <h6>About Us</h6>

   

</div>


<div className="buttons flex  justify-space">
  <button>Find Job</button>
  <button>Hire Talent</button>
</div>

<div className='dropdown-container'>
      <div className='menuicon' onClick={toggleMenu}>
        <AiOutlineMenu />
      </div>
      {isMenuOpen && (
        <div className='dropdown-content'>
          <ul>
            <li>Resourse</li>
            <li>Hiring Feature</li>
            <li>For Employers</li>
            <li>About Us</li>

          </ul>
        </div>
      )}
    </div>



</div>
<div className="shadow">
  
</div>

    </>
 

  )
}

export default Header
