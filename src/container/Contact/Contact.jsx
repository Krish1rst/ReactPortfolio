import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import {images} from '../../constants';
import { toast } from 'react-toastify';
import Landscape from '../../components/bgAnimation/Lanscape';
const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yaen509', 'template_lqeab1b', form.current, '6RS8INuwDIGuVLXb3')
      .then((result) => {
          e.target.reset();
          toast.success('Message sent successfully')
      }, (error) => {
      toast.error('Failed, try another contact method')
      });
  };
  return (
    <section className="section active sec5" id="contact">
      <Landscape />
      <div className="main-title">
        <h2>Contact<span className="name-span">Me</span><span className="bg-text bg-text-contact">MYCONTACTS</span></h2>
      </div>
      <div className="contact-content-con">
        <div className="left-contact">
          <div className='contact-title'>
            <h4 className="h4-left-contact">Contact me here</h4></div>
          <p className="p-left-contact">
            Thank you for visiting my website! If you have any questions, inquiries, or simply want to get in touch, please feel free to reach out to me using any of the following methods:
          </p>
          <div className="grid">
        <div className="card">
            <div className="field">
                <i className="fas fa-user icon"></i>
                <p className="value">Krishna Singh Yadav</p>
            </div>
        </div>

        <div className="card">
            <div className="field">
                <i className="fas fa-map-marker-alt icon"></i>
                <p className="value">Ghazipur , UP, India, 233225</p>
            </div>
        </div>

        <div className="card">
            <div className="field ">
             <i className="fas fa-envelope icon"></i> 
                <p className="value">Krishnayadav48065@gmail.com</p>
            </div>
        </div>

        <div className="card">
            <div className="field">
                <i className="fas fa-phone icon "></i>
                <p className="value">+91 6386304491</p>
            </div>
        </div>
    </div>
          
          <div className="contact-icons">
            <div className="contact-icon">
              <a href="https://www.linkedin.com/in/krishna-1rst/"target="_blank" rel="noreferrer" className="a-icon">
              <i className="fab fa-linkedin icon-i"></i>
              </a>
              <a href="https://github.com/Krish1rst"target="_blank" rel="noreferrer" className="a-icon">
                <i className="fab fa-github i-cn"></i>
              </a>
              <a href="https://leetcode.com/Krishtark/"target="_blank" rel="noreferrer" className="a-icon">
              <img className='leetcode' src={images.leetcode} alt="" />
              </a>
              <a href="https://twitter.com/Krishna1rst"target="_blank" rel="noreferrer" className="a-icon">
                <i className="fab fa-twitter i-cn"></i>
              </a>
              <a href="https://photos.app.goo.gl/JfPyKVmv7eDqyhvu7"target="_blank" rel="noreferrer" className="a-icon">
              <i className="fas fa-paint-brush"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="right-contact">
          <form ref={form} onSubmit={sendEmail} action="" className="contact-form">
            <div className="input-control i-ctrl-2">
              <input type="text" required placeholder="YOUR NAME*" className="margn" name="user_name"/>
              <input type="email" required placeholder="YOUR E-MAIL*" className="margn" name="user_email"/>
            </div>
            <div className="input-control ">
              <input type="text" required placeholder="YOUR SUBJECT" name="user_subject" className="margn" />
              <div className="input-control margin-low ">
                <textarea id="myTextarea" name="message"  rows="2" cols="15" placeholder="Type your message here..." className="margn" />
              </div>
            </div>
            <div className="form-btn"> 
            <button className="submit-btn" type="submit" value="">
             SUBMIT
            </button>
            </div>
          </form>
        </div>
      
      </div>
    </section>
  );
}

export default ContactSection;
