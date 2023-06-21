import React, { useEffect } from "react";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import './hero/Hero.css'
import Hprice from "./Hprice";
import AboutCard from "../about/AboutCard";
import Testimonal from "./testimonal/Testimonal";
import Heading from "../common/heading/Heading";
import { Allseminar } from "./Allseminar";






const Home = () => {

  const handleCoursesClick = (e) => {
    e.preventDefault();
    window.location.href = "/courses";
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    window.location.href = "/register";
  };



  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>

          </div>
        </div>
      </section>
      <div style={{ width: '100%', height: '95vh', display: 'flex', alignItems: "center", justifyContent: 'center' }} className="marginTop">

        <a
          href="/register"

          className="started"
          onClick={handleRegisterClick}
        >
          <span >
            GET STARTED
          </span>
        </a>

        <a

          href="/courses"
          className="started_1"
          onClick={handleCoursesClick}
        >
          <span >
            VIEW COURSES
          </span>
        </a>


      </div>
      {/* <Allseminar /> */}
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <br />
      <Hprice />
    </>
  )
}

export default Home
