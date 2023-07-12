import './index.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();
    
        const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(import.meta.env.REACT_APP_serviceID, import.meta.env.REACT_APP_templateID, form.current, import.meta.env.REACT_APP_publicKey)
            .then((result) => {
                alert('Message successfuly sent!');
                window.location.reload(false);
            }, (error) => {
                alert('Failed to send email. Try again.');
            });
        }


    return (
            <div id="contact">
                <h2 align="Center">Contact Me</h2>
                <div id="contact-form">
                    <form class="form-container" ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li>
                            <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" class="flat-button" value = "send"/>
                            </li>
                        </ul>

                        
                    </form>
                </div>
            </div>
        )
}

export default Contact