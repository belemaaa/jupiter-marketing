import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import banner3 from '../assets/banner-images/banner3.jpg'
import {RxDotFilled} from 'react-icons/rx'

const Form = () => {
    const form = useRef();
    const[formData, setFormData] = useState({})

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm(
        'service_ayw69hn', 
        'template_gzizp4p', 
        form.current, 
        '5NCZedujgHkFIVD1X'
        )
      .then((result) => {
          console.log(result.text);
          // Reset form fields after successful submission
          form.current.reset();
          setFormData({});

      }, (error) => {
          console.log(error.text);
      });
    }

    return (
        <div className='flex flex-col overflow-hidden'>
            <div className='flex flex-col'> 
                <p className='m-3 flex flex-row' style={{ lineHeight: '1' }}>
                352/71 Second Street, King Street, Kingston, United Kingdom
                </p>

                <p className='m-3 flex flex-row' style={{ lineHeight: '1' }}>
                Phone : +44 123456789
                </p>

                <p className='m-3 flex flex-row' style={{ lineHeight: '1' }}>
                Email : me@jupiter.com
                </p>

                <p className='m-3 flex flex-row' style={{ lineHeight: '1' }}>
                Fax : +44 123456789
                </p>
            </div>

            <div className='m-3'>
                <div className=''>
                    <p className='text-black font-semibold text-xl md:text-2xl'>
                        Want to Know More?? Drop Us A Mail
                    </p>
                </div>
                <div className='mt-6'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input 
                        type="text" 
                        name="f_name"  
                        placeholder='First Name'
                        className='border border-black py-1 w-80 md:w-44 text-black mb-4 mr-4 pl-1' 
                        required/>

                        <input 
                        type="text" 
                        name="f_name"  
                        placeholder='Last Name'
                        className='border border-black py-1 w-80 md:w-44 text-black mb-4 pl-1' 
                        required/>
                        <br/>

                        <input 
                        type="email" 
                        name="email"  
                        placeholder='Email'
                        className='border border-black py-1 w-80 md:w-44 text-black mb-4 mr-4 pl-1' 
                        required/>

                        <input 
                        type="phone" 
                        name="phone"  
                        placeholder='Contact Number'
                        className='border border-black py-1 w-80 md:w-44 text-black mb-4 pl-1' 
                        required/>
                        <br/>
 
                        <br/>
                        <textarea
                        name="message" 
                        placeholder='Your message here...'
                        className='border border-black pl-1 py-2 w-80 md:w-96 h-44 text-black mb-4' 
                        required/>
                        <br/>

                        <input 
                        type="submit" 
                        value="Send" 
                        // onClick={sendBtn}
                        className='flex bg-gray-200 border border-black
                        hover:bg-gray-400 text-black py-1 px-3 mb-3'
                        />
                    </form>
                </div>
            </div>
        </div>
       
    )
}

export default Form