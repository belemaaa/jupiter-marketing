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
            <div className='flex flex-col font-light'> 
                <p className='m-3 flex flex-row' style={{ lineHeight: '1.5' }}>
                352/71 Second Street, King Street, Kingston, United Kingdom
                </p>

                <p className='m-3 flex flex-row' style={{ lineHeight: '1.5' }}>
                <span className='text-[#a2a2a2]'>Phone: </span>  <span className='ml-4'>+44 123456789</span>
                </p>

                <p className='m-3 flex flex-row' style={{ lineHeight: '1.5' }}>
                <span className='text-[#a2a2a2]'>Email: </span>  <span className='ml-4'>me@jupiter.com</span>
                </p>

                <p className='m-3 flex flex-row' style={{ lineHeight: '1.5' }}>
                <span className='text-[#a2a2a2]'>Fax: </span>  <span className='ml-4'>+44 123456789</span>
                </p>
            </div>

            <div className='ml-3'>
                <div className='mt-6'>
                    <p className='text-[#E5442A] text-xl md:text-4xl' style={{ lineHeight: "1.3" }}>
                        Want to Know More?? Drop Us A Mail
                    </p>
                </div>
                <div className='border-b border-b-[#d9dde1] my-4'></div>
                <div className='mt-6'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input 
                        type="text" 
                        name="f_name"  
                        placeholder='FirstName'
                        className='bg-[#EDEDED] py-4 pl-3 w-80 md:w-[236px] text-black text-sm mb-4 mr-4 
                        placeholder:text-black placeholder:text-opacity-60 placeholder:text-base' 
                        required/>

                        <input 
                        type="text" 
                        name="f_name"  
                        placeholder='LastName'
                        className='bg-[#EDEDED] py-4 pl-3 w-80 md:w-[236px] text-black text-sm mb-4 
                        placeholder:text-black placeholder:text-opacity-60 placeholder:text-base' 
                        required/>
                        <br/>

                        <input 
                        type="email" 
                        name="email"  
                        placeholder='Email'
                        className='bg-[#EDEDED] py-4 pl-3 w-80 md:w-[236px] text-black text-sm mb-4 mr-4 
                        placeholder:text-black placeholder:text-opacity-60 placeholder:text-base' 
                        required/>

                        <input 
                        type="phone" 
                        name="phone"  
                        placeholder='Contact Number'
                        className='bg-[#EDEDED] py-4 pl-3 w-80 md:w-[236px] text-black text-sm mb-4 
                        placeholder:text-black placeholder:text-opacity-60 placeholder:text-base' 
                        required/>
                        <br/>
                        
                        <textarea
                        name="message" 
                        placeholder='Your message here...'
                        className='bg-[#EDEDED] pl-3 py-4 w-80 md:w-[488px] h-52 text-black text-sm mb-3
                        placeholder:text-black placeholder:text-opacity-70 placeholder:text-base' 
                        required/>
                        <br/>

                        <input 
                        type="submit" 
                        value="SEND" 
                        // onClick={sendBtn}
                        className='flex bg-[#E5442A] border text-white py-4 px-10 mb-3
                        font-semibold'
                        />
                    </form>
                </div>
            </div>
        </div>
       
    )
}

export default Form