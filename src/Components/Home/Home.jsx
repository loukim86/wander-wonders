import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
 
 const Home = () => {
    useEffect(()=>{
      Aos.init({duration: 2000})
    }, [])
 
   return (
    <section className='home'>
      <div className="secContainer container">
        <div className="homeText">
           <h1 data-aos="fade-up" data-aos-duration="2000" className="title">
            Plan Your Trip With Wander Wonders
           </h1>
           <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
           Wander Far, Feel at Home Everywhere!
           </p>
           <button data-aos="fade-up" data-aos-duration="3000" className="btn">
                <Link to="/explore">Explore Now</Link>
              </button>
        </div>

        <div  className="homeCard grid">
           <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
              <label htmlFor="location">Location</label>
              <input type="text" placeholder='Dream Destination'/>
           </div>
           <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
              <label htmlFor="distance">Distance</label>
              <input type="text" placeholder='11/Meters'/>
           </div>
           <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
              <label htmlFor="price">Price Range</label>
              <input type="text" placeholder='$140-$500'/>
           </div>
           <button data-aos="fade-left" data-aos-duration="3500" className='btn'>Search</button>
        </div>
      </div>
    </section>
   )
 }
 
 export default Home