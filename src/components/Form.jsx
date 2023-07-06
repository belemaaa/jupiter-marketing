import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm(
        'service_ayw69hn', 
        'template_gzizp4p', 
        form.current, 
        '5NCZedujgHkFIVD1X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    // function clears form data on submission and returns alert message
    const[formData, setFormData] = useState({})
    const sendBtn = () =>{
        alert("Message sent successfully")
        form.current.reset();
        setFormData({});
    }
    return (
        <div>
            <div className='text-black'>
                <p>
                    Want to Know More?? Drop Us A Mail
                </p>
            </div>
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <label>First Name</label>
                    <input type="text" name="f_name" className='' required/>
                    <br/>
                    <label>Last Name</label>
                    <input type="text" name="l_name" required/>
                    <br/>
                    <label>Email </label>
                    <input type="email" name="email" required/>
                    <br/>
                    <label>Contact Number</label>
                    <input type="phone" name="phone" required/>
                    <br/> 
                    <label>Message</label>
                    <textarea name="message" required/>
                    <br/>
                    <input type="submit" value="Send" onClick={sendBtn} />
                </form>
            </div>
        </div>
    )
}

export default Form