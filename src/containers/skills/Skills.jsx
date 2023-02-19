import React, {useState} from 'react'
import Skill from '../../components/skills/Skill'
import './skills.css'
import Modal from '../../components/modal/Modal'
import {AiFillCloseSquare} from 'react-icons/ai'
import { SiFlask, SiPython, SiHtml5, SiCss3, SiJavascript, SiMysql, SiAmazonaws, SiMicrosoftazure, SiPhp, SiPhpmyadmin, SiLinux, SiReact, SiNodedotjs, SiGit, SiSqlite, SiJava, SiJunit5, SiC } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

const Skills = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentTitle, setCurrentTitle] = useState('')
  const [currentWhat, setCurrentWhat] = useState('')
  const [currentWhatAns, setCurrentWhatAns] = useState('')
  const [currentHow, setCurrentHow] = useState('')
  const [currentHowAns, setCurrentHowAns] = useState('')


  const close = () => {setModalOpen(false)}
  const open = () => {setModalOpen(true)}

  var conditional = {
    text: '',
    extra: ''
  }

  function MyModal() {
    return (
    <div className="backdrop">
            <div className="modal__container">
              <div className="modal__container-content">
                <div className="modal__container-content-title">
                    <h2>{currentTitle}</h2>
                    <div className="close-btn-div" onClick={() => setModalOpen(!modalOpen)}>
                    <AiFillCloseSquare className="close-btn"/>
                    </div>
                </div>

                <div className="modal__container-content-text">
            
                  <div className="question">
                    <h2>{currentWhat}</h2>

                    <div className="answer">
                      <p>{currentWhatAns}</p>
                    </div>
                  </div>
                  <div className="question">
                    <h2>{currentHow}</h2>
                    <div className="answer">
                      <p>{currentHowAns}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
  }
  const handleClick  = (text,what,whatanswer,how,howanswer) => {
    open();
    setCurrentTitle(text)
    setCurrentWhat(what)
    setCurrentWhatAns(whatanswer)
    setCurrentHow(how)
    setCurrentHowAns(howanswer)

  }

  return (
    <>
    <div class="slant-top">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
      </svg>
    </div>
    <div className="skills__container" id="skills">
       <div className="skills__container-title">
          <h2>SKILLS</h2>
        </div>
        <div className="skills__container-content">
            <h2>Desire a never-ending stream of knowledge. Curious, Receptive, Devoted to new technology.</h2>
            <p>Knowledge that I've absorbed through my journey. Developing a deep understanding with each respective skill has made me fully realize the best practices to creating web sites with the fastest speeds and guarenteed availability to ensure users will have the best experience possible. I do not believe in being comfortable with the languages I've been introduced to and will always take the oppurtunity to work closely with languages outside my tech stack.</p>
            <p className="skills__container-additional">Below is a condensed list of my skills. <i>Unfortunately I can not list everything I can do </i>(it is impossible with the time constraints attached to mankind). So, I've only included the most relevant skills.</p>
        </div>    
        { modalOpen &&
          <MyModal/> 
        }

        <div className="skills__container-display">
          <div className="skills__container-display-pill" onClick={() => handleClick("React","What?","Deeply understand key fundementals for developing React applications. Some of which include: Hooks (useEffect, useState), Events (onClick, onSubmit...), Functional Components, and more.","How?","Developed numerous personal portfolios (each of which increased in quality). This was to keep me on my toes and get a better understanding of React by redoing the basics while also trying to add in harder functionality.")}>
            <SiReact className="skill__icon"/>
            <p>React</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("Node","What?","Too familiar with concepts such as Modules, HTTP Module, MySql, Events, and Email (others as well but most importantly these). Having a strong foundation in Javascript, I am quick to adapt with coding utilizing Node.  ","How?","Used Node for my personal portfolios. Was hesitant to introduce a new runtime environment into my tech stack with being so familiar with React. However, after 'jumping in the deep end' I realized it was just Javascript again (too easy).")}>
            <SiNodedotjs className="skill__icon"/>
            <p>Node</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("Flask","What?","Well-versed with concepts such as: Routing, Request Handling, Templates, Sessions (global session variables), Error Handling, and Message Flashing.","How?","Flask was my introduction to web development. I was tasked with creating an E-commerce Webpage and was given the freedom to use any tech stack. Suggested Flask to my agile team because it was the first result of 'good web frameworks'. I was lucky for this search because while it proved to be challenging to understand how the internet worked, once that stump was cleared I had no problem developing the project.")}>
            <SiFlask className="skill__icon"/>
            <p>Flask</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("HTML","What?","Humbly perfected. Must I tell more? (I know everything but speficially: All the HTML elements, best naming conventions, importance of structure)","How?","At my fifth of all time web page where I actually got past the header, I fell in love with HTML. There are many things I can say about it, but most importantly the structure encourages efficient code and when taking a step back with a monitor full of HTML code it just speaks to me.")}>
            <SiHtml5 className="skill__icon"/>
            <p>HTML</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("CSS","What?","Perfected skills such as: FlexBox, Grid, Animations, Transformations, Transitions, and others to create a seamless experience for the user.","How?","While I can easily switch to CSS frameworks such as Bootstrap and Tailwind (I would still love to use Bootstrap and Tailwind if prompted to to maintain consistency), I have such a strong personal preference towards CSS. Something about writing every single property and value myself makes me feel like I'm actually coding rather than remembering premade values.")}>
            <SiCss3 className="skill__icon"/>
            <p>CSS</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("Javascript","What?","Ideas and execution of scope, variable declarations, Callbacks, and Immediately Invoked Function Expression (to maintain data privacy). Programming languages come easy and Javascript being the programming language of the web, Javascript wishes it could hide from me.","How?","Meta Front End Developer certificate in progress and from it, I was not only able to solidify the basics, but also understand concepts in Javascript that I had yet been introduced to.")}>
            <SiJavascript className="skill__icon"/>
            <p>Javascript</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("Git","What?","Able to initialize git repositories, view repositories status, update repositories, clone repositories, and other git functionality.","How?","Git and I have been through a lot together. Utilized it through college when I thought the importance of my homework justified taking the time to upload it to Github through visual studio code. Soon realized the importance Git for coders around the world and took time to learn best practices utilized to ensure code efficiency and availability.")}>
            <SiGit className="skill__icon"/>
            <p>Git</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("SQL","What?","Skilled in Sql queries in general. From creating the database, to deleting, and utilizing the various Sql commands to ensuring appropriate results for any specific requirement.","How","I have not touched any other database language because of my fascination with SQL being my first database language (I will be able to grab the understanding of any other database language with ease as well). I've utilized SQL extensively from school projects to personal projects.")}>
            <GrMysql className="skill__icon"/>
            <p>SQL</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("Linux","What?","Familiar with navigating the terminal, comes as natural as walking. Scripts, Unix, apache, nginx, how to setup a server, and automating processes are all things I've done more than two handfuls of times.","How?","Whether it's creating a local virtual machine or purchasing a virtual machine from a cloud service provider such as AWS or Azure, I always choose Linux as my go to operating system. If operating systems were languages I'd be trilingual, Windows Mac, and Linux. Linux is perfect to me for handling servers and I know my way around scripting and navigating through various files.")}>
            <SiLinux className="skill__icon"/>
            <p>Linux</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("AWS","What?","Creating AWS EC2 Instances that are the redirect to my domain using AWS Route 53, and AWS RDS for a simple MySQL database is my specialty. Overall, understand key practices and fundamentals of creating EC2 and RDS rules to ensure availability and confidentiality of services for users.","How?","Amazon AWS was my first cloud service provider that I committed to and felt little reason to switch to any others for the simple reason of familiarity with ease of utilizing services. However have worked with Azure and Google Cloud enough to find the similarity and perform the same.")}>
            <SiAmazonaws className="skill__icon"/>
            <p>AWS</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("Azure","What?","Creating virtual machines to host servers on, and databases to store data on (which in my experience has been a lot cheaper than AWS).","How?","Azure is where I was first introduced to CD/CI from a cloud service provider. Admittedly, I had a few speed bumps in properly configuring a .yaml file but confident now.")}>
            <SiMicrosoftazure className="skill__icon"/>
            <p>Azure</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("Java","What?","Abstraction, Encapsulation, Polymorphism, and Inheritance (the mighty four of object oriented programming) have been kindly introduced and further developed throughout my college experience.","How?","My first programming language! Taught me how difficult coding could be at times. Object Oriented programming has a special place in my heart as it requires structure and a deeper understanding of code that, in my opinion, improves efficiency. Developed numerous projects, including SQL database manipulation, and unit testing automation.")}>
            <SiJava className="skill__icon"/>
            <p>Java</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("JUnit4","What?","Code Coverage, Test Coverage, Unit Testing.","How?","Through my Software Validation and Quality Assurance course, was introduced to all concepts enveloped in ensuring software is secure.")}>

            <p>JUnit4</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("C","What?","My second ever programming Language! Familiar with the different data structures, pointers, and how to code anything.","How?","Mostly developed in Data Structures course where knowledge of all data types were cemented in my mind. Similar to Java and Python, can create any program given the task.?")}>
            <p>C</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("Python","What?","My third ever programming Language! Knowledge in data structures, large pool of libraries, exception handling, file handling, object oriented programming concepts, how to apply SQL.","How?","Had no problem learning this programming language as it's close to English. Truthfully worked with this programming language the least, however it's simplicity makes it easy for me to generate code with.")}>
            <SiPython className="skill__icon"/>
            <p>Python</p>
          </div>
          <div className="skills__container-display-pill" onClick={() => handleClick("Matplotlib","What?","Python library that I acquainted myself with, specifically how to graph data in various ways specified.")}>
            <p>Matplotlib</p>
          </div>
          <div className="skills__container-display-pill go-bye">
            <p>Sense of humor</p>
          </div>
        </div>
        <div className="skills__container-recommendation">
          <p>Click on individual skill to reveal more information.</p>
        </div>
    </div>
    <div className="slant-bottom">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
      </svg>
    </div>
    </>
  )
}

export default Skills