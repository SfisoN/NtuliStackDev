import React, {useState} from 'react'
import './Form.css'
import emailjs from 'emailjs-com'
import {ToastContainer, toast} from "react-toastify"  

function Form() {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""

    });

    const handleInputChange = (event) => {
        setContactInfo({
            ...contactInfo,
            [event.target.name]: event.target.value,
        });
    };

    const handleContactSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(
            "service_suh16te",
            "template_57fyjps",
            event.target,
            "LGs06h4Csh47v9Tb2"
        )
        .then(
            (result) => {
                console.log(result.text);
                toast.success("Message successfully sent!",{
                    position: "top-right",
                    autoClose: "8000",
                    hideProgressBar: true,
                });
                setContactInfo({name: "", email: "", subject: "", message: "" });
            },
            (error) => {
                console.log(error.text);
                toast.error(
                    "Please fill out all required fields."
                );
            }
        );
    };


  return (
    <div id='contact'>
        <div className='heading'><h1 id='form-title'>Contact</h1></div>
        <div className='form-contact'>
        <p><i className="fas fa-phone-alt"></i> +27 79 570 7880</p>
        <p><i className="fas fa-envelope"></i> sifisontulins88@gmail.com</p>
        <p><i className="fas fa-map-marker-alt"></i> Pretoria, South Africa</p>
        </div>
        <div className='form-info'>
           <form onSubmit={handleContactSubmit}>
           <input
            type='text'
            name='name'
            placeholder='Full Name'
            value={contactInfo.name}
            onChange={handleInputChange}
            className='form-input'
            required
            />
             <input
            type='text'
            name='email'
            placeholder='Email Address'
            value={contactInfo.email}
            onChange={handleInputChange}
            className='form-input'
            required
            />
            <input
            type='text'
            name='subject'
            placeholder='Subject'
            value={contactInfo.subject}
            onChange={handleInputChange}
            className='form-input'
            required
            />
            <textarea
            name='message'
            placeholder='Your Message'
            value={contactInfo.message}
            onChange={handleInputChange}
            className='form-textarea'
            required
            />
            <div className='button-container'>
            <button type='submit' className='form-button'>Send</button>

            </div>
            </form>   
        </div>
        <ToastContainer/>
    </div>
  );
}

export default Form