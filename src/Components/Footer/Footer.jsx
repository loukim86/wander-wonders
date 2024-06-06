import React, {useEffect} from 'react'
import './footer.css'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import { GiPlanetConquest } from "react-icons/gi";

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'
  
 const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

   return (
     <div className='footer'>
      <div className="secCotainer container grid">
         <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
         <div className="footerLogo">
            <a href="#" className="logo flex"><h1><GiPlanetConquest className='icon' />  WW</h1></a>
          </div>

          <div  className="socials flex">
              <ImFacebook className="icon"/>
              <BsTwitter className="icon"/>
              <AiFillInstagram className="icon"/>
          </div>
         </div>

         <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle">Information</span>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          
         </div>
         <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
          <span className="linkTitle">Helpful Links</span>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condition</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          
         </div>
         <div data-aos="fade-up" data-aos-duration="3500" className="footerLinks">
          <span className="linkTitle">Contact</span>
           <span className='phone'>+1234 5678</span>
           <span className="email">wanderwonders@gmail.com</span>
          
         </div>
      </div> 
     </div>
   )
 }
 
 export default Footer