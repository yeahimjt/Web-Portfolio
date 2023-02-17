import React from 'react'
import './animateLetters.scss'

const AnimateLetters = ({ className, strArray, index, }) => {
  return (
    <span className="span-hover">
        {
            strArray.map((char, i) => (
                <span key={char + i} className={`${className} i${i + index}`}>
                    {char}
                </span>
            ))
        }
    </span>
  )
};

export default AnimateLetters