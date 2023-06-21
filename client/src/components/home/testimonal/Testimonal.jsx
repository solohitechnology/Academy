import React, { useEffect } from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonal = () => {

  useEffect(() => {
    AOS.init({duration: 4000})
  })

  return (
    <>
      <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div data-aos="fade-right" className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
