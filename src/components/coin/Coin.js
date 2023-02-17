import React, {Suspense} from 'react'
import './coin.css'
import Spline from '@splinetool/react-spline'
const Coin = () => {

    return (
      <div className="coin__container">
      <Spline scene="https://prod.spline.design/XE8Kkak3C6gfUwZp/scene.splinecode" />
      </div>
    );
  }
  
  

export default Coin