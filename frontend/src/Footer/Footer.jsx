import React from 'react'
import logo1 from "../image/digitalIndia.png"
import logo2 from "../image/nicLogo.png"
import logo3 from "../image/s3waas.png"
import './Footer.css'
const Footer = () => {
  return (
    <div className="foots">
      <div className='heading'>Content Owned By The OpenArms</div>
      <div className='heading'>Developed and hosted by OpenArms Team</div>
      <div className='heading'>Indian Institute of Information Technology, Nagpur</div>
      <div className="logo">
      <img src={logo1} className="rounded footer-image" alt="..."/>
      <img src= {logo2} className="rounded footer-image" alt="..."/>
      <img src= {logo3} className="rounded footer-image" alt="..."/>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
