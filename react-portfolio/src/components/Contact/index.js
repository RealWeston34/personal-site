import './index.css'

const Contact = () => {
    return (
        <div id="contact">
            <h2>Contact Me</h2>
            <div id="contact-form">
                <form>
                    <ul>
                        <li class="half">
                            <input type="text" name="name" placeholder="Name" required/>

                        </li>
                        <li class="half">
                            <input type="email" name="email" placeholder="Email" required/>
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required/>
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