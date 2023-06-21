import React, { useState, useEffect } from "react"
import Head from "./Head"
import "./header.css"
import AOS from 'aos';
import 'aos/dist/aos.css'

const Header = () => {
  const [click, setClick] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 3000 })
  })

  return (
    <>

      <header style={{ marginTop: '20px' }}>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <a href='/' active >Home</a>
            </li>
            <li>
              <a href='/courses'>All Courses</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/team'>Team</a>
            </li>
            <li>
              <a href='/allbooks'>All Books</a>
            </li>
            <li>
              {/* <a href='/pricing'>Pricing</a> */}
            </li>
            <li>
              <a href="/journals">Journal</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <a  href="/cert">
            <div data-aos="fade-left" className='start'>
              <div data-aos="fade-left"
                style={{
                  color: 'gold',
                  fontSize: '20px',
                  fontWeight: 'bolder'
                }}
                className='button'>GET CERTIFICATE</div>
            </div>
          </a>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav >
        <div style={{ float: 'left', width: '100%', height: "auto", paddingTop: '100px', }} >
          <a href="/">
            <img data-aos="fade-left" className="logo_head" style={{ width: '160px', borderRadius: '100px', paddingTop: "2px", marginLeft: '150px' }} src="logo2.jpeg" alt="" />
          </a>
        </div>
      </header>
      <Head />

    </>
  )
}

export default Header
