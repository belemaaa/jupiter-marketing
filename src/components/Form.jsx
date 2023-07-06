import React, { useRef } from 'react';
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
                    <input type="text" name="f_name" required/>
                    <label>Last Name</label>
                    <input type="text" name="l_name" required/>
                    <label>Email</label>
                    <input type="email" name="email" required/>
                    <label>Contact Number</label>
                    <input type="phone" name="phone" required/>
                    <label>Message</label>
                    <textarea name="message" required/>
                    <input type="submit" value="Send" />
                </form>
            </div>
        </div>
    )
}

export default Form