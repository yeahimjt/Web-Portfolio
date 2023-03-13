import React from 'react'
import './projects.css'
import '../../components/animations/fade/fade.css'
import '../../components/animations/rotate/rotate.css'
import nerd4u from '../../components/assets/nerd4u.png'
import junit4 from '../../components/assets/junit4.png'
import phpProject from '../../components/assets/php-project.png'
import LittleLemon from '../../components/assets/littlelemon.png'
import WeatherApp from '../../components/assets/weatherapp.png'
import MovieApp from '../../components/assets/movieapp.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {SiGit} from 'react-icons/si'
import { BiLinkExternal, BiPackage } from 'react-icons/bi'
import { SiReact ,SiFlask, SiPython, SiHtml5, SiCss3, SiJavascript, SiMysql, SiAmazonaws, SiMicrosoftazure, SiPhp, SiPhpmyadmin, SiLinux, SiTailwindcss } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

import {useInView} from 'react-intersection-observer'
const Projects = () => {

  const {ref: projectRef, inView: projectInView} = useInView()

  return (
    <>
    <div ref={projectRef} className="projects__container" id="projects" >
      <div className={`${"projects-title"} ${projectInView ? 'fade-down' : ''}`} >
        <h2>PROJECTS</h2>
      </div>    
        <div className={`${"projects__container-inner"}`}>
          <div className={`${"projects__container-display"}  ${projectInView ? 'bigger' : ''}`}>
          <div className="projects__container-display-container">
                <div className="projects__container-display-card-image">
                  <img id="weatherapp" src={MovieApp} alt="Nerd4u"></img>
                </div>
                <div className="projects__container-display-card-content">
                  <div className="projects__container-display-card-content-links">
                    <a href="https://github.com/yeahimjt/movieapp" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-github">
                      <AiFillGithub class="skills-icon-project"/>
                      <p>View Code</p>
                    </a>
                    <a href="https://yeahimjt.github.io/movieapp/" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-external">
                      <BiLinkExternal class="skills-icon-project"/>
                      <p>Live Server</p>
                    </a>
                  </div>
                  <div className="projects__container-display-card-skills">
                    <div className="projects__container-display-card-skills-pill">
                        <SiReact class="skills-icon-project"/>
                        <p>React</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiHtml5 class="skills-icon-project"/>
                        <p>HTML</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiTailwindcss class="skills-icon-project"/>
                        <p>TailWindCSS</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiGit class="skills-icon-project"/>
                        <p>Git</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <BiPackage class="skills-icon-project"/>
                        <p>Movie DB API</p>
                    </div>
                  </div>
                  <div className="projects__container-display-card-content-text">
                    <div className="projects__container-display-card-content-title">
                      <h1>Film Review</h1>
                    </div>
                    <div className="projects__container-display-card-content-subtext">
                      <p>Film Review is a web application that can be used to discover new movies or TV shows based on popularity or similarity. Actors/Directors can also be searched and have their appropriate films/shows they were involved in displayed. This is all powered through the Movie Database API. Functionality of this application includes, Search, Filter, Pagination, and also a Youtube Media Player to display official trailers only if retreived.</p>
                      {/* <p><i>Read More...</i></p> */}
                    </div>
                  </div>
                </div>
              </div>
          <div className="projects__container-display-container">
                <div className="projects__container-display-card-image">
                  <img id="weatherapp" src={WeatherApp} alt="Nerd4u"></img>
                </div>
                <div className="projects__container-display-card-content">
                  <div className="projects__container-display-card-content-links">
                    <a href="https://github.com/yeahimjt/weatherapp" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-github">
                      <AiFillGithub class="skills-icon-project"/>
                      <p>View Code</p>
                    </a>
                    <a href="https://yeahimjt.github.io/weatherapp/" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-external">
                      <BiLinkExternal class="skills-icon-project"/>
                      <p>Live Server</p>
                    </a>
                  </div>
                  <div className="projects__container-display-card-skills">
                    <div className="projects__container-display-card-skills-pill">
                        <SiReact class="skills-icon-project"/>
                        <p>React</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiHtml5 class="skills-icon-project"/>
                        <p>HTML</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiTailwindcss class="skills-icon-project"/>
                        <p>TailWindCSS</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <BiPackage class="skills-icon-project"/>
                        <p>OpenWeather API</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <BiPackage class="skills-icon-project"/>
                        <p>GeoDB Cities API</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <BiPackage class="skills-icon-project"/>
                        <p>Fetch</p>
                    </div>
                  </div>
                  <div className="projects__container-display-card-content-text">
                    <div className="projects__container-display-card-content-title">
                      <h1>WeathOrKnots</h1>
                    </div>
                    <div className="projects__container-display-card-content-subtext">
                      <p>WeathOrKnots is a weather web application that utilizies various API's to display city weather information. It uses GeoDB Cities API to first fetch a city that the user is trying to search for. This retrieves a latitude and longitude position of the city that gets passed to the OpenWeather API to return accurate weather information of the location. Specifically it returns the Current Weather and Forecasted weather for the next 5 days.<i className="project_italic">When trying to search for a specific city you may find that the city does not get recognized and suggested to you in the search bar; this is because the city API utilized does not include that city.</i></p>
                      {/* <p><i>Read More...</i></p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="projects__container-display-container">
                <div className="projects__container-display-card-image">
                  <img id="littlelemon" src={LittleLemon} alt="Nerd4u"></img>
                </div>
                <div className="projects__container-display-card-content">
                  <div className="projects__container-display-card-content-links">
                    <a href="https://github.com/yeahimjt/metacapstone" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-github">
                      <AiFillGithub class="skills-icon-project"/>
                      <p>View Code</p>
                    </a>
                    <a href="https://yeahimjt.github.io/metacapstone/" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-external">
                      <BiLinkExternal class="skills-icon-project"/>
                      <p>Live Server</p>
                    </a>
                    <a href="https://www.figma.com/file/trfhUwrAzinyc26FGKdizv/Untitled?t=OILjRRdRZdeTo6lu-1" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-external">
                      <BiLinkExternal class="skills-icon-project"/>
                      <p>View Figma</p>
                    </a>
                  </div>
                  <div className="projects__container-display-card-skills">
                    <div className="projects__container-display-card-skills-pill">
                        <SiReact class="skills-icon-project"/>
                        <p>React</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiHtml5 class="skills-icon-project"/>
                        <p>HTML</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiTailwindcss class="skills-icon-project"/>
                        <p>TailWindCSS</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <BiPackage class="skills-icon-project"/>
                        <p>Formik</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <BiPackage class="skills-icon-project"/>
                        <p>Yup</p>
                    </div>
                  </div>
                  <div className="projects__container-display-card-content-text">
                    <div className="projects__container-display-card-content-title">
                      <h1>Meta Front End Developer Capstone Project</h1>   
                    </div>
                    <div className="projects__container-display-card-content-subtext">
                      <p>A landing page for Little Lemon. The goal of this project was to go through all industry standard practices in developing a web application. This meant firstly that I had to create the UI/UX with Figma to plan the websites format. Then moving on to creating a quick mock up website to ensure design from Figma file properly transfered over to the web app. I was satisfied with this so I added the finer details such as the color scheme and pictures. Lastly, I implemented form functionality utilizing formik and Yup packages to validate form data entered before allowing submission.<i className="project_italic">Only reservation page and functionality implemented as that was the scope of the project.</i></p>           
                      {/* <p><i>Read More...</i></p> */}
                    </div>
                  </div>
                </div>
              </div>
          <div className="projects__container-display-container">
                <div className="projects__container-display-card-image">
                  <img src={nerd4u} alt="Nerd4u"></img>
                </div>
                <div className="projects__container-display-card-content">
                  <div className="projects__container-display-card-content-links">
                    <a href="https://github.com/yeahimjt/Nerd4U-Ecommerce" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-github">
                      <AiFillGithub class="skills-icon-project"/>
                      <p>View Code</p>
                    </a>
                    <a href="http://www.nerd4u.online/" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-external">
                      <BiLinkExternal class="skills-icon-project"/>
                      <p>Live Server</p>
                    </a>
                  </div>
                  <div className="projects__container-display-card-skills">
                    <div className="projects__container-display-card-skills-pill">
                        <SiFlask class="skills-icon-project"/>
                        <p>Flask</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiPython class="skills-icon-project"/>
                        <p>Python</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiHtml5 class="skills-icon-project"/>
                        <p>HTML</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiCss3 class="skills-icon-project"/>
                        <p>CSS</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiJavascript class="skills-icon-project"/>
                        <p>Javascript</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <GrMysql class="skills-icon-project skills-specific"/>
                        <p>SQL</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiAmazonaws class="skills-icon-project"/>
                        <p>AWS</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiMicrosoftazure class="skills-icon-project"/>
                        <p>Azure</p>
                    </div>
                  </div>
                  <div className="projects__container-display-card-content-text">
                    <div className="projects__container-display-card-content-title">
                      <h1>Software Engineering Project</h1>   
                    </div>
                    <div className="projects__container-display-card-content-subtext">
                      <p>Developed a E-commerce Web Page that was used for selling Comic related items. Functacionality developed is: register page,login page, item create listing, custom pages for each appropriate item listed, add to cart, search page, purchase cart, and a admin panel page. <i className="project_italic">Agile team was formed for this project, acted as a full stack developer curating the entire front end and back end of the e-commecrce application.</i></p>           
                      {/* <p><i>Read More...</i></p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="projects__container-display-container">
                <div className="projects__container-display-card-image">
                  <img className="project-img" src={phpProject} alt="Nerd4u"></img>
                </div>
                <div className="projects__container-display-card-content">
                  <div className="projects__container-display-card-content-links">
                    <a href="https://github.com/yeahimjt/php-ecommerce" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-github">
                      <AiFillGithub class="skills-icon-project"/>
                      <p>View Code</p>
                    </a>
                    <div className="projects__container-display-card-content-links-external unavailable">
                      <BiLinkExternal class="skills-icon-project"/>
                      <p>Live Server</p>
                    </div>
                  </div>
                  <div className="projects__container-display-card-skills">
                    <div className="projects__container-display-card-skills-pill">
                        <SiPhp class="skills-icon-project"/>
                        <p>PHP</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiHtml5 class="skills-icon-project"/>
                        <p>HTML</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiCss3 class="skills-icon-project"/>
                        <p>CSS</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">

                        <p>Cronjob</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">

                        <p>API</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <GrMysql class="skills-icon-project"/>
                        <p>SQL</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiPhpmyadmin class="skills-icon-project"/>
                        <p>phpMyAdmin</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiLinux class="skills-icon-project"/>
                        <p>Linux</p>
                    </div>
                  </div>
                  <div className="projects__container-display-card-content-text">
                    <div className="projects__container-display-card-content-title">
                      <h1>Enterprise Software Engineering Project</h1>   
                    </div>
                    <div className="projects__container-display-card-content-subtext">
                      <p>Implemented efficient code for querying and recieving PDF files from external servers endpoint. Included functionalionality of php webpages: Upload PDF files, search PDF files, view PDF files. The api that was created to get files from external server, was ran on a Linux Ubuntu 22.04 server with a cronjob that would run for specified times automatically and would insert the files either in the linux server itself or into my phpmyadmin database with the appropriate indexes.</p>           
                      {/* <p><i>Read More...</i></p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="projects__container-display-container">
                <div className="projects__container-display-card-image ">
                  <img className="stretch" src={junit4} alt="Nerd4u"></img>
                </div>
                <div className="projects__container-display-card-content">
                  <div className="projects__container-display-card-content-links">
                    <a href="https://github.com/yeahimjt/junit4-project/blob/master/test/main/java/org/apache/commons/mail/EmailTest.java" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-github">
                      <AiFillGithub class="skills-icon-project"/>
                      <p>View Code</p>
                    </a>
                    <div href="" disabled={true} target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-external unavailable">
                      <BiLinkExternal class="skills-icon-project"/>
                      <p>Live Server</p>
                    </div>
                  </div>
                  <div className="projects__container-display-card-skills">

                    <div className="projects__container-display-card-skills-pill">
                        <SiPython class="skills-icon-project"/>
                        <p>Java</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiHtml5 class="skills-icon-project"/>
                        <p>JUnit4</p>
                    </div>
                    <div className="projects__container-display-card-skills-pill">
                        <SiCss3 class="skills-icon-project"/>
                        <p>Eclipse</p>
                    </div>
                  </div>
                  <div className="projects__container-display-card-content-text">
                    <div className="projects__container-display-card-content-title">
                      <h1>Software Validation and Quality Assurance</h1>   
                    </div>
                    <div className="projects__container-display-card-content-subtext">
                      <p>Automated the process of unit testing utilizing Junit4. The goal for this specific project was to achieve 100% code coverage on specificed functions, however other projects delved deeper into test coverages. Despite the unfamiliarity with Junit4, quickly familiarized myself and understood the key concepts of automated testing and how to best perform them. </p>           
                      {/* <p><i>Read More...</i></p> */}
                    </div>
                  </div>
                </div>
              </div>
              
          </div>
          <div className={`${"projects__container-content"} ${projectInView ? 'fade-up' : ''}`}>
              <h2>Project-oriented. <i>Zealous</i> for the products being developed.</h2>
              <p>While I have not developed many, projects are very important to me as I am adamant on the fast delivery of solid code. The projects I have worked on thus far display my technical skills with the technologies I've learned and demonstrate the key fundementals with the appropriate technologies. I am eager to build upon what I've completed til this point and make a difference in the web development space.</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Projects