import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import {IconContext} from 'react-icons'
import {AiFillCloseSquare} from 'react-icons/ai'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

import {useInView} from 'react-intersection-observer'

import './contact.css'
import '../projects/projects.css'
const Contact = () => {

    const form = useRef()
    const {ref:contactRef, inView: contactInView} = useInView()
    const [emailSent, setEmailSent] = useState(false);
    const [messageNotClosed, setMessageNotClosed] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pad3i59', 'template_e3e68yp', form.current, 'ipCsKrtr9rzkVZBdD')
        .then((result) => {
            console.log(result.text);
            setEmailSent(true);
            setMessageNotClosed(false)
            console.log(emailSent);
        }, (error) => {
            console.log(error.text);
        });
  
        form.current.reset();
    }

  return (
    <div ref={contactRef} className="contact__container" id="contact">
        <div className={`${"contact__container-title"} ${contactInView ? 'fade-right' : ''}`}>
            <h2>CONTACT</h2>
        </div>
        <div className={`${"contact__container-content-container"} ${contactInView ? 'fade-right' : ''}`} >
            <h2>Have more questions? Send them! Ready to deliver rapid responses now.</h2>
            <p>I am a firm believer in communication and how large of a role it plays when working with a team. Open to the idea of solo projects, however I find I strive best in agile teams, as the cross-communication and self sufficient environment that it creates allows me to not only bounce off ideas with my peers for better efficiency when coding but also gives me the time to develop solutions on my own to further concrete the concepts. </p>
            {emailSent && !messageNotClosed && 
            <div className="contact__container-response-container">
                <div className="contact__container-response-content">
                    <div className="contact__container-response-check">
                        <IoMdCheckmarkCircleOutline size='60px' className="response-icon" />
                    </div>
                    <div className="contact__container-response-text">
                        <h3>Sent Email Successfully!</h3>
                        <i>Thank you for the message I will get back to you shortly.</i>
                    </div>
                    <AiFillCloseSquare size='20px' className="close-icon"  onClick={() => {setMessageNotClosed(!messageNotClosed)} }/>
                </div>
            </div>
            }
            <form ref={form} onSubmit={sendEmail}>
            <div className={`${"contact__container-content-form-container"} ${contactInView ? 'fade-left' : ''}`}>
                <div className="contact__container-content-form">
                <div className="contact__container-content-form-name">
                    <input name="name" className="contact__container-input" placeholder="Name"/>
                </div>
                <div className="contact__container-content-form-email">
                    <input name="email" className="contact__container-input" placeholder="Email Address"/>
                </div>
                <div className="contact__container-content-form-content">
                    <textarea name="body" className="contact__container-textarea" placeholder="Email Content"/>
                </div>
                <div className="contact__container-content-form-submit">
                    <button type="submit" className="contact__container-content-form-submit-btn">Send Email</button>
                </div>
                </div>

            </div>
            </form>
        </div>
    </div>
  )
}

export default Contact