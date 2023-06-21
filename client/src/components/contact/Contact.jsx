import React from "react"
import Back from "../common/back/Back"
import "./contact.css"
import {FaFacebook, FaWhatsapp, FaTwitter  } from 'react-icons/fa'

const Contact = () => {

  return (
    <>
      <Back style={{color:'blue'}} title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
        <img className="picture" src='logo.jpeg'/>
          <div style={{ marginTop: '10px' }} className='left row'>      
          </div>
          <div style={{ marginTop: '100px' }} className='right row'>
            <h1>Contact us</h1>
                <h3> info@deptresearch.com</h3>
                {/* <h4  >PHONE:</h4> */}
                <p> +33758491949</p>
            <p>We're open for any suggestion or just to have a chat </p>

            <div className='items grid2'>
              <div className='box'>
                <h4 className='address_head' >ADDRESS:</h4>
                <p className="adress_para" >Department of research and publication. International institute of Paris.
                  26 Rue Castagnary, 75015 Paris France.

                </p>
                  {/* <h4>EMAIL:</h4> */}

              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder="Create a massage here...">

              </textarea>
              <button style={{color:'gold'}} className='primary-btn'>SEND</button>
            </form>

            <h3>Follow us here</h3>
           <div style={{display:'flex', justifyContent:'space-around'}} className="contact_social">
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
        </div>
      </section>
    </>
  )
}

export default Contact
