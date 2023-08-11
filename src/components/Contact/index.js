import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss'

const serviceID = process.env.serviceID;
const templateID = process.env.templateID;
const publicKey = process.env.serviceID;
const Contact = () => {

    const form = useRef();
    
        const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                alert('Message successfuly sent!');
                window.location.reload(false);
            }, (error) => {
                alert('Failed to send email. Try again.');
            });
        }


    return (
        
        <div className="container-contact-page">
            <div className="text-zone">
            <h1>
                Contact Me
            </h1>
            <p>
            </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        </div>
    )
}

export default Contact