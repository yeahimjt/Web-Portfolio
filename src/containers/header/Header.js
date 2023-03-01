import React, {useState,useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Coin from '../../components/coin/Coin'
import AnimateLetters from '../animateLetters/AnimateLetters'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare, FaFilePdf } from 'react-icons/fa'
import './header.css'
import '../animateLetters/animateLetters.scss'
const Header = () => {

    const [className, setClassName] = useState('text-animate')
    const firstNameArray = ['J','o','n','a','t','h','a','n']
    const middleNameArray = ['A','n','d','r','e','w']
    const lastNameArray = ['T','r','e','v','i','n','o']

    useEffect(() => {
        const loadData = async () => {
            return setTimeout(() => {
                setClassName('text-animate-hover')
            }, 6000)
            
        };
            loadData();
    }, [])
  return (
    <>  
    <div className="animated-bg">
        <div className="xxl"></div>
        <div className="xl"></div>
        <div className="l"></div>
        <div className="m"></div>
        <div className="s"></div>
    </div>  

    <div className="header__container">
      <Navbar/>
      <Coin className="coin"/>    
        <div className="header__container-name">
            <div className="header__container-name-part">
                <AnimateLetters className={className}
                strArray={firstNameArray}
                index={1}/>
            </div>
            <div className="header__container-name-part">
                <AnimateLetters className={className}
                strArray={middleNameArray}
                index={9}/>
            </div>
            <div className="header__container-name-part">
                <AnimateLetters className={className}
                strArray={lastNameArray}
                index={16}/>
            </div>
                <h1 className="header__container-name-hide">Jonathan Trevino</h1>
        </div>
        <div className="header__container-links-container">
            <div className="header__container-links">
                <a className="header__container-inline" href="https://www.linkedin.com/in/jonathanandrewtrevino/" target="_blank" rel="noreferrer"><AiFillLinkedin size="32px" className="header__container-link"/></a>
                <a className="header__container-inline" href="https://github.com/yeahimjt" target="_blank" rel="noreferrer"><FaGithubSquare size="32px" className="header__container-link"/></a>
                <a className="header__container-inline" href="https://drive.google.com/file/d/18zvlFGGS__HCOzcvvQBZ-ST2_7j1O6wu/view?usp=sharing" target="_blank" rel="noreferrer"><FaFilePdf size="32px" className="header__container-link"/></a>
            </div>
        </div>
    </div>

    
    </>
  )
}

export default Header
