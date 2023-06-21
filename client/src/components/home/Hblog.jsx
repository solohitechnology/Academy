import React, { useEffect } from "react";
import "../blog/blog.css"
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading";
import AOS from 'aos';
import 'aos/dist/aos.css'

// copy code of blog => blogCard

const Hblog = () => {

useEffect(() => {
  AOS.init({duration: 3000})
})

  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading subtitle='OUR BLOG' title='Recent From Blog' />
          <div className='grid2'>
            {blog.slice(0, 4).map((val) => (
              <div data-aos='fade-left' className='items shadow'>
                <div className='img'>
                  <img className="image" src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                      <i className='fa fa-comments'></i>
                      <label style={{color: 'grey'}} htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1 style={{color: 'black'}}>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hblog
