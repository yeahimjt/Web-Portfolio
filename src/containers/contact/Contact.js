import React, {useState} from 'react'
import './contact.css'
import '../projects/projects.css'
const Contact = () => {


    const [happy, setHappy] = useState(true)
    const [loved, setLoved] = useState(false)
    const [feedback, setFeedback] = useState(false)


    const handleChange = (event) => {
        const value = event.target.value;
        if (value==='happy') {
            setHappy(true)
            setLoved(false)
            setFeedback(false)
        }
        else if (value==='loved') {
            setHappy(false)
            setLoved(true)
            setFeedback(false)
        }
        else {
            setHappy(false)
            setLoved(false)
            setFeedback(true)
        }
    }

  return (
    <div className="contact__container">
        <div className="contact__container-title">
            <h2>CONTACT</h2>
        </div>
        <div className="contact__container-content-container">
            <h2>Have more questions? Send them! Ready to deliver rapid responses now.</h2>
            <p>I am a firm believer in communication and how large of a role it plays when working with a team. Open to the idea of solo projects, however I find I strive best in agile teams, as the cross-communication and self sufficient environment that it creates allows me to not only bounce off ideas with my peers for better efficiency when coding but also gives me the time to develop solutions on my own to further concrete the concepts. </p>
            <div className="contact__container-content-form-container">
                <div className="contact__container-content-form">
                <div className="contact__container-content-form-name">
                    <input className="contact__container-input" placeholder="Name"/>
                </div>
                <div className="contact__container-content-form-email">
                    <input className="contact__container-input" placeholder="Email Address"/>
                </div>
                <div className="contact__container-content-form-content">
                    <textarea className="contact__container-textarea" placeholder="Email Content"/>
                </div>
                <div className="contact__container-content-form-submit">
                    <button type="submit" className="contact__container-content-form-submit-btn">Send Email</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact