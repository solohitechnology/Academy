import React, { useEffect } from "react"
import { team } from "../../dummydata"
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './team.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamCard = () => {

  useEffect(() => {

    AOS.init()

  }, [])

  return (
    <>
<div className="item_container">

      {team.map((val) => (
        <div data-aos="fade-right" className='items shadow'>
            <div className='img'>
              <img src={val.cover} alt='' />
              <div className='overlay'>
                <span style={{ color: 'royalblue', fontSize: '30px', marginTop: '10px' }}>
                  <FaFacebook />
                </span>

                <span style={{ color: 'blue', fontSize: '30px', marginTop: '10px' }}>
                  <FaTwitter />
                </span>

                <span style={{ color: 'green', fontSize: '30px', marginTop: '10px' }} >
                  <FaWhatsapp />
                </span>
              </div>
            </div>
            <div className='details'>
              <h2>{val.name}</h2>
              <p>{val.work}</p>
            </div>
        </div>
      ))}
      </div>

    </>
  )
}

export default TeamCard
