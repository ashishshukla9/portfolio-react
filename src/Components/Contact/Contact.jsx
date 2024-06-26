import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c6c74cdf-0923-4cd5-afa4-74f603c0835b");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            // console.log("Success", res);
            alert(res.message)
        }
    };
    return (
        <div id='contact' className='contact'>
            <div className='contact-title'>
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h2>Let's Talk</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={mail_icon} alt="" /><p>shuklaashish655@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={call_icon} alt="" /><p>+91-9594184008</p>
                        </div>
                        <div className='contact-detail'>
                            <img src={location_icon} alt="" /><p>Andheri, Mumbai - 400069, India.</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor=''>Your Name</label>
                    <input type='text' placeholder='Enter Your Name' name='name' />
                    <label htmlFor=''>Your Email</label>
                    <input type='text' placeholder='Enter Your Email' name='email' />
                    <label htmlFor=''>Write Your Message</label>
                    <textarea type='text' placeholder='Enter Your Message' rows='5' name='message'></textarea>
                    <button type='submit' className='contact-submit'>Submit Now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
