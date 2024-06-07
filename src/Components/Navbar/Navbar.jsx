import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { GiPlanetConquest } from "react-icons/gi";

const Navbar = () => {

  const [active, setActive]  = useState('navBar')
  const showNav = ()=>{
      setActive('navBar activeNavbar')
  }
  const removeNav = ()=>{
      setActive('navBar')
  }
  
  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className="navBarSection">
      <header className={transparent}>
        <div className="logoDiv">
          <Link to="/" className="logo flex"> 
            <h1>
              <GiPlanetConquest className="icon" /> WW
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul onClick={removeNav} className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">Home</Link>
            </li>
            <li className="navItem">
              <Link to="/products" className="navLink">Products</Link> 
            </li>
            <li className="navItem">
              <Link to="/resources" className="navLink">Resources</Link>
            </li>
            <li className="navItem">
              <Link to="/contact" className="navLink">Contact</Link>
            </li>
            <li className="navItem">
              <Link to="/blog" className="navLink">Blog</Link> 
            </li>

            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn">
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar