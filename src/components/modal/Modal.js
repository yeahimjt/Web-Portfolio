import React from 'react'
import './modal.css'

const Modal = ({ isOpen, text , extra }) => {

  return (
    <>
        { isOpen &&
        <div className="backdrop">
            <div className="modal__container">

                <div className="modal__container-content">
                    <div className="modal__container-content-title">
                        <h2>{text}</h2>
                    </div>
                    <div className="modal__container-content-text">
                        <p>{extra}</p>
                    </div>
                </div>
            </div>
        </div>
        }
    </>
  )
}

export default Modal