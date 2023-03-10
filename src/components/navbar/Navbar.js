import React, {useState} from 'react' 
import './navbar.css'
import '../animations/fade/fade.css'
import {AiOutlineCloseCircle,AiOutlineArrowLeft} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';



const Navbar = () => {
  const [isNotClosed,setIsNotClosed] = useState(false);
  const [menuOpen, setIsMenuOpen] = useState(false);
  const [menuClosed, setIsMenuClosed] = useState(true);
  let icon;
  if (!isNotClosed) {
    icon = <AiOutlineCloseCircle className="close-icon" onClick={() => {setIsNotClosed(!isNotClosed)}}/>;
  }
  else {
    icon = <AiOutlineArrowLeft className="close-icon" onClick={() => {setIsNotClosed(!isNotClosed)}}/>;
  }
  return (
    <>
    <div className="navbar__container" id="home">
      <div className="navbar__container-links">

        <p><a href="#about">ABOUT</a></p>
        <p><a href="#projects">PROJECTS</a></p>
        <p><a href="#skills">SKILLS</a></p>
        <p><a href="#contact">CONTACT</a></p>
      </div>
    </div>
    <div className={`${!isNotClosed ? 'tips' : 'closed'}`}>
        {/* <AiOutlineCloseCircle className="close-icon" onClick={() => {setIsNotClosed(!isNotClosed)}}/> */}
        {icon}
        <p className={`${!isNotClosed ? 'textShown' : 'textHidden'}`}>Press the letter 'f' on your keyboard to flip the coin!</p>
        </div>
    </>
  )
}

export default Navbar
