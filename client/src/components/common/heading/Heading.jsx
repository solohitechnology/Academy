import './heading.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Heading = ({ subtitle, title }) => {

  useEffect(() => {
    AOS.init({duration:3000})
  })
  
  return (
    <>
      <div  data-aos="fade-left" id='heading'z>
        <h3>{subtitle} </h3>
        <h1>{title} </h1>
      </div>
    </>
  )
}

export default Heading
