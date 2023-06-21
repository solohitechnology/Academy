import React, { useState, useEffect } from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import AOS from 'aos';
import 'aos/dist/aos.css'

const AboutCard = () => {

  useEffect(() => {
    AOS.init({ duration: 2000 })

  }, [])

  const [aboutData, setAboutData] = useState(homeAbout);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutData((prevAboutData) => {
        return prevAboutData.map((item) => ({
          ...item,
          data: item.data === 0 ? parseInt(item.data) + 1 : 0,
        }));
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    
       

      <div className="mother">
        <section className="aboutHome">
          <div className="container flexSB">
            <div className="left row">
              <img className='leftImage' data-aos="fade-right" src="./images/about.jpg" alt="" />
            </div>
            <div className="right row">
              <Heading
                subtitle=""
                title="Benefits About The  Department of Reseach"
              />
              <p data-aos="fade-up" className="para">
                The Department of Research, Publication and E-Learning (DRPEL) strives
                to provide its members with the highest education and research services.
                We specialize in developing and publishing academic resources and assisting
                students and professionals in acquiring the necessary knowledge and skills to
                succeed in their respective disciplines. Our mission is to provide our clients
                with the best educational resources and enable them to develop and implement the
                best strategies for their success. Our team of experts works together to provide
                our clients with the best possible solutions for their academic and research needs.
                <a href="/bio">check profile Bio</a>
              </p>
              <div className="items">
                {aboutData.map((val, key) => {
                  return (
                    <div data-aos="fade-left" className="item flexSB" key={val.id}>
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                        <p>{val.data}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <Heading  title='Auto-Didactic-E-Learning.' />
        <Awrapper />

      </div>
    </>
  );
};

export default AboutCard;
