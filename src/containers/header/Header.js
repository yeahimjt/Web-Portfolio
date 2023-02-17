import React, {useState,useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Coin from '../../components/coin/Coin'
import AnimateLetters from '../animateLetters/AnimateLetters'
import './header.css'
const Header = () => {

    const [className, setClassName] = useState('text-animate')
    const firstNameArray = ['J','o','n','a','t','h','a','n']
    const middleNameArray = ['A','n','d','r','e','w']
    const lastNameArray = ['T','r','e','v','i','n','o']

    useEffect(() => {
        const loadData = async () => {
            return setTimeout(() => {
                setClassName('text-animate-hover')
            }, 1000)
            
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
      <Coin/>    
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
        </div>
    </div>

    
    </>
  )
}

export default Header
