import React from 'react'
import './about.css'
import CoolMan from '../../components/assets/profile_icon2.svg'
const About = () => {
  return (
    <>
    <div className="about__container">
        <div className="wave-dark-top">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>
        <div className="about__container-title">
            <h2>ABOUT ME</h2>
        </div>
        <div className="about__container-inner">
            <div className="about__container-profile">
                <img className="about__container-profile-cartoon"src={CoolMan} alt="Cool cartoon JT"/>
            </div>
            <div className="about__container-content">
                <div className="about__container-content-heading">
                    <h3><i>Hello I'm Jonathan Trevino,</i><br></br> a Full Stack Developer who specializes in curating efficient and reliable applications.</h3>
                </div>
                <div className="about__container-content-paragraph">
                    <p>I'm passionate and skilled with the things I do, <a href="#skills"><i>it just so happens I can do everything</i></a>. Developing web sites is a personality trait that I can not let go (it's a healthy obssession). Being able to visit something I worked on from around the world is exciting. All things tech-related are things I would love to be able to gain more knowledge for. Resulting from this, I'm fast to pick up on languages I'm not already familiar with.</p>
                </div>
                <section className="about__container-cta">
                    <p className="about__container-cta-action">If you are already familiar with my work</p>
                    <a href="#contact" type="button" className="about__container-cta-button">Contact Me</a>
                </section>
            </div>
        </div>
        <div class="wave-dark-bottom">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
    </div>
    </>
  )
}

export default About
