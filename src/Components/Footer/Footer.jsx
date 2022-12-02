import React,{useEffect} from 'react';
import './footer.css';
import video1 from '../../Assets/video1.mp4';
import {FiSend} from 'react-icons/fi';
import {SiYourtraveldottv} from 'react-icons/si';
import {CiTwitter} from 'react-icons/ci';
import {CiYoutube} from 'react-icons/ci';
import {CiInstagram} from 'react-icons/ci';
import {BsChevronRight} from 'react-icons/bs';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video1} autoPlay loop muted type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep In Touch</small>
            <h2>Travel With Us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder="Enter Your Email" />
            <button data-aos="fade-up" className='btn flex' type='submit'>
                Send<FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <SiYourtraveldottv className='icon'/> Holiday.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <CiTwitter className='icon'/>
              <CiYoutube className='icon'/>
              <CiInstagram className='icon'/>
            </div>
          </div>
          <div className="footerLinks grid">
            {/*Group 1*/}
            <div data-aos="fade-up" data-aos-duratiom="3000" className="linkGroup">
              <span className='groupTitle'>
                Our Company
              </span>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Insurance
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Payment
              </li>


            </div>
               {/*Group 2*/}
               <div data-aos="fade-up" data-aos-duratiom="4000" className="linkGroup">
              <span className='groupTitle'>
                Partners
              </span>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Bookings
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Rentcars
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Hostels
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Trivago
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                TripAdvisor
              </li>


            </div>
               {/*Group 3*/}
               <div data-aos="fade-up" data-aos-duratiom="5000" className="linkGroup">
              <span className='groupTitle'>
                Last Minute
              </span>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                India
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                London
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Europe
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Oceania
              </li>

              <li className="footerList flex">
                <BsChevronRight className='icon'/>
                Callifornia
              </li>


            </div>
          </div>
          <div className="footerDiv flex">
            <small>Best Travel Guranteed </small>
            <small>Made with React Js by Aakash</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer