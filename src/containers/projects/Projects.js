import React from 'react'
import './projects.css'
import nerd4u from '../../components/assets/nerd4u.png'
import phpProject from '../../components/assets/php-project.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import { SiFlask, SiPython, SiHtml5, SiCss3, SiJavascript, SiMysql, SiAmazonaws, SiMicrosoftazure, SiPhp, SiPhpmyadmin, SiLinux } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
const Projects = () => {
  return (
    <>
    
    <div className="projects__container" >
      <div className="projects-title">
        <h2>PROJECTS</h2>
      </div>    
        <div className="projects__container-inner">
          <div className="projects__container-display">
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
                      <p>Developed a E-commerce Web Page that was used for selling Comic related items. Functacionality developed is: register page,login page, item create listing, custom pages for each appropriate item listed, add to cart, search page, purchase cart, and a admin panel page. Agile team was formed for this project, acted as a full stack developer curating the entire front end and back end of the e-commecrce application.</p>           
                      <p><i>Read More...</i></p>
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
                      <p><i>Read More...</i></p>
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
                    <a href="http://www.nerd4u.online/" target="_blank" rel="noreferrer" className="projects__container-display-card-content-links-external unavailable">
                      <BiLinkExternal class="skills-icon-project"/>
                      <p>Live Server</p>
                    </a>
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
                      <p><i>Read More...</i></p>
                    </div>
                  </div>
                </div>
              </div>
              
          </div>
          <div className="projects__container-content">
              <h2>Project-oriented. <i>Zealous</i> for the products being developed.</h2>
              <p>While I have not developed many, projects are very important to me as I am adamant on the fast delivery of solid code. The projects I have worked on thus far display my technical skills with the technologies I've learned and demonstrate the key fundementals with the appropriate technologies. I am eager to build upon what I've completed til this point and make a difference in the web development space.</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default Projects