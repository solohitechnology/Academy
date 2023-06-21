import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        {/* <div className='container'>
          <label className="courses">
            <Heading subtitle='our courses' title='explore our popular online courses below' />
          </label>
          <div className='coursesCard'>
            <div className='grid2'>
              {coursesCard.slice(0, 4).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span className="sp">{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                      <div className='price'>
                        <h3>
                          {val.priceAll} / {val.pricePer}
                        </h3>
                      </div>
                  <button style={{width:'200px'}} className='outline-btn'>ENROLL NOW !</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
