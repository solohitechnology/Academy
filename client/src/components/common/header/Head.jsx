import React, { useState } from "react"
import './header.css';

const Head = () => {
  const [toggle, setToggle] = useState(false)




  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
            <h1 className='department'>Department  of Research <br/> & Publication  Academy </h1>
          <div className='logo'>
             {/* <strong className="academy"></strong> */}
          </div>

          <div className="mobile_nav" style={{position: 'relative', height:'200px',}}>

          <div  className='toggle_comntainner' style={{ width: '100px', height: '100px', borderRadius: "0 0 90% 40%", textAlign:'center' }} onClick={() => setToggle(!toggle)}>
            <img style={{marginLeft:'20px'}} className="toggle" src="tg1.png" />
          </div>
          <a href="/">
            <img className="deptlogo"  style={{float:'right',position: 'absolute', top:'0', width:'100px', borderRadius:'100px', paddingTop:"2px"}} src="logo.jpeg" alt="" />
          </a>
          </div>

        </div>

        {toggle && (
          <ul className="mobile">
            <li>
              <a href='/'>Home</a>
            </li>
            <hr />
            <li>
              <a href="/courses">All Courses</a>
            </li>
            <hr />
            <li>
              <a href="/about">About</a>
            </li>
            <hr />
            <li>
              <a href="/team">Team</a>
            </li>
            <hr />
            <li>
              <a href="/journals"> Journals</a>
            </li>
            <hr />
            {/* <li>
              <a href="/pricing"> Pricing</a>
            </li>
            <hr /> */}
            <li>
              <a href="/allbooks">AllbooK</a>
            </li>
            <hr />
            <li>
              <a href="/contact" >Contact</a>
            </li>
          </ul>
        )}
      </section>
    </>
  )
}

export default Head
