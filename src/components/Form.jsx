import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import banner3 from '../assets/banner-images/banner3.jpg'

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
        <div className='flex flex-row overflow-hidden'>
            <div className='flex flex-col md:items-start md:justify-start'>
                <div className='border border-gray-500 ml-4 w-96 md:w-fit mt-20 mb-16 md:ml-24 rounded-lg'>
                    <div className='md:px-12'>
                        <div className='flex flex-col items-center justify-center'>
                            <p className='mt-16 text-black font-semibold text-2xl'>
                                Want to Know More?? 
                            </p>
                            <p className=' text-black font-semibold text-2xl'>
                                Drop Us A Mail
                            </p>
                        </div>
                        <div className='mt-6 mx-8 md:mx-0'>
                            <form ref={form} onSubmit={sendEmail}>
                                <label className='text-gray-700 font-semibold'>
                                    First Name:
                                </label> 
                                <br/>
                                <input 
                                type="text" 
                                name="f_name"  
                                className='border border-black pl-5 placeholder:font-bold rounded-sm py-2 w-80 md:w-96 text-black mb-6' 
                                required/>
                                <br/>

                                <label className='text-gray-700 font-semibold'>
                                    Last Name:
                                </label> 
                                <br/>
                                <input 
                                type="text" 
                                name="f_name"  
                                className='border border-black pl-5 placeholder:font-bold rounded-sm py-2 w-80 md:w-96 text-black mb-6' 
                                required/>
                                <br/>

                                <label className='text-gray-700 font-semibold'>
                                    Email:
                                </label> 
                                <br/>
                                <input 
                                type="email" 
                                name="email"  
                                className='border border-black pl-5 placeholder:font-bold rounded-sm py-2 w-80 md:w-96 text-black mb-6' 
                                required/>
                                <br/>

                                <label className='text-gray-700 font-semibold'>
                                    Contact Number:
                                </label> 
                                <br/>
                                <input 
                                type="phone" 
                                name="phone"  
                                className='border border-black pl-5 placeholder:font-bold rounded-sm py-2 w-80 md:w-96 text-black mb-6' 
                                required/>
                                <br/> 

                                <label className='text-gray-700 font-semibold'>
                                    Leave A Message:
                                </label> 
                                <br/>
                                <textarea
                                name="message" 
                                className='border border-black pl-5 placeholder:font-bold rounded-sm py-2 w-80 md:w-96 h-44 text-black mb-6' 
                                required/>
                                <br/>

                                <input 
                                type="submit" 
                                value="Send" 
                                // onClick={sendBtn}
                                className='flex mx-32 md:mx-40 bg-gray-700 
                                hover:bg-black text-white font-semibold py-2 px-4 mb-3'
                                />
                            </form>
                        </div>

                    </div>

                </div>
          
            </div>

            <div className='hidden md:flex mt-52 ml-20'>
                <img src={banner3} className='hidden md:flex w-5/6 h-3/4 rounded-full drop-shadow-2xl'/>
            </div>
        </div>
       
    )
}

export default Form