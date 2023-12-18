import React, { useRef, useState } from 'react'
import Heading from './Sub_Components/Heading';
import { BsGithub, BsLinkedin, BsFillEnvelopeFill, BsFillTelephoneFill, BsDownload } from "react-icons/bs";
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const initialState = {
    from_name: "",
    from_email: "",
    message: ""
}
const Contact = () => {
    const [formData, setFormData] = useState(initialState);

    const [mail, setMail] = useState(false);

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bw4q6wn', 'template_b504ve6', form.current, 'uFDRCcJs8n5zq5K1J')
      .then((result) => {
          setFormData(initialState);
          setMail(true);
      }, (error) => {
        alert("Error in sending message, please try again.");
      });
  };

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }    

  return (
    <div id='contact' style={{backgroundColor: "rgb(22,22,22)", paddingTop: "5rem"}} className='contact-main'>
        <Heading text={"Contact"} colorText={"Me"}/>

        <div className="contact-main__links">
            <a href='https://github.com/harshdeepgill' target='_blank' id="contact-github" className="contact-main__links__link">
                <BsGithub/>
            </a>
            <a href='https://www.linkedin.com/in/harshdeepgill/' target='_blank' className="contact-main__links__link" id="contact-linkedin">
                <BsLinkedin/>
            </a>
            <A className="contact-main__links__link" id="contact-email">
            <div>er.harshdeepgill@gmail.com</div>
                <BsFillEnvelopeFill/>
            </A>
            <A className="contact-main__links__link"  id="contact-phone">
                <div>+917009025478</div>
                <BsFillTelephoneFill/>
            </A>
            <a href='#' onClick={() => { window.open(`https://firebasestorage.googleapis.com/v0/b/harshdeep-gill-portfolio-websi.appspot.com/o/Harshdeep%20Gill-Full%20Stack%20Web%20Developer%20(1).pdf?alt=media&token=9a8ba35f-77bb-4c95-b278-0c7a3c349109&_gl=1*1j2wsi6*_ga*OTcyNzU4NTcxLjE2OTQxMjAyNjM.*_ga_CW55HF8NVT*MTY5OTAzNTA0Mi42My4xLjE2OTkwMzUwODcuMTUuMC4w`, "_blank"); }} className="contact-main__links__link">
                <BsDownload/>
            </a>
        </div>

        {mail? <div className='contact-main__success' style={{textAlign:"center", color:"white" }}><h1>Mail Successfully Sent!</h1><p>Thank you for showing interest.</p></div>: <form ref={form} onSubmit={sendEmail} className="contact-main__form">
            <input name='from_name' onChange={handleChange} value={formData.from_name} type="text" placeholder='Name' className="contact-main__name" />
            <input name='from_email' onChange={handleChange} value={formData.from_email} type="text" placeholder='Email' className="contact-main__email" />
            <textarea name='message' onChange={handleChange} value={formData.message} type="text" rows={"4"} placeholder='Message' className="contact-main__message" />
            <button type='submit'>Send Message</button>
        </form>}
        

        <div className='contact-main__footer'>
            <div>© 2023</div>
            <div>Harshdeep Gill</div>
        </div>
    </div>
  )
}

export default Contact

const A = styled.a`
    position: relative;

    &>div{
        position: absolute;
        visibility: hidden;
        padding: 1rem;
        font-size: 1rem;
        border-radius: 3px;
        background-color: white;
        top: -3rem;
    }
    &:hover>div{
        visibility: visible;
    }

    
`