import React, { useEffect } from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import AOS from 'aos';
import 'aos/dist/aos.css'

const OnlineCourses = () => {

  useEffect(() => {
 
    AOS.init({duration: 2000})

  }, []) 

  return (
    <>
      <section style={{marginBottom:'100px'}} className='online'>
        <div className='container'>
          <Heading className='Online course' subtitle='COURSES' title='' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box' data-aos="fade-left" >
                <div className='img'>
                  {/* <img className="firstimg" src={val.cover} /> */}
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1 >{val.courseName}</h1>
                <span  >{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
